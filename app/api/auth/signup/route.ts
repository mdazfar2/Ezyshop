import { NextResponse } from 'next/server';
import prismadb from '@/lib/prismadb';
import { generateAndSendOTP } from '@/lib/auth';

export async function POST(request: Request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ message: 'Invalid request body' }, { status: 400 });
  }

  const { email, mobileNumber, name, otp } = body;

  if (!email || !mobileNumber || !name) {
    return NextResponse.json({ message: 'Email, mobile number, and name are required.' }, { status: 400 });
  }

  try {
    // Check if the user already exists
    const existingUser = await prismadb.user.findUnique({
      where: { email },
    });

    console.log(`[Signup] email=${email}, mobile=${mobileNumber}, name=${name}`);

    if (existingUser) {
      return NextResponse.json({ message: 'User already exists' }, { status: 400 });
    }

    // Create the user
    const user = await prismadb.user.create({
      data: {
        email,
        mobileNumber,
        name,
        otp: otp || '',
      },
    });

    console.log(`[Signup] User created: ${user.id}`);

    const otpSent = await generateAndSendOTP(email, 'user');

    if (otpSent) {
      return NextResponse.json({
        message: 'ACCOUNT CREATED, VERIFY EMAIL VIA OTP', user
      }, { status: 200 });
    } else {
      return NextResponse.json({
        message: 'Account created, but failed to send OTP. Please check SMTP configuration.',
        user
      }, { status: 500 });
    }
  } catch (err) {
    console.error(
      '[Signup] Error:',
      err instanceof Error ? err.stack : err
    );
    return NextResponse.json({
      message: err instanceof Error ? err.message : 'An unexpected error occurred'
    }, { status: 400 });
  }
}
