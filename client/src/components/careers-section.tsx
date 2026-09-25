import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Users, MapPin, Heart, ArrowRight } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Mission-driven",
    description: "Every line of code contributes to a greener planet. We build technology that matters.",
  },
  {
    icon: Users,
    title: "Diverse & global",
    description: "A team spanning 15+ nationalities, united by the ambition to transform how the world moves.",
  },
  {
    icon: MapPin,
    title: "Flexible first",
    description: "Work from our hubs in Ljubljana, Berlin, or Barcelona -- or remotely from wherever you do your best thinking.",
  },
];

export default function CareersSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="careers" className="relative bg-white py-16 md:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-semibold text-[#0E7C5A] uppercase tracking-wider mb-3">
              Careers
            </span>
            <h2 className="font-heading text-[36px] md:text-[56px] lg:text-[64px] font-bold tracking-[-0.04em] leading-[1.05] text-[#0B0F0E] mb-6">
              Shape the way millions travel
            </h2>
            <p className="text-lg text-[#6B7280] leading-relaxed mb-8">
              Join a team that's building the infrastructure for sustainable mobility.
              We're engineers, designers, and operators who believe technology can make
              ground transportation the obvious choice for every journey.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-[#0E7C5A] text-white px-8 py-3.5 text-base font-semibold hover:bg-[#0a6349] transition-colors"
            >
              View open positions
              <ArrowRight size={16} />
            </a>
          </motion.div>

          <div className="flex flex-col gap-4">
            {values.map((val, i) => (
              <motion.div
                key={val.title}
                initial={{ opacity: 0, x: 30 }}
                animate={inView ? { opacity: 1, x: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.15 * i }}
                className="rounded-[28px] bg-[#F5F5F7] p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-2xl bg-[#0E7C5A]/10 flex items-center justify-center shrink-0 mt-0.5">
                    <val.icon size={18} className="text-[#0E7C5A]" />
                  </div>
                  <div>
                    <h3 className="font-heading text-base font-bold text-[#0B0F0E] mb-1">{val.title}</h3>
                    <p className="text-sm text-[#6B7280] leading-relaxed">{val.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
