import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
// import bcrypt from 'bcrypt'; 

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email} = await request.json();
  // storeMobile,name 
  // Check if the user already exists
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json({ message: 'Seller already exists' }, { status: 400 });
  }

  
  // Create the user
  // const user = await prisma.seller.create({
  //   data: {
  //     email,
  //     storeMobile,
  //     name
  //   },
  // });



  return NextResponse.json({ message: 'Signup successful!' });
}
