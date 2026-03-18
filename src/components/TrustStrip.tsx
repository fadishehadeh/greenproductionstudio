import { motion } from "framer-motion";
import { Landmark, Banknote, Wifi, Briefcase, HeartPulse, TrendingUp } from "lucide-react";

const sectors = [
  { name: "Government", icon: Landmark },
  { name: "Banking", icon: Banknote },
  { name: "Telecom", icon: Wifi },
  { name: "Enterprise", icon: Briefcase },
  { name: "Healthcare", icon: HeartPulse },
  { name: "Fintech", icon: TrendingUp },
];

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
          Trusted by leading organisations across the UAE, Saudi Arabia, Qatar &amp; Egypt
        </motion.p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {sectors.map(({ name, icon: Icon }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -4, scale: 1.08, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 text-muted-foreground/50 hover:text-muted-foreground transition-colors duration-300 group cursor-pointer"
            >
              <motion.div
                className="w-10 h-10 rounded-xl bg-primary/10 border border-primary/20 flex items-center justify-center group-hover:bg-primary/20 group-hover:border-primary/40 transition-all duration-300"
                whileHover={{ rotate: 10, transition: { duration: 0.2 } }}
              >
                <Icon className="w-5 h-5 text-primary/70 group-hover:text-primary transition-colors duration-300" />
              </motion.div>
              <span className="text-sm font-medium">{name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustStrip;
