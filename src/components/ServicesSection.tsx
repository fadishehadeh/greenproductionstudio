import { motion } from "framer-motion";
import { Brain, Globe, Smartphone, TrendingUp, BarChart3, Zap } from "lucide-react";

const services = [
  {
    icon: Brain,
    title: "AI & Automation",
    description: "Smart systems that reduce cost and increase efficiency through intelligent automation.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "High-performance, scalable websites and platforms built for growth.",
  },
  {
    icon: Smartphone,
    title: "Mobile Apps",
    description: "Beautiful, fast, user-centric applications for iOS and Android.",
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    description: "End-to-end modernization strategies for the digital age.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Turn raw data into powerful, actionable business decisions.",
  },
  {
    icon: Zap,
    title: "Cloud Solutions",
    description: "Scalable cloud infrastructure designed for enterprise reliability.",
  },
];

const ServicesSection = () => {
  return (
    <section id="services" className="section-padding gradient-mesh">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">What We Do</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Solutions That <span className="text-gradient-primary">Drive Results</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive digital services tailored for the MENA market.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card-hover p-8 group cursor-pointer"
            >
              <div className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors duration-500">
                <service.icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
