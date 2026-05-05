import Image from "next/image";
import Link from "next/link";
import { DESIGN_CATEGORIES } from "@/lib/designs-data";

export default function DesignIdeas() {
  return (
    <section id="design-ideas" className="section-padding bg-white">
      <div className="container-dw">
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-3">Explore Our Spaces</h2>
          <p className="text-lg text-dw-text-secondary max-w-2xl mx-auto">
            Curated interiors, modular solutions, and refined details for modern homes.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {DESIGN_CATEGORIES.map((category) => (
            <Link
              key={category.id}
              href={`/designs?category=${category.slug}`}
              className="group card-base overflow-hidden block"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={category.thumbnail}
                  alt={category.name}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-semibold flex items-center gap-2">
                    Explore
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>

              <div className="p-5">
                <h3 className="font-heading font-semibold text-lg text-dw-text-primary mb-2 group-hover:text-dw-mustard transition-colors">
                  {category.name}
                </h3>
                <p className="text-sm text-dw-text-muted">
                  <span className="badge-count">{category.count}</span> designs
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
