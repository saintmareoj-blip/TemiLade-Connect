export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold text-brand">TemiLade Connect</h1>
      <p className="mt-4 text-lg">Wallet + Transactions Platform</p>
      <a href="/dashboard" className="mt-6 rounded bg-accent px-6 py-3 text-white">
        Go to Dashboard
      </a>
    </main>
  )
}
