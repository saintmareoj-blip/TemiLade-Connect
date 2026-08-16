import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function POST(req: Request) {
  try {
    const { name, phone } = await req.json();

    const existing = await prisma.user.findUnique({ where: { phone } });
    if (existing) {
      return NextResponse.json({ error: 'Phone already registered' }, { status: 400 });
    }

    const code = Math.floor(100000 + Math.random() * 900000).toString();

    const user = await prisma.user.create({
      data: {
        name,
        phone,
        otp: code,
        isVerified: false,
      },
    });

    console.log("OTP for", phone, "is:", code); // Check Vercel logs to see code

    return NextResponse.json({ success: true, message: 'OTP sent' });
  } catch (error) {
    return NextResponse.json({ error: 'Registration failed' }, { status: 500 });
  }
}
