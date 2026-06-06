"use client";

import { useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";
import Link from "next/link";
import type { Slide } from "yet-another-react-lightbox";
import type { ProjectDetail } from "@/lib/projects-data";

const Lightbox = dynamic(() => import("yet-another-react-lightbox"), { ssr: false });

interface ProjectGalleryClientProps {
  project: ProjectDetail;
}

export default function ProjectGalleryClient({ project }: ProjectGalleryClientProps) {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);

  const imageMedia = project.media.filter((item) => item.type === "image");
  const slides: Slide[] = imageMedia.map((item) => ({
    src: item.src,
    alt: item.alt,
  }));

  return (
    <>
      <section className="bg-[#1A1A1A] text-white pt-28 pb-12">
        <div className="container-dw">
          <Link href="/projects" className="inline-flex items-center gap-2 text-sm text-white/70 hover:text-white mb-5">
            <span aria-hidden="true">←</span>
            Back to all projects
          </Link>
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="rounded-full border border-white/20 px-4 py-1.5 text-sm font-semibold text-dw-mustard bg-white/5">
              {project.label}
            </span>
            <span className="text-sm text-white/70">{project.photoCount} photos</span>
            <span className="text-sm text-white/70">{project.videoCount} videos</span>
          </div>
          <h1 className="text-h1 mb-3">{project.label}</h1>
          <p className="text-white/80 text-lg max-w-3xl">
            A complete project gallery with every available photo and video from this site folder.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-dw">
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {project.media.map((item) => {
              if (item.type === "image") {
                const imageIndex = imageMedia.findIndex((image) => image.id === item.id);

                return (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setLightboxIndex(imageIndex);
                      setLightboxOpen(true);
                    }}
                    className="group card-base overflow-hidden text-left w-full"
                  >
                    <div className="relative aspect-[4/3] overflow-hidden">
                      <Image
                        src={item.src}
                        alt={item.alt}
                        fill
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-4">
                        <span className="text-white font-semibold">View photo</span>
                      </div>
                    </div>
                  </button>
                );
              }

              const isMov = item.src.toLowerCase().endsWith(".mov");

              return (
                <div key={item.id} className="card-base overflow-hidden">
                  <div className="relative aspect-[4/3] bg-black">
                    <video
                      controls
                      preload="metadata"
                      className="absolute inset-0 h-full w-full object-cover"
                      poster={item.poster}
                    >
                      <source src={item.src} />
                      Your browser does not support this video.
                    </video>
                  </div>
                  <div className="p-4">
                    <p className="font-heading font-medium text-dw-text-primary mb-2">Project video</p>
                    <p className="text-sm text-dw-text-secondary">
                      {isMov
                        ? "MOV files may not play in every browser. Use the fallback link if playback fails."
                        : "Inline playback is available for this project video."}
                    </p>
                    {isMov && (
                      <a
                        href={item.src}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 text-sm font-semibold text-dw-mustard hover:text-dw-olive mt-3"
                      >
                        Open original video
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <Lightbox open={lightboxOpen} close={() => setLightboxOpen(false)} slides={slides} index={lightboxIndex} />
    </>
  );
}
