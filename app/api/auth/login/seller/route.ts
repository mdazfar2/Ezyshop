import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import { generateAndSendOTP } from "@/lib/auth";

const prisma = new PrismaClient();

export async function POST(request: Request) {
  const { email } = await request.json();

  // Check if the user already exists
  try {
    const existingseller = await prisma.seller.findUnique({
      where: { email },
    });
    if (!existingseller) {
      return NextResponse.json(
        { message: "seller does not exist" },
        { status: 400 }
      );
    }

    generateAndSendOTP(email, "seller");

    return NextResponse.json({
      message: "ACCOUNT EXISTS, OTP Sent!",
      existingseller,
    });
  } catch (err) {
    console.error(
      "Error fetching products:",
      err instanceof Error ? err.message : err
    );
  }
}
