'use client';
import { useState } from 'react';

export default function Register() {
  const [step, setStep] = useState(1);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');

  const sendOtp = async () => {
    if(!name || !phone) return setMessage('Please enter Name and Phone');
    setMessage('Sending code...');
    const res = await fetch('/api/send-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, phone }),
    });
    const data = await res.json();
    if (res.ok) {
      setMessage(`Your code is: ${data.otp}`);
      setStep(2);
    } else {
      setMessage(data.error);
    }
  };

  const verifyOtp = async () => {
    if(!otp) return setMessage('Please enter OTP');
    const res = await fetch('/api/verify-otp', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ phone, otp }),
    });
    const data = await res.json();
    if (res.ok) {
      localStorage.setItem('userId', data.user.id);
      window.location.href = '/dashboard';
    } else {
      setMessage(data.error);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-blue-50 p-4">
      <div className="p-8 bg-white rounded-2xl shadow-lg w-full max-w-md text-center">
        <h1 className="text-3xl font-bold mb-2 text-blue-600">TemiLade Connect</h1>
        
        {step === 1 ? (
          <>
            <p className="mb-4 text-gray-600">Enter your details to start</p>
            <input type="text" placeholder="Your Full Name" value={name} onChange={e => setName(e.target.value)} className="w-full p-4 text-lg border-2 rounded-xl mb-3"/>
            <input type="tel" placeholder="Your Phone Number" value={phone} onChange={e => setPhone(e.target.value)} className="w-full p-4 text-lg border-2 rounded-xl mb-4"/>
            <button onClick={sendOtp} className="w-full bg-blue-600 text-white p-4 text-xl font-bold rounded-xl">Get Code</button>
          </>
        ) : (
          <>
            <p className="mb-2 text-gray-600">We sent a code to</p>
            <p className="mb-4 font-bold text-lg">{phone}</p>
            <p className="mb-4 p-3 bg-yellow-100 rounded-xl font-bold text-2xl">{message.replace('Your code is: ', '')}</p>
            <input type="number" placeholder="Enter 6-digit Code" value={otp} onChange={e => setOtp(e.target.value)} className="w-full p-4 text-2xl text-center border-2 rounded-xl mb-4 tracking-widest"/>
            <button onClick={verifyOtp} className="w-full bg-green-600 text-white p-4 text-xl font-bold rounded-xl">Continue</button>
          </>
        )}
        {message && step === 1 && <p className="mt-3 text-red-500">{message}</p>}
      </div>
    </div>
  );
              }
