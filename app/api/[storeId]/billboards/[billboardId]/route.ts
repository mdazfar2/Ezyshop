import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

//open route for all
export async function GET(
  //unused
  _req: Request,
  { params }: { params: { billboardId: string } }
) {
  try {
    if (!params.billboardId) {
      return new NextResponse("billboardId is required", { status: 400 });
    }

    const billboard = await prismadb.billboard.findUnique({
      where: {
        id: params.billboardId,
      },
    });

    return NextResponse.json(billboard);
  } catch (err) {
    console.log("[BILLBOARD_GET]", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
}


export async function DELETE(
  //unused
  _req: Request,
  { params }: { params: { storeId: string; billboardId: string } }
) {
  // const session = await getServerSession();
  try {
    // const id: string = session?.user.id || "";

    // const userId = id;

    // if (!userId) {
    //   return new NextResponse("Unauthenticated", { status: 401 });
    // }

    if (!params.billboardId) {
      return new NextResponse("billboardId is required", { status: 400 });
    }

    // checking if the store id is corresponded by user id so that some user cant steal someones store id and create a billboard

    // const storeByUserId = await prismadb.seller.findFirst({
    //   where: {
    //     id: params.storeId,
    //     userId,
    //   },
    // });

    // if (!storeByUserId) {
    //   return new NextResponse("unauthorised", { status: 403 });
    // }

    const billboard = await prismadb.billboard.delete({
      where: {
        id: params.billboardId,
      },
    });

    return NextResponse.json(billboard);
  } catch (err) {
    console.log("[BILLBOARD_DELETE]", err);
    return new NextResponse("Internal Error", { status: 500 });
  }
}
