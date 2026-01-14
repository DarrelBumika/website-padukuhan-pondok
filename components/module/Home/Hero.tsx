import Image from "next/image";

import HomeHeroImage from "@/src/images/home-hero.png";
import DecorationLeavesImage from "@/src/images/decoration-leaves.png";

const Hero = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center pt-32 gap-16 bg-linear-to-t from-0% from-primary-1 to-30% to-white">
      <div className="flex flex-col gap-12">
        <div className="flex flex-col gap-4 text-title-1 text-primary-6 text-center">
          <h1>Selamat Datang di</h1>
          <h1>Padukuhan Pondok</h1>
        </div>
        <p className="text-extralarge-3 text-primary-6">
          Desa Condongcatur, Kecamatan Depok, Kabupaten Sleman, DIY
        </p>
      </div>
      <div className="relative">
        <Image src={HomeHeroImage} alt="Hero Image" />
        <div className="absolute max-w-[400px] top-1/2 left-0 transform -translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <div className="relative flex-col gap-4">
            <Image src={DecorationLeavesImage} width={64} height={64} alt="Decoration Leaves" className="fixed top-0 left-0 transform -translate-x-1/2 -translate-y-1/2" />
            <h2 className="text-extralarge-1 text-primary-6">Kampung Proklim</h2>
            <p className="text-regular-5 text-primary-6 leading-6">Padukuhan Pondok merupakan Kampung Iklim tingkat Nasional yang menjadi perwakilan dari Kalurahan Condongcatur dan Kapanewon Depok</p>
          </div>
        </div>
        <div className="absolute max-w-[400px] flex flex-col top-1/2 right-0 transform translate-x-1/2 -translate-y-1/2 bg-white rounded-lg p-8 gap-4 shadow-[0px_4px_4px_0px_rgba(0,0,0,0.25)]">
          <div className="relative flex-col gap-4">
            <Image src={DecorationLeavesImage} width={64} height={64} alt="Decoration Leaves" className="fixed bottom-0 right-0 transform translate-x-1/2 translate-y-1/2 rotate-45" />
            <h2 className="text-extralarge-1 text-primary-6">Kampung Budaya</h2>
            <p className="text-regular-5 text-primary-6 leading-6">Melestarikan Budaya Nusantara melalui Jathilan Roso Tunggal dan Karawitan Sekar Putri</p>
          </div>
        </div>
      </div>
      <div className="absolute w-full h-full bg-linear-to-t from-0% from-white to-20% to-transparent z-0"></div>
    </div>
  );
}

export default Hero;