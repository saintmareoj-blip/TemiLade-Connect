export default function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-2xl font-bold">Dashboard</h1>
      <p>Wallet Balance: ₦0.00</p>
      <div className="grid grid-cols-2 gap-4 mt-6">
        <button className="p-4 bg-blue-100 rounded-lg">Buy Airtime</button>
        <button className="p-4 bg-blue-100 rounded-lg">Buy Data</button>
      </div>
    </div>
  )
}
