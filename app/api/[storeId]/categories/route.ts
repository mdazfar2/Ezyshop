
import { NextResponse } from "next/server";

import prismadb from "@/lib/prismadb";

export async function POST(
    req:Request,
    {params}:{params:{storeId:string}}

) {
    
        try{
            // const {userId} = auth();

            const body = await req.json();
            const {name,billboardId} =body;
            // if(!userId){

            //     return new NextResponse("Unauthenticated",{status:401})
            // }
            if(!name){
                return new NextResponse("name is required",{status:400})
                
            }

            if(!billboardId){
                return new NextResponse("billboardId is required",{status:400})
                
            }

            if(!params.storeId){
                return new NextResponse("storeId is required",{status:400})

            }
        // checking if the store id is corresponded by user id so that some user cant steal someones store id and create a category 
            // const storeByUserId= await prismadb.store.findFirst({
            //     where:{
            //         id:params.storeId,
            //         userId
            //     }
            // })

            // if(!storeByUserId){
            //     return new NextResponse("unauthorised",{status:403})

            // }

            const category = await prismadb.category.create({
                data:{
                    name,
                    billboardId,
                    storeId : params.storeId

                }
            });

            return NextResponse.json(category);
        }catch(error){
            console.log('[CATEGORIES_POST]',error);

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
      
            const categories = await prismadb.category.findMany({
                where:{
                    storeId:params.storeId
                }
            });
            // console.log(categories)
            return NextResponse.json(categories);
        }catch(error){
            console.log('[CATEGORIES_GET]',error);

            return new NextResponse("Internal Error",{status:500});
        }
}