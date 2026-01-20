import Card from "../ui/Card";
import Image from "next/image";

import { NewsCardProps } from "@/types/props/NewsCardProps";

const NewsCard = (
  {
    imageUrl,
    title,
    preview,
    date,
    onClick
  }: NewsCardProps
) => {
  return (
    <Card
      noPadding
      hoverable
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
        <span className="text-xs text-gray-500">{date.toLocaleDateString("id-ID", { year: 'numeric', month: 'long', day: 'numeric', weekday: 'long' })}</span>
        <h3 className="text-large-2 text-black-1 mb-2">{title}</h3>
        <p className="text-sm text-gray-600 mb-2">{preview}</p>
      </div>
    </Card>
  );
};

export default NewsCard;