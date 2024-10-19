import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { generateAndSendOTP } from '@/lib/auth';
// import bcrypt from 'bcrypt'; 

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { name,storeMobile,email,storeAddress,storeUPI,storeName} = await request.json();
  // storeMobile,name 
  // Check if the user already exists
  const existingUser = await prisma.seller.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json({ message: 'Seller already exists' }, { status: 400 });
  }

  
  // Create the user
  const seller = await prisma.seller.create({
    data: {
      name,storeMobile,email,storeAddress,storeUPI,storeName
    },
  });

  generateAndSendOTP(email,"seller");


  return NextResponse.json({ message: 'STORE CREATED, VERIFY EMAIL VIA OTP',seller });
}
