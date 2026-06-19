import { Leaf, MapPin } from "lucide-react";

const footerLinks = [
  {
    title: "Products",
    links: ["Booking Engine", "AI Assistant", "Seat Selector", "After-Sales Tools"],
  },
  {
    title: "Solutions",
    links: ["For Partners", "For Carriers", "For Governments", "EU Green Transition"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "News", "Contact"],
  },
  {
    title: "Resources",
    links: ["Documentation", "API Reference", "Case Studies", "Blog"],
  },
];

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-border bg-card/50">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
          {/* Brand column */}
          <div className="col-span-2 md:col-span-1">
            <div className="flex items-center gap-1.5 text-xs text-primary">
              <Leaf size={12} />
              <span>Carbon-negative company</span>
            </div>
          </div>

          {/* Link columns */}
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="text-sm font-semibold text-foreground mb-4">{group.title}</h4>
              <ul className="flex flex-col gap-2.5">
                {group.links.map((link) => (
                  <li key={link}>
                    <a
                      href="#"
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* AA+ Business Excellence section */}
        <div className="mt-12 pt-8 border-t border-border">
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
              <h4 className="text-sm font-bold text-foreground tracking-wide">
                ARTCOMP
              </h4>
              <p className="text-sm font-semibold text-foreground">
                CompanyWall AA+ Business Excellence Rating
                <span className="ml-2 text-muted-foreground font-normal">2024 & 2025</span>
              </p>
              <p className="text-xs text-muted-foreground leading-relaxed max-w-md">
                Recognized for financial stability, business reliability, and excellence in operations.
              </p>
              <div className="flex flex-col sm:flex-row sm:items-center gap-3 mt-1 text-xs text-muted-foreground">
                <span className="flex items-center gap-1.5">
                  <MapPin size={11} />
                  Gozdna pot 10, 6240 Kozina, Slovenia
                </span>
                <span className="hidden sm:inline text-border">|</span>
                <span>VAT ID: SI81926561</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-8 pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted-foreground">
            2026 Artcomp Technologies. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-muted-foreground hover:text-foreground transition-colors">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
