import { prisma } from '../../lib/prisma';

export async function POST(req: Request) {
  try {
    const { phone, otp } = await req.json();

    const user = await prisma.user.findUnique({ where: { phone } });

    if (!user || user.otp !== otp || user.otpExpiry! < new Date()) {
      return Response.json({ error: "Invalid or expired OTP" }, { status: 400 });
    }

    // Create account number if new user
    if (!user.accountNumber) {
      await prisma.user.update({
        where: { phone },
        data: { 
          accountNumber: "9" + Math.floor(Math.random() * 1000000000).toString().padStart(9, '0'),
          otp: null,
          otpExpiry: null
        },
      });
    }

    return Response.json({ success: true, message: "Verified" });
  } catch (error) {
    return Response.json({ error: "Verification failed" }, { status: 500 });
  }
}
