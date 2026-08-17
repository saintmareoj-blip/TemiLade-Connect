export async function POST(req: Request) {
  const { phone } = await req.json();
  
  // FAKE OTP FOR TESTING
  const otp = "123456";
  console.log("FAKE OTP for", phone, ":", otp);
  
  // Save OTP to DB here
  // await prisma.user.upsert(...)

  return Response.json({ success: true, message: "OTP sent", otp: otp });
}
