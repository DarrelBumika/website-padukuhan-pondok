import classNames from "classnames";
import Image from "next/image"

import { CardProps } from "@/types/props/CardProps";

import ImagePlaceholder from "@/src/images/placeholder.png";

const Card = (
  {
    imageUrl = ImagePlaceholder,
    title,
    description,
    date,
    variant = "elevated",
    fullWidth = false
  }: CardProps
) => {
  const variantStyles = {
    elevated: "shadow-md bg-white-1",
    outlined: "border bg-white-1",
    ghost: "bg-transparent"
  };
  const variantClass = variantStyles[variant];
  return (
    <div
      className={classNames(
        "w-64 flex flex-col group cursor-pointer transition-all duration-300 hover:-translate-y-1 rounded-lg overflow-hidden",
        variantClass,
        {
          "border border-white-2": !(variant === "ghost"),
          "w-full": fullWidth,
          "max-w-3xl mx-auto": !fullWidth,
        }
      )}
    >
      {imageUrl && (
        <div className="relative h-64">
          <Image
            src={imageUrl}
            alt={title || "Card image"}
            fill
            objectFit="cover"
            className={classNames(
              {
                "rounded-lg": variant === "ghost"
              }
            )}
          />
        </div>
      )}
      {title || description || date ? (
        <div className={classNames(
          "py-4 flex flex-col gap-1",
          {
            "p-4": variant !== "ghost"
          }
        )}>
          {date && <span className="text-xs text-gray-500">{date.toLocaleDateString("id-ID", { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</span>}
          {title && <h3 className="text-large-2 text-black-1 mb-2">{title}</h3>}
          {description && <p className="text-sm text-gray-600 mb-2">{description}</p>}
        </div>
      ) : null}
    </div>
  );
};

export default Card;