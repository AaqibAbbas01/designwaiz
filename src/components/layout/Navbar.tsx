"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import ConsultationModal from "@/components/ui/ConsultationModal";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Projects", href: "/projects" },
  { label: "Interiors", href: "/designs" },
  { label: "Wall Art", href: "/designs?category=wall-art" },
  { label: "Facade", href: "/designs?category=facade" },
  { label: "Modular", href: "/designs?category=modular" },
  { label: "Guides", href: "/guides" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [consultationOpen, setConsultationOpen] = useState(false);
  const pathname = usePathname();
  const isDesignsPage = pathname === "/designs";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const navBg = scrolled || isDesignsPage || pathname !== "/"
    ? "bg-white/95 backdrop-blur-sm shadow-[0_2px_20px_rgba(0,0,0,0.08)]"
    : "bg-transparent";

  const textColor = scrolled || isDesignsPage || pathname !== "/"
    ? "text-[#1A1A1A]"
    : "text-white";

  const isActiveLink = (href: string) => {
    if (href === "/designs") return pathname === "/designs";
    if (href.startsWith("/designs?")) return false;
    return pathname === href;
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          navBg
        )}
      >
        <div className="container-dw">
          <nav className="flex items-center justify-between h-24 lg:h-28 gap-6 lg:gap-10">
            {/* Logo */}
            <Link href="/" className="flex items-center flex-shrink-0 min-w-[180px] lg:min-w-[280px]">
              <Image
                src="/logodesignwaiz.png"
                alt="DesignWaiz"
                width={612}
                height={408}
                priority
                className="w-[170px] lg:w-[280px] h-auto"
              />
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-8 flex-1 justify-center">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors duration-200 group",
                      isActiveLink(link.href)
                        ? "text-dw-mustard font-semibold"
                        : cn(textColor, "hover:text-dw-mustard")
                    )}
                  >
                    {link.label}
                    {/* Active underline */}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 bg-dw-mustard rounded-full transition-all duration-300",
                        isActiveLink(link.href) ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <button
                type="button"
                onClick={() => setConsultationOpen(true)}
                className="bg-dw-mustard hover:bg-dw-olive text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 whitespace-nowrap"
              >
                Book Free Consultation
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setMobileOpen(true)}
              className={cn(
                "lg:hidden p-2 rounded-md transition-colors",
                textColor
              )}
              aria-label="Open menu"
            >
              <Menu size={24} />
            </button>
          </nav>
        </div>
      </header>

      {/* Mobile Overlay Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-[100] bg-[#1A1A1A]"
          >
            {/* Close button */}
            <div className="flex items-center justify-between px-6 py-5">
              <Link href="/" onClick={() => setMobileOpen(false)} className="flex items-center">
                <Image
                  src="/logodesignwaiz.png"
                  alt="DesignWaiz"
                  width={612}
                  height={408}
                  priority
                  className="w-[180px] h-auto rounded-md bg-white px-2 py-1"
                />
              </Link>
              <button
                onClick={() => setMobileOpen(false)}
                className="p-2 text-white/80 hover:text-white"
                aria-label="Close menu"
              >
                <X size={28} />
              </button>
            </div>

            {/* Nav items */}
            <nav className="flex flex-col px-6 pt-8 gap-2">
              {NAV_LINKS.map((link, i) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.3 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "block text-3xl font-heading font-semibold py-3 border-b border-white/10 transition-colors",
                      isActiveLink(link.href) ? "text-dw-mustard" : "text-white hover:text-dw-mustard"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.36, duration: 0.3 }}
                className="mt-8"
              >
                <button
                  type="button"
                  onClick={() => {
                    setMobileOpen(false);
                    setConsultationOpen(true);
                  }}
                  className="inline-block w-full text-center bg-dw-mustard text-white font-semibold text-lg py-4 rounded-lg hover:bg-dw-olive transition-colors"
                >
                  Book Free Consultation
                </button>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
      <ConsultationModal isOpen={consultationOpen} onClose={() => setConsultationOpen(false)} />
    </>
  );
}
