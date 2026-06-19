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
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="careers" className="relative py-24 md:py-32" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Careers
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-foreground mb-6">
              Shape the way millions travel
            </h2>
            <p className="text-lg text-muted-foreground leading-relaxed mb-8">
              Join a team that's building the infrastructure for sustainable mobility.
              We're engineers, designers, and operators who believe technology can make
              ground transportation the obvious choice for every journey.
            </p>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-lg bg-primary text-primary-foreground px-6 py-3 text-base font-semibold hover:opacity-90 transition-opacity"
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
                className="rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                    <val.icon size={18} className="text-primary" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-foreground mb-1">{val.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{val.description}</p>
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
