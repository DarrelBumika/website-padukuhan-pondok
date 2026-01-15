"use client";

import { useState, useMemo } from "react";
import Card from "@/components/ui/Card";

import OrgPKKimage from "@/src/images/org-pkk.png"
import OrgPosyanduBalita from "@/src/images/org-posyandu-balita.png"
import OrgPosyanduLansia from "@/src/images/org-posyandu-lansia.png"
import OrgKelompokJumantik from "@/src/images/org-kelompok-jumantik.png"
import OrgTakmirMasjidAlHaq from "@/src/images/org-takmir-masjid-alhaq.png"
import OrgTakmirMasjidNurulIlmi from "@/src/images/org-takmir-masjid-nurul-ilmi.png"
import OrgFordak from "@/src/images/org-fordak.png"
import OrgIkatanRemajaMasjid from "@/src/images/org-ikatan-remaja-masjid.png"

// Organization data
const news = [
  { id: 1, name: "Warga Padukuhan Pondok Gelar Kerja Bakti Bersihkan Lingkungan", image: OrgPKKimage, date: new Date() },
  { id: 2, name: "Warga Pondok Gelar Jalan Sehat, Senam & Cek Kesehatan", image: OrgPosyanduBalita, date: new Date() },
  { id: 3, name: "PKK Padukuhan Pondok Selenggarakan Pelatihan Olahan Pangan Sehat", image: OrgPosyanduLansia, date: new Date() },
  { id: 4, name: "Pentas Seni Budaya Meriahkan Malam Mingguan Warga", image: OrgKelompokJumantik, date: new Date() },
  { id: 5, name: "Posyandu Balita Rutin Digelar, Antusias Ibu-Ibu Tinggi", image: OrgTakmirMasjidAlHaq, date: new Date() },
  { id: 6, name: "Pengajian Akbar Pererat Ukhuwah Warga Padukuhan Pondok", image: OrgTakmirMasjidNurulIlmi, date: new Date() },
  { id: 7, name: "Kelompok Tani Panen Raya Padi dengan Hasil Melimpah", image: OrgFordak, date: new Date() },
  { id: 8, name: "Gotong Royong Pembangunan Pos Kamling Baru", image: OrgIkatanRemajaMasjid, date: new Date() }
];

const BeritaPage = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Filter news based on search query
  const filteredNews = useMemo(() => {
    if (!searchQuery.trim()) return news;
    return news.filter((news) =>
      news.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="w-full flex flex-col min-h-screen bg-white relative overflow-hidden py-16">

      {/* Header Section */}
      <div className="w-full flex flex-col items-center pb-8 px-4 relative z-10">
        <h1 className="text-title-2 text-darker-2 text-center mb-4">
          Berita dari Padukuhan Pondok
        </h1>
        <p className="text-regular-5 text-primary-6 text-center max-w-4xl leading-relaxed">
          berbagai informasi dan kabar terbaru dari Padukuhan Pondok. Berita yang ditampilkan meliputi kegiatan masyarakat, acara seni dan budaya, kegiatan keagamaan, program pembangunan, hingga berbagai aktivitas sosial yang melibatkan warga.
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

      {/* News Grid */}
      <div className="w-full max-w-6xl mx-auto px-4 pb-16 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {filteredNews.map((news) => (
            <Card
              variant="ghost"
              imageUrl={news.image}
              title={news.name}
              date={news.date}
            />
          ))}
        </div>

        {/* No Results Message */}
        {filteredNews.length === 0 && (
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
              Tidak ada berita yang ditemukan
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

export default BeritaPage;
