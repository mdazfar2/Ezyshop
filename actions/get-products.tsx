// "use server"

// import { Products } from "@/app/(Customer)/shops/[storeId]/page";
// import { Product } from "@prisma/client";
// import axios from "axios";
// import qs from "query-string";

// interface Query {
//   categoryId?: string;
//   isFeatured?: boolean;
//   productName?: string
// }

// const getProducts = async (
//   query: Query,
//   storeId: string
// ): Promise<Products[]> => {
//   const URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/${storeId}/products`;

//   const url = qs.stringifyUrl({
//     url: URL,
//     query: {
//       categoryId: query.categoryId,
//       isFeatured: query.isFeatured,
//     },
//   });
//   // console.log(url)
//   try{
//     const res = await axios.get(url);
//     // console.log(res.data)
//     return res.data;

//   }catch(err){
//     console.error("Error fetching products:", err instanceof Error ? err.message : err);
//     return [];
//   }
// };

// export default getProducts;
"use server"

import prismadb from "@/lib/prismadb";

interface GetProductsParams {
  isFeatured?: boolean;
  categoryId?: string;
  productName?: string; // Add productName to the params
}

export default async function getProducts(
  params: GetProductsParams,
  storeId: string,
  userId?:string
) {
  const { isFeatured, categoryId, productName } = params;

  let Featured
  if(isFeatured){
    Featured=true;
  }

  // console.log(productName)
  const products = await prismadb.product.findMany({
    where: {
      storeId,
      isFeatured: Featured || undefined,
      categoryId: categoryId || undefined,
      name: productName
        ? {
            startsWith: productName, // Use startsWith to match products by name prefix
            mode: "insensitive", // Case-insensitive search
          }
        : undefined,
    },
    include: {
      seller: { select: { storeName: true } },
      category: { select: { name: true } },
      images: true,
      wishlists:userId?{
        where:{
          userId: userId?userId:undefined
        }
      }:undefined,
      cart:userId?{
        where:{
          userId: userId?userId:undefined
        }
      }:undefined
    },
  });
  // console.log(products);
  return products;
}
