import { prisma } from '../../../lib/prisma'

export async function POST(req: Request) {
  const { phone, otp } = await req.json();

  const user = await prisma.user.findUnique({ where: { phone } });

  if (!user || user.otp !== otp || !user.otpExpiry || user.otpExpiry < new Date()) {
    return Response.json({ error: 'Invalid or expired code' }, { status: 400 });
  }

  await prisma.user.update({
    where: { phone },
    data: { otp: null, otpExpiry: null },
  });

  return Response.json({ message: 'Login successful', user });
}
