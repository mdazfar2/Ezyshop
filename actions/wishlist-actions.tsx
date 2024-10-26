"use server";

import prismadb from "@/lib/prismadb";
import { Prisma } from "@prisma/client"; // Import Prisma for error handling

export async function WishlistPost(data: FormData): Promise<{ success: boolean; error?: string }> {
    const productId = data.get("productid") as string;
    const userId = data.get("userid") as string;

    try {
        const res = await prismadb.wishlist.create({
            data: {
                userId: userId,
                productId: productId,
            },
        });

        console.log(res);
        return { success: true }; // Return success if the entry was created
    } catch (err) {
        if (err instanceof Prisma.PrismaClientKnownRequestError) {
            // Check if the error code is P2002 (Unique constraint failed)
            if (err.code === "P2002") {
                console.log("Duplicate entry detected:", err.message);
                return { success: false, error: "This item is already in your wishlist." }; // Customize your error message here
            }
        }
        
        // Log the error for any other type of error
        console.log(err);
        return { success: false, error: "An unexpected error occurred." }; // General error message
    }
}
