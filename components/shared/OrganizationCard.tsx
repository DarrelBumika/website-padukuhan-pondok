import Card from "../ui/Card";
import Image from "next/image";

import { OrganizationCardProps } from "@/types/props/OrganizationCardProps";

const OrganizationCard = (
  {
    imageUrl,
    title,
    onClick
  }: OrganizationCardProps
) => {
  return (
    <Card
      noPadding
      hoverable
      noBackground
      noBorder
      noShadow
      onClick={onClick}
    >
      {imageUrl && (
        <div className="relative h-64">
          <Image
            src={imageUrl}
            alt={title || "Card image"}
            fill
            objectFit="cover"
          />
        </div>
      )}
      <div className="py-4 flex flex-col gap-1 p-4">
        <h3 className="text-large-2 text-black-1 mb-2">{title}</h3>
      </div>
    </Card>
  );
};

export default OrganizationCard;