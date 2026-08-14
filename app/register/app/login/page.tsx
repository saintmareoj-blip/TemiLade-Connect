'use client';
import { useState, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';

function LoginForm() {
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const searchParams = useSearchParams();

  const phoneFromUrl = searchParams.get('phone');
  if (phoneFromUrl && phone === '') setPhone(phoneFromUrl);

  const handleLogin = async () => {
    setMessage('Verifying...');
    const res = await fetch('/api/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, otp }),
    });
    const data = await res.json();
    if (data.success) {
      alert('Login Successful! Welcome to TemiLade Connect');
    } else {
      setMessage(data.message);
    }
  };

  return (
    <main style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Login to TemiLade Connect</h1>
      <div style={{ marginTop: '30px', maxWidth: '400px', margin: 'auto' }}>
        <input 
          type="tel" 
          placeholder="Phone number" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ padding: '12px', width: '100%', fontSize: '16px', marginBottom: '10px' }}
        />
        <input 
          type="text" 
          placeholder="Enter OTP" 
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
          style={{ padding: '12px', width: '100%', fontSize: '16px', marginBottom: '10px' }}
        />
        <button 
          onClick={handleLogin}
          style={{ padding: '12px 20px', width: '100%', fontSize: '16px', background: 'green', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Login
        </button>
        <p style={{ color: 'red', marginTop: '10px' }}>{message}</p>
      </div>
    </main>
  );
}

export default function LoginPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <LoginForm />
    </Suspense>
  )
}
