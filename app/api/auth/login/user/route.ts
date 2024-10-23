import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { generateAndSendOTP } from "@/lib/auth";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email } = await request.json();

  // Check if the user already exists
  try {
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });

    if (!existingUser) {
      return NextResponse.json(
        { message: "User does not exist" },
        { status: 400 }
      );
    }

    const res = await generateAndSendOTP(email, "user");

    if (res) {
      return NextResponse.json({
        message: "ACCOUNT EXISTS, OTP Sent!",
        existingUser,
      },{status:200});
    } else {
      return NextResponse.json({
        message: "ACCOUNT EXISTS, BUT FAILED TO SEND OTP.",
        existingUser,
      },{status:500});
    }
  } catch (err) {
    console.error(
      "Error fetching user",
      err instanceof Error ? err.message : err
    );
    return NextResponse.json({
      message: err instanceof Error ? err.message : err
    },{status:400});
  }
}
