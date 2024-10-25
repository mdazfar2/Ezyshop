import { NextResponse } from 'next/server';
import { PrismaClient } from '@prisma/client';
import { generateAndSendOTP } from '@/lib/auth';

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email, mobileNumber,name ,otp} = await request.json();

  // Check if the user already exists
  try{
  const existingUser = await prisma.user.findUnique({
    where: { email },
  });

  console.log(email+"-"+mobileNumber+"-"+name+"-"+otp);
  if (existingUser) {
    return NextResponse.json({ message: 'User already exists' }, { status: 400 });
  }

  // Hash the password
  // const passwordHash = await bcrypt.hash(password, 10);
  
  // Create the user
  const user = await prisma.user.create({
    data: {
      email,
      mobileNumber,
      name,
      otp
    },
  });

  const res=await generateAndSendOTP(email,"user");

  if (res) {
    return NextResponse.json({
      message: 'ACCOUNT CREATED, VERIFY EMAIL VIA OTP',user 
    },{status:200});
  } else {
    return NextResponse.json({
      message: "STORE CREATED, BUT FAILED TO SEND OTP.",user
    },{status:500});
  }
}catch(err){
  console.error(
    "Error fetching user in signup route",
    err instanceof Error ? err.message : err
  );
  return NextResponse.json({
    message: err instanceof Error ? err.message : err
  },{status:400});
}
}
