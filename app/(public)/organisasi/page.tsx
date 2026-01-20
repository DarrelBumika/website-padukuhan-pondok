"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";
import Card from "@/components/ui/Card";

import OrgPKKimage from "@/src/images/org-pkk.png"
import OrgPosyanduBalita from "@/src/images/org-posyandu-balita.png"
import OrgPosyanduLansia from "@/src/images/org-posyandu-lansia.png"
import OrgKelompokJumantik from "@/src/images/org-kelompok-jumantik.png"
import OrgTakmirMasjidAlHaq from "@/src/images/org-takmir-masjid-alhaq.png"
import OrgTakmirMasjidNurulIlmi from "@/src/images/org-takmir-masjid-nurul-ilmi.png"
import OrgFordak from "@/src/images/org-fordak.png"
import OrgIkatanRemajaMasjid from "@/src/images/org-ikatan-remaja-masjid.png"
import OrgKppTps3R from "@/src/images/org-kpp-tps-3r.png"
import OrgIpalKomunal from "@/src/images/org-ipal-komunal.png"
import OrgKelompokTani from "@/src/images/org-kelompok-tani.png"
import OrgKelompokWanitaTani from "@/src/images/org-kelompok-wanita-tani.png"
import OrgHadrohAzZahra from "@/src/images/org-hadroh-azzahra.png"
import OrgHadrohMiftahulJannah from "@/src/images/org-hadroh-miftahul-jannah.png"
import OrgBankSampahKencanaKragilan from "@/src/images/org-bank-sampah-kencana-kragilan.png"
import OrgBankSampahAssalamManggulan from "@/src/images/org-bank-sampah-assalam-manggulan.png"
import OrgJathilanRosoTunggal from "@/src/images/org-jathilan-roso-tunggal.png"
import OrgKarawitanSekarPutri from "@/src/images/org-karawitan-sekar-putri.png"
import OrgTrafficking from "@/src/images/org-trafficking.png"
import OrgPerkumpulanPetaniPemakaiAir from "@/src/images/org-perkumpulan-petani-pemakai-air.png"
import OrgKelompokIkanMinoManunggal from "@/src/images/org-kelompok-ikan-mino-manunggal.png"
import OrgPangruktiLoyo from "@/src/images/org-pangrukti-loyo.png"

// Organization data
const organizations = [
  { id: 1, name: "PKK Padukuhan Pondok", image: OrgPKKimage },
  { id: 2, name: "Posyandu Balita", image: OrgPosyanduBalita },
  { id: 3, name: "Posyandu Lansia", image: OrgPosyanduLansia },
  { id: 4, name: "Kelompok Jumantik", image: OrgKelompokJumantik },
  { id: 5, name: "Takmir Masjid Al Haq", image: OrgTakmirMasjidAlHaq },
  { id: 6, name: "Takmir Masjid Nurul Ilmi", image: OrgTakmirMasjidNurulIlmi },
  { id: 7, name: "FORDAK", image: OrgFordak },
  { id: 8, name: "Ikatan Remaja Masjid", image: OrgIkatanRemajaMasjid },
  { id: 9, name: "KPP TPS 3 R", image: OrgKppTps3R },
  { id: 10, name: "IPAL Komunal", image: OrgIpalKomunal },
  { id: 11, name: "Kelompok Tani", image: OrgKelompokTani },
  { id: 12, name: "Kelompok Wanita Tani (KWT)", image: OrgKelompokWanitaTani },
  { id: 13, name: "Hadroh Az-Zahra", image: OrgHadrohAzZahra },
  { id: 14, name: "Hadroh Miftahul Jannah", image: OrgHadrohMiftahulJannah },
  { id: 15, name: "Bank Sampah Kencana Kragilan", image: OrgBankSampahKencanaKragilan },
  { id: 16, name: "Bank Sampah Assalam Manggulan", image: OrgBankSampahAssalamManggulan },
  { id: 17, name: "Jathilan Roso Tunggal", image: OrgJathilanRosoTunggal },
  { id: 18, name: "Karawitan Sekar Putri", image: OrgKarawitanSekarPutri },
  { id: 19, name: "Trafficking", image: OrgTrafficking },
  { id: 20, name: "Perkumpulan Petani Pemakai Air (P3A)", image: OrgPerkumpulanPetaniPemakaiAir },
  { id: 21, name: "Kelompok Ikan Mino Manunggal", image: OrgKelompokIkanMinoManunggal },
  { id: 22, name: "Pangrukti Loyo", image: OrgPangruktiLoyo },
];

const OrganisasiPage = () => {
  const router = useRouter();
  const [searchQuery, setSearchQuery] = useState("");

  // Filter organizations based on search query
  const filteredOrganizations = useMemo(() => {
    if (!searchQuery.trim()) return organizations;
    return organizations.filter((org) =>
      org.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);


  return (
    <div className="w-full flex flex-col min-h-screen bg-white relative overflow-hidden py-16">

      {/* Header Section */}
      <div className="w-full flex flex-col items-center pb-8 px-4 relative z-10">
        <h1 className="text-title-2 text-darker-2 text-center mb-4">
          Organisasi Kemasyarakatan Padukuhan Pondok
        </h1>
        <p className="text-regular-5 text-primary-6 text-center max-w-4xl leading-relaxed">
          Di Padukuhan Pondok terdapat berbagai organisasi kemasyarakatan seperti Karang Taruna, PKK,
          kelompok seni, organisasi keagamaan, kelompok tani, dan lain-lainnya yang berperan aktif
          bersama warga dalam mempererat kebersamaan, meningkatkan kesejahteraan, serta menjaga
          kerukunan warga.
        </p>
      </div>

      {/* Search Bar */}
      <div className="w-full flex justify-center px-4 mb-8 relative z-10">
        <div className="relative w-full max-w-md">
          <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
            <svg
              className="w-5 h-5 text-gray-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
          <input
            type="text"
            placeholder="Search..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-12 pr-4 py-3 border border-gray-6 rounded-lg text-regular-5 focus:outline-none focus:ring-2 focus:ring-primary-1 focus:border-transparent transition-all duration-300 bg-white shadow-sm"
          />
        </div>
      </div>

      {/* Organizations Grid */}
      <div className="w-full max-w-6xl mx-auto px-4 pb-16 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {filteredOrganizations.map((org) => (
            <Card
              key={org.id}
              variant="ghost"
              imageUrl={org.image}
              title={org.name}
              onClick={() => router.push(`/organisasi/${org.id}`)}
            />
          ))}
        </div>

        {/* No Results Message */}
        {filteredOrganizations.length === 0 && (
          <div className="flex flex-col items-center justify-center py-16">
            <svg
              className="w-16 h-16 text-gray-5 mb-4"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <p className="text-regular-5 text-gray-4">
              Tidak ada organisasi yang ditemukan
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="mt-4 text-primary-1 text-regular-4 hover:text-primary-2 transition-colors duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
              Hapus pencarian
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default OrganisasiPage;
