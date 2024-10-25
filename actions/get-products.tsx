import { Products } from "@/app/(Customer)/shops/[storeId]/page";
import { Product } from "@prisma/client";
import axios from "axios";
import qs from "query-string";

interface Query {
  categoryId?: string;
  isFeatured?: boolean;
}

const getProducts = async (
  query: Query,
  storeId: string
): Promise<Products[]> => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/${storeId}/products`;

  const url = qs.stringifyUrl({
    url: URL,
    query: {
      categoryId: query.categoryId,
      isFeatured: query.isFeatured,
    },
  });
  // console.log(url)
  try{
    const res = await axios.get(url);
    // console.log(res.data)
    return res.data;

  }catch(err){
    console.error("Error fetching products:", err instanceof Error ? err.message : err);
    return [];
  }
};

export default getProducts;
