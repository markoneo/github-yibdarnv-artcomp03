import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Search, Bot, Armchair, ArrowRight } from "lucide-react";

const products = [
  {
    icon: Search,
    title: "Smart Booking Engine",
    description:
      "Give travelers a frictionless way to compare and purchase tickets from hundreds of sustainable carriers -- all through one elegant, high-converting interface designed for multi-modal journeys.",
    cta: "Explore integration",
  },
  {
    icon: Bot,
    title: "AI Travel Assistant",
    description:
      "Guide customers to their ideal journey across your entire carrier network with an intelligent assistant that answers queries in real time and drives conversions around the clock.",
    cta: "See capabilities",
  },
  {
    icon: Armchair,
    title: "Seat Selector",
    description:
      "Allow travelers to personalize every trip across any carrier in your portfolio, adding a premium layer that lifts average order value with every reservation.",
    cta: "Learn more",
  },
];

export default function PartnersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="partners" className="relative py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            For Partners
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Expand your reach into the global sustainable transport network
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Connect your travelers to hundreds of eco-conscious carriers worldwide through our
            comprehensive product suite. Grow your offering, increase revenue, and deliver
            journeys that align with the green transition.
          </p>
        </motion.div>

        {/* Product cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative rounded-2xl border border-border bg-card p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                <product.icon size={22} className="text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-3">
                {product.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed mb-6">
                {product.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all"
              >
                {product.cta}
                <ArrowRight size={14} />
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
