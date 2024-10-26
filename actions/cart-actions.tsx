"use server"

import prismadb from "@/lib/prismadb";
import { Cart, Prisma } from "@prisma/client";

export async function CartPost(
    data: FormData
  ): Promise<{ success: boolean; data?: Cart, error?: string }> {
    const productId = data.get("productid") as string;
    const userId = data.get("userid") as string;
  
    console.log(productId,userId)
    try {
      const res = await prismadb.cart.create({
        data: {
          userId: userId,
          productId: productId,
        },
      });
  
      // console.log(res);
      return { success: true,data:res };
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
          console.log("Prisma error in post cart item route:", err.message);
          return {
            success: false,
            error: err.message,
          };
        }
      // console.log(err);
      return { success: false, error: "An unexpected error occurred." };
    }
  }


export async function CartGetByUser(
  userId: string
): Promise<{ success: boolean; data?: any; error?: string }> {
  // console.log("contrl")
  try {
    const res = await prismadb.cart.findMany({
      where: {
        userId,
      },
      include: {
        product: {
          include: {
            images: true,
          },
        },
      },
    });

    // console.log(res);
    return { success: true, data: res };
  } catch (err) {
    console.log(err);

    return { success: false, error: "An unexpected error occurred." };
  }
}

export async function CartDeleteProduct(
  Id: string,
): Promise<{ success: boolean; error?: string }> {

  // console.log(Id);
  try {
    const res = await prismadb.cart.deleteMany({
      where: {
        id:Id
      },
    });

    if(res.count==0){
      return {success:false, error:"item does not exist on the wishlist"}
    }
      console.log(res);
    // console.log(res)
    return { success: true}; // Include success and return the data
  } catch (err) {
    // console.log(err);

    return { success: false, error: "An unexpected error occurred while deleting" };
  }
} 