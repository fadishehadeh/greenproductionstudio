import { motion } from "framer-motion";
import { Rocket, Shield, Bot, Globe2, Lightbulb } from "lucide-react";

const reasons = [
  { icon: Rocket, title: "Fast Delivery", description: "Rapid development cycles without compromising quality." },
  { icon: Shield, title: "Enterprise Security", description: "Bank-grade security standards and compliance." },
  { icon: Bot, title: "AI-First Approach", description: "Intelligent solutions from the ground up." },
  { icon: Globe2, title: "MENA Expertise", description: "Deep understanding of regional markets." },
  { icon: Lightbulb, title: "Innovation Driven", description: "Cutting-edge technology stacks." },
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
          <span className="text-sm font-medium text-secondary uppercase tracking-wider">Why Us</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Built for <span className="text-gradient-primary">Enterprise Scale</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={r.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-6 text-center group hover:border-secondary/30 transition-all duration-500"
            >
              <div className="w-12 h-12 mx-auto rounded-xl bg-secondary/10 border border-secondary/20 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                <r.icon className="w-6 h-6 text-secondary" />
              </div>
              <h3 className="font-display font-semibold mb-2 text-foreground">{r.title}</h3>
              <p className="text-sm text-muted-foreground">{r.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
