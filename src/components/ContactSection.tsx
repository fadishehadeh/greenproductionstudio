import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle, Loader2, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const ContactSection = () => {
  const [fields, setFields] = useState({ name: "", company: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFields((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");
    try {
      const res = await fetch("/contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(fields),
      });
      const data = await res.json();
      if (data.success) {
        setSubmitted(true);
        setFields({ name: "", company: "", email: "", phone: "", message: "" });
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch {
      setError("Could not reach the server. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact" className="section-padding gradient-mesh">
      <div className="max-w-3xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Contact Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Start Your <span className="text-gradient-primary">Next Digital Project</span>
          </h2>
          <p className="text-muted-foreground max-w-lg mx-auto">
            Tell us about your project and our team will get back to you within 24 hours.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
        >
          {submitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="glass-card p-12 text-center"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 300, damping: 15, delay: 0.1 }}
              >
                <CheckCircle className="w-16 h-16 text-primary mx-auto mb-4" />
              </motion.div>
              <h3 className="font-display text-2xl font-semibold mb-2">Message Sent!</h3>
              <p className="text-muted-foreground">We'll get back to you within 24 hours.</p>
            </motion.div>
          ) : (
            <motion.form
              onSubmit={handleSubmit}
              className="glass-card p-8 md:p-10 space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.1 } } }}
            >
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-3 rounded-xl border border-destructive/40 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                >
                  <AlertCircle className="w-4 h-4 shrink-0" />
                  {error}
                </motion.div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}>
                  <label className="text-sm font-medium text-foreground mb-2 block">Name</label>
                  <Input required name="name" value={fields.name} onChange={handleChange} placeholder="Your name" className="bg-background border-border rounded-xl h-12 focus:border-primary" />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}>
                  <label className="text-sm font-medium text-foreground mb-2 block">Company</label>
                  <Input name="company" value={fields.company} onChange={handleChange} placeholder="Company name" className="bg-background border-border rounded-xl h-12 focus:border-primary" />
                </motion.div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}>
                  <label className="text-sm font-medium text-foreground mb-2 block">Email</label>
                  <Input required type="email" name="email" value={fields.email} onChange={handleChange} placeholder="you@company.com" className="bg-background border-border rounded-xl h-12 focus:border-primary" />
                </motion.div>
                <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}>
                  <label className="text-sm font-medium text-foreground mb-2 block">Phone</label>
                  <Input type="tel" name="phone" value={fields.phone} onChange={handleChange} placeholder="+1 (555) 123-4567" className="bg-background border-border rounded-xl h-12 focus:border-primary" />
                </motion.div>
              </div>
              <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}>
                <label className="text-sm font-medium text-foreground mb-2 block">Project Description</label>
                <Textarea required rows={4} name="message" value={fields.message} onChange={handleChange} placeholder="Tell us about your project..." className="bg-background border-border rounded-xl focus:border-primary resize-none" />
              </motion.div>
              <motion.div
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.45 } } }}
                whileHover={{ scale: loading ? 1 : 1.02 }}
                whileTap={{ scale: loading ? 1 : 0.98 }}
              >
                <Button type="submit" disabled={loading} size="lg" className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold rounded-2xl h-14 text-base shadow-lg shadow-primary/25 disabled:opacity-70">
                  {loading ? (
                    <><Loader2 className="mr-2 w-5 h-5 animate-spin" /> Sending...</>
                  ) : (
                    <>Send Message <Send className="ml-2 w-5 h-5" /></>
                  )}
                </Button>
              </motion.div>
            </motion.form>
          )}
        </motion.div>
      </div>
    </section>
  );
};

export default ContactSection;
