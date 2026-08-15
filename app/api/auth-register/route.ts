import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, password } = body

    console.log("New user:", { name, email })

    return NextResponse.json(
      { message: "User registered successfully", user: { name, email } },
      { status: 201 }
    )
  } catch (error) {
    return NextResponse.json(
      { message: "Something went wrong" },
      { status: 500 }
    )
  }
}
