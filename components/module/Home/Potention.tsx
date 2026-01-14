import Chip from "@/components/ui/Chip";
import Image from "next/image";

import PotensiPertanianImage from "@/src/images/home-potensi-pertanian.png";
import PotensiSeniBudayaImage from "@/src/images/home-potensi-seni-budaya.png";
import PotensiPeternakanImage from "@/src/images/home-potensi-peternakan.png";
import PotensiPerikananImage from "@/src/images/home-potensi-perikanan.png";
import PotensiSosialImage from "@/src/images/home-potensi-sosial.png";
import PotensiMapImage from "@/src/images/home-map-pondok.png";
import PotensiIllustrationImage from "@/src/images/home-potensi-illustration.png";
import DecorationLeavesImage from "@/src/images/decoration-leaves.png";

const Potention = () => {
  return (
    <div className="w-full relative flex justify-center items-center bg-primary-2 py-16 px-32 rounded-t-4xl pb-72">
      <div className="flex flex-col gap-4">
        <Chip label="potensi" uppercase />
        <h2 className="text-heading-2 text-white">Potensi Padukuhan Pondok</h2>
        <p className="text-regular-5 text-white"> Berbagai potensi yang ada di Padukuhan Pondok</p>
        <Image src={PotensiMapImage} alt="Potensi Padukuhan Pondok" />
      </div>
      <div className="flex flex-col gap-4 items-end">
        <div className="flex gap-4">
          <div className="flex flex-col bg-white p-4 rounded-lg">
            <div className="flex justify-center items-center">
              <Image src={PotensiPertanianImage} alt="Agriculture Icon" />
            </div>
            <div className="flex flex-col gap-4 p-4">
              <h3 className="text-extralarge-2">
                Potensi Pertanian
              </h3>
              <p className="text-regular-5">
                Pertanian padi–palawija–padi. Larangan <br />
                pembakaran jerami, dukungan irigasi, <br />
                serta pembersihan saluran air menjadikan <br />
                pertanian lebih optimal. <br />
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-accent-10 text-white p-4 rounded-lg">
            <div className="flex justify-center items-center">
              <Image src={PotensiSeniBudayaImage} alt="Agriculture Icon" />
            </div>
            <div className="flex flex-col gap-4 p-4">
              <h3 className="text-extralarge-2">
                Potensi Seni dan Budaya
              </h3>
              <p className="text-regular-5">
                Seni budaya berkembang lewat karawitan <br />
                dan jathilan, kelembagaan, serta <br />
                keikutsertaan dalam event daerah. <br />
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-4">
          <div className="flex flex-col bg-white p-4 rounded-lg">
            <div className="h-1/2 flex justify-center items-center">
              <Image src={PotensiPeternakanImage} alt="Agriculture Icon" />
            </div>
            <div className="flex flex-col gap-4 p-4">
              <h3 className="text-extralarge-2">
                Potensi Peternakan
              </h3>
              <p className="text-regular-5">
                Pemeliharaan kandang, pemilihan <br />
                bibit, dan pengaturan pola makan <br />
                ternak. Kotoran ternak <br />
                dimanfaatkan sebagai pupuk, <br />
                sementara hasilnya didistribusikan <br />
                ke pasar. <br />
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-accent-10 text-white p-4 rounded-lg">
            <div className="h-1/2 flex justify-center items-center">
              <Image src={PotensiPerikananImage} alt="Agriculture Icon" />
            </div>
            <div className="flex flex-col gap-4 p-4">
              <h3 className="text-extralarge-2">
                Potensi Perikanan
              </h3>
              <p className="text-regular-5">
                Perikanan  yang dikelola melalui <br />
                pembibitan, tata kelola kolam, <br />
                pakan ikan dan distribusi hasil <br />
                untuk meningkatkan ekonomi <br />
                warga. <br />
              </p>
            </div>
          </div>
          <div className="flex flex-col bg-white p-4 rounded-lg">
            <div className="h-1/2 flex justify-center items-center">
              <Image src={PotensiSosialImage} alt="Agriculture Icon" />
            </div>
            <div className="flex flex-col gap-4 p-4">
              <h3 className="text-extralarge-2">
                Potensi Sosial
              </h3>
              <p className="text-regular-5">
                Posyandu balita dan lansia, <br />
                kegiatan PKK dan KWT. <br />
                Pengelolaan IPAL, TPS3R, dan <br />
                dukungan program TPPO <br />
                untuk menjaga lingkungan dan <br />
                keamanan masyarakat. <br />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="absolute right-0 bottom-0 z-0">
        <Image src={PotensiIllustrationImage} alt="Potensi Illustration" />
      </div>
      <Image src={DecorationLeavesImage} width={256} height={256} alt="Decoration Leaves" className="absolute bottom-0 left-0 transform -translate-x-1/3 translate-y-1/2" />
      <Image src={DecorationLeavesImage} width={128} height={128} alt="Decoration Leaves" className="absolute bottom-0 right-0 transform translate-x-1/3 translate-y-1/2" />
    </div>
  );
};

export default Potention;