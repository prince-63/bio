import { StaticImageData } from "next/image";

export type TechDetails = {
  label: string;
  progress?: number;
};

export interface PostMetadata {
  title: string;
  date: string;
  subtitle: string;
  content: string;
}

export interface ProjectMetadata {
  imageSrc: StaticImageData;
  title: string;
  description: string;
  tags: string[];
  year: string;
  url: string;
}
