import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone } = body;

    console.log("OTP Request for:", phone);
    const otp = "123456";

    return NextResponse.json({ 
      success: true, 
      message: "OTP sent",
      otp: otp
    });

  } catch (error: any) {
    console.error(error);
    return NextResponse.json({ success: false, message: error.message }, { status: 500 });
  }
}
