import { NextResponse } from 'next/server';

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { phone } = body;

    console.log("OTP Request for:", phone);

    // For now, fake OTP. Later we will save to DB and send real SMS
    const otp = "123456";

    return NextResponse.json({ 
      success: true, 
      message: "OTP sent",
      otp: otp
    });

  } catch (error) {
    return NextResponse.json({ success: false, message: "Something went wrong" }, { status: 500 });
  }
}
