import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Globe as Globe2, Leaf, Zap } from "lucide-react";
import HeroAnimations from "./hero-animations";

const trustedBy = ["Booking.com", "Viator", "Kayak", "Venice2Trieste", "RidePilot", "TransferWay"];

const headlineWords = ["Powering", "the", "future", "of"];
const highlightWords = ["green", "ground"];
const trailingWord = "transportation";

function CountUp({ target, suffix = "" }: { target: string; suffix?: string }) {
  const num = parseFloat(target.replace(/[^\d.]/g, ""));
  const pre = target.replace(/[\d.]+.*/, "");
  const post = target.replace(/^.*?[\d.]+/, "");
  return (
    <motion.span
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
      >
        {pre}{target.includes(".") ? num.toFixed(1) : num}{post}{suffix}
      </motion.span>
    </motion.span>
  );
}

export default function HeroSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const bgScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.25]);
  const bgY = useTransform(scrollYProgress, [0, 1], [0, 80]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-center justify-center overflow-clip pt-16"
    >
      {/* Background image with parallax */}
      <motion.div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url('/eco-friendly-car-on-paper-cut-green-landscape-illustration-4k.jpeg')",
          scale: bgScale,
          y: bgY,
        }}
      />
      <div className="absolute inset-0 bg-white/50" />
      <HeroAnimations />

      <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full bg-[#0E7C5A]/8 px-4 py-1.5 text-sm font-medium text-[#0E7C5A] mb-10"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Leaf size={14} />
          </motion.span>
          Sustainable Mobility Platform
        </motion.div>

        {/* Headline - words slide up */}
        <h1 className="font-heading font-extrabold tracking-[-0.04em] leading-[0.95] text-[#0B0F0E] text-[52px] sm:text-[80px] md:text-[110px] lg:text-[130px] mb-8">
          {headlineWords.map((word, i) => (
            <motion.span
              key={i}
              className="inline-block mr-[0.25em]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 + i * 0.08, ease: "easeOut" }}
            >
              {word}
            </motion.span>
          ))}
          <br className="hidden sm:block" />
          {highlightWords.map((word, i) => (
            <motion.span
              key={`h-${i}`}
              className="inline-block mr-[0.25em] text-[#0E7C5A]"
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.42 + i * 0.08, ease: "easeOut" }}
            >
              {word}
            </motion.span>
          ))}
          <motion.span
            className="inline-block"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.58, ease: "easeOut" }}
          >
            {trailingWord}
          </motion.span>
        </h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-[#6B7280] leading-relaxed mb-12"
        >
          Connect travelers to a global sustainable transport network. Our AI-driven
          platform unifies carriers, optimizes routes, and accelerates the shift to
          low-carbon mobility across Europe and beyond.
        </motion.p>

        {/* CTAs - pill buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#partners"
            className="group inline-flex items-center gap-2 rounded-full bg-[#0E7C5A] text-white px-8 py-3.5 text-base font-semibold hover:bg-[#0a6349] hover:shadow-lg hover:shadow-[#0E7C5A]/20 transition-all duration-300"
          >
            Partner with us
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#carriers"
            className="inline-flex items-center gap-2 rounded-full bg-[#0B0F0E] text-white px-8 py-3.5 text-base font-semibold hover:bg-[#1a1f1e] transition-all duration-300"
          >
            For Carriers
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.8 }}
          className="mt-24 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
        >
          {[
            { icon: Globe2, value: "35+", label: "Countries connected" },
            { icon: Zap, value: "500+", label: "Carrier partners" },
            { icon: Leaf, value: "2.4M", label: "Tonnes CO2 saved" },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.9 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-2 cursor-default"
            >
              <stat.icon size={20} className="text-[#0E7C5A]" />
              <span className="text-3xl font-bold text-[#0B0F0E] font-heading tracking-tight">
                <CountUp target={stat.value} />
              </span>
              <span className="text-sm text-[#6B7280]">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.2 }}
          className="mt-24"
        >
          <p className="text-xs text-[#6B7280]/60 uppercase tracking-widest font-medium mb-6">
            Trusted by leading transport companies
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-14">
            {trustedBy.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.3 }}
                whileHover={{ opacity: 0.7 }}
                transition={{ duration: 0.5, delay: 1.3 + i * 0.1 }}
                className="text-lg font-semibold tracking-tight text-[#0B0F0E] cursor-default select-none"
              >
                {name}
              </motion.span>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
