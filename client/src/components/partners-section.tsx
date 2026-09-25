import { motion, useInView } from "framer-motion";
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
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="partners" className="relative bg-white py-16 md:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-block text-sm font-semibold text-[#0E7C5A] uppercase tracking-wider mb-3">
            For Partners
          </span>
          <h2 className="font-heading text-[36px] md:text-[56px] lg:text-[64px] font-bold tracking-[-0.04em] leading-[1.05] text-[#0B0F0E] mb-5">
            Expand your reach into the global sustainable transport network
          </h2>
          <p className="text-lg text-[#6B7280] leading-relaxed">
            Connect your travelers to hundreds of eco-conscious carriers worldwide through our
            comprehensive product suite. Grow your offering, increase revenue, and deliver
            journeys that align with the green transition.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, i) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.15 * i }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
              className="group relative rounded-[28px] bg-[#F5F5F7] p-8 hover:shadow-xl transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0E7C5A]/10 flex items-center justify-center mb-6">
                <product.icon size={22} className="text-[#0E7C5A]" />
              </div>
              <h3 className="font-heading text-xl font-bold text-[#0B0F0E] mb-3">
                {product.title}
              </h3>
              <p className="text-[#6B7280] leading-relaxed mb-6">
                {product.description}
              </p>
              <a
                href="#contact"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E7C5A] hover:gap-2.5 transition-all"
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
