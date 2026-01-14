import { ButtonHTMLAttributes } from "react";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  color?: "primary";
  variant?: "filled" | "outlined";
  isIconButton?: boolean;
}