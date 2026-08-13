import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { phone, otp } = req.body;
    
    if (!phone || !otp) {
      return res.status(400).json({ error: 'Phone and OTP are required' })
    }

    // Find user by phone
    const user = await prisma.user.findUnique({
      where: { email: phone }
    });

    if (!user) {
      return res.status(404).json({ error: 'User not found' })
    }

    // Check OTP
    if (user.password !== otp) {
      return res.status(401).json({ error: 'Invalid OTP' })
    }

    // OTP is correct! Return userId for dashboard
    return res.status(200).json({ success: true, userId: user.id });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong' })
  }
}
