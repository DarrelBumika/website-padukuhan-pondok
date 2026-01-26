"use client";

import Image from "next/image";
import { useState, useEffect } from "react";

import ProfileHeaderImage from "@/src/images/profile-header.png";
import ProfileBorderImage from "@/src/images/profile-border.png";
import ProfileProklimImage from "@/src/images/profile-proklim.png";
import ProfileKampungBudayaImage from "@/src/images/profile-kampung-budaya.png";
import ProfileProklimAdaptasi1Image from "@/src/images/profile-proklim-adaptasi-1.png";
import ProfileProklimAdaptasi2Image from "@/src/images/profile-proklim-adaptasi-2.png";
import ProfileProklimAdaptasi3Image from "@/src/images/profile-proklim-adaptasi-3.png";
import ProfileProklimAdaptasi4Image from "@/src/images/profile-proklim-adaptasi-4.png";
import ProfileProklimMitigasi1Image from "@/src/images/profile-proklim-mitigasi-1.png";
import ProfileProklimMitigasi2Image from "@/src/images/profile-proklim-mitigasi-2.png";
import ProfileProklimMitigasi3Image from "@/src/images/profile-proklim-mitigasi-3.png";
import ProfileProklimMitigasi4Image from "@/src/images/profile-proklim-mitigasi-4.png";
import ProfileKampungBudayaJathilan1Image from "@/src/images/profile-kampung-budaya-jathilan-1.png";
import ProfileKampungBudayaJathilan2Image from "@/src/images/profile-kampung-budaya-jathilan-2.png";
import ProfileKampungBudayaJathilan3Image from "@/src/images/profile-kampung-budaya-jathilan-3.png";
import ProfileKampungBudayaJathilan4Image from "@/src/images/profile-kampung-budaya-jathilan-4.png";
import SideNavigation from "@/components/shared/SideNavigation";

// Navigation items for the sidebar
const navItems = [
  { id: "luas-dan-batas-wilayah", label: "Luas dan Batas Wilayah" },
  { id: "orbitasi", label: "Orbitasi" },
  { id: "iklim-dan-penggunaan-tanah", label: "Iklim dan Penggunaan Tanah" },
  { id: "program-kampung-iklim", label: "Program Kampung Iklim" },
  { id: "kampung-budaya", label: "Kampung Budaya" },
];

const ProfilPage = () => {
  const [activeSection, setActiveSection] = useState<string>("luas-dan-batas-wilayah");

  // Handle scroll to track active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navItems.map((item) => document.getElementById(item.id));
      const scrollPosition = window.scrollY + 150; // Offset for header

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(navItems[i].id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial check

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth scroll to section
  const scrollToSection = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      const offset = 100; // Offset from top
      const elementPosition = section.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="w-full flex flex-col">
      {/* Hero Section */}
      <div className="relative w-full flex flex-col justify-center items-center py-32 bg-linear-to-t from-0% from-black to-75% to-transparent overflow-hidden gap-4">
        <Image
          src={ProfileHeaderImage}
          alt="Profile Header"
          className="absolute w-full top-0 -z-1"
        />
        <h1 className="text-title-1 font-bold text-white">
          Profil Padukuhan Pondok
        </h1>
        <p className="text-large-5 text-white">
          Kelurahan Condongcatur, Kapanewon Depok, Kabupaten Sleman
        </p>
      </div>

      {/* Content Section with Sticky Sidebar */}
      <div className="w-full max-w-7xl mx-auto flex items-start relative px-6 py-16 gap-8">
        {/* Sticky Sidebar Navigation */}
        <SideNavigation
          navItems={navItems}
          activeSection={activeSection}
          scrollToSection={scrollToSection}
        />

        {/* Main Content */}
        <main className="flex-1 space-y-16">
          {/* Luas dan Batas Wilayah Section */}
          <section id="luas-dan-batas-wilayah" className="scroll-mt-28">
            <h2 className="text-large-2 mb-6">Luas dan Batas Wilayah</h2>
            <p className="text-regular-5 leading-relaxed text-justify">
              Wilayah Padukuhan memiliki luas kurang lebih ± 341.200 m². Adapun batas-batas wilayahnya meliputi: di sebelah utara berbatasan dengan Padukuhan Plosokuning V dan Padukuhan Bawuk Karangjati, di sebelah selatan berbatasan dengan Padukuhan Mlandangan, di sebelah timur berbatasan dengan Padukuhan Manukan dan Padukuhan Sanggrahan, sedangkan di sebelah barat berbatasan langsung dengan Padukuhan Manukan.
            </p>
            <div className="w-full flex justify-center items-center mt-6">
              <Image
                src={ProfileBorderImage}
                alt="Profile Border"
              />
            </div>
          </section>

          {/* Orbitasi Section */}
          <section id="orbitasi" className="scroll-mt-28">
            <h2 className="text-large-2 mb-6">Orbitasi</h2>
            <p className="text-regular-5 leading-relaxed text-justify">
              Jarak dari padukuhan ke pusat Kalurahan adalah sekitar 2 km dengan waktu tempuh kurang lebih 9 menit. Sementara itu, jarak menuju Kapanewon sekitar 2,9 km dengan waktu tempuh 10 menit. Adapun jarak ke pusat Kabupaten adalah sekitar 8,3 km dengan waktu tempuh kurang lebih 26 menit.
            </p>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3953.4527407747623!2d110.40427148281418!3d-7.741707304885716!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a596d42ff7739%3A0x63b6247d89324d22!2sPondok%2C%20Condong%20Catur%2C%20Depok%2C%20Sleman%20Regency%2C%20Special%20Region%20of%20Yogyakarta!5e0!3m2!1sen!2sid!4v1768404585617!5m2!1sen!2sid"
              width="100%"
              height="450"
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              className="rounded-lg mt-6"
            />
          </section>

          {/* Iklim dan Penggunaan Tanah Section */}
          <section id="iklim-dan-penggunaan-tanah" className="scroll-mt-28">
            <h2 className="text-large-2 mb-6">
              Iklim dan Penggunaan Tanah
            </h2>
            <p className="text-regular-5 leading-relaxed text-justify">
              Wilayah padukuhan memiliki kondisi iklim dengan curah hujan sedang, suhu rata-rata harian berkisar antara 25–33°C, serta jumlah bulan hujan berkisar antara 4 hingga 8 bulan dalam setahun. Penggunaan tanah di padukuhan terbagi ke dalam beberapa kategori. Tanah lahan hijau dimanfaatkan sebagai sawah dan perkebunan. Tanah lahan kuning digunakan untuk tempat usaha, pemukiman, gudang, kolam ikan, dan berbagai kegiatan lainnya. Selain itu, terdapat pula tanah untuk fasilitas umum yang digunakan untuk masjid, makam, gedung olahraga (GOR), serta poskamling.
            </p>
            <div className="w-full flex justify-center items-center mt-6">
              <Image
                src={ProfileProklimImage}
                alt="Profile Proklim"
              />
            </div>
          </section>

          {/* Program Kampung Iklim Section */}
          <section id="program-kampung-iklim" className="scroll-mt-28">
            <h2 className="text-large-2 mb-6">Program Kampung Iklim (PROKLIM)</h2>
            <p className="text-regular-5 leading-relaxed text-justify mb-6">
              Padukuhan Pondok ditetapkan sebagai peserta Program Kampung Iklim (Proklim) karena memiliki potensi, kelembagaan, dan komitmen masyarakat dalam menjaga lingkungan. Program ini melibatkan berbagai kegiatan adaptasi dan mitigasi perubahan iklim yang dilakukan bersama pemerintah dan masyarakat.
            </p>

            <div className="flex flex-col">
              <h3 className="text-medium-2 mb-6">
                a. Kegiatan Adaptasi
              </h3>
              <p className="text-regular-5 leading-relaxed text-justify mb-6">
                Masyarakat mengelola air dengan membangun sumur resapan, saluran hujan, serta memelihara irigasi dan terjunan air agar lahan pertanian tetap produktif. Warga juga memanfaatkan pekarangan untuk menanam buah, sayur, dan beternak ikan, sehingga mendukung ketahanan pangan. Pola tanam padi–palawija–padi diterapkan untuk menjaga kesuburan tanah. Selain itu, kesehatan lingkungan diperkuat melalui kader jumantik, program 3M, rumah sehat dengan sirkulasi udara baik, serta kerja bakti rutin.
              </p>
              <div className="w-full flex justify-between items-center mb-6">
                <Image
                  src={ProfileProklimAdaptasi1Image}
                  alt="Profile Proklim Adaptasi"
                />
                <Image
                  src={ProfileProklimAdaptasi2Image}
                  alt="Profile Proklim Adaptasi"
                />
                <Image
                  src={ProfileProklimAdaptasi3Image}
                  alt="Profile Proklim Adaptasi"
                />
                <Image
                  src={ProfileProklimAdaptasi4Image}
                  alt="Profile Proklim Adaptasi"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-medium-2 mb-6">
                b. Kegiatan Mitigasi
              </h3>
              <p className="text-regular-5 leading-relaxed text-justify mb-6">
                Upaya mitigasi dilakukan dengan penggunaan pupuk organik, pengurangan kebiasaan membakar jerami, serta pemanfaatan IPAL komunal dengan penangkap gas metan. Pengelolaan sampah berjalan melalui TPS3R Kenanga, kegiatan pengomposan, dan pemilahan sampah rumah tangga. Beberapa warga juga masih menggunakan tungku hemat kayu bakar untuk usaha kuliner tradisional yang ramah lingkungan.
              </p>
              <div className="w-full flex justify-between items-center mb-6">
                <Image
                  src={ProfileProklimMitigasi1Image}
                  alt="Profile Proklim Mitigasi"
                />
                <Image
                  src={ProfileProklimMitigasi2Image}
                  alt="Profile Proklim Mitigasi"
                />
                <Image
                  src={ProfileProklimMitigasi3Image}
                  alt="Profile Proklim Mitigasi"
                />
                <Image
                  src={ProfileProklimMitigasi4Image}
                  alt="Profile Proklim Mitigasi"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-medium-2 mb-6">
                c. Manfaat Program
              </h3>
              <p className="text-regular-5 leading-relaxed text-justify">
                Melalui Proklim, Padukuhan Pondok mampu menjaga ketersediaan air, meningkatkan ketahanan pangan, serta menciptakan lingkungan bersih dan sehat. Program ini juga membantu mengurangi emisi, mengelola sampah secara bijak, dan membangun kesadaran masyarakat untuk hidup lebih peduli terhadap lingkungan.
              </p>
            </div>
          </section>

          {/* Kampung Budaya Section */}
          <section id="kampung-budaya" className="scroll-mt-28">
            <div className="w-full flex justify-center items-center mb-6">
              <Image
                src={ProfileKampungBudayaImage}
                alt="Profile Kampung Budaya"
              />
            </div>
            <h2 className="text-large-2 mb-6">
              Kampung Budaya
            </h2>
            <p className="text-regular-5 leading-relaxed text-justify mb-6">
              Padukuhan Pondok sebagai Kampung Budaya memiliki kekayaan tradisi yang dijaga dan dikembangkan oleh warganya. Berbagai kelompok seni tumbuh di sini, di antaranya Jathilan Roso Tunggal dan Karawitan Sekar Putri, yang menjadi kebanggaan sekaligus media pelestarian budaya bagi masyarakat.
            </p>

            <div className="flex flex-col">
              <h3 className="text-medium-2 mb-6">
                a. Jathilan Roso Tunggal
              </h3>
              <p className="text-regular-5 leading-relaxed text-justify mb-6">
                Organisasi Kesenian Jathilan Roso Tunggal berdiri pada tanggal 25 November 1964 dan bermarkas di RT 01 RW 06 Padukuhan Pondok. Anggotanya berasal dari berbagai kalangan, mulai dari anak-anak hingga orang dewasa, dengan semangat yang sama yaitu mencintai kesenian tradisional. Peran Jathilan Roso Tunggal sangat penting dalam melestarikan budaya Jawa, khususnya seni pertunjukan jathilan yang sarat makna spiritual dan sosial.  Selain itu, Jathilan Roso Tunggal juga kerap diundang dalam berbagai acara, baik Hari Besar Nasional maupun agenda penting di Kalurahan Condongcatur, sehingga eksistensinya semakin dikenal oleh masyarakat luas.
              </p>
              <div className="w-full flex justify-between items-center mb-6">
                <Image
                  src={ProfileKampungBudayaJathilan1Image}
                  alt="Profile Kampung Budaya Jathilan"
                />
                <Image
                  src={ProfileKampungBudayaJathilan2Image}
                  alt="Profile Kampung Budaya Jathilan"
                />
                <Image
                  src={ProfileKampungBudayaJathilan3Image}
                  alt="Profile Kampung Budaya Jathilan"
                />
                <Image
                  src={ProfileKampungBudayaJathilan4Image}
                  alt="Profile Kampung Budaya Jathilan"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <h3 className="text-medium-2 mb-6">
                b. Karawitan Sekar Putri
              </h3>
              <p className="text-regular-5 leading-relaxed text-justify mb-6">
                Kelompok Kesenian Karawitan Sekar Putri lahir pada tahun 2018 dengan tempat latihan rutin di Sanggar Darmo Budaya Pondok. Kegiatan latihan biasanya diadakan setiap hari Rabu sore, dengan anggota utama para ibu-ibu pecinta seni karawitan. Karawitan Sekar Putri tidak hanya berfokus pada kegiatan musikal, tetapi juga memiliki peran edukatif, yakni mengenalkan seni karawitan kepada anak-anak agar tumbuh rasa cinta terhadap budaya lokal sejak dini. Kelompok ini juga aktif mengikuti berbagai pementasan dan festival kesenian di tingkat Kabupaten Sleman. Melalui aktivitas tersebut, Karawitan Sekar Putri berhasil memperkenalkan keindahan gamelan dan kekuatan musikalitas tradisi Jawa ke khalayak yang lebih luas, sekaligus meneguhkan Padukuhan Pondok sebagai pusat pengembangan seni budaya.
              </p>
            </div>


          </section>
        </main>
      </div>
    </div>
  );
};

export default ProfilPage;   