"use client";

import { useState, useCallback, Suspense } from "react";
import Image from "next/image";
import { useSearchParams, useRouter } from "next/navigation";
import { Search, X } from "lucide-react";
import { DESIGN_CATEGORIES, ALL_DESIGN_IMAGES, type DesignImage } from "@/lib/designs-data";
import { cn } from "@/lib/utils";
import dynamic from "next/dynamic";
import type { Slide } from "yet-another-react-lightbox";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });

const ITEMS_PER_PAGE = 12;

function DesignsContent() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const categoryParam = searchParams.get("category") || "all";
  const subcategoryParam = searchParams.get("sub") || "all";

  const [displayCount, setDisplayCount] = useState(ITEMS_PER_PAGE);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const activeCategory = categoryParam;
  const activeSubcategory = subcategoryParam;
  const activeCategoryData = DESIGN_CATEGORIES.find((c) => c.slug === activeCategory);

  const filteredImages = ALL_DESIGN_IMAGES.filter((img) => {
    if (activeCategory !== "all" && img.category !== activeCategory) return false;
    if (activeSubcategory !== "all" && img.subcategory !== activeSubcategory) return false;
    return true;
  });

  const displayedImages = filteredImages.slice(0, displayCount);

  const updateURL = useCallback(
    (cat: string, sub: string) => {
      const params = new URLSearchParams();
      if (cat !== "all") params.set("category", cat);
      if (sub !== "all") params.set("sub", sub);
      router.push(`/designs${params.toString() ? `?${params.toString()}` : ""}`, {
        scroll: false,
      });
    },
    [router]
  );

  const handleCategoryChange = (slug: string) => {
    setDisplayCount(ITEMS_PER_PAGE);
    updateURL(slug, "all");
  };

  const handleSubcategoryChange = (slug: string) => {
    setDisplayCount(ITEMS_PER_PAGE);
    updateURL(activeCategory, slug);
  };

  const openLightbox = (img: DesignImage) => {
    const idx = displayedImages.indexOf(img);
    setLightboxIndex(idx);
    setLightboxOpen(true);
  };

  const lightboxSlides: Slide[] = displayedImages.map((img) => ({
    src: img.src,
    alt: img.alt,
    width: img.width,
    height: img.height,
  }));

  return (
    <div className="min-h-screen bg-dw-bg-primary">
      {/* Page Header */}
      <div className="bg-[#1A1A1A] text-white pt-28 pb-12">
        <div className="container-dw">
          <h1 className="text-h1 mb-3">Design Inspiration Gallery</h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Browse 300+ curated interior designs across every room and style.
          </p>
        </div>
      </div>

      {/* Sticky Category Tabs */}
      <div className="sticky top-16 lg:top-20 z-40 bg-white shadow-sm border-b border-dw-border">
        <div className="container-dw py-0">
          <div className="flex gap-2 overflow-x-auto scrollbar-none py-3 no-scrollbar">
            {/* All tab */}
            <button
              onClick={() => handleCategoryChange("all")}
              className={cn(
                "flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                activeCategory === "all"
                  ? "bg-dw-mustard text-white"
                  : "bg-dw-bg-secondary text-dw-text-secondary hover:bg-dw-mustard/20"
              )}
            >
              All
            </button>
            {DESIGN_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => handleCategoryChange(cat.slug)}
                className={cn(
                  "flex-shrink-0 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                  activeCategory === cat.slug
                    ? "bg-dw-mustard text-white"
                    : "bg-dw-bg-secondary text-dw-text-secondary hover:bg-dw-mustard/20"
                )}
              >
                {cat.name}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="container-dw py-10">
        {/* Subcategory Tabs */}
        {activeCategoryData?.subcategories && (
          <div className="mb-8">
            <div className="flex gap-2 flex-wrap">
              <button
                onClick={() => handleSubcategoryChange("all")}
                className={cn(
                  "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                  activeSubcategory === "all"
                    ? "bg-dw-olive text-white"
                    : "border border-dw-olive text-dw-olive hover:bg-dw-olive/10"
                )}
              >
                All ({activeCategoryData.count})
              </button>
              {activeCategoryData.subcategories.map((sub) => (
                <button
                  key={sub.id}
                  onClick={() => handleSubcategoryChange(sub.slug)}
                  className={cn(
                    "px-4 py-2 rounded-lg text-sm font-medium transition-all",
                    activeSubcategory === sub.slug
                      ? "bg-dw-olive text-white"
                      : "border border-dw-olive text-dw-olive hover:bg-dw-olive/10"
                  )}
                >
                  {sub.name}
                </button>
              ))}
            </div>

            {/* Subcategory description */}
            {activeSubcategory !== "all" && (
              <p className="mt-4 text-dw-text-secondary text-sm">
                {activeCategoryData.subcategories.find((s) => s.slug === activeSubcategory)?.description}
              </p>
            )}
          </div>
        )}

        {/* Results Count */}
        <div className="flex items-center justify-between mb-6">
          <p className="text-dw-text-secondary text-sm">
            Showing {displayedImages.length} of {filteredImages.length} designs
            {activeCategory !== "all" && (
              <span> in <strong>{activeCategoryData?.name}</strong></span>
            )}
          </p>

          {activeCategory !== "all" && (
            <button
              onClick={() => handleCategoryChange("all")}
              className="flex items-center gap-1 text-sm text-dw-mustard hover:text-dw-mustard-dark"
            >
              <X size={14} />
              Clear filter
            </button>
          )}
        </div>

        {/* Image Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayedImages.map((image) => (
            <button
              key={image.id}
              onClick={() => openLightbox(image)}
              className="group card-base overflow-hidden text-left block w-full"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                  <div>
                    <p className="text-white font-semibold">{image.title}</p>
                    <p className="text-white/80 text-sm flex items-center gap-1 mt-1">
                      View Details
                      <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-4">
                <p className="font-heading font-medium text-dw-text-primary">{image.title}</p>
                {image.subcategory && (
                  <p className="text-xs text-dw-text-muted mt-1 capitalize">
                    {image.subcategory.replace(/-/g, " ")}
                  </p>
                )}
              </div>
            </button>
          ))}
        </div>

        {/* Load More */}
        {displayCount < filteredImages.length && (
          <div className="text-center mt-12">
            <button
              onClick={() => setDisplayCount((c) => c + ITEMS_PER_PAGE)}
              className="bg-white border-2 border-dw-mustard text-dw-mustard hover:bg-dw-mustard hover:text-white font-semibold px-10 py-3.5 rounded-lg transition-all duration-300"
            >
              Load More Designs ({filteredImages.length - displayCount} remaining)
            </button>
          </div>
        )}

        {filteredImages.length === 0 && (
          <div className="text-center py-20">
            <Search size={48} className="mx-auto text-dw-text-muted mb-4" />
            <p className="text-xl font-heading text-dw-text-secondary">No designs found</p>
            <button onClick={() => handleCategoryChange("all")} className="mt-4 text-dw-mustard">
              View all designs
            </button>
          </div>
        )}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <Lightbox
          open={lightboxOpen}
          close={() => setLightboxOpen(false)}
          index={lightboxIndex}
          slides={lightboxSlides}
        />
      )}
    </div>
  );
}

export default function DesignsPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-dw-bg-primary flex items-center justify-center">Loading...</div>}>
      <DesignsContent />
    </Suspense>
  );
}
