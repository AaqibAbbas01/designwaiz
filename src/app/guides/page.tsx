import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Interior Design Guides | DesignWaiz",
  description:
    "Expert interior design tips, guides, and inspiration for every room. Learn about modular kitchens, wardrobes, and more.",
};

const GUIDES = [
  {
    title: "Modular Kitchen Design Guide",
    slug: "modular-kitchen-design-guide",
    description:
      "Everything you need to know about designing the perfect modular kitchen — from layouts and materials to budgeting and maintenance.",
    image: "https://images.unsplash.com/photo-1556909212-d5b604d0c90d?w=800&h=500&fit=crop",
    readTime: "12 min read",
    sections: 10,
    category: "Kitchen",
  },
  {
    title: "Wardrobe Design Guide",
    slug: "wardrobe-design-guide",
    description:
      "Your comprehensive guide to wardrobe design — sliding vs hinged, finish options, internal organization, and size selection.",
    image: "https://images.unsplash.com/photo-1594485022580-a4caab54f8f8?w=800&h=500&fit=crop",
    readTime: "10 min read",
    sections: 10,
    category: "Bedroom",
  },
];

export default function GuidesPage() {
  return (
    <div className="min-h-screen bg-[#F5F3F0]">
      {/* Header */}
      <div className="bg-[#1A1A1A] text-white pt-28 pb-12">
        <div className="container-dw">
          <h1 className="text-h1 mb-3">Interior Design Guides</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Expert tips, inspiration, and practical advice for every room in your home.
          </p>
        </div>
      </div>

      {/* Guides Grid */}
      <div className="section-padding">
        <div className="container-dw">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {GUIDES.map((guide) => (
              <Link
                key={guide.slug}
                href={`/guides/${guide.slug}`}
                className="group card-base overflow-hidden block"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={guide.image}
                    alt={guide.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="bg-dw-mustard text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {guide.category}
                    </span>
                  </div>
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-4 text-xs text-dw-text-muted mb-3">
                    <span>{guide.readTime}</span>
                    <span>{guide.sections} sections</span>
                  </div>
                  <h2 className="font-heading font-semibold text-xl mb-3 text-dw-text-primary group-hover:text-dw-mustard transition-colors">
                    {guide.title}
                  </h2>
                  <p className="text-dw-text-secondary text-sm leading-relaxed mb-4">
                    {guide.description}
                  </p>
                  <span className="inline-flex items-center gap-2 text-dw-mustard font-semibold text-sm group-hover:gap-3 transition-all">
                    Read Guide
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
