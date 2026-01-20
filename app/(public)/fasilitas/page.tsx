"use client";

import Image from "next/image";

import FacilityBannerImage from "@/src/images/facility-banner.png";
import DecorationLeaves from "@/src/images/decoration-leaves.png";
import FacilityCard from "@/components/shared/FacilityCard";

import { facilities } from "@/constants/facilities";

const FasilitasPage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen relative overflow-hidden bg-white">

      {/* Hero Section with Gradient Overlay */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src={FacilityBannerImage}
          alt="Facility Banner"
          fill
          className="object-cover"
          priority
        />
        {/* Dark gradient overlay from bottom */}
        <div className="absolute inset-0 bg-linear-to-t from-black/70 via-black/30 to-transparent" />
      </div>

      <div className="w-full max-w-6xl mx-auto">
        {/* Title Badge Section */}
        <div className="w-full flex flex-col items-start -mt-8 relative z-10">
          <div className="bg-primary-2 text-white px-12 py-3 rounded-full shadow-lg">
            <h1 className="text-large-2 md:text-extralarge-2">
              Fasilitas Pedukuhan Pondok
            </h1>
          </div>
          <Image
            src={DecorationLeaves}
            alt="Decoration Leaves"
            className="absolute top-0 left-0 -translate-y-1/3 -translate-x-1/3"
            width={64}
            height={64}
          />
        </div>

        {/* Description Section */}
        <div className="w-full flex flex-col items-start px-4 py-8 relative z-10">
          <p className="text-regular-5 text-primary-6 leading-relaxed">
            Padukuhan Pondok memiliki beragam fasilitas seperti SPAH, IPAL komunal, irigasi, TPS3R, masjid, titik kumpul evakuasi, GOR, jembatan, pos keamanan dan penerangan jalan, makam, posyandu balita dan lansia, serta balai pertemuan RT yang mendukung kebutuhan warga sehari-hari.
          </p>
        </div>

        {/* Facilities Grid */}
        <div className="w-full mx-auto px-4 pb-16 relative z-10">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
            {facilities.map((facility) => (
              <FacilityCard
                imageUrl={facility.image}
                title={facility.name}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FasilitasPage;
