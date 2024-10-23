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

    const res= await generateAndSendOTP(email, "seller");

    if (res) {
      return NextResponse.json({
        message: "ACCOUNT EXISTS, OTP Sent!",
        existingseller,
      },{status:200});
    } else {
      return NextResponse.json({
        message: "ACCOUNT EXISTS, BUT FAILED TO SEND OTP.",
        existingseller
      },{status:500});
    }

  } catch (err) {
    console.error(
      "Error fetching seller",
      err instanceof Error ? err.message : err
    );
    return NextResponse.json({
      message: err instanceof Error ? err.message : err
    },{status:400});
  }
}
