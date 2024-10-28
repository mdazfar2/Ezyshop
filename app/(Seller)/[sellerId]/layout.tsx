import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import prismadb from "@/lib/prismadb";
import { Store } from "@prisma/client";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";
import { ReactNode } from "react";

interface SellerLayoutProps{
  params:{
    sellerId:string,
  },
 
  children:ReactNode

}
export default async function SellerLayout({
  params,
  children,
}:SellerLayoutProps) {

  const session=await getServerSession(NEXT_AUTH_CONFIG);

  if(!session?.user.id){
    redirect('/seller/auth')
  }
  
  let Stores: Store[] | null = [];
    try {
      Stores = await prismadb.store.findMany({
        where: {
          SellerId:params.sellerId,
        },
      });
    } catch (err) {
      console.error(
        "Error fetching Store",
        err instanceof Error ? err.message : err
      );
    }

    // if (Stores.length){
    //   redirect(`/${params.sellerId}/${Stores[0]}/dashboard`);
    // }

    console.log(Stores);

  return (
    <>
      {children}
    </>
  );
}
