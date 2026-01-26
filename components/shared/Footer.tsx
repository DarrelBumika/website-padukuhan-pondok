import Image from "next/image";

import DecorationWaveImage from "@/src/images/decoration-wave.png"
import KKNLogo from "@/src/images/logo-kkn.png"
import {
  TbBrandInstagramFilled,
  TbBrandTiktokFilled,
  TbBrandYoutubeFilled
} from "react-icons/tb";
import Button from "@/components/ui/Button";
import Divider from "@/components/ui/Divider";

const Footer = () => {
  return (
    <footer className="w-full relative flex flex-col justify-center items-center gap-8 bg-darker-3 py-16 overflow-hidden">
      <div className="flex flex-col justify-center items-center gap-4">
        <h2 className="text-heading-2 text-white">Tumbuh Bersama Pondok</h2>
        <p className="text-regular-5 text-white">Upaya gerak nyata dan kontribusi dalam perkembangan serta kemajuan bangsa.</p>
        <Image
          src={KKNLogo}
          alt="Logo KKN"
        />
      </div>
      <div className="flex justify-center items-center gap-2">
        <Button isIconButton variant="outlined" className="flex justify-center items-center p-2 rounded-full border border-white">
          <TbBrandYoutubeFilled size={24} color="white" />
        </Button>
        <Button isIconButton variant="outlined" className="flex justify-center items-center p-2 rounded-full border border-white">
          <TbBrandInstagramFilled size={24} color="white" />
        </Button>
        <Button isIconButton variant="outlined" className="flex justify-center items-center p-2 rounded-full border border-white">
          <TbBrandTiktokFilled size={24} color="white" />
        </Button>
      </div>

      <Divider className="opacity-10" />

      <p className="text-caption-5 text-white">© 2025 KKN UNY Pondok. All Rights Reserved. </p>
      <Image src={DecorationWaveImage} width={512} height={512} alt="Decoration Leaves" className="absolute bottom-0 left-0 translate-y-1/2" />
      <Image src={DecorationWaveImage} width={512} height={256} alt="Decoration Leaves" className="absolute top-0 right-0 -translate-y-1/2 rotate-180" />
    </footer>
  )
}

export default Footer;