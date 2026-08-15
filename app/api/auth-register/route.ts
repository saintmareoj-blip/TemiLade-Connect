import { NextResponse } from 'next/server'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { name, email, password } = body

    // Save to database
    const user = await prisma.user.create({
      data: {
        name,
        email,
        password
      }
    })

    return NextResponse.json(
      { message: "User registered successfully", user },
      { status: 201 }
    )
  } catch (error) {
    console.log(error)
    return NextResponse.json(
      { message: "Email already exists or error" },
      { status: 400 }
    )
  }
}
