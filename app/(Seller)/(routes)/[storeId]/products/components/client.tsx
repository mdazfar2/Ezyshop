"use client"
import { Plus } from "lucide-react"
import { useParams, useRouter } from "next/navigation"

import { Button } from "@/components/ui/button"
import { Heading } from "@/components/ui/heading"
import { Separator } from "@/components/ui/separator"
import { ProductColumn, columns } from "./columns"
import { DataTable } from "@/components/ui/data-table"

interface ProductClientProps{
    data:ProductColumn[]
}
export const ProductClient:React.FC<ProductClientProps> = ({
    data
})=>{

    const router=useRouter()
    const params=useParams()
    return(
        <>
            <div className="flex items-center justify-between">
                <Heading
                    title= {`${data.length} products`}
                    description="Manage products for your store"
                />
                <Button onClick={()=>{
                    router.push(`/${params.storeId}/products/new}`)
                }}>
                    <Plus className="mr-2 h-4 w-4"/>
                    Add new
                </Button>
            </div>
            <Separator/>
            <DataTable columns={columns} data={data} searchKey={"name"}/>
        </>
    )
}