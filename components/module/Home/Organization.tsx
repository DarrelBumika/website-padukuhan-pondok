import Chip from "@/components/ui/Chip";
import Card from "@/components/ui/Card";

import ImagePlaceholder from "@/src/images/placeholder.png";
import Button from "@/components/ui/Button";

const Organization = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center gap-8 py-16 bg-linear-to-b from-0% from-primary-11 to-50% to-white">
      <Chip label="organisasi" variant="filled" uppercase />
      <div className="flex flex-col gap-4">
        <h2 className="text-heading-2 text-black-1 text-center">Organisasi Padukuhan Pondok</h2>
        <p className="text-regular-5 text-center text-white-5">
          Berbagai Organisasi Kemasyarakatan yang ada di Padukuhan Pondok
        </p>
      </div>
      <div className="flex gap-9">
        <Card
          variant="ghost"
          imageUrl={ImagePlaceholder}
          title="Organisasi"
        />
        <Card
          variant="ghost"
          imageUrl={ImagePlaceholder}
          title="Organisasi"
        />
        <Card
          variant="ghost"
          imageUrl={ImagePlaceholder}
          title="Organisasi"
        />
        <Card
          variant="ghost"
          imageUrl={ImagePlaceholder}
          title="Organisasi"
        />
      </div>
      <Button variant="filled">Selengkapnya</Button>
    </div>
  );
};

export default Organization;