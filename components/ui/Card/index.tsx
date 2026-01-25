import classNames from "classnames";

import { CardProps } from "@/types/props/CardProps";

const Card = (
  {
    rounded = "lg",
    fullWidth = false,
    noPadding = false,
    noShadow = false,
    noBackground = false,
    noBorder = false,
    hoverable = false,
    onClick,
    className,
    children
  }: CardProps
) => {
  const cardClassName = classNames(
    "flex flex-col group overflow-hidden",
    className,
    {
      "bg-white": !noBackground,
      "cursor-pointer": onClick || hoverable,
      "hover:-translate-y-1 transition-all duration-300": hoverable,
      "w-full": fullWidth,
      "w-fit": !fullWidth,
      "border border-white-2": !noBorder,
      "shadow-md": !noShadow,
      "p-4": !noPadding,
      "rounded-sm": rounded === "sm",
      "rounded-md": rounded === "md",
      "rounded-lg": rounded === "lg",
      "rounded-xl": rounded === "xl",
      "rounded-2xl": rounded === "2xl"
    }
  );

  return (
    <div className={cardClassName} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;