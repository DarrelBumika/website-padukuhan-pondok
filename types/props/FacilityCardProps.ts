import { StaticImageData } from "next/image";

export interface FacilityCardProps {
  imageUrl: StaticImageData | string;
  title: string;
}