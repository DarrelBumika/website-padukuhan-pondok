"use client"

import Image from "next/image"

import DecorationWaveImage from "@/src/images/decoration-wave.png"
import Card from "@/components/ui/Card"
import Input from "@/components/ui/Input"
import Divider from "@/components/ui/Divider"
import Button from "@/components/ui/Button"
import { Toaster } from "react-hot-toast"

import { useLogin } from "@/hooks/auth/useLogin"

import DecorationLeavesImage from "@/src/images/decoration-leaves.png"


const LoginPage = () => {
  const {
    loading,
    register,
    errors,
    onSubmit
  } = useLogin()

  return (
    <div className="w-full min-h-screen relative flex justify-center items-center bg-linear-to-b from-0% from-darker-6 to-100% to-darker-3 overflow-hidden">
      <Card
        rounded="2xl"
        className="gap-5 px-10 py-16 relative z-1"
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
          <p className="text-medium-3 text-primary-2 text-center">Admin Website Pedukuhan Pondok</p>
        </div>

        <form onSubmit={onSubmit} className="flex flex-col gap-5">
          <div className="flex flex-col gap-1">
            <Input
              label="Email"
              type="email"
              placeholder="Masukkan email admin anda"
              {...register("email")}
            />
            {errors.email && <span className="text-red-500 text-xs">{errors.email.message as string}</span>}
          </div>

          <div className="flex flex-col gap-1">
            <Input
              label="Password"
              type="password"
              placeholder="Masukkan password admin anda"
              {...register("password")}
            />
            {errors.password && <span className="text-red-500 text-xs">{errors.password.message as string}</span>}
          </div>

          <Divider className="bg-black-5!" />

          <Button
            type="submit"
            variant="filled"
            className="w-full"
            text={loading ? "Logging in..." : "Login"}
            disabled={loading}
          />
        </form>
      </Card>

      <Image src={DecorationWaveImage} alt="Logo" className="w-1/2 absolute bottom-0 left-0 translate-y-1/2 z-0" />
      <Image src={DecorationWaveImage} alt="Logo" className="w-1/2 absolute bottom-0 right-0 translate-y-1/2 rotate-180 z-0" />
      <Toaster />
    </div>
  )
}

export default LoginPage
