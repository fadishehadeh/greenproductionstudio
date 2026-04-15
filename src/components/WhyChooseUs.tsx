import { motion } from "framer-motion";
import { Rocket, Shield, Bot, Globe2, Lightbulb } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const reasons = [
  { icon: Rocket, title: "Fast Delivery", description: "Agile sprints and disciplined production workflows keep launches on schedule without compromising on quality." },
  { icon: Shield, title: "Reliable Foundations", description: "Secure builds, stable integrations, and careful implementation choices help protect the quality of every release." },
  { icon: Bot, title: "Modern Approach", description: "We combine automation, thoughtful tooling, and practical engineering to keep your digital presence future-ready." },
  { icon: Globe2, title: "Cross-Industry Experience", description: "From commerce to service businesses and creative brands, we adapt proven digital patterns to fit the work." },
  { icon: Lightbulb, title: "Intentional Design", description: "Every interface is refined for clarity, usability, and a premium brand impression across devices." },
];

const WhyChooseUs = () => {
  return (
    <section id="why-us" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">Why Green Production Studio</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Built for <span className="text-gradient-primary">Modern Digital Production</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We combine design sensitivity with production discipline to deliver digital work that feels clean, current, and dependable.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -30 : 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1, ease: "easeOut" }}
              whileHover={{ y: -6, scale: 1.04, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.97 }}
              className="glass-card p-6 text-center group cursor-pointer hover:border-primary/30 transition-colors duration-500"
            >
              <motion.div
                className="w-12 h-12 mx-auto rounded-xl bg-secondary border border-primary/15 flex items-center justify-center mb-4"
                whileHover={{ rotate: 12, scale: 1.2, transition: { duration: 0.2 } }}
              >
                <r.icon className="w-6 h-6 text-primary" />
              </motion.div>
              <h3 className="font-display font-semibold mb-2 text-foreground">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
