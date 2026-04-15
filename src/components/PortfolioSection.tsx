import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Fashion Trust Arabia",
    category: "Regional",
    tag: "Fashion",
    description: "Prestigious prize and support platform championing emerging Arab fashion designers on a global stage.",
    image: "/images/fta.png",
    url: "https://www.fashiontrustarabia.com/",
  },
  {
    title: "FTA Directory",
    category: "Regional",
    tag: "Directory",
    description: "Curated directory connecting fashion talent, brands and industry professionals across the Arab world.",
    image: "/images/ftadirectory.png",
    url: "http://ftadirectory.com/",
  },
  {
    title: "The Four Corners",
    category: "Regional",
    tag: "Lifestyle",
    description: "Dynamic Saudi real estate brokerage and property management firm serving the Kingdom's vibrant marketplace, backed by seasoned regional professionals and a global investor portfolio.",
    image: "/images/4corners.png",
    url: "https://thefourcorners.sa/",
  },
  {
    title: "Masharii",
    category: "Regional",
    tag: "Development",
    description: "International project management and real estate development company delivering quality-driven consultancy for public and private sector clients across the globe.",
    image: "/images/mashariii.png",
    url: "https://masharii.com/",
  },
  {
    title: "TKONDOS",
    category: "Creative",
    tag: "Portfolio",
    description: "A comprehensive property ecosystem covering sought-after rentals, expert property management, seamless facility operations, and top-tier concierge services - all under one roof.",
    image: "/images/tkondos.png",
    url: "https://tkondoscy.com/",
  },
  {
    title: "Maria Mouawad",
    category: "Creative",
    tag: "Personal Brand",
    description: "GIA-trained jewellery designer and gemologist crafting handcrafted fine jewellery inspired by earth and nature - blending versatility, fine craftsmanship, and effortless wearability.",
    image: "/images/maria.png",
    url: "https://mariamouawad.com/",
  },
  {
    title: "Odd Ends",
    category: "Creative",
    tag: "Design Studio",
    description: "A creative label redefining brand storytelling at the intersection of fashion, film, and visual culture - founded by a product designer and filmmaker dedicated to authentic, boundary-pushing work.",
    image: "/images/oddends.png",
    url: "https://oddends.me/",
  },
  {
    title: "Metre Karre",
    category: "Creative",
    tag: "Real Estate",
    description: "Luxury real estate agency specialising in apartment rentals and sales across Lebanon, France, Greece, and beyond - offering expert brokerage and a personalised global approach.",
    image: "/images/metrekarre.png",
    url: "https://www.metrekarre.com/",
  },
  {
    title: "Anam Cara Travel",
    category: "Ireland",
    tag: "Travel",
    description: "ATOL-certified independent tour operator specialising in fully escorted pilgrimages, group tours, and school trips across Europe, Asia, America, and the Middle East.",
    image: "/images/anam.png",
    url: "https://anamcaratravel.com/",
  },
  {
    title: "Envirosafe Ireland",
    category: "Ireland",
    tag: "Industrial",
    description: "Trusted partner to pharmaceutical, chemical, and healthcare industries - supplying containment systems, gas detection, air quality monitoring, and laboratory safety equipment.",
    image: "/images/envirosafe.png",
    url: "https://envirosafeireland.ie/",
  },
  {
    title: "Rent A Cottage",
    category: "Ireland",
    tag: "Tourism",
    description: "Over 30 years helping visitors discover stunning Irish cottage holidays - renowned for warm welcomes, exceptional service, and unforgettable stays across the island of Ireland.",
    image: "/images/rent.png",
    url: "https://rentacottage.ie/",
  },
  {
    title: "Soma Healing Collective",
    category: "Wellness",
    tag: "Wellness",
    description: "A self-paced somatic programme to rewire the nervous system, reparent your inner child, and build lasting physiological safety within yourself and with others.",
    image: "/images/soma.png",
    url: "https://www.somahealingcollective.com/srm26",
  },
  {
    title: "Lift Training Studios",
    category: "Wellness",
    tag: "Fitness",
    description: "More than a gym - LIFT is a strength movement focused on lasting physical and mental health, with expert personal training and classes that build a stronger body and mind.",
    image: "/images/lift.png",
    url: "https://www.lifttrainingstudios.ie/",
  },
  {
    title: "Yoga Sacred Space",
    category: "Wellness",
    tag: "Yoga",
    description: "A fully accredited 200-hour yoga teacher training programme offering a heartfelt yet disciplined approach where every student-teacher truly thrives and flourishes.",
    image: "/images/yoga.png",
    url: "https://www.yogasacredspace.com/",
  },
  {
    title: "School Uniforms Ireland",
    category: "E-Commerce",
    tag: "Retail",
    description: "Proudly independent, family-owned Irish retailer since 1999 - specialising in school uniforms, sportswear, and occasion wear for schools and families across Ireland.",
    image: "/images/kidstuff.png",
    url: "https://schooluniforms.ie/",
  },
  {
    title: "The Beauty Empire",
    category: "E-Commerce",
    tag: "Beauty",
    description: "Irish beauty destination offering professional aesthetic treatments and premium skincare products.",
    image: "/images/beauty.png",
    url: "https://www.thebeautyempire.ie/",
  },
  {
    title: "Mexican Things",
    category: "E-Commerce",
    tag: "Food & Retail",
    description: "Ireland's specialist online store for authentic Mexican ingredients, snacks and lifestyle products.",
    image: "/images/mexican.png",
    url: "https://mexicanthings.ie/",
  },
  {
    title: "Mimi Imagine Play",
    category: "E-Commerce",
    tag: "Kids",
    description: "Imaginative, open-ended play products for children that spark creativity and independent thinking.",
    image: "/images/mimi.png",
    url: "https://mimiimagineplay.com/",
  },
];

const filters = ["All", "Ireland", "Regional", "Wellness", "E-Commerce", "Creative"];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const PortfolioSection = () => {
  const [active, setActive] = useState("All");

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <section id="portfolio" className="section-padding">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Work</span>
          <h2 className="font-display text-3xl md:text-5xl font-bold mt-3 mb-4">
            Client <span className="text-gradient-primary">Portfolio</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Real websites built for real businesses across regional and international markets.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.15 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {filters.map((f) => (
            <motion.button
              key={f}
              onClick={() => setActive(f)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`px-5 py-2 rounded-xl text-sm font-medium transition-all duration-300 ${
                active === f
                  ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                  : "glass-card text-muted-foreground hover:text-foreground hover:border-primary/30"
              }`}
            >
              {f}
            </motion.button>
          ))}
        </motion.div>

        <AnimatePresence mode="wait">
          <motion.div
            key={active}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            {filtered.map((project) => (
              <motion.a
                key={project.url}
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                variants={cardVariants}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
                className="glass-card overflow-hidden group cursor-pointer block"
              >
                <div className="relative h-48 overflow-hidden bg-muted">
                  <motion.img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover object-top"
                    whileHover={{ scale: 1.06 }}
                    transition={{ duration: 0.5 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-primary/85 flex flex-col items-center justify-center gap-2"
                    initial={{ opacity: 0 }}
                    whileHover={{ opacity: 1 }}
                    transition={{ duration: 0.25 }}
                  >
                    <ExternalLink className="w-6 h-6 text-foreground" />
                    <span className="text-foreground font-semibold text-sm tracking-wide">Visit Site</span>
                  </motion.div>
                  <span className="absolute top-3 left-3 bg-background/85 backdrop-blur-sm text-xs font-semibold text-primary px-3 py-1 rounded-full border border-primary/20">
                    {project.tag}
                  </span>
                </div>

                <div className="p-5">
                  <div className="flex items-start justify-between gap-2 mb-2">
                    <h3 className="font-display font-semibold text-foreground leading-snug">
                      {project.title}
                    </h3>
                    <ExternalLink className="w-4 h-4 text-muted-foreground shrink-0 opacity-0 group-hover:opacity-100 transition-opacity mt-0.5" />
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </motion.a>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
};

export default PortfolioSection;
