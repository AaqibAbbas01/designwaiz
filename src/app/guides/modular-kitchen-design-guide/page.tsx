import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Modular Kitchen Design Guide | DesignWaiz",
  description:
    "Learn modular kitchen layouts, finishes, storage hacks, budget ranges, countertop options, and maintenance tips.",
};

const sections = [
  {
    title: "What is a Modular Kitchen?",
    body: "A modular kitchen is a system-built kitchen made from factory-finished cabinets, shutters, carcasses, and accessories that are assembled on-site. It offers cleaner detailing, faster execution, and better planning for storage, workflow, and maintenance.",
  },
  {
    title: "Types of Modular Kitchen Layouts",
    body: "L-shape layouts work beautifully in medium homes, parallel kitchens maximize efficiency, straight kitchens are ideal for compact apartments, U-shape kitchens deliver strong storage, and island kitchens create an open-plan statement for larger homes.",
  },
  {
    title: "How to Choose the Right Layout",
    body: "Base the layout on available width, appliance positions, doorway placement, and how many people use the kitchen. For Indian homes, chimney location, tall unit placement, and wet-dry zoning also matter.",
  },
  {
    title: "Materials & Finishes for Cabinets",
    body: "Popular finishes include laminate, acrylic, PU, veneer, and glass. Laminates are durable and practical, acrylic gives a reflective premium feel, PU looks sleek and seamless, and veneer adds natural warmth.",
  },
  {
    title: "Countertop Options",
    body: "Quartz is highly practical and low-maintenance, granite is durable and cost-effective, and marble looks luxurious but needs more care. Your choice should balance stain resistance, aesthetics, and long-term upkeep.",
  },
  {
    title: "Storage Hacks for Small Kitchens",
    body: "Use corner systems, tandem drawers, tall pantry units, under-sink organization, cutlery trays, spice pull-outs, and loft storage. Smart storage planning can make a compact kitchen feel twice as efficient.",
  },
  {
    title: "Kitchen Colour Palettes That Work",
    body: "Warm whites, greige, sage, olive, woodgrain oak, charcoal, and muted mustard accents are timeless for 2026. Two-tone combinations create depth while keeping the space visually light.",
  },
  {
    title: "Modular Kitchen Price Guide",
    body: "A practical entry kitchen starts in the budget band, while mid-range kitchens usually include upgraded finishes and accessories. Premium kitchens add better hardware, richer materials, larger layouts, and integrated design detailing.",
  },
  {
    title: "Maintenance Tips",
    body: "Wipe spills quickly, avoid harsh chemicals, lubricate hardware when needed, keep chimney filters clean, and periodically inspect water-prone zones. Good maintenance preserves both appearance and hardware life.",
  },
  {
    title: "FAQs",
    body: "Clients usually ask about ideal countertop material, best finish for Indian cooking conditions, realistic budget expectations, and how long installation takes. The answer depends on lifestyle, cooking frequency, and finish choice.",
  },
];

export default function ModularKitchenGuidePage() {
  return (
    <div className="min-h-screen bg-dw-bg-primary">
      <section className="bg-[#1A1A1A] text-white pt-28 pb-14">
        <div className="container-dw">
          <p className="text-dw-mustard font-semibold mb-3">Interior Design Guides</p>
          <h1 className="text-h1 max-w-4xl mb-4">Modular Kitchen Design Guide</h1>
          <p className="text-white/80 text-lg max-w-3xl">
            Expert guidance on layouts, finishes, storage, colours, budgets, and maintenance for a kitchen that looks beautiful and works flawlessly.
          </p>
        </div>
      </section>

      <section className="section-padding pt-10">
        <div className="container-dw">
          <div className="relative aspect-[16/8] rounded-lg overflow-hidden shadow-sm border border-dw-border mb-12">
            <Image
              src="https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=1600&h=900&fit=crop"
              alt="Modern modular kitchen"
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="grid lg:grid-cols-[1fr_280px] gap-12 items-start">
            <article className="space-y-10">
              {sections.map((section, index) => (
                <div key={section.title} className="bg-white rounded-lg p-8 shadow-sm border border-dw-border">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-10 h-10 rounded-full bg-dw-mustard/15 text-dw-mustard flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <h2 className="text-h3 text-dw-text-primary">{section.title}</h2>
                  </div>
                  <p className="text-dw-text-secondary leading-8">{section.body}</p>

                  {index === 3 && (
                    <div className="mt-8 rounded-lg bg-[#1A1A1A] text-white p-6">
                      <p className="text-dw-mustard font-semibold mb-2">Free Kitchen Consultation</p>
                      <p className="text-white/80 mb-4">Get layout help, finish recommendations, and budget guidance from our designers.</p>
                      <Link href="/#consultation" className="inline-flex items-center rounded-lg bg-dw-mustard px-5 py-3 font-semibold text-white hover:bg-dw-olive transition-colors">Book Free Consultation</Link>
                    </div>
                  )}
                </div>
              ))}

              <div className="rounded-lg bg-dw-bg-secondary p-8 border border-dw-border">
                <h3 className="text-h3 mb-3">Ready to design your kitchen?</h3>
                <p className="text-dw-text-secondary mb-5">Our designers can help you pick the best layout, finishes, and storage systems for your space and budget.</p>
                <Link href="/#consultation" className="inline-flex items-center rounded-lg bg-dw-mustard px-6 py-3 font-semibold text-white hover:bg-dw-olive transition-colors">Get Free Kitchen Consultation</Link>
              </div>
            </article>

            <aside className="lg:sticky lg:top-28 bg-white rounded-lg p-6 shadow-sm border border-dw-border">
              <h3 className="font-heading text-xl mb-4">In this guide</h3>
              <ol className="space-y-3 text-sm text-dw-text-secondary">
                {sections.map((section, index) => (
                  <li key={section.title} className="flex gap-3">
                    <span className="text-dw-mustard font-semibold">{index + 1}.</span>
                    <span>{section.title}</span>
                  </li>
                ))}
              </ol>
            </aside>
          </div>
        </div>
      </section>
    </div>
  );
}
