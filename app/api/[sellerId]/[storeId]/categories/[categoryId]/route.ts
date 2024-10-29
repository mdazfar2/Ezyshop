import prismadb from "@/lib/prismadb";
import { NextResponse } from "next/server";

export async function GET(
    //unused
    _req:Request,
    {params}:{params:{categoryId:string}}
){
    try{
        

        if(!params.categoryId){
            return new NextResponse("categoryId is required",{status:400})

        }


        const category = await prismadb.category.findUnique({
            where:{
                id:params.categoryId
            },
            include:{
                billboard:true
            }
        })

        return NextResponse.json(category);
    }catch(err){
        console.log('[CATEGORY_GET]',err);
        return new NextResponse("Internal Error",{status:500});
    }
}

export async function PATCH(
    req:Request,
    {params}:{params:{storeId:string,categoryId:string}}
){
    try{
       
        const body = await req.json();

        const {name,billboardId} = body;

        if(!name){
            return new NextResponse("name is required",{status:400})

        }

        if(!billboardId){
            return new NextResponse("billboardId is required",{status:400})

        }

        if(!params.categoryId){
            return new NextResponse("categoryId is required",{status:400})

        }
        

        const category = await prismadb.category.update({
            where:{
                id:params.categoryId,
            },
            data:{
                name,
                billboardId
            }
        })

        return NextResponse.json(category);
    }catch(err){
        console.log('[CATEGORY_PATCH]',err);
        return new NextResponse("Internal Error",{status:500});
    }
}

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
