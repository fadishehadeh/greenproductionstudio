import { motion } from "framer-motion";
import { Rocket, Shield, Bot, Globe2, Lightbulb } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const reasons = [
  { icon: Rocket, title: "Fast Delivery", description: "Agile sprints and rapid delivery cycles keep your MENA launch on schedule — without compromising on quality." },
  { icon: Shield, title: "Enterprise Security", description: "Bank-grade security, regional data residency compliance, and adherence to UAE NESA and Saudi NCA standards." },
  { icon: Bot, title: "AI-First Approach", description: "Every solution is engineered with AI and automation at its core — future-proofing your business in the MENA digital economy." },
  { icon: Globe2, title: "Deep MENA Expertise", description: "Years of hands-on experience across UAE, Saudi Arabia, Qatar, and Egypt — with cultural and regulatory insight built in." },
  { icon: Lightbulb, title: "Innovation Driven", description: "From smart city integrations to fintech APIs, we leverage the latest technologies to keep you ahead in the GCC market." },
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
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">Why Digital Solutions MENA</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Built for <span className="text-gradient-primary">MENA Enterprise Scale</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            We combine global technology expertise with deep regional knowledge to deliver digital solutions that work for the Middle East's unique business landscape.
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
              className="glass-card p-6 text-center group cursor-pointer hover:border-secondary/30 transition-colors duration-500"
            >
              <motion.div
                className="w-12 h-12 mx-auto rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-4"
                whileHover={{ rotate: 12, scale: 1.2, transition: { duration: 0.2 } }}
              >
                <r.icon className="w-6 h-6 text-secondary" />
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
