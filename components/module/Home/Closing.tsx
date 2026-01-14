import Chip from "@/components/ui/Chip"

import HomeClosingImage from "@/src/images/home-closing.png"
import Image from "next/image"

const Closing = () => {
  return (
    <div className="w-full h-[640px] flex flex-col justify-center items-center relative overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-4 py-16 overflow-hidden">
        <Chip
          label="Pembangunan"
          uppercase
        />
        <h2 className="text-heading-2 text-white">Mari Bersama Membangun Pondok</h2>
        <p className="text-regular-5 text-white">Bersama masyarakat Pondok bersatu, bersinergi, menuju Pondok yang lebih baik</p>
      </div>
      <Image
        src={HomeClosingImage}
        alt="Home Closing"
        className="w-full absolute z-[-1] top-0"
      />
      <div className="w-full h-full bg-black opacity-50 absolute z-[-1] top-0" />
    </div>
  )
}

export default Closing