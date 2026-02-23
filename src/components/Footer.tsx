const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
            <span className="font-display font-bold text-primary text-sm">DS</span>
          </div>
          <span className="font-display font-semibold text-foreground">
            Digital Solutions <span className="text-primary">MENA</span>
          </span>
        </div>

        <p className="text-sm text-muted-foreground">
          Built with intelligence. Designed for impact.
        </p>

        <p className="text-xs text-muted-foreground/60">
          © {new Date().getFullYear()} Digital Solutions MENA. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
