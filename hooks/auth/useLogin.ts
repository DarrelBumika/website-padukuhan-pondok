import { useState } from "react"
import { login as loginFetcher } from "@/utils/fetcher/auth"
import { useRouter } from "next/navigation"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { loginSchema } from "@/constants/validations/auth"
import toast from "react-hot-toast"

export const useLogin = () => {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const router = useRouter()

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm(
    {
      resolver: zodResolver(loginSchema),
    }
  )

  const login = async (formData: FormData) => {
    setLoading(true)
    setError(null)
    try {
      const result = await loginFetcher(formData)
      router.push("/dashboard")
      router.refresh()
      return { success: true, data: result }
    } catch (err: any) {
      const errorMessage = err.message || "An unexpected error occurred"
      setError(errorMessage)
      return { success: false, error: errorMessage }
    } finally {
      setLoading(false)
    }
  }

  const onSubmit = handleSubmit(async (data) => {
    const formData = new FormData()
    formData.append("email", data.email)
    formData.append("password", data.password)

    const result = await login(formData)

    if (result.success) {
      toast.success("Login berhasil! Mengalihkan...")
    } else {
      toast.error("Email atau password salah")
    }
  })

  return {
    login,
    loading,
    error,
    register,
    errors,
    onSubmit
  }
}