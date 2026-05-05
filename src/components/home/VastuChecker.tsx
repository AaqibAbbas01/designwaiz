"use client";

import { useRef, useState } from "react";
import type { PointerEvent } from "react";
import { ArrowRight, CheckCircle2, Compass, Home, Ruler } from "lucide-react";

const FEATURES = [
  {
    icon: Home,
    title: "Room Zoning",
    description: "Evaluate entrances, bedrooms, kitchen, pooja, living, and work zones.",
  },
  {
    icon: Compass,
    title: "Direction Mapping",
    description: "Map each area against key directions before finalizing the layout.",
  },
  {
    icon: Ruler,
    title: "Practical Remedies",
    description: "Suggest design-friendly corrections without compromising aesthetics.",
  },
];

const COMPASS_LABELS = [
  { label: "N", angle: 0 },
  { label: "E", angle: 90 },
  { label: "S", angle: 180 },
  { label: "W", angle: 270 },
];

const COMPASS_TICKS = Array.from({ length: 36 }, (_, index) => ({
  angle: index * 10,
  major: index % 3 === 0,
}));

function getCardinalDirection(heading: number) {
  const directions = ["N", "NE", "E", "SE", "S", "SW", "W", "NW"];
  return directions[Math.round(heading / 45) % directions.length];
}

export default function VastuChecker() {
  const cardRef = useRef<HTMLDivElement>(null);
  const compassRef = useRef<HTMLDivElement>(null);
  const [heading, setHeading] = useState(22);
  const [dragging, setDragging] = useState(false);

  const handlePointerMove = (event: PointerEvent<HTMLDivElement>) => {
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    const rotateX = y * -11;
    const rotateY = x * 13;
    const moveX = x * 12;
    const moveY = y * 10;

    card.style.transform = `perspective(1200px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translate3d(${moveX}px, ${moveY}px, 0)`;
    card.style.boxShadow = `${moveX * -1}px 28px 56px rgba(17, 17, 17, 0.16)`;
  };

  const handlePointerLeave = () => {
    const card = cardRef.current;
    if (!card) return;

    card.style.transform = "perspective(1200px) rotateX(0deg) rotateY(0deg) translate3d(0, 0, 0)";
    card.style.boxShadow = "0 16px 40px rgba(17, 17, 17, 0.12)";
  };

  const updateHeadingFromPointer = (event: PointerEvent<HTMLDivElement>) => {
    const compass = compassRef.current;
    if (!compass) return;

    const rect = compass.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const angle = Math.atan2(event.clientY - centerY, event.clientX - centerX) * (180 / Math.PI) + 90;

    setHeading(Math.round((angle + 360) % 360));
  };

  const handleCompassPointerDown = (event: PointerEvent<HTMLDivElement>) => {
    setDragging(true);
    event.currentTarget.setPointerCapture(event.pointerId);
    updateHeadingFromPointer(event);
  };

  const handleCompassPointerMove = (event: PointerEvent<HTMLDivElement>) => {
    if (!dragging) return;
    updateHeadingFromPointer(event);
  };

  const handleCompassPointerUp = (event: PointerEvent<HTMLDivElement>) => {
    setDragging(false);
    event.currentTarget.releasePointerCapture(event.pointerId);
  };

  return (
    <section id="vastu" className="section-padding bg-dw-bg-secondary overflow-hidden">
      <div className="container-dw">
        <div className="grid items-center gap-10 lg:grid-cols-[1.02fr_0.98fr]">
          <div className="relative [perspective:1200px]">
            <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full border border-dw-mustard/20" />
            <div className="absolute -bottom-10 right-6 h-40 w-40 rounded-full bg-dw-mustard/10 blur-3xl" />
            <div
              ref={cardRef}
              onPointerMove={handlePointerMove}
              onPointerLeave={handlePointerLeave}
              className="relative rounded-lg border border-white/80 bg-white/95 p-5 shadow-lg-dw transition-transform duration-200 ease-out [transform-style:preserve-3d] sm:p-7"
            >
              <div className="pointer-events-none absolute inset-0 rounded-lg bg-[radial-gradient(circle_at_20%_15%,rgba(167,122,47,0.14),transparent_34%),linear-gradient(135deg,rgba(255,255,255,0.75),rgba(255,255,255,0))]" />
              <div className="relative mb-5 flex items-center justify-between border-b border-dw-border pb-4 [transform:translateZ(34px)]">
                <div>
                  <p className="text-xs font-semibold uppercase text-dw-mustard">
                    Interactive Vastu Lens
                  </p>
                  <p className="text-sm text-dw-text-muted">Move your cursor across the plan</p>
                </div>
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-dw-dark text-white">
                  <Compass size={22} />
                </div>
              </div>

              <div className="relative grid gap-5 [transform-style:preserve-3d] md:grid-cols-[1fr_230px]">
                <div className="grid min-h-[310px] grid-cols-4 grid-rows-4 gap-2 rounded-lg border border-dw-border bg-dw-bg-primary p-3 [transform:translateZ(18px)]">
                  <div className="col-span-2 row-span-2 rounded-md border border-dw-border bg-white p-3 shadow-sm [transform:translateZ(42px)]">
                    <span className="text-xs font-semibold uppercase text-dw-mustard">NE</span>
                    <p className="mt-1 text-sm font-semibold text-dw-text-primary">Pooja / Study</p>
                  </div>
                  <div className="col-span-2 row-span-1 rounded-md border border-dw-border bg-white p-3 shadow-sm [transform:translateZ(34px)]">
                    <span className="text-xs font-semibold uppercase text-dw-olive">East</span>
                    <p className="mt-1 text-sm font-semibold text-dw-text-primary">Entrance</p>
                  </div>
                  <div className="col-span-2 row-span-1 rounded-md border border-dw-border bg-white p-3 shadow-sm [transform:translateZ(30px)]">
                    <span className="text-xs font-semibold uppercase text-dw-mustard">SE</span>
                    <p className="mt-1 text-sm font-semibold text-dw-text-primary">Kitchen</p>
                  </div>
                  <div className="col-span-2 row-span-2 rounded-md border border-dw-border bg-white p-3 shadow-sm [transform:translateZ(26px)]">
                    <span className="text-xs font-semibold uppercase text-dw-olive">West</span>
                    <p className="mt-1 text-sm font-semibold text-dw-text-primary">Dining</p>
                  </div>
                  <div className="col-span-2 row-span-2 rounded-md border border-dw-border bg-white p-3 shadow-sm [transform:translateZ(38px)]">
                    <span className="text-xs font-semibold uppercase text-dw-mustard">SW</span>
                    <p className="mt-1 text-sm font-semibold text-dw-text-primary">Master Suite</p>
                  </div>
                </div>

                <div className="flex flex-col items-center gap-4 [transform:translateZ(72px)]">
                  <div
                    ref={compassRef}
                    onPointerDown={handleCompassPointerDown}
                    onPointerMove={handleCompassPointerMove}
                    onPointerUp={handleCompassPointerUp}
                    onPointerCancel={handleCompassPointerUp}
                    className="relative aspect-square w-full max-w-[230px] cursor-grab touch-none select-none rounded-full bg-[#111] p-3 shadow-[inset_0_2px_8px_rgba(255,255,255,0.18),0_24px_46px_rgba(17,17,17,0.2)] active:cursor-grabbing"
                    aria-label={`Interactive compass heading ${heading} degrees ${getCardinalDirection(heading)}`}
                    role="slider"
                    aria-valuemin={0}
                    aria-valuemax={359}
                    aria-valuenow={heading}
                  >
                    <div className="absolute inset-1 rounded-full bg-[conic-gradient(from_0deg,#d8b46a,#f4e4b1,#7b8b59,#d8b46a,#111,#d8b46a)] opacity-80" />
                    <div className="absolute inset-3 rounded-full bg-[radial-gradient(circle_at_35%_20%,rgba(255,255,255,0.24),transparent_28%),linear-gradient(145deg,#252525,#0f0f0f_55%,#2b2b2b)] shadow-[inset_8px_8px_18px_rgba(0,0,0,0.55),inset_-6px_-6px_18px_rgba(255,255,255,0.08)]" />
                    <div
                      className="absolute inset-5 rounded-full transition-transform duration-150 ease-out"
                      style={{ transform: `rotate(${-heading}deg)` }}
                    >
                      {COMPASS_TICKS.map((tick) => (
                        <span
                          key={tick.angle}
                          className="absolute left-1/2 top-2 origin-[50%_88px]"
                          style={{ transform: `translateX(-50%) rotate(${tick.angle}deg)` }}
                        >
                          <span
                            className={`block rounded-full bg-white/80 ${
                              tick.major ? "h-4 w-0.5" : "h-2 w-px opacity-60"
                            }`}
                          />
                        </span>
                      ))}
                      {COMPASS_LABELS.map((item) => (
                        <span
                          key={item.label}
                          className="absolute left-1/2 top-1/2 text-sm font-bold text-white"
                          style={{
                            transform: `rotate(${item.angle}deg) translateY(-76px) rotate(${-item.angle}deg) translate(-50%, -50%)`,
                          }}
                        >
                          {item.label}
                        </span>
                      ))}
                    </div>
                    <div
                      className="absolute left-1/2 top-1/2 h-[86px] w-6 origin-bottom -translate-x-1/2 -translate-y-full rounded-t-full bg-gradient-to-b from-dw-mustard-light to-dw-mustard shadow-[0_8px_18px_rgba(167,122,47,0.35)] transition-transform duration-150 ease-out"
                      style={{ transform: `translate(-50%, -100%) rotate(${heading}deg)` }}
                    />
                    <div className="absolute left-1/2 top-1/2 h-[76px] w-3 origin-top -translate-x-1/2 rounded-b-full bg-white/30" />
                    <div className="absolute inset-0 rounded-full bg-[linear-gradient(130deg,rgba(255,255,255,0.25),transparent_42%)]" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="rounded-full border border-white/20 bg-black/55 px-4 py-3 text-center text-white shadow-[0_10px_20px_rgba(0,0,0,0.25)] backdrop-blur">
                        <p className="text-2xl font-bold leading-none">{heading}°</p>
                        <p className="mt-1 text-[10px] font-semibold uppercase text-dw-mustard-light">
                          {getCardinalDirection(heading)}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className="text-center text-xs font-medium text-dw-text-muted">
                    Drag the compass to set the home-facing direction.
                  </p>
                </div>
              </div>

              <div className="relative mt-5 grid gap-3 border-t border-dw-border pt-5 [transform:translateZ(30px)] sm:grid-cols-3">
                {["Layout", "Energy Flow", "Remedies"].map((item) => (
                  <div key={item} className="flex items-center gap-2 text-sm font-medium text-dw-text-secondary">
                    <CheckCircle2 className="text-dw-mustard" size={17} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="max-w-2xl lg:ml-auto">
            <p className="mb-3 text-xs font-semibold uppercase text-dw-mustard">
              Vastu Advisory
            </p>
            <h2 className="text-h2 mb-5">Vastu-Led Planning For Modern Homes</h2>
            <p className="mb-8 max-w-xl text-lg leading-8 text-dw-text-secondary">
              We combine directional principles with practical space planning, so your home feels balanced, functional, and beautifully resolved.
            </p>

            <div className="space-y-3">
              {FEATURES.map((feature) => {
                const Icon = feature.icon;
                return (
                  <div
                    key={feature.title}
                    className="grid grid-cols-[44px_1fr] gap-4 rounded-lg border border-dw-border bg-white p-4 shadow-sm"
                  >
                    <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-dw-mustard/10 text-dw-mustard">
                      <Icon size={21} />
                    </div>
                    <div>
                      <h3 className="font-semibold text-dw-text-primary">{feature.title}</h3>
                      <p className="mt-1 text-sm leading-6 text-dw-text-secondary">{feature.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="mt-8 inline-flex items-center gap-2 rounded-lg bg-dw-dark px-7 py-3.5 font-semibold text-white transition-colors duration-300 hover:bg-dw-mustard">
              Request Vastu Review
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
