import Image from "next/image";
import Link from "next/link";

const FEATURED_PROJECTS = [
  {
    id: "project-1",
    name: "Project 1",
    description: "A thoughtfully designed residential space blending modern aesthetics with functional living.",
    image: "/images/LIVING ROOM/IMG_4258.JPG",
    href: "/designs",
  },
  {
    id: "project-2",
    name: "Project 2",
    description: "Contemporary interiors crafted with precision — where every detail speaks for itself.",
    image: "/images/MASTER BEDROOM/IMG_4276.JPG",
    href: "/designs",
  },
  {
    id: "project-3",
    name: "Project 3",
    description: "A bespoke workspace designed to inspire productivity and reflect brand identity.",
    image: "/images/CORPORATE OFFICE/Screenshot 2019-02-09 at 6.01.23 PM.png",
    href: "/designs",
  },
];

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

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {FEATURED_PROJECTS.map((project) => (
            <Link
              key={project.id}
              href={project.href}
              className="group rounded-lg overflow-hidden border border-dw-border bg-white shadow-sm transition-all duration-300 hover:border-dw-teal hover:shadow-[0_20px_48px_rgba(13,148,136,0.18)] hover:-translate-y-2"
            >
              {/* Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
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
              </div>

              {/* Card body */}
              <div className="p-6">
                <h3 className="font-heading font-semibold text-lg mb-2 text-dw-text-primary group-hover:text-dw-teal transition-colors duration-300">
                  {project.name}
                </h3>
                <p className="text-sm text-dw-text-secondary leading-relaxed">
                  {project.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
