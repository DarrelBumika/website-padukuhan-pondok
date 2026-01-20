"use client";

import Chip from "@/components/ui/Chip";

import Button from "@/components/ui/Button";
import OrganizationCard from "@/components/shared/OrganizationCard";

import { organizations } from "@/constants/organizations";

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
        {organizations.slice(0, 4).map((organization) => (
          <OrganizationCard
            key={organization.id}
            imageUrl={organization.image}
            title={organization.name}
            onClick={() => { }}
          />
        ))}
      </div>
      <Button variant="filled">Selengkapnya</Button>
    </div>
  );
};

export default Organization;