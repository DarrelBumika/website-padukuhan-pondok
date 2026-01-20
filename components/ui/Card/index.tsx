import classNames from "classnames";

import { CardProps } from "@/types/props/CardProps";

const Card = (
  {
    fullWidth = false,
    noPadding = false,
    noShadow = false,
    noBackground = false,
    noBorder = false,
    hoverable = false,
    onClick,
    children
  }: CardProps
) => {
  const cardClassName = classNames(
    "w-64 flex flex-col group rounded-lg overflow-hidden",
    {
      "bg-white": !noBackground,
      "cursor-pointer": onClick || hoverable,
      "hover:-translate-y-1 transition-all duration-300": hoverable,
      "w-full": fullWidth,
      "max-w-3xl mx-auto": !fullWidth,
      "border border-white-2": !noBorder,
      "shadow-md": !noShadow,
      "p-4": !noPadding
    }
  );

  return (
    <div className={cardClassName} onClick={onClick}>
      {children}
    </div>
  );
};

export default Card;