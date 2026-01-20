import { StaticImageData } from "next/image";

export interface OrganizationCardProps {
  imageUrl: StaticImageData | string;
  title: string;
  onClick?: () => void;
}