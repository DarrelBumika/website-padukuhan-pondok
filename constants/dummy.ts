import OrgPosyanduLansia from "@/src/images/org-posyandu-lansia.png";
import OrgKelompokJumantik from "@/src/images/org-kelompok-jumantik.png";
import OrgFordak from "@/src/images/org-fordak.png";
import OrgPKKimage from "@/src/images/org-pkk.png";
import OrgPosyanduBalita from "@/src/images/org-posyandu-balita.png";
import OrgTakmirMasjidAlHaq from "@/src/images/org-takmir-masjid-alhaq.png";
import OrgTakmirMasjidNurulIlmi from "@/src/images/org-takmir-masjid-nurul-ilmi.png";
import OrgIkatanRemajaMasjid from "@/src/images/org-ikatan-remaja-masjid.png";
import OrgMinoManunggal from "@/src/images/org-kelompok-ikan-mino-manunggal.png";

// Gallery Images
import Gallery1 from "@/src/images/facility-spah.png";
import Gallery2 from "@/src/images/org-posyandu-balita.png";
import Gallery3 from "@/src/images/org-posyandu-lansia.png";
import Gallery4 from "@/src/images/org-kelompok-jumantik.png";
import Gallery5 from "@/src/images/facility-gor-pondok-sports.png";

export const relatedNews = [
  { id: 1, title: "Warga Padukuhan Pondok Gelar Kerja Bakti Bersihkan Lingkungan", image: OrgPKKimage, date: new Date("2026-08-15") },
  { id: 2, title: "Karang Taruna Adakan Lomba Olahraga Antar RT", image: OrgFordak, date: new Date("2026-08-12") },
  { id: 3, title: "PKK Padukuhan Pondok Selenggara-kan Pelatihan Olahan Pangan Sehat", image: OrgPosyanduLansia, date: new Date("2026-08-14") },
  { id: 4, title: "Pentas Seni Budaya Meriahkan Malam Mingguan Warga", image: OrgKelompokJumantik, date: new Date("2026-08-10") },
];

export const newsData = [
  {
    id: 1,
    title: "Warga Padukuhan Pondok Gelar Kerja Bakti Bersihkan Lingkungan",
    image: OrgPKKimage,
    date: new Date("2026-08-15"),
    organization: "PKK Padukuhan Pondok",
    organizationImage: OrgPKKimage,
    content: [],
    gallery: []
  },
  {
    id: 2,
    title: "Warga Pondok Gelar Jalan Sehat, Senam & Cek Kesehatan",
    image: OrgPosyanduBalita,
    date: new Date("2025-08-08"),
    organization: "Kelompok Ikan Mino Manunggal",
    organizationImage: OrgMinoManunggal,
    gallery: [Gallery1, Gallery2, Gallery3, Gallery4, Gallery5],
    content: [
      {
        title: "Pentingnya Penelitian Diabetes",
        body: "Diabetes adalah salah satu penyakit kronis yang paling umum dan menjadi tantangan besar bagi sistem kesehatan di seluruh dunia. RS PKU Muhammadiyah Yogyakarta memahami pentingnya penelitian dalam bidang ini untuk mengembangkan pendekatan baru dalam manajemen dan pengobatan diabetes. Penelitian ini bertujuan untuk meningkatkan kualitas hidup pasien diabetes dan mengurangi beban penyakit ini di masyarakat."
      },
      {
        title: "Pengembangan Pendekatan Baru",
        body: "Penelitian klinis tentang diabetes di RS PKU Muhammadiyah Yogyakarta mencakup berbagai aspek, mulai dari pengembangan obat hingga pendekatan nutrisi dan gaya hidup. Tim peneliti bekerja untuk menemukan cara-cara baru dalam mengendalikan gula darah, mengurangi risiko komplikasi, dan meningkatkan efektivitas pengobatan. Studi ini melibatkan uji klinis yang ketat untuk memastikan bahwa setiap temuan dapat diterapkan secara aman dan efektif."
      },
      {
        title: "Kolaborasi Multidisiplin",
        body: "Penelitian tentang diabetes di RS PKU Muhammadiyah Yogyakarta melibatkan kolaborasi multidisiplin antara dokter, ahli gizi, psikolog, dan peneliti lainnya. Pendekatan ini memungkinkan peneliti untuk melihat masalah diabetes dari berbagai sudut pandang dan mengembangkan solusi yang komprehensif. Kolaborasi ini juga membuka peluang untuk penelitian yang lebih luas dan mendalam."
      },
      {
        title: "Manfaat Penelitian bagi Pasien",
        body: "Hasil dari penelitian ini diharapkan dapat memberikan manfaat langsung bagi pasien diabetes di RS PKU Muhammadiyah Yogyakarta dan sekitarnya. Temuan-temuan baru tentang pengobatan dan manajemen diabetes dapat diterapkan dalam praktik klinis untuk meningkatkan perawatan pasien. Selain itu, penelitian ini juga memberikan kontribusi penting bagi literatur medis dan kebijakan kesehatan masyarakat."
      },
      {
        title: "Dukungan Infrastruktur Penelitian",
        body: "Untuk mendukung kegiatan penelitian, RS PKU Muhammadiyah Yogyakarta memiliki infrastruktur yang memadai, termasuk laboratorium penelitian, fasilitas uji klinis, dan database pasien yang terorganisir dengan baik. Fasilitas ini memungkinkan para peneliti untuk melakukan penelitian dengan standar tinggi dan menghasilkan data yang valid dan dapat diandalkan."
      }
    ]
  },
  {
    id: 3,
    title: "PKK Padukuhan Pondok Selenggarakan Pelatihan Olahan Pangan Sehat",
    image: OrgPosyanduLansia,
    date: new Date("2026-08-14"),
    organization: "PKK",
    organizationImage: OrgPosyanduLansia,
    content: [],
    gallery: []
  },
  {
    id: 4,
    title: "Pentas Seni Budaya Meriahkan Malam Mingguan Warga",
    image: OrgKelompokJumantik,
    date: new Date("2026-08-10"),
    organization: "Karang Taruna",
    organizationImage: OrgKelompokJumantik,
    content: [],
    gallery: []
  },
  {
    id: 5,
    title: "Posyandu Balita Rutin Digelar, Antusias Ibu-Ibu Tinggi",
    image: OrgTakmirMasjidAlHaq,
    date: new Date("2026-08-05"),
    organization: "Posyandu Balita",
    organizationImage: OrgPosyanduBalita,
    content: [],
    gallery: []
  },
  {
    id: 6,
    title: "Pengajian Akbar Pererat Ukhuwah Warga Padukuhan Pondok",
    image: OrgTakmirMasjidNurulIlmi,
    date: new Date("2026-08-01"),
    organization: "Takmir Masjid",
    organizationImage: OrgTakmirMasjidNurulIlmi,
    content: [],
    gallery: []
  },
  {
    id: 7,
    title: "Kelompok Tani Panen Raya Padi dengan Hasil Melimpah",
    image: OrgFordak,
    date: new Date("2026-07-28"),
    organization: "Kelompok Tani",
    organizationImage: OrgFordak,
    content: [],
    gallery: []
  },
  {
    id: 8,
    title: "Gotong Royong Pembangunan Pos Kamling Baru",
    image: OrgIkatanRemajaMasjid,
    date: new Date("2026-07-25"),
    organization: "Warga RW 02",
    organizationImage: OrgIkatanRemajaMasjid,
    content: [],
    gallery: []
  }
];