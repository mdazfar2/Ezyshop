import prismadb from "lib/prismadb";
import { NextResponse } from "next/server";

export async function PATCH(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const body = await req.json();

    // Destructure the required fields from the request body
    console.log(body)
    const {
      storeName,
      storeAddress,
      storeUPI,
      storeMobile,
      storeDescription,
      coverUrl,
      storeLocation
    } = body;

    const {storeLat,storeLng}=storeLocation

    // console.log(storeLat+" "+storeLng)
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
    if(!coverUrl){
      return new NextResponse("Lng is required.", { status: 400 });

    }
    // Optional: You can check the validity of the email and coverUrl if needed

    // Update the seller record in the database
    const updatedStore = await prismadb.store.update({
      where: {
        id: params.storeId,
      },
      data: {
        storeName,
        storeAddress,
        storeUPI,
        storeMobile,
        storeDescription,
        coverUrl,
        storeLat,
        storeLng
      },
    });

    // Return the updated seller information
    return NextResponse.json(updatedStore);
  } catch (err) {
    console.log('[SELLER_PATCH]', err);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}
