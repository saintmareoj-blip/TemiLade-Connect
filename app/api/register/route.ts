
import { prisma } from '../../lib/prisma';
export async function POST(req: Request) {
  try {
    const { name, phone } = await req.json();

    if (!name || !phone) {
      return Response.json({ error: 'Name and phone required' }, { status: 400 });
    }

    const otp = "123456"; // FAKE OTP FOR TESTING
    const otpExpiry = new Date(Date.now() + 10 * 60 * 1000); // 10 minutes

    await prisma.user.upsert({
      where: { phone },
      update: { name, otp, otpExpiry },
      create: { name, phone, otp, otpExpiry, balance: 0 },
    });

    console.log(`FAKE OTP for ${phone}: ${otp}`);

    return Response.json({ message: 'OTP sent. Use 123456 to verify' });
  } catch (error) {
    return Response.json({ error: 'Failed to send OTP' }, { status: 500 });
  }
}
