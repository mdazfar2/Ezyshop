// import { auth } from "@clerk/nextjs/server";
import prismadb from "@/lib/prismadb";
// import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";


export async function POST(
    req:Request,
    {params}:{params:{storeId:string}}

) {
    // const session=await getServerSession()
    
        try{
            // const id:string = session?.user.id || ""
            // console.log(id+"this")
            // const userId=id
            const body = await req.json();
            const {label,imageUrl} =body;
            // if(userId!==params.storeId){
            //     console.log(userId+"and"+params.storeId)
            //     return new NextResponse("Unauthenticated",{status:401})
            // }
            if(!label){
                return new NextResponse("Label is required",{status:400})
                
            }

            if(!imageUrl){
                return new NextResponse("imageUrl is required",{status:400})
                
            }

            if(!params.storeId){
                return new NextResponse("storeId is required",{status:400})

            }
        // checking if the store id is corresponded by user id so that some user cant steal someones store id and create a billboard 
            // const storeByUserId= await prismadb.seller.findFirst({
            //     where:{
            //         id:params.storeId,
            //         id:userId
            //     }
            // })

            // if(!storeByUserId){
            //     return new NextResponse("unauthorised",{status:403})

            // }

            const billboard = await prismadb.billboard.create({
                data:{
                    label,
                    imageUrl,
                    storeId : params.storeId

                }
            });

            return NextResponse.json(billboard);
        }catch(error){
            console.log('[BILLBOARDS_POST]',error);

            return new NextResponse("Internal Error",{status:500});
        }
}

//open route for all
export async function GET(
    req:Request,
    {params}:{params:{storeId:string}}

) {
    
        try{
            if(!params.storeId){
                return new NextResponse("storeId is required",{status:400})

            }
      
            const billboards = await prismadb.billboard.findMany({
                where:{
                    storeId:params.storeId
                }
            });

            return NextResponse.json(billboards);
        }catch(error){
            console.log('[BILLBOARDS_GET]',error);

            return new NextResponse("Internal Error",{status:500});
        }
}