import { motion } from "framer-motion";
import { Search, Target, Palette, Code2, Rocket, TrendingUp } from "lucide-react";

const steps = [
  { icon: Search, label: "Discover" },
  { icon: Target, label: "Strategy" },
  { icon: Palette, label: "Design" },
  { icon: Code2, label: "Develop" },
  { icon: Rocket, label: "Launch" },
  { icon: TrendingUp, label: "Scale" },
];

const ProcessTimeline = () => {
  return (
    <section id="process" className="section-padding gradient-mesh overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">How We Work</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            From Vision to <span className="text-gradient-primary">Market-Ready Product</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Our proven six-stage process helps turn concepts into polished digital products with clear direction, efficient execution, and dependable delivery.
          </p>
        </motion.div>

        <div className="relative">
          <motion.div
            className="hidden md:block absolute top-[2rem] left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent"
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeInOut" }}
            style={{ originX: 0 }}
          />

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.label}
                initial={{ opacity: 0, y: 30, scale: 0.85 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.12, type: "spring", stiffness: 260, damping: 18 }}
                className="text-center relative"
              >
                <motion.div
                  className="w-16 h-16 mx-auto rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-4 relative z-10 backdrop-blur-sm cursor-pointer"
                  whileHover={{ scale: 1.2, rotate: 8, transition: { duration: 0.2 } }}
                  whileTap={{ scale: 0.92 }}
                >
                  <step.icon className="w-7 h-7 text-primary" />
                </motion.div>
                <motion.span
                  className="text-xs text-primary font-semibold mb-1 block"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.12 + 0.3 }}
                >
                  0{i + 1}
                </motion.span>
                <h3 className="font-display font-semibold text-foreground">{step.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProcessTimeline;
