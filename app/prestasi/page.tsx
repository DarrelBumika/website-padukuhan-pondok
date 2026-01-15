"use client";

import Image from "next/image";
import Card from "@/components/ui/Card";

import AchievementBannerImage from "@/src/images/achievement-banner.png";
import DecorationLeaves from "@/src/images/decoration-leaves.png";
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

const PrestasiPage = () => {
  return (
    <div className="w-full flex flex-col min-h-screen relative overflow-hidden bg-white">

      {/* Hero Section with Gradient Overlay */}
      <div className="relative w-full h-[300px] md:h-[400px]">
        <Image
          src={AchievementBannerImage}
          alt="Achievement Banner"
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
              Prestasi Pedukuhan Pondok
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
        <div className="w-full flex flex-col items-start py-8 relative z-10">
          <p className="text-regular-5 text-primary-6 leading-relaxed">
            Padukuhan Pondok telah menorehkan berbagai prestasi membanggakan, mulai dari Juara 1 Lomba Wajah Padukuhan Kategori Fisik “Lingkungan” Tahun 2019, Juara 3 Kategori Non Fisik “Administrasi” Tahun 2019, hingga kejuaraan gerak jalan, bulutangkis, dan futsal tingkat kalurahan. Selain itu, Padukuhan Pondok juga pernah meraih penghargaan sebagai Kelompok Berprestasi Kabupaten Sleman Tahun 2016. Prestasi-prestasi tersebut hanyalah sebagian dari deretan capaian Padukuhan Pondok, berikut merupakan daftar penghargaan lainnya.
          </p>
        </div>

        {/* Main Content */}
        <main className="flex-1 space-y-16 mb-32">
          <section className="scroll-mt-28 mb-8">
            <h2 className="text-large-2 mb-6">1. Juara 1 Lomba Wajah Padukuhan Kategori Fisik "Lingkungan" Tahun 2019</h2>
            <p className="text-regular-5 leading-relaxed text-justify">
              Pada tahun 2019, Padukuhan Pondok sukses meraih Juara 1 Lomba Wajah Padukuhan kategori Fisik bidang Lingkungan.
            </p>
          </section>

          <section className="scroll-mt-28 mb-8">
            <h2 className="text-large-2 mb-6">2. Juara 3 Lomba Wajah Padukuhan Kategori Non Fisik "Administrasi" Tahun 2019</h2>
            <p className="text-regular-5 leading-relaxed text-justify">
              Masih di tahun yang sama, Padukuhan Pondok juga memperoleh Juara 3 Lomba Wajah Padukuhan kategori Non Fisik bidang Administrasi.
            </p>
          </section>

          <section className="scroll-mt-28 mb-8">
            <h2 className="text-large-2 mb-6">3. Juara 3 Gerak Jalan Putra Tahun 2011 Tingkat Kalurahan</h2>
            <p className="text-regular-5 leading-relaxed text-justify">
              Di tahun 2011, Padukuhan Pondok tercatat sebagai Juara 3 Lomba Gerak Jalan Putra tingkat Kalurahan.
            </p>
          </section>

          <section className="scroll-mt-28 mb-8">
            <h2 className="text-large-2 mb-6">4. Juara 3 Gerak Jalan Putri Tahun 2012 Tingkat Kalurahan</h2>
            <p className="text-regular-5 leading-relaxed text-justify">
              Satu tahun kemudian, yaitu 2012, Padukuhan Pondok kembali menorehkan prestasi dengan meraih Juara 3 Lomba Gerak Jalan Putri tingkat Kalurahan.
            </p>
          </section>

          <section className="scroll-mt-28 mb-8">
            <h2 className="text-large-2 mb-6">5. Juara Harapan 1 Lomba Gerak Jalan Putri Tingkat Kalurahan Tahun 2011</h2>
            <p className="text-regular-5 leading-relaxed text-justify">
              Pada 2011, tim gerak jalan putri dari Padukuhan Pondok berhasil menyabet Juara Harapan 1 tingkat Kalurahan.
            </p>
          </section>

          <section className="scroll-mt-28 mb-8">
            <h2 className="text-large-2 mb-6">6. Juara Harapan 2 Lomba Gerak Jalan Putra Tingkat Kalurahan 2012</h2>
            <p className="text-regular-5 leading-relaxed text-justify">
              Prestasi lainnya ditunjukkan melalui perolehan Juara Harapan 2 Lomba Gerak Jalan Putra tingkat Kalurahan pada tahun 2012.
            </p>
          </section>

          <section className="scroll-mt-28 mb-8">
            <h2 className="text-large-2 mb-6">7. Juara 3 Bulutangkis Tingkat Kalurahan Tahun 2009</h2>
            <p className="text-regular-5 leading-relaxed text-justify">
              Di bidang olahraga, Padukuhan Pondok juga pernah menjadi Juara 3 Bulutangkis tingkat Kalurahan pada tahun 2009.
            </p>
          </section>

          <section className="scroll-mt-28 mb-8">
            <h2 className="text-large-2 mb-6">8. Juara Harapan 2 Administrasi PKK Dusun Tahun 1997</h2>
            <p className="text-regular-5 leading-relaxed text-justify">
              Lebih jauh ke belakang, yaitu tahun 1997, Padukuhan Pondok menorehkan capaian dengan meraih Juara Harapan 2 Administrasi PKK Dusun.
            </p>
          </section>

          <section className="scroll-mt-28 mb-8">
            <h2 className="text-large-2 mb-6">9. Juara 1 Bulutangkis Tingkat Kalurahan Tahun 2021</h2>
            <p className="text-regular-5 leading-relaxed text-justify">
              Setahun berikutnya, prestasi meningkat ketika Padukuhan Pondok berhasil menjadi Juara 1 Bulutangkis tingkat Kalurahan pada tahun 2021.
            </p>
          </section>

          <section className="scroll-mt-28 mb-8">
            <h2 className="text-large-2 mb-6">10. Juara 2 Futsal Tingkat Kalurahan Tahun 2019</h2>
            <p className="text-regular-5 leading-relaxed text-justify">
              Selain bulutangkis, Padukuhan Pondok juga berprestasi di bidang futsal dengan menyabet Juara 2 tingkat Kalurahan pada tahun 2019.
            </p>
          </section>

          <section className="scroll-mt-28 mb-8">
            <h2 className="text-large-2 mb-6">11. Kelompok Berprestasi IV Kabupaten Sleman Tahun 2016</h2>
            <p className="text-regular-5 leading-relaxed text-justify">
              Pada tahun 2016 Padukuhan Pondok dinobatkan sebagai Kelompok Berprestasi IV tingkat Kabupaten Sleman.
            </p>
          </section>

          <section className="scroll-mt-28 mb-8">
            <h2 className="text-large-2 mb-6">12. Juara 2 Bulutangkis Tingkat Kalurahan Tahun 2020</h2>
            <p className="text-regular-5 leading-relaxed text-justify">
              Semangat olahraga terus berlanjut dengan keberhasilan meraih Juara 2 Bulutangkis tingkat Kalurahan pada tahun 2020.
            </p>
          </section>

          <section className="scroll-mt-28 mb-8">
            <h2 className="text-large-2 mb-6">13. Juara 2 Lomba Memasak Kapanewon Depok HUT RI ke-79 Tahun 2024</h2>
            <p className="text-regular-5 leading-relaxed text-justify">
              Dalam rangka peringatan HUT RI ke-79 tahun 2024, Padukuhan Pondok berhasil meraih Juara 2 Lomba Memasak tingkat Kapanewon Depok.
            </p>
          </section>

          <section className="scroll-mt-28 mb-8">
            <h2 className="text-large-2 mb-6">14. Juara 3 Lomba Memasak TP PKK Kelurahan Condongcatur Tahun 2025</h2>
            <p className="text-regular-5 leading-relaxed text-justify">
              Pada tahun 2025, tim PKK Padukuhan Pondok kembali menunjukkan kemampuannya dengan memperoleh Juara 3 Lomba Memasak TP PKK tingkat Kelurahan Condongcatur.
            </p>
          </section>
        </main>
      </div>
    </div>
  );
};

export default PrestasiPage;
