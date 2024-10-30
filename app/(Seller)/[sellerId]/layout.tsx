import { NEXT_AUTH_CONFIG } from "@/lib/auth";
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
  children,
}:SellerLayoutProps) {

  const session=await getServerSession(NEXT_AUTH_CONFIG);

  if(!session?.user.id){
    redirect('/auth/seller')
  }
  
 

    // if (Stores.length){
    //   redirect(`/${Stores[0].id}/dashboard`);
    // }

    // console.log(Stores);

  return (
    <>
      {children}
    </>
  );
}
