"use server"

import prismadb from "@/lib/prismadb";
import { Prisma } from "@prisma/client";
// import { PrismaClientKnownRequestError } from "@prisma/client/runtime/library";

export async function CartPost(
    data: FormData
  ): Promise<{ success: boolean; error?: string }> {
    const productId = data.get("productid") as string;
    const userId = data.get("userid") as string;
  
    try {
      const res = await prismadb.cart.create({
        data: {
          userId: userId,
          productId: productId,
        },
      });
  
      console.log(res);
      return { success: true };
    } catch (err) {
      if (err instanceof Prisma.PrismaClientKnownRequestError) {
          console.log("Prisma error in post cart item route:", err.message);
          return {
            success: false,
            error: err.message,
          };
        }
      console.log(err);
      return { success: false, error: "An unexpected error occurred." };
    }
  }