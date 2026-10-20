import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { generateAndSendOTP } from "@/lib/auth";

export const dynamic = 'force-dynamic';
export const maxDuration = 30;

export async function POST(request: Request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
  }

  const { name, mobile, email, otp } = body;

  if (!email || !mobile || !name) {
    return NextResponse.json({ message: 'Email, mobile, and name are required.' }, { status: 400 });
  }

  try {
    // Check if the seller already exists
    const existingUser = await prismadb.seller.findUnique({
      where: { email },
    });

    if (existingUser) {
      return NextResponse.json(
        { message: "Seller already exists" },
        { status: 400 }
      );
    }

    // Create the seller
    const seller = await prismadb.seller.create({
      data: {
        name,
        email,
        mobileNumber: mobile,
        otp: otp || '',
      },
    });

    console.log(`[Seller Signup] Seller created: ${seller.id}`);

    const otpSent = await generateAndSendOTP(email, "seller");

    if (otpSent) {
      return NextResponse.json({
        message: "STORE CREATED, VERIFY EMAIL VIA OTP",
        seller,
      }, { status: 200 });
    } else {
      return NextResponse.json({
        message: "Seller created, but failed to send OTP. Please check SMTP configuration.",
        seller,
      }, { status: 500 });
    }
  } catch (err) {
    console.error(
      "[Seller Signup] Error:",
      err instanceof Error ? err.stack : err
    );
    return NextResponse.json({
      message: err instanceof Error ? err.message : 'An unexpected error occurred'
    }, { status: 400 });
  }
}

