import { NextResponse } from 'next/server';
import { prisma } from '../../../lib/prisma';

export async function POST(req: Request) {
  try {
    const { phone, code } = await req.json();

    const user = await prisma.user.findUnique({ where: { phone } });
    if (!user) {
      return NextResponse.json({ error: 'User not found' }, { status: 404 });
    }

    // TEMP: Accept any 6 digit code for testing
    if (code.length !== 6) {
      return NextResponse.json({ error: 'Invalid code' }, { status: 400 });
    }

    await prisma.user.update({
      where: { phone },
      data: { isVerified: true },
    });

    return NextResponse.json({ 
      success: true, 
      userId: user.id,
      message: 'Verified!' 
    });
  } catch (error) {
    return NextResponse.json({ error: 'Verification failed' }, { status: 500 });
  }
}
