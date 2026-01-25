type sizeType = "sm" | "md" | "lg" | "xl" | "2xl";

export interface CardProps {
  rounded?: sizeType;
  fullWidth?: boolean;
  noPadding?: boolean;
  noShadow?: boolean;
  noBackground?: boolean;
  noBorder?: boolean;
  hoverable?: boolean;
  onClick?: () => void;
  className?: string;
  children?: React.ReactNode;
}