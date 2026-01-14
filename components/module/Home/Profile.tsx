"use client";

import Image from "next/image";
import Button from "@/components/ui/Button";

import HomeDescriptionImage from "@/src/images/home-description.png";
import HomeProfileImage from "@/src/images/home-profile.png";
import DecorationLeavesImage from "@/src/images/decoration-leaves.png";

const Profile = () => {
  return (
    <div className="w-2/3 flex flex-col gap-16 py-16">
      <div className="w-full flex justify-between items-center">
        <div className="max-w-xl flex flex-col gap-9">
          <h2 className="text-heading-2">Deskripsi Padukuhan Pondok</h2>
          <p className="text-regular-5 text-justify leading-5">Padukuhan Pondok berada di Kalurahan Condongcatur, Kapanewon Depok, Sleman. Berjarak sekitar 5 km dari pusat Yogyakarta dan terdiri dari 2 RW serta 6 RT. Diapit Sungai Buntung dan Kladuan, wilayah ini sejuk, asri, serta memiliki potensi pertanian, peternakan, dan seni budaya. Tradisi gotong royong yang kuat menjadikan lingkungan harmonis dan nyaman, didukung antusiasme warga dalam menjaga kelestarian alam dan kesejahteraan bersama.</p>
          <Button
            children="Selengkapnya"
            variant="filled"
            onClick={() => alert('Profile Button Clicked!')}
          />
        </div>
        <Image src={HomeDescriptionImage} alt="Home Description Image" />
      </div>
      <div className="relative w-full flex flex-col items-center gap-8 pb-8 pt-16 px-32 border border-white-2 rounded-lg">
        <Image src={DecorationLeavesImage} width={64} height={64} alt="Decoration Leaves" className="absolute bottom-0 left-0 transform -translate-x-1/2 translate-y-1/2" />
        <Image src={DecorationLeavesImage} width={96} height={96} alt="Decoration Leaves" className="absolute top-0 right-0 transform translate-x-1/2 -translate-y-1/2 rotate-45" />
        <h2 className="text-heading-2 absolute top-0 -translate-y-1/2 bg-white px-4">Profile Pondok</h2>
        <Image src={HomeProfileImage} alt="Home Profile Image" />
        <p className="text-regular-5 text-center leading-5">Padukuhan Pondok memiliki keunggulan di bidang sosial, agraris, dan kebudayaan. Semangat gotong royong warganya masih kuat, tercermin dalam berbagai kegiatan kemasyarakatan dan pembangunan bersama. Dengan iklim sejuk dan lahan sawah luas, masyarakat tetap aktif dalam pertanian yang menjaga kelestarian alam sekaligus menjadi sumber penghidupan. Selain itu, seni dan budaya lokal terus dilestarikan sebagai identitas sekaligus perekat kerukunan warga, menjadikan Padukuhan Pondok harmonis, asri, dan berdaya.</p>
      </div>
    </div>
  )
};

export default Profile;