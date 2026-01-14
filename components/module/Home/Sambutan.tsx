import Image from "next/image";

import HomeSambutanImage from "@/src/images/home-sambutan.png";
import DecorationLeavesImage from "@/src/images/decoration-leaves.png";
import DecorationWaveImage from "@/src/images/decoration-wave.png";

const Sambutan = () => {
  return (
    <div className="relative w-full flex justify-center py-8 bg-linear-to-r from-0% from-black to-75% to-primary-2">
      <div className="w-2/3 flex justify-between items-center gap-16">
        <Image src={HomeSambutanImage} width={256} alt="Home Sambutan Image" />
        <div className="flex flex-col gap-4 text-white">
          <h2 className="text-heading-1">Sambutan Dukuh Pondok</h2>
          <h3 className="text-large-4">Bapak Irfani Reza Pahlevi, Spd, Mpd.</h3>
          <p className="text-regular-5 leading-5 text-justify">Padukuhan Pondok berada di Kalurahan Condongcatur Kapanewon Depok Kabupaten Sleman, terdiri dari 2 RW dan 6 RT. Masyarakat memiliki kultur yang agamis, cinta kebudayaan, gotong royong dan guyup rukun dalam membangun Padukuhan Pondok. Kebudayaan menjadi unggulan di Padukuhan Pondok, banyak sekali kegiatan-kegiatan yang menonjolkan kebudayaan diantaranya kesenian jathilan "Roso Tunggal", Seni Pranatacara, Karawitan. Disamping itu, lahan pertanian d Padukuhan Pondok merupakan yang terbesar di Kalurahan Condongcatur. Potensi alam yang melimpah ini dimanfaatkan masyarakat untuk mengarap sawah dan kegiatan produktif lainnya. Oleh karena itu, marilah warga masyarakat Padukuhan Pondok baik yang baru datang dan yang akan menempati, kita bangun bersama dan terus kembangkan Padukuhan Pondok agar semakin solid dan maju.</p>
        </div>
      </div>

      <Image src={DecorationLeavesImage} width={128} height={128} alt="Decoration Leaves" className="absolute bottom-0 right-0 translate-y-1/2" />
      <Image src={DecorationLeavesImage} width={64} height={64} alt="Decoration Leaves" className="absolute top-0 right-0 -translate-y-1/2 -translate-x-full" />
      <Image src={DecorationWaveImage} width={512} alt="Decoration Wave" className="absolute bottom-0 left-0 transform translate-y-1/2" />
    </div>
  );
};

export default Sambutan;