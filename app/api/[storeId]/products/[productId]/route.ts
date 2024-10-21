import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

//open route for all
export async function GET(
    //unused
    _req:Request,
    {params}:{params:{productId:string}}
){
    try{
        

        if(!params.productId){
            return new NextResponse("productId is required",{status:400})

        }


        const product = await prismadb.product.findUnique({
            where:{
                id:params.productId
            },
            include:{
                images:true,
                category:true
            }
        })

        return NextResponse.json(product);
    }catch(err){
        console.log('[PRODUCT_GET]',err);
        return new NextResponse("Internal Error",{status:500});
    }
}



export async function DELETE(
    //unused
    _req:Request,
    {params}:{params:{storeId:string,productId:string}}
){
    try{
        

        if(!params.productId){
            return new NextResponse("productId is required",{status:400})

        }

        const product = await prismadb.product.delete({
            where:{
                id:params.productId
            }
        })

        return NextResponse.json(product);
    }catch(err){
        console.log('[PRODUCT_DELETE]',err);
        return new NextResponse("Internal Error",{status:500});
    }
}
