import './globals.css'
import { Toaster } from 'sonner'
import Link from 'next/link'
import { MessageCircle } from 'lucide-react'

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="bg-gray-50">
        <nav className="p-4 bg-blue-600 text-white flex justify-between shadow-md">
          <Link href="/" className="font-bold text-xl">TemiLade Connect</Link>
          <Link href="/dashboard">Dashboard</Link>
        </nav>
        {children}
        <a href="https://wa.me/2347053824574" target="_blank" className="fixed bottom-5 right-5 bg-green-500 p-4 rounded-full shadow-lg">
          <MessageCircle className="text-white"/>
        </a>
        <footer className="p-4 bg-white text-center mt-10 border-t">
          <p>Support: <a href="mailto:datame24hrs@gmail.com" className="text-blue-600">datame24hrs@gmail.com</a> |
          <a href="https://wa.me/2347053824574" className="text-green-600"> WhatsApp: +234 705 382 4574</a></p>
        </footer>
        <Toaster />
      </body>
    </html>
  )
}
