import prismadb from "@/lib/prismadb";
import { Seller } from "@prisma/client";

const getSeller = async (storeId: string) => {
    
    try {
        const seller=await prismadb.seller.findUnique({
            where:{
              id:storeId
            },
            select:{
              coverUrl:true
            }
          })
          if(!seller) return process.env.NEXT_PUBLIC_BASE_Cover
          return seller.coverUrl
    } catch (err) {
      console.error(
        "Error fetching seller",
        err instanceof Error ? err.message : err
      );
      return process.env.NEXT_PUBLIC_BASE_Cover;
    }
  };

  
export default getSeller;