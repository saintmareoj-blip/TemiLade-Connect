import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

// Generate 6 digit OTP
function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

export default async function handler(req: any, res: any) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  try {
    const { phone } = req.body;
    
    if (!phone) {
      return res.status(400).json({ error: 'Phone number is required' })
    }

    // Check if user already exists
    let user = await prisma.user.findUnique({
      where: { email: phone } // We're using email field to store phone
    });

    const otp = generateOTP();

    if (!user) {
      // Create new user
      user = await prisma.user.create({
        data: {
          id: crypto.randomUUID(),
          email: phone, // storing phone in email field
          name: phone,
          password: otp, // storing OTP as password for now
        }
      });

      // Create wallet for new user
      await prisma.wallet.create({
        data: {
          id: crypto.randomUUID(),
          userId: user.id,
          balance: 0
        }
      });
    } else {
      // Update OTP for existing user
      await prisma.user.update({
        where: { id: user.id },
        data: { password: otp }
      });
    }

    // For now we show OTP on screen. Later we can send via SMS
    return res.status(200).json({ success: true, otp: otp });

  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: 'Something went wrong' })
  }
}
