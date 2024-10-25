import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { generateAndSendOTP } from "@/lib/auth";
// import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const {
    name,
    storeMobile,
    email,
    storeAddress,
    storeUPI,
    storeName,
    storeDescription,
    otp,
  } = await request.json();
  // storeMobile,name
  // Check if the user already exists
  try{
  const existingUser = await prisma.seller.findUnique({
    where: { email },
  });

  if (existingUser) {
    return NextResponse.json(
      { message: "Seller already exists" },
      { status: 400 }
    );
  }

  // Create the user
  const seller = await prisma.seller.create({
    data: {
      name,
      storeMobile,
      email,
      storeAddress,
      storeUPI,
      storeName,
      storeDescription,
      otp,
    },
  });

  const res = await generateAndSendOTP(email, "seller");

  if (res) {
    return NextResponse.json({
      message: "STORE CREATED, VERIFY EMAIL VIA OTP",
      seller,
    },{status:200});
  } else {
    return NextResponse.json({
      message: "STORE CREATED, BUT FAILED TO SEND OTP.",
      seller,
    },{status:500});
  }
}catch(err){
  console.error(
    "Error fetching seller in signup route",
    err instanceof Error ? err.message : err
  );
  return NextResponse.json({
    message: err instanceof Error ? err.message : err
  },{status:400});
}
}
