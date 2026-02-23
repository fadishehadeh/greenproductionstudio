import { motion } from "framer-motion";

const logos = ["Government", "Banking", "Telecom", "Enterprise", "Healthcare", "Fintech"];

const TrustStrip = () => {
  return (
    <section className="py-16 border-y border-border/30">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground mb-10 tracking-wider uppercase"
        >
          Trusted by leading organizations across MENA
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {logos.map((name, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center gap-2 text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300"
            >
              <div className="w-8 h-8 rounded-lg bg-muted/50 border border-border/50" />
              <span className="text-sm font-medium">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
