import { StaticImageData } from "next/image";
export interface CardProps {
  imageUrl?: StaticImageData | string;
  title?: string;
  description?: string;
  date?: string;
  variant?: "elevated" | "outlined" | "ghost";
  fullWidth?: boolean;
  noBorder?: boolean;
}