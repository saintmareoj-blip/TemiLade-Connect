'use client';
import { useState, useEffect } from 'react';

export default function Dashboard() {
  const [user, setUser] = useState<any>(null);
  const [balance] = useState('0.00');
  const [showBalance, setShowBalance] = useState(true);

  useEffect(() => {
    const userId = localStorage.getItem('userId');
    if (!userId) {
      window.location.href = '/register';
      return;
    }
    fetch(`/api/get-user?id=${userId}`)
   .then(res => res.json())
   .then(data => setUser(data.user));
  }, []);

  if (!user) return <div className="bg-[#0F172A] min-h-screen"></div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white p-4 pb-24">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-gray-400">Good afternoon</p>
          <h1 className="text-2xl font-bold">{user.name}</h1>
        </div>
        <button className="bg-[#1E293B] p-3 rounded-xl">🔔</button>
      </div>

      {/* Wallet Card */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-2 rounded-lg">💳</div>
            <p className="font-semibold">Wallet Balance</p>
          </div>
          <button onClick={() => setShowBalance(!showBalance)} className="bg-white/20 p-2 rounded-lg">
            {showBalance? '👁️' : '🙈'}
          </button>
        </div>
        
        <h2 className="text-4xl font-bold mb-4">₦{showBalance? balance : '****'}</h2>
        
        {/* Bank Account */}
        <div className="bg-blue-500/80 rounded-xl p-4 mb-4">
          <p>🏦 Palmpay</p>
          <p className="text-2xl font-bold mt-2">6614531642</p>
          <p className="text-xs text-blue-100 mt-1">Web3sub-Mat(Paymentpoint)</p>
        </div>

        <div className="flex gap-3">
          <button className="flex-1 bg-white/20 p-3 rounded-xl font-semibold">+ Fund Wallet</button>
          <button className="flex-1 bg-white/10 border border-white/20 p-3 rounded-xl font-semibold">🕒 History</button>
        </div>
      </div>

      {/* Services */}
      <h2 className="text-xl font-bold mb-4">Quick Services</h2>
      <div className="grid grid-cols-2 gap-4">
        <button className="bg-[#1E293B] p-4 rounded-2xl text-left">
          <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mb-2">📶</div>
          <p className="font-bold">Buy Data</p>
        </button>
        <button className="bg-[#1E293B] p-4 rounded-2xl text-left">
          <div className="bg-green-600 w-10 h-10 rounded-lg flex items-center justify-center mb-2">📞</div>
          <p className="font-bold">Buy Airtime</p>
        </button>
      </div>
    </div>
  );
}
