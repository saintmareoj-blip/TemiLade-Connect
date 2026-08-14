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
      window.location.href = `/login?phone=${phone}`;
    } else {
      setMessage(`Error: ${data.message}`);
    }
  } catch (error: any) {
    setMessage(`Network Error: ${error.message}`);
  }
};
