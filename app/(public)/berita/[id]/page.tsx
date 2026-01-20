"use client";

import Image from "next/image";
import Link from "next/link";
import { use } from "react";
import OrganisationIcon from "@/src/images/org-kelompok-ikan-mino-manunggal.png";
import { newsData } from "@/constants/dummy";
import { TbCalendar } from "react-icons/tb";

const NewsDetailPage = ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = use(params);

  const newsItem = newsData.find((item) => item.id === parseInt(id));

  if (!newsItem) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">Berita Tidak Ditemukan</h1>
          <Link href="/berita" className="text-green-600 hover:underline">
            ← Kembali ke Berita
          </Link>
        </div>
      </div>
    );
  }

  // Use gallery from data or fallback to main image if gallery is empty
  const galleryImages = newsItem.gallery && newsItem.gallery.length > 0
    ? newsItem.gallery
    : [newsItem.thumbnail];

  return (
    <div className="w-full min-h-screen bg-white relative pb-20">
      {/* Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">

        {/* Gallery Section */}
        {galleryImages.length > 0 && (
          <div className={`grid grid-cols-1 ${galleryImages.length > 1 ? 'lg:grid-cols-2' : ''} gap-4 mb-10 h-auto ${galleryImages.length > 1 ? 'lg:h-[400px]' : 'h-[300px]'}`}>
            {/* Main Large Image (Left) */}
            <div className="relative w-full h-[300px] lg:h-full rounded-2xl overflow-hidden shadow-sm">
              <Image
                src={galleryImages[0]}
                alt="Main Event Documentation"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>

            {/* Side Grid Images (Right) - Only if we have more than 1 image */}
            {galleryImages.length > 1 && (
              <div className="grid grid-cols-2 gap-4 h-full">
                {galleryImages.slice(1, 4).map((img, index) => (
                  <div key={index} className="relative w-full h-[140px] lg:h-auto rounded-xl overflow-hidden shadow-sm">
                    <Image
                      src={img}
                      alt={`Documentation ${index + 2}`}
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                ))}

                {/* Last Image with Overlay if more than 5 images or exactly 5 */}
                {galleryImages.length >= 5 && (
                  <div className="relative w-full h-[140px] lg:h-auto rounded-xl overflow-hidden shadow-sm group cursor-pointer">
                    <Image
                      src={galleryImages[4]}
                      alt="More Documentation"
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    {galleryImages.length > 5 && (
                      <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-colors group-hover:bg-black/40">
                        <span className="text-white text-3xl font-bold">{galleryImages.length}+</span>
                      </div>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>
        )}

        {/* Title Section */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
          {newsItem.title}
        </h1>

        {/* Meta Info */}
        <div className="flex flex-wrap items-center gap-6 mb-10 text-gray-600">
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded-full overflow-hidden relative">
              <Image
                src={newsItem.organizationImage || OrganisationIcon}
                alt="Organization Icon"
                fill
                className="object-cover"
              />
            </div>
            <span className="text-sm md:text-base font-medium">{newsItem.organization}</span>
          </div>
          <div className="flex items-center gap-2">
            <TbCalendar size={24} />
            <span className="text-sm md:text-base">
              {newsItem.date.toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric' })}
            </span>
          </div>
        </div>

        {/* Content Body */}
        <div className="prose prose-lg max-w-none text-gray-700 space-y-6 text-justify leading-relaxed">
          {newsItem.content && newsItem.content.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
              {newsItem.content.map((section, idx) => (
                <div key={idx} className="md:col-span-12">
                  {section.subtitle && <h3 className="text-xl font-bold text-gray-900 mb-2">{section.subtitle}</h3>}
                  <p>{section.body}</p>
                </div>
              ))}
            </div>
          ) : (
            <p className="text-gray-500 italic">Belum ada detail konten untuk berita ini.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default NewsDetailPage;