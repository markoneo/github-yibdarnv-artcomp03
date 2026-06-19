import { motion } from "framer-motion";
import { ArrowRight, Globe as Globe2, Leaf, Zap } from "lucide-react";
import HeroAnimations from "./hero-animations";

function FloatingParticle({ delay, x, y, size }: { delay: number; x: string; y: string; size: number }) {
  return (
    <motion.div
      className="absolute rounded-full bg-primary/20"
      style={{ left: x, top: y, width: size, height: size }}
      animate={{
        y: [0, -20, 0],
        opacity: [0.2, 0.6, 0.2],
        scale: [1, 1.3, 1],
      }}
      transition={{
        duration: 4 + Math.random() * 2,
        delay,
        repeat: Infinity,
        ease: "easeInOut",
      }}
    />
  );
}

const particles = [
  { delay: 0, x: "10%", y: "20%", size: 6 },
  { delay: 1.2, x: "85%", y: "15%", size: 4 },
  { delay: 0.5, x: "70%", y: "70%", size: 8 },
  { delay: 2, x: "20%", y: "75%", size: 5 },
  { delay: 0.8, x: "50%", y: "10%", size: 3 },
  { delay: 1.5, x: "90%", y: "50%", size: 6 },
  { delay: 0.3, x: "30%", y: "55%", size: 4 },
  { delay: 2.2, x: "65%", y: "85%", size: 5 },
];

const trustedBy = ["Booking.com", "Viator", "Kayak", "Venice2Trieste", "RidePilot", "TransferWay"];

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat scale-110"
        style={{ backgroundImage: "url('/eco-friendly-car-on-paper-cut-green-landscape-illustration-4k.jpeg')" }}
      />
      {/* Light overlay */}
      <div className="absolute inset-0 bg-white/40" />
      {/* Animated illustration overlays - above the white overlay */}
      <HeroAnimations />
      {/* Background grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:64px_64px]" />

      {/* Animated glow effects */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]"
        animate={{ scale: [1, 1.15, 1], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/4 right-1/4 w-[400px] h-[400px] bg-chart-2/5 rounded-full blur-[100px]"
        animate={{ scale: [1.1, 1, 1.1], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

      {/* Floating particles */}
      {particles.map((p, i) => (
        <FloatingParticle key={i} {...p} />
      ))}

      <div className="relative max-w-6xl mx-auto px-6 py-24 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium text-primary mb-8"
        >
          <motion.span
            animate={{ rotate: [0, 10, -10, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <Leaf size={14} />
          </motion.span>
          Sustainable Mobility Platform
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-foreground leading-[1.1] mb-6"
        >
          Powering the future of{" "}
          <span className="text-primary relative">
            green ground
            <motion.span
              className="absolute -bottom-1 left-0 right-0 h-1 bg-primary/30 rounded-full"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              style={{ transformOrigin: "left" }}
            />
          </span>{" "}
          transportation
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="max-w-2xl mx-auto text-lg md:text-xl text-muted-foreground leading-relaxed mb-10"
        >
          Connect travelers to a global sustainable transport network. Our AI-driven
          platform unifies carriers, optimizes routes, and accelerates the shift to
          low-carbon mobility across Europe and beyond.
        </motion.p>

        {/* CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a
            href="#partners"
            className="group inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-semibold hover:shadow-lg hover:shadow-primary/25 transition-all duration-300"
          >
            Partner with us
            <ArrowRight size={16} className="group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="#carriers"
            className="inline-flex items-center gap-2 rounded-lg border border-border bg-card text-foreground px-6 py-3 text-base font-semibold hover:bg-accent hover:border-primary/20 transition-all duration-300"
          >
            For Carriers
          </a>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-1 sm:grid-cols-3 gap-8 max-w-3xl mx-auto"
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
              transition={{ duration: 0.5, delay: 0.6 + i * 0.1 }}
              whileHover={{ y: -4 }}
              className="flex flex-col items-center gap-2 cursor-default"
            >
              <stat.icon size={20} className="text-primary" />
              <span className="text-3xl font-bold text-foreground">{stat.value}</span>
              <span className="text-sm text-muted-foreground">{stat.label}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Trusted by */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="mt-20 pt-10 border-t border-border/50"
        >
          <p className="text-xs text-muted-foreground/60 uppercase tracking-widest font-medium mb-6">
            Trusted by leading transport companies
          </p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-14">
            {trustedBy.map((name, i) => (
              <motion.span
                key={name}
                initial={{ opacity: 0 }}
                animate={{ opacity: 0.35 }}
                whileHover={{ opacity: 0.8 }}
                transition={{ duration: 0.5, delay: 1.1 + i * 0.1 }}
                className="text-lg font-semibold tracking-tight text-foreground cursor-default"
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
