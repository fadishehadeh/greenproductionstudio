import { motion } from "framer-motion";
import { Brain, Globe, Smartphone, TrendingUp, BarChart3, Zap } from "lucide-react";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const services = [
  {
    icon: Brain,
    title: "AI & Automation",
    description: "Deploy intelligent automation and machine learning solutions tailored for MENA enterprises — reducing operational costs and unlocking efficiency across UAE, Saudi Arabia, and the GCC.",
  },
  {
    icon: Globe,
    title: "Web Development",
    description: "Custom, high-performance websites and digital platforms built to Arabic and English bilingual standards, optimised for search visibility across the Middle East.",
  },
  {
    icon: Smartphone,
    title: "Mobile App Development",
    description: "Feature-rich iOS and Android applications designed for the MENA market — from Dubai to Riyadh, built for speed, usability, and regional compliance.",
  },
  {
    icon: TrendingUp,
    title: "Digital Transformation",
    description: "End-to-end digital transformation strategies that modernise legacy systems and position MENA businesses for sustainable growth in the digital economy.",
  },
  {
    icon: BarChart3,
    title: "Data & Analytics",
    description: "Turn raw business data into actionable intelligence with dashboards, BI platforms, and analytics solutions built for the GCC's most data-driven organisations.",
  },
  {
    icon: Zap,
    title: "Cloud Solutions",
    description: "Scalable, secure cloud infrastructure on AWS, Azure, and Google Cloud — designed to meet regional data residency requirements across the MENA region.",
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
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Services</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Digital Services That <span className="text-gradient-primary">Drive MENA Growth</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Comprehensive digital transformation services purpose-built for enterprises across the UAE, Saudi Arabia, Qatar, Egypt, and the wider GCC region.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {services.map((service) => (
            <motion.div
              key={service.title}
              variants={cardVariants}
              whileHover={{ y: -8, scale: 1.02, transition: { duration: 0.25 } }}
              whileTap={{ scale: 0.98 }}
              className="glass-card p-8 group cursor-pointer border border-white/[0.08] hover:border-primary/30 transition-colors duration-500"
            >
              <motion.div
                className="w-14 h-14 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center mb-6"
                whileHover={{ rotate: 8, scale: 1.15, transition: { duration: 0.2 } }}
              >
                <service.icon className="w-7 h-7 text-primary" />
              </motion.div>
              <h3 className="font-display text-xl font-semibold mb-3 text-foreground">
                {service.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
