import { cache } from "react";
import { promises as fs } from "node:fs";
import path from "node:path";
import { slugify } from "@/lib/utils";

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

const PROJECT_FOLDERS = [
  "ATS 5202",
  "Akhil ji",
  "Ambala Site Picx",
  "Apex 2802",
  "Bharat Gaur Homes",
  "Facade & Others",
  "Meerut Sheel Kunj",
  "More Projects",
  "Sec.70 Images",
  "Tricolor Office",
  "Vasant Vihar F 39",
] as const;

interface MediaDraft {
  src: string;
  type: ProjectMediaType;
  sourceName: string;
}

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png"]);
const VIDEO_EXTENSIONS = new Set([".mp4", ".mov"]);
const HEIC_EXTENSIONS = new Set([".heic"]);
const IGNORED_FILES = new Set([".ds_store"]);

function publicSrc(folderName: string, fileName: string) {
  return `/waseem2/${folderName}/${fileName}`;
}

function isConvertedHeicJpg(fileName: string) {
  return fileName.toLowerCase().endsWith(".converted.jpg");
}

function convertedNameForHeic(fileName: string) {
  return fileName.replace(/\.[^.]+$/, ".converted.jpg");
}

function sortFiles(fileNames: string[]) {
  return [...fileNames].sort((a, b) =>
    a.localeCompare(b, undefined, {
      numeric: true,
      sensitivity: "base",
    })
  );
}

async function readProjectFolder(folderName: string, index: number): Promise<ProjectDetail> {
  const folderPath = path.join(process.cwd(), "public", "waseem2", folderName);
  const dirEntries = await fs.readdir(folderPath, { withFileTypes: true });
  const fileNames = sortFiles(
    dirEntries
      .filter((entry) => entry.isFile())
      .map((entry) => entry.name)
      .filter((name) => !IGNORED_FILES.has(name.toLowerCase()))
  );

  const fileSet = new Set(fileNames);
  const slug = slugify(folderName);
  const label = `Project ${index + 1}`;

  const mediaDrafts: MediaDraft[] = fileNames.flatMap<MediaDraft>((fileName) => {
    const ext = path.extname(fileName).toLowerCase();

    if (HEIC_EXTENSIONS.has(ext)) {
      const convertedName = convertedNameForHeic(fileName);
      if (!fileSet.has(convertedName)) {
        return [];
      }

      return [
        {
          src: publicSrc(folderName, convertedName),
          type: "image" as const,
          sourceName: fileName,
        },
      ];
    }

    if (isConvertedHeicJpg(fileName)) {
      const baseName = fileName.replace(/\.converted\.jpg$/i, "");
      if (fileSet.has(`${baseName}.HEIC`) || fileSet.has(`${baseName}.heic`)) {
        return [];
      }
    }

    if (IMAGE_EXTENSIONS.has(ext)) {
      return [
        {
          src: publicSrc(folderName, fileName),
          type: "image" as const,
          sourceName: fileName,
        },
      ];
    }

    if (VIDEO_EXTENSIONS.has(ext)) {
      return [
        {
          src: publicSrc(folderName, fileName),
          type: "video" as const,
          sourceName: fileName,
        },
      ];
    }

    return [];
  });

  let imageNumber = 0;
  let videoNumber = 0;

  const media: ProjectMedia[] = mediaDrafts.map((item, mediaIndex) => {
    if (item.type === "image") {
      imageNumber += 1;
    } else {
      videoNumber += 1;
    }

    const typeNumber = item.type === "image" ? imageNumber : videoNumber;

    return {
      id: `${slug}-${mediaIndex + 1}`,
      src: item.src,
      type: item.type,
      projectSlug: slug,
      projectLabel: label,
      alt: `${label} ${item.type} ${typeNumber}`,
      poster: undefined,
    };
  });

  const coverImage = media.find((item) => item.type === "image")?.src ?? media[0]?.src ?? "";
  const photoCount = media.filter((item) => item.type === "image").length;
  const videoCount = media.filter((item) => item.type === "video").length;

  return {
    folderName,
    slug,
    label,
    href: `/projects/${slug}`,
    coverImage,
    photoCount,
    videoCount,
    totalMedia: media.length,
    media,
  };
}

export const getProjects = cache(async (): Promise<ProjectDetail[]> =>
  Promise.all(PROJECT_FOLDERS.map((folderName, index) => readProjectFolder(folderName, index)))
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
