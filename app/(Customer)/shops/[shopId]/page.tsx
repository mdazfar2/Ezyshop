"use client";
import ProductCard from "@/components/shops/productCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Spinner } from "@/components/ui/spinner";
import { Image, Product } from "@prisma/client";
import axios from "axios";
import { Search } from "lucide-react";
import { useParams } from "next/navigation";
import { useCallback, useEffect, useState } from "react";

export interface CategoryProductsProps extends Product {
  seller: {
    storeName: string;
  };
  category: {
    name: string;
  };
  images: Image[];
}

const CategoryProducts = () => {
  const params = useParams();
  const shopId = params.shopId;

  const [products, setProducts] = useState<CategoryProductsProps[]>([]);
  const [loading, setLoading] = useState(true);

  const getProducts = useCallback(async () => {
    try {
      const response = await axios.get(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/${shopId}/products`
      ); // Axios GET request

      setProducts(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    } finally {
      setLoading(false);
    }
  }, [shopId]);

  useEffect(() => {
    getProducts();
  }, [getProducts]);

  if (loading) {
    return <Spinner />;
  }

  return (
    <>
      <div className="h-full mb-10">
        <div className="flex items-center justify-center bg-gradient-to-r from-Green to-Yellow h-full mb-20 p-24">
          <div className="text-4xl pt-5 lg:pt-0 lg:text-7xl text-center lg:text-start font-extrabold font-handlee">
            {products.length > 0 ? products[0].seller.storeName : "Store"}
          </div>
        </div>

        <div className="w-full flex justify-center px-5 lg:px-0 mb-10">
          <div className="bg-Green p-1 flex items-center justify-center rounded-full w-full lg:w-2/6">
            <Input
              placeholder="Search Products..."
              className="rounded-full bg-white"
            />
            <Button className="bg-Green hover:shadow-slate-500 rounded-full">
              <Search className="h-7 w-7" />
            </Button>
          </div>
        </div>

        <div className="flex flex-col items-center justify-center gap-10 px-10 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-24">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryProducts;
