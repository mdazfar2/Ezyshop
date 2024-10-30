import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function POST(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {

    const body = await req.json();
    const {
      name,
      price,
      categoryId,
      quantity,
      description,
      isFeatured,
      images,
      isArchived,
    } = body;

    if (!name) {
      return new NextResponse("Label is required", { status: 400 });
    }

    if (!price) {
      return new NextResponse("price is required", { status: 400 });
    }
    if (!categoryId) {
      return new NextResponse("categoryId is required", { status: 400 });
    }
    if (!quantity) {
      return new NextResponse("quantity is required", { status: 400 });
    }
    if (!description) {
      return new NextResponse("description is required", { status: 400 });
    }
    if (!images || !images.length) {
      return new NextResponse("images is required", { status: 400 });
    }
    if (!params.storeId) {
      return new NextResponse("storeId is required", { status: 400 });
    }

    const product = await prismadb.product.create({
      data: {
        name,
        price,
        isFeatured,
        isArchived,
        categoryId,
        quantity,
        description,
        storeId: params.storeId,
        images:{
          createMany:{
              data:[
                  ...images.map((image:{url:string})=>image)
              ]
          }
      }
      },
    });

    return NextResponse.json(product);
  } catch (error) {
    console.log("[PRODUCTS_POST]", error);

    return new NextResponse("Internal Error", { status: 500 });
  }
}

//open route for all
export async function GET(
  req: Request,
  { params }: { params: { storeId: string } }
) {
  try {
    const { searchParams } = new URL(req.url);

    const categoryId = searchParams.get("categoryId") || undefined;
    const isFeatured = searchParams.get("isFeatured");

    if (!params.storeId) {
      return new NextResponse("storeId is required", { status: 400 });
    }

    const products = await prismadb.product.findMany({
      where: {
        storeId: params.storeId,
        categoryId,
        isFeatured: isFeatured ? true : undefined, // undefined will ignore this filter
        isArchived: false,
      },
      include: {
        category:{
          select:{
            name:true
          }
        }, // Includes the category details
        seller: {       // Proper structure for including seller
          select: {
            storeName: true, // Selects only the storeName from seller
          },
        },
        images:{
          select:{
            url:true
          }
        }
      },
      orderBy: {
        createdAt: "desc", // Orders products by creation date (newest first)
      },
    });
    // console.log(products)
    return NextResponse.json(products);
  } catch (error) {
    console.log("[PRODUCTS_GET]", error);

    return new NextResponse("Internal Error", { status: 500 });
  }
}
