"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { DESIGN_CATEGORIES } from "@/lib/designs-data";

interface Slide {
  id: number;
  image: string;
  headline: string;
  subtext: string;
  cta: string;
  ctaAction: "scroll" | "navigate" | "modal";
  ctaTarget?: string;
}

const SLIDES: Slide[] = [
  {
    id: 1,
    image: "/images/Facade & Others/ICE Home Night.jpg",
    headline: "Facades That Make a Statement",
    subtext: "Your building's exterior is the first story it tells. We design facades that command attention, reflect architectural intent, and stand the test of time — from refined stone cladding to contemporary glass and metal finishes.",
    cta: "Explore Facades",
    ctaAction: "navigate",
    ctaTarget: "/designs?category=facade",
  },
  {
    id: 2,
    image: "/images/CORPORATE OFFICE/Screenshot 2019-02-09 at 6.01.23 PM.png",
    headline: "Workspaces That Inspire Productivity",
    subtext: "Corporate interiors designed for the modern enterprise — where design meets performance.",
    cta: "Corporate Solutions",
    ctaAction: "navigate",
    ctaTarget: "/designs?category=corporate-office",
  },
  {
    id: 3,
    image: "/images/MODULAR KITCHEN/IMG_4344.JPG",
    headline: "Dream Kitchens & Wardrobes",
    subtext: "Modular solutions tailored to your space — from sleek kitchens to elegant wardrobes.",
    cta: "View Designs",
    ctaAction: "navigate",
    ctaTarget: "/designs?category=modular-kitchen",
  },
  {
    id: 5,
    image: "/images/LIVING ROOM/IMG_4365.JPG",
    headline: "Built With Precision, Delivered On Time",
    subtext: "From foundation to finish — our construction team brings your vision to life.",
    cta: "Explore Living Rooms",
    ctaAction: "navigate",
    ctaTarget: "/designs?category=living-room",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);
  const activeSlide = SLIDES[current];

  const next = useCallback(() => setCurrent((prev) => (prev + 1) % SLIDES.length), []);
  const prev = () => setCurrent((c) => (c - 1 + SLIDES.length) % SLIDES.length);
  const goTo = (index: number) => setCurrent(index);

  // Auto-advance every 5 seconds
  useEffect(() => {
    const timer = setInterval(next, 5000);
    return () => clearInterval(timer);
  }, [next]);

  const handleCTA = (slide: Slide) => {
    if (slide.ctaAction === "scroll" && slide.ctaTarget) {
      document.querySelector(slide.ctaTarget)?.scrollIntoView({ behavior: "smooth" });
    } else if (slide.ctaAction === "modal") {
      setModalOpen(true);
    }
  };

  return (
    <>
      <section className="relative w-full h-[75vh] lg:h-[80vh] overflow-hidden bg-[#1A1A1A]">
        {/* Slides */}
        <div key={activeSlide.id} className="carousel-slide active">
          <Image
            src={activeSlide.image}
            alt={activeSlide.headline}
            fill
            className="object-cover"
            priority
            quality={90}
            sizes="100vw"
          />
          {/* Overlay */}
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/10" />

          {/* Content */}
          <div className="absolute inset-0 flex items-center">
            <div className="container-dw">
              <div className="max-w-2xl text-white">
                <p className="text-xs font-semibold uppercase text-dw-mustard mb-4">
                  Design Waiz Interiors
                </p>
                <h1 className="text-h1 mb-5">{activeSlide.headline}</h1>
                <p className="text-base md:text-lg mb-8 text-white/85 max-w-xl leading-8">
                  {activeSlide.subtext}
                </p>
                {activeSlide.ctaAction === "navigate" && activeSlide.ctaTarget ? (
                  <Link
                    href={activeSlide.ctaTarget}
                    className="inline-flex bg-dw-mustard hover:bg-white hover:text-dw-dark text-white font-semibold px-7 py-3 rounded-lg transition-all duration-300"
                  >
                    {activeSlide.cta}
                  </Link>
                ) : (
                  <button
                    type="button"
                    onClick={() => handleCTA(activeSlide)}
                    className="bg-dw-mustard hover:bg-white hover:text-dw-dark text-white font-semibold px-7 py-3 rounded-lg transition-all duration-300"
                  >
                    {activeSlide.cta}
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Arrows */}
        <button
          onClick={prev}
          className="absolute left-4 lg:left-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-10"
          aria-label="Previous slide"
        >
          <ChevronLeft size={28} />
        </button>
        <button
          onClick={next}
          className="absolute right-4 lg:right-8 top-1/2 -translate-y-1/2 w-12 h-12 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full flex items-center justify-center text-white transition-all z-10"
          aria-label="Next slide"
        >
          <ChevronRight size={28} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2.5 z-10">
          {SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => goTo(idx)}
              className={cn(
                "w-2.5 h-2.5 rounded-full transition-all duration-300",
                current === idx
                  ? "bg-dw-mustard w-8"
                  : "bg-white/50 hover:bg-white/70"
              )}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Category Modal */}
      <AnimatePresence>
        {modalOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] bg-black/60 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setModalOpen(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-white rounded-lg p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto border border-dw-border"
            >
              <h2 className="text-h2 mb-2 text-center">Choose Your Space</h2>
              <p className="text-center text-dw-text-secondary mb-8">
                Explore our curated design gallery by category
              </p>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {DESIGN_CATEGORIES.map((cat) => (
                  <a
                    key={cat.id}
                    href={`/designs?category=${cat.slug}`}
                    className="group card-base p-5 text-center"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 bg-dw-mustard/10 rounded-lg flex items-center justify-center text-dw-mustard group-hover:bg-dw-mustard group-hover:text-white transition-colors">
                      <span className="text-2xl font-heading font-bold">
                        {cat.name.charAt(0)}
                      </span>
                    </div>
                    <h3 className="font-heading font-semibold text-sm md:text-base text-dw-text-primary group-hover:text-dw-mustard transition-colors">
                      {cat.name}
                    </h3>
                    <p className="text-xs text-dw-text-muted mt-1">
                      {cat.count} designs
                    </p>
                  </a>
                ))}
              </div>
              <button
                onClick={() => setModalOpen(false)}
                className="mt-8 w-full bg-dw-dark text-white py-3 rounded-lg hover:bg-dw-mustard transition-colors"
              >
                Close
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
