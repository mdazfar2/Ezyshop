import { Category } from "@prisma/client";
import axios from "axios";

const getCategories = async (storeId: string): Promise<Category[]> => {
  const URL = `${process.env.NEXT_PUBLIC_BASE_URL}/api/${storeId}/categories`;
  try {
    const res = await axios.get(URL);

    return res.data;
  } catch (err) {
    console.error(
      "Error fetching products:",
      err instanceof Error ? err.message : err
    );
    return [];
  }
};

export default getCategories;
