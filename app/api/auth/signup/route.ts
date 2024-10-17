import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import bcrypt from 'bcrypt'; 

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, password , mobileNumber,name } = await request.json();

  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json({ message: 'User already exists' }, { status: 400 });
  }

  // Hash the password
  const passwordHash = await bcrypt.hash(password, 10);
  
  // Create the user
  const user = await prisma.user.create({
    data: {
      email,
      passwordHash,
      mobileNumber,
      name
    },
  });



  return NextResponse.json({ message: 'Signup successful!',user });
}
