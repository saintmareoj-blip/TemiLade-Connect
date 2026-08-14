'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function RegisterPage() {
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const router = useRouter();

  const handleRegister = async () => {
    setMessage('Sending OTP...');
    try {
      const res = await fetch('https://h-saintmareoj-8909s-projects.vercel.app/api/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ phone }),
      });
      
      const data = await res.json();
      
      if (data.success) {
        alert(`Your OTP: ${data.otp}`);
        router.push(`/login?phone=${phone}`);
      } else {
        setMessage(`Error: ${data.message}`);
      }
    } catch (error: any) {
      setMessage(`Network Error: ${error.message}`);
    }
  };

  return (
    <main style={{ padding: '40px', textAlign: 'center' }}>
      <h1>Register for TemiLade Connect 😊</h1>
      <div style={{ marginTop: '30px' }}>
        <input
          type="tel"
          placeholder="Enter your phone number"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
          style={{ padding: '12px', width: '300px' }}
        />
        <button 
          onClick={handleRegister} 
          style={{ padding: '12px 20px', marginLeft: '10px' }}
        >
          Get OTP
        </button>
        <p>{message}</p>
      </div>
    </main>
  );
        }
