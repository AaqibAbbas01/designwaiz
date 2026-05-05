import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Wardrobe Design Guide | DesignWaiz",
  description:
    "Explore wardrobe types, finishes, internal layouts, sizing advice, colour pairings, and maintenance tips for modern homes.",
};

const sections = [
  {
    title: "Why Invest in a Custom Wardrobe?",
    body: "A custom wardrobe uses every inch effectively, aligns with your room proportions, and supports your actual lifestyle. It helps with long-term organization while making the bedroom feel more premium and clutter-free.",
  },
  {
    title: "Types of Wardrobes",
    body: "Sliding wardrobes save clearance space, hinged wardrobes offer full visibility, and walk-in wardrobes create a boutique experience. The right type depends on room size, circulation space, and storage expectations.",
  },
  {
    title: "Wardrobe Finishes Explained",
    body: "Laminate is practical and durable, PU feels premium and polished, glass gives a modern aesthetic, acrylic creates high-gloss brightness, veneer brings warmth, and leatherette offers a luxurious tactile look.",
  },
  {
    title: "Internal Layout & Organization",
    body: "Great wardrobes balance hanging, folding, drawers, accessories, and seasonal storage. Internal planning should reflect whether you store saris, suits, handbags, shoes, jewelry, or everyday casualwear.",
  },
  {
    title: "Choosing the Right Wardrobe Size",
    body: "Width should respond to bed placement and walking clearance, while height should consider loft use and room proportions. In compact rooms, vertical planning often solves storage shortages better than width expansion.",
  },
  {
    title: "Wardrobe Ideas for Small Bedrooms",
    body: "Choose light finishes, mirrored shutters, handle-less profiles, and clean vertical lines. Slim modules, integrated study corners, and mixed open-closed storage can make a small room feel visually larger.",
  },
  {
    title: "Colour & Material Pairings",
    body: "Popular combinations include oak with ivory, olive with beige, walnut with smoked glass, and stone-grey with brass-toned details. The best palette should relate to flooring, wall tone, and headboard design.",
  },
  {
    title: "Wardrobe Price Guide",
    body: "Budget wardrobes focus on efficient planning and practical finishes, while mid-segment options improve detailing and internal accessories. Premium wardrobes feature richer shutters, better hardware, and more customized organization.",
  },
  {
    title: "Care & Maintenance",
    body: "Keep shutters dry, clean mirrors carefully, avoid overloading shelves, and check alignment of sliding tracks or hinges over time. Consistent upkeep preserves function and finish quality for years.",
  },
  {
    title: "FAQs",
    body: "The most common questions are about ideal depth, finish durability, which wardrobe type suits small bedrooms, and whether mirrors should be integrated into the shutters.",
  },
];

export default function WardrobeGuidePage() {
  return (
    <div className="min-h-screen bg-dw-bg-primary">
      <section className="bg-[#1A1A1A] text-white pt-28 pb-14">
        <div className="container-dw">
          <p className="text-dw-mustard font-semibold mb-3">Interior Design Guides</p>
          <h1 className="text-h1 max-w-4xl mb-4">Wardrobe Design Guide</h1>
          <p className="text-white/80 text-lg max-w-3xl">
            A practical guide to wardrobe planning, finish selection, internal organization, sizing, styling, and long-term maintenance.
          </p>
        </div>
      </section>

      <section className="section-padding pt-10">
        <div className="container-dw">
          <div className="relative aspect-[16/8] rounded-lg overflow-hidden shadow-sm border border-dw-border mb-12">
            <Image
              src="https://images.unsplash.com/photo-1594485022580-a4caab54f8f8?w=1600&h=900&fit=crop"
              alt="Modern wardrobe design"
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
                    <div className="w-10 h-10 rounded-full bg-dw-olive/15 text-dw-olive flex items-center justify-center font-semibold">
                      {index + 1}
                    </div>
                    <h2 className="text-h3 text-dw-text-primary">{section.title}</h2>
                  </div>
                  <p className="text-dw-text-secondary leading-8">{section.body}</p>

                  {index === 2 && (
                    <div className="mt-8 rounded-lg bg-[#1A1A1A] text-white p-6">
                      <p className="text-dw-mustard font-semibold mb-2">Free Wardrobe Consultation</p>
                      <p className="text-white/80 mb-4">Get help choosing finishes, internal layouts, and the right style for your bedroom.</p>
                      <Link href="/#consultation" className="inline-flex items-center rounded-lg bg-dw-mustard px-5 py-3 font-semibold text-white hover:bg-dw-olive transition-colors">Book Free Consultation</Link>
                    </div>
                  )}
                </div>
              ))}

              <div className="rounded-lg bg-dw-bg-secondary p-8 border border-dw-border">
                <h3 className="text-h3 mb-3">Need help choosing your wardrobe style?</h3>
                <p className="text-dw-text-secondary mb-5">Our team can help you compare finishes, optimize internal storage, and match the design to your room dimensions.</p>
                <Link href="/#consultation" className="inline-flex items-center rounded-lg bg-dw-mustard px-6 py-3 font-semibold text-white hover:bg-dw-olive transition-colors">Get Free Wardrobe Consultation</Link>
              </div>
            </article>

            <aside className="lg:sticky lg:top-28 bg-white rounded-lg p-6 shadow-sm border border-dw-border">
              <h3 className="font-heading text-xl mb-4">In this guide</h3>
              <ol className="space-y-3 text-sm text-dw-text-secondary">
                {sections.map((section, index) => (
                  <li key={section.title} className="flex gap-3">
                    <span className="text-dw-olive font-semibold">{index + 1}.</span>
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
