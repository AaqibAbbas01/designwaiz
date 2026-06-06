import Image from "next/image";
import Link from "next/link";
import { getProjectSummaries } from "@/lib/projects-data";

function projectDescription(projectLabel: string, totalMedia: number) {
  return `${projectLabel} includes ${totalMedia} curated photos and videos from a completed DesignWaiz space.`;
}

export default async function DesignIdeas() {
  const projects = await getProjectSummaries();

  return (
    <section id="design-ideas" className="section-padding bg-white">
      <div className="container-dw">
        <div className="text-center mb-12">
          <h2 className="text-h2 mb-3">Explore Our Spaces</h2>
          <p className="text-lg text-dw-text-secondary max-w-2xl mx-auto">
            Browse all numbered project galleries with complete photos and videos from our work.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <Link
              key={project.slug}
              href={project.href}
              className="group rounded-lg overflow-hidden border border-dw-border bg-white shadow-sm transition-all duration-300 hover:border-dw-teal hover:shadow-[0_20px_48px_rgba(13,148,136,0.18)] hover:-translate-y-2"
            >
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.coverImage}
                  alt={project.label}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1280px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/15 group-hover:bg-black/50 transition-all duration-300 flex items-end justify-center pb-6">
                  <span className="text-white font-semibold opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 flex items-center gap-2">
                    View Project
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </span>
                </div>
                <div className="absolute top-4 left-4 rounded-full bg-white/95 px-3 py-1 text-xs font-semibold text-dw-text-primary">
                  {project.label}
                </div>
              </div>

              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2 text-dw-text-primary group-hover:text-dw-teal transition-colors duration-300">
                  {project.label}
                </h3>
                <p className="text-sm text-dw-text-secondary leading-relaxed mb-3">
                  {projectDescription(project.label, project.totalMedia)}
                </p>
                <p className="text-xs font-medium text-dw-text-muted">
                  {project.photoCount} photos • {project.videoCount} videos
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
