"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, use } from "react";
import Card from "@/components/ui/Card";

import SideNavigation from "@/components/shared/SideNavigation";
import { organizations } from "@/constants/organizations";
import { relatedNews } from "@/constants/dummy";
import PlaceholderImage from "@/src/images/placeholder.png";

const navItems = [
  { id: "deskripsi", label: "Deskripsi" },
  { id: "dokumentasi", label: "Dokumentasi" },
  { id: "administrasi", label: "Administrasi" },
  { id: "berita", label: "Berita" },
];

interface OrganisasiDetailPageProps {
  params: Promise<{ id: string }>;
}

const OrganisasiDetailPage = ({ params }: OrganisasiDetailPageProps) => {
  const { id } = use(params);
  const [activeSection, setActiveSection] = useState<string>("deskripsi");
  const [showAllDocs, setShowAllDocs] = useState(false);
  const [showAllNews, setShowAllNews] = useState(false);

  // Find the organization by ID
  const organization = organizations.find((org) => org.id === parseInt(id));

  // Handle scroll to track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100;
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  if (!organization) {
    return (
      <div className="w-full min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-title-2 text-darker-2 mb-4">Organisasi Tidak Ditemukan</h1>
          <Link href="/organisasi" className="text-primary-1 hover:text-primary-2 transition-colors">
            ← Kembali ke Daftar Organisasi
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex flex-col bg-white">
      <div className="relative w-full h-[300px]">
        <Image
          src={PlaceholderImage}
          alt={organization.name}
          fill
          className="object-cover"
        />
      </div>

      {/* Header Section */}
      <div className="relative w-full max-w-7xl mx-auto flex items-center justify-center">
        <Image
          src={organization.image}
          alt={organization.name}
          width={256}
          height={256}
          className="object-cover h-64 -translate-y-1/2 absolute left-0 top-0"
        />
        <div className="w-full flex flex-col py-8 relative z-10 ml-64 p-8">
          <h1 className="text-title-2 text-darker-2 mb-2">
            {organization.name}
          </h1>
          <p className="text-regular-5 text-primary-6">
            Organisasi Masyarakat Padukuhan Pondok
          </p>
        </div>
      </div>

      {/* Content Section with Sticky Sidebar */}
      <div className="w-full max-w-7xl mx-auto flex items-start relative py-8 gap-8 z-10">
        {/* Sticky Sidebar Navigation */}
        <SideNavigation
          navItems={navItems}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        {/* Main Content */}
        <main className="flex-1 space-y-12">
          {/* Deskripsi Section */}
          <section id="deskripsi" className="scroll-mt-28">
            <h2 className="text-large-2 mb-6">Deskripsi {organization.name}</h2>
            <p className="text-regular-5 leading-relaxed text-justify text-gray-4">
              {organization.description}
            </p>
          </section>

          {/* Dokumentasi Section */}
          <section id="dokumentasi" className="scroll-mt-28">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-large-2">Dokumentasi {organization.name}</h2>
              {organization.documentations.length > 2 && (
                <button
                  onClick={() => setShowAllDocs(!showAllDocs)}
                  className="text-regular-5 text-gray-4 hover:text-primary-1 transition-colors flex items-center gap-1"
                >
                  {showAllDocs ? "Lihat sedikit" : "Lihat semua"}
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </button>
              )}
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {(showAllDocs ? organization.documentations : organization.documentations.slice(0, 2)).map((doc, index) => (
                <div key={index} className="relative aspect-video rounded-lg overflow-hidden shadow-md">
                  <Image
                    src={doc}
                    alt={`Dokumentasi ${organization.name} ${index + 1}`}
                    fill
                    className="object-cover"
                  />
                </div>
              ))}
            </div>
          </section>

          {/* Administrasi Section */}
          <section id="administrasi" className="scroll-mt-28">
            <h2 className="text-large-2 mb-6">Piagam Pengukuhan {organization.name}</h2>
            <div className="flex justify-center">
              <div className="relative w-full max-w-md aspect-3/4 rounded-lg overflow-hidden shadow-lg border border-gray-11">
                <Image
                  src={organization.certificate}
                  alt={`Piagam ${organization.name}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </section>

          {/* Berita Terkait Section */}
          <section id="berita" className="scroll-mt-28">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-large-2">Berita Terkait Kegiatan {organization.name}</h2>
              <Link
                href="/berita"
                className="text-regular-5 text-gray-4 hover:text-primary-1 transition-colors flex items-center gap-1"
              >
                Lihat semua
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </Link>
            </div>
            <div className="grid [&::-webkit-scrollbar]:hidden scrollbar-none">
              <div className="flex gap-4 overflow-x-auto pb-4">
                {(showAllNews ? relatedNews : relatedNews.slice(0, 4)).map((news) => (
                  <div key={news.id} className="shrink-0">
                    <Card
                      variant="ghost"
                      imageUrl={news.image}
                      title={news.title}
                      date={news.date}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default OrganisasiDetailPage;