import './globals.css'

export const metadata = {
  title: 'TemiLade Connect',
  description: 'Buy Data, Airtime, Bills & More',
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
