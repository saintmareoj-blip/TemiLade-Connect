import { PrismaClient } from '@prisma/client'

import { prisma } from '@/lib/prisma'

export default async function Home() {
  let dbStatus = "Connected ✅"
  let userCount = 0

  try {
    userCount = await prisma.user.count()
  } catch (e) {
    dbStatus = "Error ❌ - Check DATABASE_URL"
    console.log(e)
  }

  return (
    <main style={{padding: '40px', textAlign: 'center', fontFamily: 'sans-serif'}}>
      <h1>TemiLade Connect 💰</h1>
      <p>Your Digital Wallet & Transactions Platform</p>
      
      <p style={{marginTop: '20px', color: dbStatus.includes('✅') ? 'green' : 'red'}}>
        Database: {dbStatus}
      </p>
      <p>Total Users: {userCount}</p>

      <div style={{marginTop: '30px', display: 'flex', gap: '10px', justifyContent: 'center'}}>
        <a href="/register" style={{padding: '12px 24px', background: '#0070f3', color: 'white', borderRadius: '8px', textDecoration: 'none'}}>
          Register
        </a>
        <a href="/login" style={{padding: '12px 24px', border: '1px solid #0070f3', color: '#0070f3', borderRadius: '8px', textDecoration: 'none'}}>
          Login
        </a>
      </div>
    </main>
  )
}
