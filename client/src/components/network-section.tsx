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
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="network" className="relative bg-white py-16 md:py-24 overflow-clip" ref={ref}>
      <div className="relative max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-semibold text-[#0E7C5A] uppercase tracking-wider mb-3">
              The Network
            </span>
            <h2 className="font-heading text-[36px] md:text-[56px] lg:text-[64px] font-bold tracking-[-0.04em] leading-[1.05] text-[#0B0F0E] mb-6">
              One platform, every sustainable mode
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
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
                  className="rounded-[20px] bg-[#F5F5F7] p-4 text-center hover:shadow-lg transition-all duration-300"
                >
                  <mode.icon size={24} className="text-[#0E7C5A] mx-auto mb-2" />
                  <p className="text-2xl font-bold text-[#0B0F0E] font-heading tracking-tight">{mode.count}</p>
                  <p className="text-xs text-[#6B7280] mt-1">{mode.label}</p>
                </motion.div>
              ))}
            </div>

            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0E7C5A] text-white px-8 py-3.5 text-base font-semibold hover:bg-[#0a6349] transition-colors"
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
            <div className="rounded-[28px] overflow-hidden relative group">
              <img
                src="/digital-world-map-with-network-pins-4k.jpeg"
                alt="Global transportation network map showing connected cities worldwide"
                className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0B0F0E]/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-3">
                  <Globe2 size={20} className="text-[#0E7C5A]" />
                  <div>
                    <p className="text-sm font-semibold text-white">35+ countries connected</p>
                    <p className="text-xs text-white/60">Europe, Asia, Americas</p>
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
