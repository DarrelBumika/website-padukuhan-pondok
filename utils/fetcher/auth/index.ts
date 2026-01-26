export const login = async (formData: FormData) => {
  const response = await fetch('/api/auth', {
    method: 'POST',
    body: formData,
  })

  const contentType = response.headers.get("content-type")
  if (contentType && contentType.includes("application/json")) {
    const data = await response.json()
    if (!response.ok) {
      throw new Error(data.error || 'Login failed')
    }
    return data
  } else {
    const text = await response.text()
    throw new Error(text || 'Server error occurred')
  }
}