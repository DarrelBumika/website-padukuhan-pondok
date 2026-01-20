export interface CardProps {
  fullWidth?: boolean;
  noPadding?: boolean;
  noShadow?: boolean;
  noBackground?: boolean;
  noBorder?: boolean;
  hoverable?: boolean;
  onClick?: () => void;
  children?: React.ReactNode;
}