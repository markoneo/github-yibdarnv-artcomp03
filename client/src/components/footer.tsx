import { Leaf, MapPin } from "lucide-react";

const footerLinks = [
  {
    title: "Products",
    links: [
      { label: "Booking Engine" },
      { label: "AI Assistant" },
      { label: "Seat Selector" },
      { label: "After-Sales Tools" },
    ],
  },
  {
    title: "Solutions",
    links: [
      { label: "For Partners" },
      { label: "For Carriers" },
      { label: "For Governments" },
      { label: "EU Green Transition" },
    ],
  },
  {
    title: "Company",
    links: [
      { label: "About" },
      { label: "Careers" },
      { label: "News" },
      { label: "Contact", href: "mailto:info@artcomp.net" },
    ],
  },
  {
    title: "Resources",
    links: [
      { label: "Documentation" },
      { label: "API Reference" },
      { label: "Case Studies" },
      { label: "Blog" },
    ],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="bg-[#0B0F0E]">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1.5 text-xs text-[#0E7C5A]">
              <Leaf size={12} />
              <span>Carbon-negative company</span>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-white mb-4">{group.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href || "#"}
                      className="text-sm text-white/40 hover:text-white/80 transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* AA+ Business Excellence section */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row items-start gap-8">
            {/* Badges */}
            <div className="flex items-center gap-4 shrink-0">
              <img
                src="/artcomp_badge_2024.svg"
                alt="CompanyWall AA+ 2024"
                className="h-20 w-auto"
              />
              <img
                src="/artcomp_badge_2025.svg"
                alt="CompanyWall AA+ 2025"
                className="h-20 w-auto"
              />
            </div>

            {/* Info */}
            <div className="flex flex-col gap-2">
              <h4 className="text-sm font-bold text-white tracking-wide">
                ARTCOMP
              </h4>
              <p className="text-sm font-semibold text-white/80">
                CompanyWall AA+ Business Excellence Rating
                <span className="ml-2 text-white/40 font-normal">2024 & 2025</span>
              </p>
              <p className="text-xs text-white/40 leading-relaxed max-w-md">
                Recognized for financial stability, business reliability, and excellence in operations.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-1 text-xs text-white/40">
                <a href="mailto:info@artcomp.net" className="hover:text-white/80 transition-colors">
                  info@artcomp.net
                </a>
                <span className="hidden sm:inline text-white/20">|</span>
                <span className="flex items-center gap-1.5">
                  <MapPin size={11} />
                  Gozdna pot 10, 6240 Kozina, Slovenia
                </span>
                <span className="hidden sm:inline text-white/20">|</span>
                <span>VAT ID: SI81926561</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/30">
            2026 Artcomp Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-white/30 hover:text-white/60 transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
