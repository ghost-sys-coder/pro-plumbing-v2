import Link from "next/link";
import { Droplets, Mail, Phone, MapPin } from "lucide-react";

const footerLinks = {
  expertise: [
    { label: "Residential Services", href: "/services" },
    { label: "Commercial Infrastructure", href: "/services" },
    { label: "Emergency Services", href: "/services" },
    { label: "System Diagnostics", href: "/services" },
  ],
  company: [
    { label: "About PlumbMaster", href: "/about" },
    { label: "Project Gallery", href: "/projects" },
    { label: "Client Reviews", href: "/reviews" },
    { label: "Online Booking", href: "/booking" },
  ],
  legal: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
    { label: "Licensing", href: "#" },
    { label: "BBB Accredited", href: "#" },
  ],
};

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container-wide section-padding">
        {/* Top Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-2 mb-5">
              <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
                <Droplets className="h-5 w-5 text-primary-foreground" />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-bold tracking-tight leading-none">
                  PlumbMaster
                </span>
                <span className="text-[10px] font-medium tracking-[0.15em] uppercase opacity-60 leading-none mt-0.5">
                  Technical Atelier
                </span>
              </div>
            </Link>
            <p className="text-sm opacity-70 leading-relaxed mb-6 max-w-xs">
              Providing precision plumbing engineering with a commitment to
              architectural integrity and customer trust since 1994.
            </p>
            <div className="flex flex-col gap-2.5 text-sm">
              <a href="tel:5551234567" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <Phone className="h-3.5 w-3.5" />
                (555) 123-4567
              </a>
              <a href="mailto:info@plumbmaster.com" className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity">
                <Mail className="h-3.5 w-3.5" />
                info@plumbmaster.com
              </a>
              <span className="flex items-center gap-2 opacity-70">
                <MapPin className="h-3.5 w-3.5 shrink-0" />
                1200 Industrial Parkway, Suite 400
              </span>
            </div>
          </div>

          {/* Links Columns */}
          {Object.entries(footerLinks).map(([category, links]) => (
            <div key={category}>
              <h4 className="text-xs font-semibold tracking-[0.15em] uppercase mb-4 opacity-50">
                {category === "expertise"
                  ? "Expertise"
                  : category === "company"
                    ? "The Firm"
                    : "Accreditation"}
              </h4>
              <ul className="flex flex-col gap-2.5">
                {links.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="text-sm opacity-70 hover:opacity-100 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-current/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs opacity-50">
            © {new Date().getFullYear()} PlumbMaster Technical Atelier. All rights reserved.
          </p>
          <div className="flex items-center gap-4 text-xs opacity-50">
            <span>Licensed</span>
            <span>•</span>
            <span>Bonded</span>
            <span>•</span>
            <span>Insured</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
