import Image from "next/image"

import DecorationWaveImage from "@/src/images/decoration-wave.png"
import Card from "@/components/ui/Card"

const LoginPage = () => {
  return (
    <div className="w-full min-h-screen relative flex justify-center items-center bg-linear-to-b from-0% from-darker-6 to-100% to-darker-3 overflow-hidden">
      <Card>
        TEST
      </Card>
      <Image src={DecorationWaveImage} alt="Logo" className="w-1/2 absolute bottom-0 left-0 translate-y-1/2" />
      <Image src={DecorationWaveImage} alt="Logo" className="w-1/2 absolute bottom-0 right-0 translate-y-1/2 rotate-180" />
    </div>
  )
}

export default LoginPage