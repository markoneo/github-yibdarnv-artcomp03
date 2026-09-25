import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "For Partners", href: "#partners" },
  { label: "For Carriers", href: "#carriers" },
  { label: "Network", href: "#network" },
  { label: "News", href: "#news" },
  { label: "Careers", href: "#careers" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [bottomNavVisible, setBottomNavVisible] = useState(true);
  const lastScrollY = useRef(0);
  const { scrollY } = useScroll();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useMotionValueEvent(scrollY, "change", (latest) => {
    const direction = latest > lastScrollY.current ? "down" : "up";
    if (direction === "down" && latest > 200) {
      setBottomNavVisible(false);
    } else {
      setBottomNavVisible(true);
    }
    lastScrollY.current = latest;
  });

  return (
    <>
      {/* Top bar */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-white/90 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.05)]"
            : "bg-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2.5">
            <img src="/90494.jpg" alt="Artcomp Technologies" className="h-9 w-auto object-contain" />
            <span className="text-lg font-bold tracking-tight text-[#0B0F0E] font-heading">
              Artcomp
            </span>
          </a>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="mailto:info@artcomp.net"
              className="text-sm font-medium text-[#6B7280] hover:text-[#0B0F0E] transition-colors"
            >
              Contact
            </a>
            <a
              href="https://www.ridepilot.org"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-[#0E7C5A] text-white px-5 py-2 text-sm font-semibold hover:bg-[#0a6349] transition-colors"
            >
              Get Started
            </a>
          </div>

          <button
            className="md:hidden p-2 text-[#0B0F0E]"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>

        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="md:hidden bg-white/95 backdrop-blur-xl border-t border-[#F0F0F0] overflow-hidden"
            >
              <div className="px-6 py-4 flex flex-col gap-3">
                {navLinks.map((link) => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className="text-sm font-medium text-[#6B7280] hover:text-[#0B0F0E] transition-colors py-2"
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  href="https://www.ridepilot.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => setMobileOpen(false)}
                  className="inline-flex items-center justify-center rounded-full bg-[#0E7C5A] text-white px-5 py-2.5 text-sm font-semibold mt-2"
                >
                  Get Started
                </a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>

      {/* Floating bottom pill nav */}
      <AnimatePresence>
        {bottomNavVisible && (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3, ease: "easeOut" }}
            className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 hidden md:flex items-center gap-1 bg-[#0B0F0E]/90 backdrop-blur-xl rounded-full px-2 py-2 shadow-2xl"
          >
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[13px] font-medium text-white/70 hover:text-white hover:bg-white/10 rounded-full px-4 py-2 transition-all duration-200"
              >
                {link.label}
              </a>
            ))}
            <a
              href="https://www.ridepilot.org"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[13px] font-semibold text-white bg-[#0E7C5A] hover:bg-[#0a6349] rounded-full px-5 py-2 transition-colors ml-1"
            >
              Get Started
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
