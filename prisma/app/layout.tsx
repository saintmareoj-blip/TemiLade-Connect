import './globals.css'
import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'TemiLade Connect',
  description: 'Wallet and Transactions',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
