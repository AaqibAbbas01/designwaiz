"use client";

import { useRef, useEffect, useCallback, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { DESIGN_CATEGORIES } from "@/lib/designs-data";

// Categories to display on the home page (kitchen + wardrobe merged into one card)
const HOME_CATEGORIES = DESIGN_CATEGORIES.filter(
  (c) => c.slug !== "modular-kitchen" && c.slug !== "wardrobe"
);

// All cards as a flat array — duplicated for seamless infinite loop
const ALL_CARDS = [
  {
    id: "kitchen-wardrobe",
    href: "/designs",
    name: "Modular Kitchen & Wardrobe",
    count: 93,
    isSplit: true,
    thumbnail: undefined as string | undefined,
  },
  ...HOME_CATEGORIES.map((c) => ({
    id: c.id,
    href: `/designs?category=${c.slug}`,
    name: c.name,
    count: c.count,
    isSplit: false,
    thumbnail: c.thumbnail,
  })),
];

const LOOPED_CARDS = [...ALL_CARDS, ...ALL_CARDS];

const CARD_WIDTH = 380;
const GAP = 24;
const SPEED = 0.6; // px per frame

export default function DesignIdeas() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [paused, setPaused] = useState(false);
  const posRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const halfWidth = ALL_CARDS.length * (CARD_WIDTH + GAP);

  // Keep ref in sync with state so RAF callback always reads latest value
  useEffect(() => {
    pausedRef.current = paused;
  }, [paused]);

  const animate = useCallback(() => {
    if (!pausedRef.current) {
      posRef.current += SPEED;
      if (posRef.current >= halfWidth) {
        posRef.current = 0;
      }
      if (trackRef.current) {
        trackRef.current.style.transform = `translateX(-${posRef.current}px)`;
      }
    }
    rafRef.current = requestAnimationFrame(animate);
  }, [halfWidth]);

  useEffect(() => {
    rafRef.current = requestAnimationFrame(animate);
    return () => {
      if (rafRef.current !== null) cancelAnimationFrame(rafRef.current);
    };
  }, [animate]);

  const nudge = (dir: "left" | "right") => {
    const step = CARD_WIDTH + GAP;
    posRef.current =
      dir === "left"
        ? Math.max(0, posRef.current - step)
        : Math.min(halfWidth - 1, posRef.current + step);
  };

  return (
    <section id="design-ideas" className="section-padding bg-white">
      <div className="container-dw">
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-3">Explore Our Spaces</h2>
          <p className="text-lg text-dw-text-secondary max-w-2xl mx-auto">
            Curated interiors, modular solutions, and refined details for modern homes.
          </p>
        </div>

        <div className="relative">
          {/* Prev arrow */}
          <button
            onClick={() => nudge("left")}
            className="absolute left-0 top-[40%] -translate-y-1/2 -translate-x-5 z-10 w-10 h-10 bg-white border border-dw-border rounded-full flex items-center justify-center shadow-md hover:bg-dw-teal hover:text-white hover:border-dw-teal transition-all duration-200"
            aria-label="Scroll left"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Next arrow */}
          <button
            onClick={() => nudge("right")}
            className="absolute right-0 top-[40%] -translate-y-1/2 translate-x-5 z-10 w-10 h-10 bg-white border border-dw-border rounded-full flex items-center justify-center shadow-md hover:bg-dw-teal hover:text-white hover:border-dw-teal transition-all duration-200"
            aria-label="Scroll right"
          >
            <ChevronRight size={20} />
          </button>

          {/* Infinite carousel viewport */}
          <div
            className="overflow-hidden"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
          >
            <div
              ref={trackRef}
              className="flex will-change-transform"
              style={{
                gap: GAP,
                width: `${LOOPED_CARDS.length * (CARD_WIDTH + GAP)}px`,
              }}
            >
              {LOOPED_CARDS.map((card, idx) => (
                <Link
                  key={`${card.id}-${idx}`}
                  href={card.href}
                  className="group flex-shrink-0 rounded-lg overflow-hidden border border-dw-border bg-white shadow-sm transition-all duration-300 hover:border-dw-teal hover:shadow-[0_20px_48px_rgba(13,148,136,0.28)] hover:-translate-y-2 hover:bg-dw-teal"
                  style={{ width: CARD_WIDTH }}
                >
                  {/* Image */}
                  <div className="relative aspect-[4/3] overflow-hidden">
                    {card.isSplit ? (
                      <div className="absolute inset-0 flex">
                        <div className="relative w-1/2 overflow-hidden">
                          <Image
                            src="https://picsum.photos/seed/dw-kitchen-hero/600/450"
                            alt="Modular Kitchen"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                        <div className="relative w-1/2 overflow-hidden border-l-2 border-white">
                          <Image
                            src="https://picsum.photos/seed/dw-wardrobe-hero/600/450"
                            alt="Wardrobe"
                            fill
                            className="object-cover transition-transform duration-500 group-hover:scale-110"
                          />
                        </div>
                      </div>
                    ) : (
                      <Image
                        src={card.thumbnail!}
                        alt={card.name}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}

                    {/* Overlay: subtle dark at rest → deep dark on hover */}
                    <div className="absolute inset-0 bg-black/15 group-hover:bg-black/65 transition-all duration-300 flex items-end justify-center pb-6">
                      <span className="text-white font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                        Explore
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>

                  {/* Card body */}
                  <div className="p-5">
                    <h3 className="font-heading font-semibold text-lg mb-2 text-dw-text-primary group-hover:text-white transition-colors duration-300">
                      {card.name}
                    </h3>
                    <p className="text-sm text-dw-text-muted group-hover:text-white/50 transition-colors duration-300">
                      <span className="badge-count">{card.count}</span> designs
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
