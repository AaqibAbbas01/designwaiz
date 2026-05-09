"use client";

import { useState, useEffect, useCallback } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
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
    image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=1920&h=1080&fit=crop",
    headline: "Beautiful Interiors, Crafted For You",
    subtext: "Transform your drawing room into a space that reflects your personality and style.",
    cta: "Explore Our Work",
    ctaAction: "scroll",
    ctaTarget: "#design-ideas",
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&h=1080&fit=crop",
    headline: "Workspaces That Inspire Productivity",
    subtext: "Corporate interiors designed for the modern enterprise — where design meets performance.",
    cta: "Corporate Solutions",
    ctaAction: "navigate",
    ctaTarget: "/designs?category=corporate-office",
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=1920&h=1080&fit=crop",
    headline: "Dream Kitchens & Wardrobes",
    subtext: "Modular solutions tailored to your space — from sleek kitchens to elegant wardrobes.",
    cta: "View Designs",
    ctaAction: "navigate",
    ctaTarget: "/designs",
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1920&h=1080&fit=crop",
    headline: "Facades That Make a Statement",
    subtext: "Elevate your building's first impression with architecturally refined exterior designs.",
    cta: "Explore Facades",
    ctaAction: "navigate",
    ctaTarget: "/designs?category=facade",
  },
  {
    id: 5,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=1920&h=1080&fit=crop",
    headline: "Built With Precision, Delivered On Time",
    subtext: "From foundation to finish — our construction team brings your vision to life.",
    cta: "Learn More",
    ctaAction: "scroll",
    ctaTarget: "#design-ideas",
  },
];

export default function HeroCarousel() {
  const router = useRouter();
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
      router.push(slide.ctaTarget);
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
            <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/10" />

            {/* Content */}
            <div className="absolute inset-0 flex items-center">
              <div className="container-dw">
                <div className="max-w-2xl text-white">
                  <p className="text-xs font-semibold uppercase text-dw-mustard mb-4">
                    Design Waiz Interiors
                  </p>
                  <h1 className="text-h1 mb-5">{slide.headline}</h1>
                  <p className="text-base md:text-lg mb-8 text-white/85 max-w-xl leading-8">
                    {slide.subtext}
                  </p>
                  <button
                    onClick={() => handleCTA(slide)}
                    className="bg-dw-mustard hover:bg-white hover:text-dw-dark text-white font-semibold px-7 py-3 rounded-lg transition-all duration-300"
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
