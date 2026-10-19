import { NextResponse } from "next/server";
import prismadb from "@/lib/prismadb";
import { generateAndSendOTP } from "@/lib/auth";

export async function POST(request: Request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
  }

  const { email } = body;

  if (!email) {
    return NextResponse.json({ message: 'Email is required.' }, { status: 400 });
  }

  try {
    const existingUser = await prismadb.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 400 }
      );
    }

    console.log(`[Login] Sending OTP to user: ${email}`);
    const otpSent = await generateAndSendOTP(email, "user");

    if (otpSent) {
      return NextResponse.json({
        message: "ACCOUNT EXISTS, OTP Sent!",
        existingUser,
      }, { status: 200 });
    } else {
      return NextResponse.json({
        message: "Account exists, but failed to send OTP. Please check SMTP configuration.",
        existingUser,
      }, { status: 500 });
    }
  } catch (err) {
    console.error(
      "[Login] Error:",
      err instanceof Error ? err.stack : err
    );
    return NextResponse.json({
      message: err instanceof Error ? err.message : 'An unexpected error occurred'
    }, { status: 400 });
  }
}

