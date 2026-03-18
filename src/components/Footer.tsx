import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12 px-6 md:px-12">
      <motion.div
        className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={{ hidden: {}, visible: { transition: { staggerChildren: 0.15 } } }}
      >
        <motion.div
          className="flex items-center gap-3"
          variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
        >
          <div className="w-8 h-8 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center">
            <span className="font-display font-bold text-primary text-sm">DSM</span>
          </div>
          <span className="font-display font-semibold text-foreground">
            Digital Solutions <span className="text-primary">MENA</span>
          </span>
        </motion.div>

        <motion.p
          className="text-sm text-muted-foreground"
          variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
        >
          Accelerating digital transformation across the UAE, Saudi Arabia, Qatar &amp; Egypt.
        </motion.p>

        <motion.p
          className="text-xs text-muted-foreground/60"
          variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
        >
          © {new Date().getFullYear()} Digital Solutions MENA. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
