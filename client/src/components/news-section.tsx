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
  const inView = useInView(ref, { once: true, amount: 0.2 });

  return (
    <section id="news" className="relative bg-[#F5F5F7] py-16 md:py-24" ref={ref}>
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between mb-16"
        >
          <div>
            <span className="inline-block text-sm font-semibold text-[#0E7C5A] uppercase tracking-wider mb-3">
              Latest Updates
            </span>
            <h2 className="font-heading text-[36px] md:text-[48px] font-bold tracking-[-0.04em] leading-[1.05] text-[#0B0F0E]">
              News & Milestones
            </h2>
          </div>
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-sm font-semibold text-[#0E7C5A] hover:gap-2.5 transition-all mt-4 md:mt-0"
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
              className="group rounded-[28px] bg-white p-7 hover:shadow-xl transition-all duration-300 cursor-pointer"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-9 h-9 rounded-xl bg-[#0E7C5A]/10 flex items-center justify-center">
                  <item.icon size={16} className="text-[#0E7C5A]" />
                </div>
                <div className="flex items-center gap-2 text-xs text-[#6B7280]">
                  <Calendar size={12} />
                  <span>{item.date}</span>
                  <span className="w-1 h-1 rounded-full bg-[#6B7280]/40" />
                  <span>{item.category}</span>
                </div>
              </div>
              <h3 className="font-heading text-lg font-bold text-[#0B0F0E] mb-2 group-hover:text-[#0E7C5A] transition-colors">
                {item.title}
              </h3>
              <p className="text-sm text-[#6B7280] leading-relaxed">
                {item.excerpt}
              </p>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
