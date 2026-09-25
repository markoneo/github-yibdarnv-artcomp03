import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { ShoppingCart, Bot, Armchair, TrendingUp, ArrowRight } from "lucide-react";

const products = [
  {
    icon: ShoppingCart,
    title: "Direct Sales Engine",
    description:
      "Own the passenger relationship with a stunning, mobile-first booking platform that transforms your website into a direct revenue channel -- reducing intermediary costs and building lasting loyalty.",
    cta: "See the engine",
  },
  {
    icon: Bot,
    title: "AI Support",
    description:
      "Keep passengers informed throughout their journey with an intelligent agent that handles common questions, cuts support overhead, and operates continuously without breaks.",
    cta: "Explore AI features",
  },
  {
    icon: Armchair,
    title: "Ancillary Revenue Tools",
    description:
      "Convert empty capacity into profit opportunities by letting passengers select their preferred seat and add extras, making every booking feel premium.",
    cta: "Boost revenue",
  },
];

export default function CarriersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="carriers" className="relative bg-[#0B0F0E] py-16 md:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-block text-sm font-semibold text-[#0E7C5A] uppercase tracking-wider mb-3">
            For Carriers
          </span>
          <h2 className="font-heading text-[36px] md:text-[56px] lg:text-[64px] font-bold tracking-[-0.04em] leading-[1.05] text-white mb-5">
            Take the wheel on your digital sales strategy
          </h2>
          <p className="text-lg text-white/60 leading-relaxed">
            Sell more tickets directly, strengthen passenger relationships, and improve margins
            with our complete technology stack. From white-label booking to automated after-sales,
            everything is built to grow your direct channels.
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
              className="group relative rounded-[28px] bg-white/[0.06] p-8 hover:bg-white/[0.1] transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-2xl bg-[#0E7C5A]/20 flex items-center justify-center mb-6">
                <product.icon size={22} className="text-[#0E7C5A]" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-3">
                {product.title}
              </h3>
              <p className="text-white/50 leading-relaxed mb-6">
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

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex items-center gap-3"
        >
          <TrendingUp size={18} className="text-[#0E7C5A]" />
          <p className="text-white/50">
            <span className="text-white font-medium">Join our network</span> -- be
            available globally and reach millions of eco-minded travelers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
