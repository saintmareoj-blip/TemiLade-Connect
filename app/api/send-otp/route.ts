import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  const { name, phone } = await req.json();

  if (!name || !phone) {
    return Response.json({ error: 'Name and Phone required' }, { status: 400 });
  }

  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  const otpExpiry = new Date(Date.now() + 10 * 60 * 1000);

  const user = await prisma.user.upsert({
    where: { phone },
    update: { name, otp, otpExpiry },
    create: { name, phone, otp, otpExpiry },
  });

  return Response.json({ message: 'OTP sent', otp: otp });
}
