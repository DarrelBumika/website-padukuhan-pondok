"use client";

import Image from "next/image";

import FacilityBannerImage from "@/src/images/facility-banner.png";
import DecorationLeaves from "@/src/images/decoration-leaves.png";
import Card from "@/components/ui/Card";

import FacilitySpahImage from "@/src/images/facility-spah.png";
import FacilityIpalKomunalImage from "@/src/images/facility-ipal-komunal.png";
import FacilityIrigasiImage from "@/src/images/facility-irigasi.png";
import FacilityTps3rImage from "@/src/images/facility-tps3r.png";
import FacilityMasjidImage from "@/src/images/facility-masjid.png";
import FacilityTitikEvakuasiImage from "@/src/images/facility-titik-evakuasi.png";
import FacilityGorPondokSportsImage from "@/src/images/facility-gor-pondok-sports.png";
import FacilityJembatanImage from "@/src/images/facility-jembatan.png";
import FacilityPosKeamananDanInformasiImage from "@/src/images/facility-pos-keamanan-dan-informasi.png";
import FacilityPeneranganJalanPondokImage from "@/src/images/facility-penerangan-jalan-pondok.png";
import FacilityMakamPadukuhanPondokImage from "@/src/images/facility-makam-padukuhan-pondok.png";
import FacilityPosyanduBalitaDanLansiaImage from "@/src/images/facility-posyandu-balita-dan-lansia.png";
import FacilityBalaiPertemuanRtImage from "@/src/images/facility-balai-pertemuan-rt.png";

// Fasilitas data with proper descriptions matching the design
const fasilitas = [
  {
    id: 1,
    name: "SPAH",
    description: "Saluran Pengolahan Air Hujan (SPAH) berupa saluran jalan dengan sumur resapan tiap tiga titik untuk mengurangi debit air hujan.",
    image: FacilitySpahImage,
  },
  {
    id: 2,
    name: "IPAL Komunal",
    description: "Instalasi Pengolahan Air Limbah cair terpusat agar aman dibuang ke lingkungan sesuai baku mutu, dengan saluran pipa menuju bak IPAL.",
    image: FacilityIpalKomunalImage,
  },
  {
    id: 3,
    name: "Irigasi",
    description: "Sistem penyediaan dan pengaturan air untuk pertanian agar tanaman tetap tumbuh normal meskipun tanah kekurangan air.",
    image: FacilityIrigasiImage,
  },
  {
    id: 4,
    name: "TPS3R",
    description: "Pengelolaan sampah 3R (Reduce, Reuse, Recycle) dengan teknologi mesin pencacah dan pengayak kompos untuk solusi sampah yang lebih efisien.",
    image: FacilityTps3rImage,
  },
  {
    id: 5,
    name: "Masjid",
    description: "Tempat ibadah umat Muslim di RT 04 dan RT 05.",
    image: FacilityMasjidImage,
  },
  {
    id: 6,
    name: "Titik Evakuasi",
    description: "Lokasi aman untuk berkumpul saat darurat seperti gempa, sekaligus tempat berlindung sementara.",
    image: FacilityTitikEvakuasiImage,
  },
  {
    id: 7,
    name: "GOR Pondok Sports",
    description: "Fasilitas olahraga dan pertemuan warga Padukuhan Pondok.",
    image: FacilityGorPondokSportsImage,
  },
  {
    id: 8,
    name: "Jembatan",
    description: "Terdapat jembatan besar penghubung Pondok–Manukan dan jembatan kecil di RT 05.",
    image: FacilityJembatanImage,
  },
  {
    id: 9,
    name: "Pos Keamanan Dan Informasi",
    description: "Tempat penjagaan dan pemberian informasi bagi warga.",
    image: FacilityPosKeamananDanInformasiImage,
  },
  {
    id: 10,
    name: "Penerangan Jalan Pondok",
    description: "Lampu jalan yang sebagian besar dipasang swadaya warga.",
    image: FacilityPeneranganJalanPondokImage,
  },
  {
    id: 11,
    name: "Makam Padukuhan Pondok",
    description: "Terdapat dua makam, masing-masing di RT 03 dan RT 05.",
    image: FacilityMakamPadukuhanPondokImage,
  },
  {
    id: 12,
    name: "Posyandu Balita & Lansia",
    description: "Tempat pelayanan kesehatan rutin untuk balita dan lansia guna mencegah stunting dan menurunkan angka kematian.",
    image: FacilityPosyanduBalitaDanLansiaImage,
  },
  {
    id: 13,
    name: "Balai Pertemuan RT",
    description: "Fasilitas pertemuan warga di RT 05.",
    image: FacilityBalaiPertemuanRtImage,
  },
];

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
            {fasilitas.map((facility) => (
              <Card
                variant="ghost"
                imageUrl={facility.image}
                title={facility.name}
                description={facility.description}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FasilitasPage;
