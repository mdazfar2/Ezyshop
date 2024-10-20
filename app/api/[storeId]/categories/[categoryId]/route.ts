import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function DELETE(
    //unused
    _req:Request,
    {params}:{params:{storeId:string,categoryId:string}}
){
    try{
        
        if(!params.categoryId){
            return new NextResponse("categoryId is required",{status:400})

        }


        const category = await prismadb.category.delete({
            where:{
                id:params.categoryId
            }
        })

        return NextResponse.json(category);
    }catch(err){
        console.log('[CATEGORY_DELETE]',err);
        return new NextResponse("Internal Error",{status:500});
    }
}
