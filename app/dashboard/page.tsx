'use client';
import { useEffect, useState } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if(!userId) window.location.href = '/register'; // If no login, send back
    
    fetch(`/api/get-user?id=${userId}`)
      .then(res => res.json())
      .then(data => setUser(data.user));
  }, []);

  if(!user) return <p className="text-center mt-20">Loading...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-4">
      <div className="max-w-md mx-auto bg-white rounded-2xl shadow-lg p-6 mt-10">
        <h1 className="text-2xl font-bold">Welcome, {user.name}!</h1>
        <div className="mt-6 p-6 bg-blue-600 text-white rounded-xl text-center">
          <p className="text-lg">Your Wallet Balance</p>
          <p className="text-4xl font-bold mt-2">₦{user.wallet.toFixed(2)}</p>
        </div>
        <button className="w-full mt-4 bg-green-500 text-white p-3 rounded-xl">Send Money</button>
        <button className="w-full mt-2 bg-gray-200 p-3 rounded-xl">Transaction History</button>
      </div>
    </div>
  );
}
