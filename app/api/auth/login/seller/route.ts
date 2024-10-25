import { NextResponse } from "next/server";
import { generateAndSendOTP } from "@/lib/auth";
import prismadb from "@/lib/prismadb";


export async function POST(request: Request) {
  const { email } = await request.json();

  // Check if the user already exists
  console.log(email);
  try {
    const existingseller = await prismadb.seller.findUnique ({
      where: { email },
    });
    console.log(existingseller)
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
