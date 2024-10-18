import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { generateAndSendOTP } from '@/lib/auth';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email } = await request.json();

  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (!existingUser) {
    return NextResponse.json({ message: 'User does not exist' }, { status: 400 });
  }

  generateAndSendOTP(email,"user");

  return NextResponse.json({ message: 'ACCOUNT EXISTS, OTP Sent!',existingUser });
}
