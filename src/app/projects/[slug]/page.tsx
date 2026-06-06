import type { Metadata } from "next";
import { notFound } from "next/navigation";
import ProjectGalleryClient from "@/components/projects/ProjectGalleryClient";
import { getProjectBySlug, getProjects } from "@/lib/projects-data";

interface ProjectDetailPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata({ params }: ProjectDetailPageProps): Promise<Metadata> {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    return {
      title: "Project Not Found | DesignWaiz",
    };
  }

  return {
    title: `${project.label} | DesignWaiz`,
    description: `Browse all ${project.photoCount} photos and ${project.videoCount} videos in ${project.label}.`,
  };
}

export default async function ProjectDetailPage({ params }: ProjectDetailPageProps) {
  const { slug } = await params;
  const project = await getProjectBySlug(slug);

  if (!project) {
    notFound();
  }

  return <ProjectGalleryClient project={project} />;
}
