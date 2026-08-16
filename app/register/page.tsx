"use client"

export default function RegisterPage() {
  return (
    <div style={{display: 'flex', minHeight: '100vh', alignItems: 'center', justifyContent: 'center', background: '#f9fafb', padding: '16px'}}>
      <div style={{width: '100%', maxWidth: '400px', padding: '32px', background: 'white', borderRadius: '16px', boxShadow: '0 4px 6px rgba(0,0,0,0.1)'}}>
        <h1 style={{fontSize: '24px', fontWeight: 'bold', textAlign: 'center', marginBottom: '24px', color: '#2563eb'}}>
          Create TemiLade Account
        </h1>
        
        <form style={{display: 'flex', flexDirection: 'column', gap: '16px'}}>
          <input type="text" placeholder="Full Name" style={{width: '100%', border: '1px solid #ddd', borderRadius: '8px', padding: '10px'}} />
          <input type="email" placeholder="Email" style={{width: '100%', border: '1px solid #ddd', borderRadius: '8px', padding: '10px'}} />
          <input type="tel" placeholder="Phone Number" style={{width: '100%', border: '1px solid #ddd', borderRadius: '8px', padding: '10px'}} />
          <input type="password" placeholder="Password" style={{width: '100%', border: '1px solid #ddd', borderRadius: '8px', padding: '10px'}} />
          <button style={{width: '100%', background: '#2563eb', color: 'white', padding: '10px', borderRadius: '8px', fontWeight: '600', border: 'none'}}>
            Create Account
          </button>
        </form>

        <p style={{textAlign: 'center', fontSize: '14px', marginTop: '16px'}}>
          Already have an account? <a href="/login" style={{color: '#2563eb'}}>Login</a>
        </p>
      </div>
    </div>
  )
}
