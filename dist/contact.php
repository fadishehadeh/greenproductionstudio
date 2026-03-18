<?php
// ─── SMTP Configuration ───────────────────────────────────────────────────────
define('SMTP_HOST',       'smtp.gmail.com');      // e.g. smtp.gmail.com | mail.yourdomain.com
define('SMTP_PORT',       587);                   // 587 = TLS  |  465 = SSL
define('SMTP_ENCRYPTION', 'tls');                 // 'tls' or 'ssl'
define('SMTP_USER',       'you@gmail.com');       // SMTP login (sender address)
define('SMTP_PASS',       'your-app-password');   // SMTP password / app password
define('MAIL_FROM_NAME',  'Digital Solutions MENA');
define('MAIL_TO',         'you@gmail.com');       // Address that receives enquiries
// ─────────────────────────────────────────────────────────────────────────────

header('Content-Type: application/json');
header('Access-Control-Allow-Origin: *');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');

// Handle pre-flight
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit;
}

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Method not allowed.']);
    exit;
}

// ─── Read & sanitise input ───────────────────────────────────────────────────
$raw     = file_get_contents('php://input');
$data    = json_decode($raw, true);

// Support both JSON body and classic form POST
$name    = trim($data['name']    ?? $_POST['name']    ?? '');
$company = trim($data['company'] ?? $_POST['company'] ?? '');
$email   = trim($data['email']   ?? $_POST['email']   ?? '');
$phone   = trim($data['phone']   ?? $_POST['phone']   ?? '');
$message = trim($data['message'] ?? $_POST['message'] ?? '');

// ─── Basic validation ─────────────────────────────────────────────────────────
$errors = [];
if ($name    === '') $errors[] = 'Name is required.';
if ($email   === '') $errors[] = 'Email is required.';
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) $errors[] = 'Invalid email address.';
if ($message === '') $errors[] = 'Message is required.';

if ($errors) {
    http_response_code(422);
    echo json_encode(['success' => false, 'message' => implode(' ', $errors)]);
    exit;
}

// ─── Load PHPMailer ───────────────────────────────────────────────────────────
require __DIR__ . '/vendor/autoload.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\SMTP;
use PHPMailer\PHPMailer\Exception;

// ─── Build & send email ───────────────────────────────────────────────────────
try {
    $mail = new PHPMailer(true);

    // Server settings
    $mail->isSMTP();
    $mail->Host       = SMTP_HOST;
    $mail->Port       = SMTP_PORT;
    $mail->SMTPAuth   = true;
    $mail->Username   = SMTP_USER;
    $mail->Password   = SMTP_PASS;
    $mail->SMTPSecure = SMTP_ENCRYPTION === 'ssl' ? PHPMailer::ENCRYPTION_SMTPS : PHPMailer::ENCRYPTION_STARTTLS;

    // Sender / recipient
    $mail->setFrom(SMTP_USER, MAIL_FROM_NAME);
    $mail->addAddress(MAIL_TO);
    $mail->addReplyTo($email, $name);

    // Content
    $mail->isHTML(true);
    $mail->Subject = 'New Enquiry from ' . htmlspecialchars($name);
    $mail->Body    = '
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto">
          <h2 style="color:#6366f1">New Contact Enquiry — Digital Solutions MENA</h2>
          <table style="width:100%;border-collapse:collapse">
            <tr><td style="padding:8px;font-weight:bold;width:120px">Name</td><td style="padding:8px">' . htmlspecialchars($name) . '</td></tr>
            <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold">Company</td><td style="padding:8px">' . htmlspecialchars($company ?: '—') . '</td></tr>
            <tr><td style="padding:8px;font-weight:bold">Email</td><td style="padding:8px"><a href="mailto:' . htmlspecialchars($email) . '">' . htmlspecialchars($email) . '</a></td></tr>
            <tr style="background:#f9f9f9"><td style="padding:8px;font-weight:bold">Phone</td><td style="padding:8px">' . htmlspecialchars($phone ?: '—') . '</td></tr>
            <tr><td style="padding:8px;font-weight:bold;vertical-align:top">Message</td><td style="padding:8px">' . nl2br(htmlspecialchars($message)) . '</td></tr>
          </table>
        </div>';
    $mail->AltBody = "Name: $name\nCompany: $company\nEmail: $email\nPhone: $phone\n\nMessage:\n$message";

    $mail->send();

    echo json_encode(['success' => true, 'message' => 'Your message has been sent successfully.']);

} catch (Exception $e) {
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => 'Failed to send email. Please try again later.']);
}

