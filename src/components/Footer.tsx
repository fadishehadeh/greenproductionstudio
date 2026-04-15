import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="border-t border-border/50 bg-foreground text-background py-12 px-6 md:px-12">
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
          <img src="/gps.svg" alt="Green Production Studio logo" className="h-12 w-auto object-contain" />
        </motion.div>

        <motion.p
          className="text-sm text-background/70"
          variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
        >
          Clean, modern digital production for brands that value clarity, polish, and performance.
        </motion.p>

        <motion.p
          className="text-xs text-background/55"
          variants={{ hidden: { opacity: 0, y: 15 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } }}
        >
          Copyright {new Date().getFullYear()} Green Production Studio. All rights reserved.
        </motion.p>
      </motion.div>
    </footer>
  );
};

export default Footer;
