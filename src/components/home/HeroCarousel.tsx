"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
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
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop",
    headline: "Beautiful Interiors, Crafted For You",
    subtext: "Transform your space with India's most trusted interior design studio.",
    cta: "Explore Our Work",
    ctaAction: "scroll",
    ctaTarget: "#design-ideas",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1920&h=1080&fit=crop",
    headline: "Dream Kitchens, Designed To Perfection",
    subtext: "From L-shape to Island — every kitchen tells a story.",
    cta: "View Kitchen Designs",
    ctaAction: "navigate",
    ctaTarget: "/designs?category=modular-kitchen",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920&h=1080&fit=crop",
    headline: "Complete Home Interiors, One Partner",
    subtext: "End-to-end interior solutions for your dream flat.",
    cta: "Explore All Designs",
    ctaAction: "modal",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop",
    headline: "Workspaces That Inspire Productivity",
    subtext: "Corporate interiors designed for the modern enterprise.",
    cta: "Corporate Solutions",
    ctaAction: "navigate",
    ctaTarget: "/designs?category=corporate-office",
  },
];

export default function HeroCarousel() {
  const [current, setCurrent] = useState(0);
  const [modalOpen, setModalOpen] = useState(false);

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
    } else if (slide.ctaAction === "navigate" && slide.ctaTarget) {
      window.location.href = slide.ctaTarget;
    } else if (slide.ctaAction === "modal") {
      setModalOpen(true);
    }
  };

  return (
    <>
      <section className="relative w-full h-[75vh] lg:h-[80vh] overflow-hidden bg-[#1A1A1A]">
        {/* Slides */}
        {SLIDES.map((slide, idx) => (
          <div
            key={slide.id}
            className={cn("carousel-slide", current === idx && "active")}
          >
            <Image
              src={slide.image}
              alt={slide.headline}
              fill
              className="object-cover"
              priority={idx === 0}
              quality={90}
            />
            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container-dw">
                <div className="max-w-2xl text-white">
                  <h1 className="text-h1 mb-4">{slide.headline}</h1>
                  <p className="text-lg md:text-xl mb-8 text-white/90 max-w-xl">
                    {slide.subtext}
                  </p>
                  <button
                    onClick={() => handleCTA(slide)}
                    className="bg-dw-mustard hover:bg-dw-olive text-white font-semibold px-8 py-3.5 rounded-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                  >
                    {slide.cta}
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}

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
              className="bg-white rounded-2xl p-8 max-w-4xl w-full max-h-[80vh] overflow-y-auto"
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
                    className="group card-base p-5 text-center hover:border-2 hover:border-dw-mustard"
                  >
                    <div className="w-12 h-12 mx-auto mb-3 bg-dw-mustard/10 rounded-full flex items-center justify-center text-dw-mustard group-hover:bg-dw-mustard group-hover:text-white transition-colors">
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
                className="mt-8 w-full bg-dw-text-secondary text-white py-3 rounded-full hover:bg-dw-dark transition-colors"
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
