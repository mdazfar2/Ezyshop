import { NextResponse } from "next/server";
import { validateWebhookSignature } from "razorpay/dist/utils/razorpay-utils";
// import crypto from "crypto";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Methods": "GET,POST,PUT,DELETE,OPTIONS",
  "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export async function OPTIONS() {
  return NextResponse.json({}, { headers: corsHeaders });
}

export async function POST(req: Request) {
  try {
    const signature = req.headers.get("x-razorpay-signature") as string;
    const secret = process.env.RZP_WEBHOOK_SECRET || "";

    if (!signature) {
      console.error("Missing signature header");
      return NextResponse.json(
        { message: "Missing signature header" },
        { status: 400 }
      );
    }

    if (!secret) {
      console.error("Missing webhook secret");
      return NextResponse.json(
        { message: "Missing webhook secret" },
        { status: 500 }
      );
    }

    // Fetch raw body as string for signature verification
    const rawBody = await req.text();
    const parsedBody = JSON.parse(rawBody);

    // Log the received raw payload and signature
    // console.log("Received payload:", rawBody);
    // console.log("Received signature:", signature);

    // Generate the expected signature using the raw payload
    // const expectedSignature = crypto
    //   .createHmac('sha256', secret)
    //   .update(rawBody)
    //   .digest('hex');

    // console.log("Expected Signature:", expectedSignature);

    // Verify signature using the Razorpay library method
    const isVerified = validateWebhookSignature(rawBody, signature, secret);

    // console.log("Signature verification status:", isVerified);

    if (isVerified) {
      const entity = parsedBody.payload.payment.entity;

      if (!entity || !entity.order_id) {
        console.error("Invalid payload structure:", parsedBody);
        return NextResponse.json(
          { message: "Invalid payload structure" },
          { status: 400 }
        );
      }

      const { name, contact, email, address } = entity.notes || {};

      if (!name || !contact || !email || !address) {
        console.error("Missing required note fields:", entity.notes);
        return NextResponse.json(
          { message: "Missing required fields in notes" },
          { status: 400 }
        );
      }

      // Update the order in the database
      // await prismadb.order.update({
      //   where: {
      //     RZP_OID: entity.order_id,
      //   },
      //   data: {
      //     name,
      //     contact,
      //     email,
      //     address,
      //     isPaid: true,
      //   },
      // });

      //   console.log("Order update successful:", res);
      return NextResponse.json(
        { message: "Order updated successfully" },
        { status: 200 }
      );
    } else {
      console.error("Signature verification failed");
      return NextResponse.json(
        { message: "Signature verification failed" },
        { status: 400 }
      );
    }
  } catch (error) {
    console.error("Error processing webhook:", error);
    return NextResponse.json({ message: "Server error" }, { status: 500 });
  }
}
