import prismadb from "lib/prismadb";
import { NextResponse } from "next/server";

export async function POST(
  req: Request,
  { params }: { params: { sellerId: string } }
) {
  try {
    const body = await req.json();

    // console.log(body+"ADWwwwwwwwwwwwwwwwwwwwwwwww")
    // Destructure the required fields from the request body
    console.log(params.sellerId)
    const {
      storeName,
      storeAddress,
      storeUPI,
      storeMobile,
      storeLat,
      storeLng,
      storeDescription,
      coverUrl,
    } = body.data;


    // console.log(storeName,
    //     storeAddress,
    //     storeUPI,
    //     storeMobile,
    //     storeLat,
    //     storeLng,
    //     storeDescription,
    //     coverUrl)
    // Validate the required fields
    if (!storeName) {
      return new NextResponse("Shop name is required.", { status: 400 });
    }
    if (!storeAddress) {
      return new NextResponse("Address is required.", { status: 400 });
    }
    if (!storeUPI) {
      return new NextResponse("UPI is required.", { status: 400 });
    }
    if (!storeMobile) {
      return new NextResponse("Mobile number is required.", { status: 400 });
    }
    if (!storeDescription) {
      return new NextResponse("Description is required.", { status: 400 });
    }
    if (!storeLat) {
      return new NextResponse("Lat is required.", { status: 400 });
    }
    if (!storeLng) {
      return new NextResponse("Lng is required.", { status: 400 });
    }
    if (!coverUrl) {
      return new NextResponse("coverUrl is required.", { status: 400 });
    }
    // Optional: You can check the validity of the email and coverUrl if needed

    // Update the seller record in the database
    const updatedSeller = await prismadb.store.create({
      data: {
        storeName,
        storeAddress,
        storeUPI,
        storeMobile,
        storeDescription,
        coverUrl:coverUrl[0],
        storeLat,
        storeLng,
        SellerId:params.sellerId
      },
    });

    // Return the updated seller information
    return NextResponse.json(updatedSeller);
  } catch (err) {
    console.log('[SELLER_PATCH]', err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
