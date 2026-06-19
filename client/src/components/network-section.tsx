import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Globe as Globe2, Leaf, Globe, Rocket, ArrowRight } from "lucide-react";

const modes = [
  { icon: Leaf, label: "CO\u2082 Reduced", count: "2.4M" },
  { icon: Globe, label: "Partners", count: "500+" },
  { icon: Rocket, label: "AI Optimized Trips", count: "1.2M" },
];

export default function NetworkSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="network" className="relative py-24 md:py-32 overflow-hidden" ref={ref}>
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/3 rounded-full blur-[150px] -translate-y-1/2 translate-x-1/3" />

      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              The Network
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              One platform, every sustainable mode
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Our technology connects rail, coach, bus, and ferry operators into a single
              interoperable network. Travelers book seamlessly across modes while carriers
              gain visibility to a global audience committed to reducing transport emissions.
            </p>

            <div className="grid grid-cols-3 gap-4 mb-8">
              {modes.map((mode, i) => (
                <motion.div
                  key={mode.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                  className="rounded-xl border border-border bg-card p-4 text-center hover:border-primary/30 hover:shadow-md transition-all duration-300"
                >
                  <mode.icon size={24} className="text-primary mx-auto mb-2" />
                  <p className="text-2xl font-bold text-foreground">{mode.count}</p>
                  <p className="text-xs text-muted-foreground mt-1">{mode.label}</p>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-semibold hover:opacity-90 transition-opacity"
            >
              Connect to the network
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-2xl border border-border overflow-hidden relative group">
              <img
                src="/digital-world-map-with-network-pins-4k.jpeg"
                alt="Global transportation network map showing connected cities worldwide"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3">
                  <Globe2 size={20} className="text-primary" />
                  <div>
                    <p className="text-sm font-semibold text-foreground">35+ countries connected</p>
                    <p className="text-xs text-muted-foreground">Europe, Asia, Americas</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
