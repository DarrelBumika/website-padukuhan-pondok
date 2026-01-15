import Button from "@/components/ui/Button";
import Card from "@/components/ui/Card";
import Chip from "@/components/ui/Chip";
import ImagePlaceholder from "@/src/images/placeholder.png";
const News = () => {
  return (
    <div className="w-full flex flex-col items-center gap-16 py-16">
      <div className="flex flex-col items-center gap-4">
        <Chip label="Berita" uppercase />
        <h2 className="text-heading-2">Berita Padukuhan Pondok</h2>
        <p className="text-regular-5">Berbagai Berita Kegiatan yang ada di Padukuhan Pondok</p>
      </div>
      <div className="grid grid-cols-3 gap-8">
        <Card
          variant="elevated"
          imageUrl={ImagePlaceholder}
          title="Warga Padukuhan Pondok Gelar Kerja Bakti Bersihkan Lingkungan"
          description="Pada hari Jum'at, 21 Januari 2021 Tim PSN Kapanewon Piyungan kembali melaksanakan giat Pemantauan Sarang Nyamuk... "
          date={new Date("2025-08-02")}
        />
        <Card
          variant="elevated"
          imageUrl={ImagePlaceholder}
          title="Warga Padukuhan Pondok Gelar Kerja Bakti Bersihkan Lingkungan"
          description="Pada hari Jum'at, 21 Januari 2021 Tim PSN Kapanewon Piyungan kembali melaksanakan giat Pemantauan Sarang Nyamuk... "
          date={new Date("2025-08-02")}
        />
        <Card
          variant="elevated"
          imageUrl={ImagePlaceholder}
          title="Warga Padukuhan Pondok Gelar Kerja Bakti Bersihkan Lingkungan"
          description="Pada hari Jum'at, 21 Januari 2021 Tim PSN Kapanewon Piyungan kembali melaksanakan giat Pemantauan Sarang Nyamuk... "
          date={new Date("2025-08-02")}
        />
        <Card
          variant="elevated"
          imageUrl={ImagePlaceholder}
          title="Warga Padukuhan Pondok Gelar Kerja Bakti Bersihkan Lingkungan"
          description="Pada hari Jum'at, 21 Januari 2021 Tim PSN Kapanewon Piyungan kembali melaksanakan giat Pemantauan Sarang Nyamuk... "
          date={new Date("2025-08-02")}
        />
        <Card
          variant="elevated"
          imageUrl={ImagePlaceholder}
          title="Warga Padukuhan Pondok Gelar Kerja Bakti Bersihkan Lingkungan"
          description="Pada hari Jum'at, 21 Januari 2021 Tim PSN Kapanewon Piyungan kembali melaksanakan giat Pemantauan Sarang Nyamuk... "
          date={new Date("2025-08-02")}
        />
        <Card
          variant="elevated"
          imageUrl={ImagePlaceholder}
          title="Warga Padukuhan Pondok Gelar Kerja Bakti Bersihkan Lingkungan"
          description="Pada hari Jum'at, 21 Januari 2021 Tim PSN Kapanewon Piyungan kembali melaksanakan giat Pemantauan Sarang Nyamuk... "
          date={new Date("2025-08-02")}
        />
      </div>
      <Button>
        Selengkapnya
      </Button>
    </div>
  );
};

export default News;