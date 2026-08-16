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

  if (!user) return <div className="bg-[#0F172A] h-screen"></div>;

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0F172A] to-[#1E293B] text-white p-4">
      
      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-gray-400">Good afternoon</p>
          <h1 className="text-2xl font-bold">{user.name}</h1>
        </div>
        <button className="bg-[#1E293B] p-3 rounded-xl">
          🔔
        </button>
      </div>

      {/* Wallet Card */}
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-2xl p-5 mb-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-2">
            <div className="bg-white/20 p-2 rounded-lg">💳</div>
            <p>Wallet Balance</p>
          </div>
          <div className="flex gap-2">
            <button className="bg-white/20 p-2 rounded-lg">🔄</button>
            <button onClick={() => setShowBalance(!showBalance)} className="bg-white/20 p-2 rounded-lg">
              {showBalance? '👁️' : '🙈'}
            </button>
            <button className="bg-white/20 p-2 rounded-lg">›</button>
          </div>
        </div>
        
        <h2 className="text-4xl font-bold mb-4">₦{showBalance? balance : '****'}</h2>
        
        {/* Bank Account Card */}
        <div className="bg-blue-500/80 rounded-xl p-4 mb-4">
          <div className="flex justify-between items-center">
            <div>
              <p className="flex items-center gap-2 text-sm">🏦 Palmpay</p>
              <p className="text-2xl font-bold mt-2">6614531642</p>
              <p className="text-xs text-blue-100 mt-1">Web3sub-Mat(Paymentpoint)</p>
            </div>
            <button className="bg-white/20 p-2 rounded-lg">📋</button>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex gap-3">
          <button className="flex-1 bg-white/20 p-3 rounded-xl flex items-center justify-center gap-2">
            + Fund Wallet
          </button>
          <button className="flex-1 bg-white/10 border border-white/20 p-3 rounded-xl flex items-center justify-center gap-2">
            🕒 History
          </button>
        </div>
      </div>

      {/* Quick Services */}
      <h2 className="text-xl font-bold mb-4">Quick Services</h2>
      <div className="grid grid-cols-2 gap-4 mb-20">
        <button className="bg-[#1E293B] p-4 rounded-2xl text-left">
          <div className="bg-blue-600 w-10 h-10 rounded-lg flex items-center justify-center mb-2">📶</div>
          <p className="font-bold">Buy Data</p>
          <p className="text-xs text-gray-400">Internet bundles for all...</p>
        </button>
        <button className="bg-[#1E293B] p-4 rounded-2xl text-left">
          <div className="bg-green-600 w-10 h-10 rounded-lg flex items-center justify-center mb-2">📞</div>
          <p className="font-bold">Buy Airtime</p>
          <p className="text-xs text-gray-400">Recharge for all n...</p>
        </button>
      </div>

      {/* Bottom Nav */}
      <div className="fixed bottom-0 left-0 right-0 bg-[#0F172A] border-t border-gray-800 flex justify-around p-3">
        <button className="text-blue-500 flex-col items-center">
          <span className="text-2xl">🏠</span>
          <span className="text-xs">Home</span>
        </button>
        <button className="text-gray-400 flex flex-col items-center">
          <span className="text-2xl">⊞</span>
          <span className="text-xs">Services</span>
        </button>
        <button className="text-gray-400 flex-col items-center">
          <span className="text-2xl">🕒</span>
          <span className="text-xs">History</span>
        </button>
        <button className="text-gray-400 flex flex-col items-center">
          <span className="text-2xl">🎁</span>
          <span className="text-xs">Rewards</span>
        </button>
        <button className="text-gray-400 flex flex-col items-center">
          <span className="text-2xl">👤</span>
          <span className="text-xs">Profile</span>
        </button>
      </div>
    </div>
  );
}
