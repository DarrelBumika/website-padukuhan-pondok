import Image from "next/image"

import DecorationWaveImage from "@/src/images/decoration-wave.png"
import Card from "@/components/ui/Card"
import Input from "@/components/ui/Input"
import Divider from "@/components/ui/Divider"
import Button from "@/components/ui/Button"

import DecorationLeavesImage from "@/src/images/decoration-leaves.png"

const LoginPage = () => {
  return (
    <div className="w-full min-h-screen relative flex justify-center items-center bg-linear-to-b from-0% from-darker-6 to-100% to-darker-3 overflow-hidden">
      <Card
        rounded="2xl"
        className="gap-5 px-10 py-16 relative"
        noBorder
      >
        <Image
          src={DecorationLeavesImage}
          alt="Logo"
          width={100}
          height={100}
          className="w-24 h-24 object-contain absolute top-0 left-0 -translate-y-1/4 -translate-x-1/4"
        />

        <Image
          src={DecorationLeavesImage}
          alt="Logo"
          width={100}
          height={100}
          className="w-24 h-24 object-contain absolute top-0 right-0 -translate-y-1/4 translate-x-1/4 rotate-45"
        />

        <div className="flex flex-col justify-center items-center gap-3 mb-16">
          <h2 className="text-title-2 text-black">Login</h2>
          <p className="text-medium-3 text-primary-2">Admin Website Pedukuhan Pondok</p>
        </div>

        <Input
          label="Email"
          placeholder="Masukkan email admin anda"
        />
        <Input
          label="Password"
          placeholder="Masukkan password admin anda"
        />

        <Divider className="bg-black-5!" />

        <Button
          variant="filled"
          className="w-full"
          text="Login"
        />
      </Card>

      <Image src={DecorationWaveImage} alt="Logo" className="w-1/2 absolute bottom-0 left-0 translate-y-1/2" />
      <Image src={DecorationWaveImage} alt="Logo" className="w-1/2 absolute bottom-0 right-0 translate-y-1/2 rotate-180" />
    </div>
  )
}

export default LoginPage