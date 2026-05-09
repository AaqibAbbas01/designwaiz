"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "Interiors", href: "/designs", highlight: true },
  { label: "Wall Art", href: "/designs?category=wall-art" },
  { label: "Facade", href: "/designs?category=facade" },
  { label: "Modular", href: "/designs?category=modular" },
  { label: "Guides", href: "/guides" },
  { label: "About Us", href: "/about" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
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

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          navBg
        )}
      >
        <div className="container-dw">
          <nav className="flex items-center justify-between h-16 lg:h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 flex-shrink-0">
              <span
                className={cn(
                  "font-heading text-2xl font-bold tracking-tight transition-colors duration-300",
                  textColor
                )}
              >
                Design
                <span className="text-dw-mustard">W</span>
                <span className={cn("transition-colors duration-300", textColor === "text-white" ? "text-white/90" : "text-[#1A1A1A]")}>
                  aiz
                </span>
              </span>
            </Link>

            {/* Desktop Nav */}
            <ul className="hidden lg:flex items-center gap-8">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={cn(
                      "relative text-sm font-medium transition-colors duration-200 group",
                      link.highlight
                        ? "text-dw-mustard font-semibold"
                        : cn(textColor, "hover:text-dw-mustard")
                    )}
                  >
                    {link.label}
                    {/* Active underline */}
                    <span
                      className={cn(
                        "absolute -bottom-1 left-0 h-0.5 bg-dw-mustard rounded-full transition-all duration-300",
                        pathname === link.href ? "w-full" : "w-0 group-hover:w-full"
                      )}
                    />
                  </Link>
                </li>
              ))}
            </ul>

            {/* Desktop CTA */}
            <div className="hidden lg:flex items-center">
              <Link
                href="/#consultation"
                className="bg-dw-dark hover:bg-dw-mustard text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-all duration-300 whitespace-nowrap"
              >
                Book Free Consultation
              </Link>
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
              <span className="font-heading text-2xl font-bold text-white">
                Design<span className="text-dw-mustard">W</span>aiz
              </span>
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
                      link.highlight ? "text-dw-mustard" : "text-white hover:text-dw-mustard"
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
                <Link
                  href="/#consultation"
                  onClick={() => setMobileOpen(false)}
                  className="inline-block w-full text-center bg-dw-mustard text-white font-semibold text-lg py-4 rounded-lg hover:bg-dw-olive transition-colors"
                >
                  Book Free Consultation
                </Link>
              </motion.div>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
