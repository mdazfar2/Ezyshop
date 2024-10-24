import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

//open route for all to fetch shops
export async function GET(
  // req: Request,
  // { params }: { params: { storeId: string } }
) {
  try {
    const stores = await prismadb.seller.findMany({
      // select: {
      //   id: true,
      //   name: true,
      //   email: true,
      //   storeName: true,
      //   storeAddress: true,
      //   storeMobile: true,
      //   storeDescription: true,

        // billboards: { // Move the billboards include here
        //   where: {
        //     label: "MainPage"
        //   },
        //   select: {
        //     imageUrl: true
        //   }
        // }
      // },
    });
    // console.log(stores[0].billboards[0].imageUrl);
    return NextResponse.json(stores);
  } catch (error) {
    console.log("[stores_GET]", error);

    return new NextResponse("Internal Error", { status: 500 });
  }
}
