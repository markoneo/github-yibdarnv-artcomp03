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
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="carriers" className="relative py-24 md:py-32 bg-card/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="max-w-2xl mb-16"
        >
          <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
            For Carriers
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-4">
            Take the wheel on your digital sales strategy
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            Sell more tickets directly, strengthen passenger relationships, and improve margins
            with our complete technology stack. From white-label booking to automated after-sales,
            everything is built to grow your direct channels.
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
              className="group relative rounded-2xl border border-border bg-background p-8 hover:border-primary/30 hover:shadow-lg transition-all duration-300"
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

        {/* Connect CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12 flex items-center gap-3"
        >
          <TrendingUp size={18} className="text-primary" />
          <p className="text-muted-foreground">
            <span className="text-foreground font-medium">Join our network</span> -- be
            available globally and reach millions of eco-minded travelers.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
