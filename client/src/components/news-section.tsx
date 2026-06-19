import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Calendar, ArrowRight, Leaf, Handshake, Cpu, ChartBar as BarChart3 } from "lucide-react";

const newsItems = [
  {
    icon: Cpu,
    date: "June 2026",
    category: "AI",
    title: "AI for Green Mobility",
    excerpt:
      "Reducing unnecessary vehicle movements through predictive route optimization and intelligent dispatch technology.",
  },
  {
    icon: Handshake,
    date: "May 2026",
    category: "Partnership",
    title: "Cross-Border Cooperation",
    excerpt:
      "Connecting transport providers and tourism stakeholders across European regions through a shared digital platform.",
  },
  {
    icon: Leaf,
    date: "April 2026",
    category: "Innovation",
    title: "Digital Innovation",
    excerpt:
      "Supporting SMEs with AI-powered tools that improve operational efficiency and passenger experience.",
  },
  {
    icon: BarChart3,
    date: "March 2026",
    category: "Impact",
    title: "Climate Impact",
    excerpt:
      "Enabling measurable reductions in CO\u2082 emissions through smarter transportation planning and sustainable mobility solutions.",
  },
];

export default function NewsSection() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="news" className="relative py-24 md:py-32 bg-card/50" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="inline-block text-sm font-semibold text-primary uppercase tracking-wider mb-3">
              Latest Updates
            </span>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
              News & Milestones
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:gap-2.5 transition-all mt-4 md:mt-0"
          >
            View all updates
            <ArrowRight size={14} />
          </a>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {newsItems.map((item, i) => (
            <motion.article
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.1 * i }}
              whileHover={{ y: -4, transition: { duration: 0.25 } }}
              className="group rounded-2xl border border-border bg-background p-6 hover:border-primary/20 hover:shadow-md transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center">
                  <item.icon size={16} className="text-primary" />
                </div>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Calendar size={12} />
                  <span>{item.date}</span>
                  <span className="w-1 h-1 rounded-full bg-muted-foreground/40" />
                  <span>{item.category}</span>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {item.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
