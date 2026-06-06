import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { getProjectSummaries } from "@/lib/projects-data";

export const metadata: Metadata = {
  title: "Projects | DesignWaiz",
  description:
    "Browse numbered DesignWaiz project galleries featuring photos and videos from completed residential and commercial spaces.",
};

export default async function ProjectsPage() {
  const projects = await getProjectSummaries();
  const totalPhotos = projects.reduce((sum, project) => sum + project.photoCount, 0);
  const totalVideos = projects.reduce((sum, project) => sum + project.videoCount, 0);

  return (
    <div className="min-h-screen bg-dw-bg-primary">
      <section className="bg-[#1A1A1A] text-white pt-28 pb-14">
        <div className="container-dw">
          <div className="flex flex-wrap items-center gap-3 mb-4">
            <span className="rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-sm font-semibold text-dw-mustard">
              Waseem2 Portfolio
            </span>
            <span className="text-sm text-white/70">{projects.length} numbered projects</span>
            <span className="text-sm text-white/70">{totalPhotos} photos</span>
            <span className="text-sm text-white/70">{totalVideos} videos</span>
          </div>
          <h1 className="text-h1 mb-4">Project Gallery</h1>
          <p className="text-white/80 text-lg max-w-3xl">
            Explore all project folders as a clean numbered showcase, with each space organized into its own gallery of photos and videos.
          </p>
        </div>
      </section>

      <section className="section-padding">
        <div className="container-dw">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {projects.map((project) => (
              <Link
                key={project.slug}
                href={project.href}
                className="group card-base overflow-hidden bg-white"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={project.coverImage}
                    alt={project.label}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/10 to-transparent" />
                  <div className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-dw-text-primary">
                    {project.label}
                  </div>
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <div className="flex flex-wrap gap-2 text-xs font-medium text-white/80">
                      <span>{project.photoCount} photos</span>
                      <span>{project.videoCount} videos</span>
                    </div>
                    <p className="mt-2 text-lg font-semibold">View full gallery</p>
                  </div>
                </div>

                <div className="p-6">
                  <h2 className="font-heading text-h3 mb-2 text-dw-text-primary">{project.label}</h2>
                  <p className="text-sm text-dw-text-secondary leading-relaxed">
                    Browse all {project.totalMedia} media items for this project in a dedicated gallery.
                  </p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
