'use client';
import { useState } from 'react';

export default function RegisterPage() {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');

  const handleRegister = async () => {
    setMessage('Sending OTP...');
    const res = await fetch('https://4-saintmareoj-8909s-projects.vercel.app/api/register', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone }),
    });
    const data = await res.json();
    if (data.success) {
      alert(`Your OTP: ${data.otp}`);
      window.location.href = `/login?phone=${phone}`;
    } else {
      setMessage(data.message);
    }
  };

  return (
    <main style={{ padding: '40px', textAlign: 'center', fontFamily: 'Arial' }}>
      <h1>Register for TemiLade Connect 💰</h1>
      <div style={{ marginTop: '30px', maxWidth: '400px', margin: 'auto' }}>
        <input 
          type="tel" 
          placeholder="Enter your phone number" 
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ padding: '12px', width: '100%', fontSize: '16px', marginBottom: '10px' }}
        />
        <button 
          onClick={handleRegister}
          style={{ padding: '12px 20px', width: '100%', fontSize: '16px', background: 'blue', color: 'white', border: 'none', borderRadius: '5px' }}
        >
          Get OTP
        </button>
        <p style={{ color: 'red', marginTop: '10px' }}>{message}</p>
      </div>
    </main>
  );
}
