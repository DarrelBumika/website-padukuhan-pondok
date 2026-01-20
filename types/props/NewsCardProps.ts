import { StaticImageData } from "next/image";

export interface NewsCardProps {
  imageUrl: StaticImageData | string;
  title: string;
  preview: string;
  date: Date;
  onClick?: () => void;
}