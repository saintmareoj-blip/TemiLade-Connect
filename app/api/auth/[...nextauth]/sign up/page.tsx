"use client"
import { useState } from "react"
import { useRouter } from "next/navigation"

export default function SignUp() {
  const [name, setName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const router = useRouter()

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const res = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ name, email, password })
    })
    if (res.ok) router.push("/login")
    else alert("User already exists")
  }

  return (
    <div className="flex min-h-screen items-center justify-center">
      <form onSubmit={handleSubmit} className="w-96 space-y-4 p-8 border rounded-lg">
        <h1 className="text-2xl font-bold">Create Account</h1>
        <input type="text" placeholder="Name" value={name} onChange={e => setName(e.target.value)} className="w-full p-2 border rounded" required />
        <input type="email" placeholder="Email" value={email} onChange={e => setEmail(e.target.value)} className="w-full p-2 border rounded" required />
        <input type="password" placeholder="Password" value={password} onChange={e => setPassword(e.target.value)} className="w-full p-2 border rounded" required />
        <button className="w-full bg-black text-white p-2 rounded">Sign Up</button>
      </form>
    </div>
  )
}
