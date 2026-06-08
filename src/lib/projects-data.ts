import { cache } from "react";
import { PROJECTS_MANIFEST } from "@/lib/generated/projects-manifest";

export type ProjectMediaType = "image" | "video";

export interface ProjectMedia {
  id: string;
  src: string;
  type: ProjectMediaType;
  projectSlug: string;
  projectLabel: string;
  alt: string;
  poster?: string;
}

export interface ProjectSummary {
  slug: string;
  label: string;
  href: string;
  coverImage: string;
  photoCount: number;
  videoCount: number;
  totalMedia: number;
}

export interface ProjectDetail extends ProjectSummary {
  folderName: string;
  media: ProjectMedia[];
}

export const getProjects = cache(async (): Promise<ProjectDetail[]> =>
  PROJECTS_MANIFEST.map((project) => ({
    folderName: project.folderName,
    slug: project.slug,
    label: project.label,
    href: project.href,
    coverImage: project.coverImage,
    photoCount: project.photoCount,
    videoCount: project.videoCount,
    totalMedia: project.totalMedia,
    media: project.media.map((item) => ({
      id: item.id,
      src: item.src,
      type: item.type,
      projectSlug: item.projectSlug,
      projectLabel: item.projectLabel,
      alt: item.alt,
      poster: undefined,
    })),
  }))
);

export async function getProjectSummaries(): Promise<ProjectSummary[]> {
  const projects = await getProjects();

  return projects.map(({ slug, label, href, coverImage, photoCount, videoCount, totalMedia }) => ({
    slug,
    label,
    href,
    coverImage,
    photoCount,
    videoCount,
    totalMedia,
  }));
}

export async function getProjectBySlug(slug: string): Promise<ProjectDetail | undefined> {
  const projects = await getProjects();
  return projects.find((project) => project.slug === slug);
}
