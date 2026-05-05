import Link from "next/link";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

// Using SVG paths for social icons not available in lucide-react
const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
);
const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
);
const YoutubeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
);
const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/></svg>
);

const QUICK_LINKS = [
  { label: "Home", href: "/" },
  { label: "Designs", href: "/designs" },
  { label: "Guides", href: "/guides" },
  { label: "About Us", href: "/about" },
  { label: "Contact", href: "/#consultation" },
];

const DESIGN_CATEGORIES = [
  { label: "Modular Kitchen", href: "/designs?category=modular-kitchen" },
  { label: "Wardrobe", href: "/designs?category=wardrobe" },
  { label: "Living Room", href: "/designs?category=living-room" },
  { label: "Master Bedroom", href: "/designs?category=master-bedroom" },
  { label: "TV Unit", href: "/designs?category=tv-unit" },
  { label: "Wall Art", href: "/designs?category=wall-art" },
  { label: "Facade", href: "/designs?category=facade" },
  { label: "Modular", href: "/designs?category=modular" },
  { label: "Corporate Office", href: "/designs?category=corporate-office" },
];

const SOCIAL_LINKS = [
  { icon: InstagramIcon, href: "https://instagram.com/designwaiz", label: "Instagram" },
  { icon: FacebookIcon, href: "https://facebook.com/designwaiz", label: "Facebook" },
  { icon: YoutubeIcon, href: "https://youtube.com/@designwaiz", label: "YouTube" },
  { icon: LinkedinIcon, href: "https://linkedin.com/company/designwaiz", label: "LinkedIn" },
];

export default function Footer() {
  return (
    <footer className="bg-[#1A1A1A] text-white pt-16 pb-6">
      <div className="container-dw">
        {/* Main 4-column grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-12 pb-12 border-b border-white/10">
          {/* Column 1: Brand */}
          <div>
            <h3 className="font-heading text-2xl font-bold mb-4">
              Design<span className="text-dw-mustard">W</span>aiz
            </h3>
            <p className="text-white/70 text-sm leading-relaxed mb-6">
              Transforming spaces into stunning, functional environments. Your dream home is just a consultation away.
            </p>
            <div className="flex items-center gap-3">
              {SOCIAL_LINKS.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9 h-9 rounded-full bg-white/10 hover:bg-dw-mustard flex items-center justify-center transition-colors duration-300"
                  aria-label={social.label}
                >
                  <social.icon />
                </a>
              ))}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2.5">
              {QUICK_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white/70 hover:text-dw-mustard text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Design Categories */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Design Categories</h4>
            <ul className="space-y-2.5">
              {DESIGN_CATEGORIES.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="text-white/70 hover:text-dw-mustard text-sm transition-colors duration-200"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 className="font-heading text-lg font-semibold mb-4">Contact Us</h4>
            <ul className="space-y-3 text-sm text-white/70">
              <li className="flex items-start gap-2">
                <MapPin size={18} className="text-dw-mustard flex-shrink-0 mt-0.5" />
                <span>Delhi NCR, India</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone size={18} className="text-dw-mustard flex-shrink-0 mt-0.5" />
                <a href="tel:+919999999999" className="hover:text-white transition-colors">
                  +91-99999 99999
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Mail size={18} className="text-dw-mustard flex-shrink-0 mt-0.5" />
                <a href="mailto:hello@designwaiz.com" className="hover:text-white transition-colors">
                  hello@designwaiz.com
                </a>
              </li>
              <li className="flex items-start gap-2">
                <Clock size={18} className="text-dw-mustard flex-shrink-0 mt-0.5" />
                <span>Mon-Sat, 10 AM - 7 PM</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-white/60">
          <p>&copy; 2026 DesignWaiz. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="hover:text-white transition-colors">
              Privacy Policy
            </Link>
            <span className="text-white/30">|</span>
            <Link href="/terms" className="hover:text-white transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
