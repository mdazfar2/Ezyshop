
import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import ProductCard from "@/components/shops/productCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Category, Image, Product } from "@prisma/client";
import { Search } from "lucide-react";
import Filter from "./components/filter";

export interface CategoryProductsProps {
  params:{
    storeId:string
  },
  searchParams:{
    categoryId?:string,
    isfeatured?:boolean
  }
}

export interface Products extends Product{
  seller: {
    storeName: string;
  };
  category: {
    name: string;
  };
  images: Image[];
}
// export const revalidate = 0;
const CategoryProducts:React.FC<CategoryProductsProps> = async({params,searchParams}) => {
  const categories:Category[]=await getCategories(params.storeId);
  const products:Products[] = await getProducts(
    {
      isFeatured:searchParams.isfeatured,
      categoryId:searchParams.categoryId
    },params.storeId
  );
  // console.log(products); 

  // if (loading) {
    // return <Spinner />;
  // }
  
  // console.log(categories)
  return (
    <>
      <div className="h-full mb-10">
        <div className="flex items-center justify-center bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow h-full p-24">
          <div className="text-4xl pt-5 lg:pt-0 lg:text-7xl text-center lg:text-start font-extrabold font-handlee">
            {products.length > 0 ? products[0].seller.storeName : "Store"}
          </div>
        </div>
        <div className="flex gap-2 my-2 items-center justify-center">
        {categories.map((category)=>(
            <Filter key={category.id} category={category} currentId={searchParams.categoryId}/>
          ))}
        </div>

        <div className="w-full flex justify-center px-5 lg:px-0 mb-10">
          <div className="bg-customTeal dark:bg-Green p-1 flex items-center justify-center rounded-full w-full lg:w-2/6">
            <Input
              placeholder="Search Products..."
              className="rounded-full bg-white"
            />
            <Button className="bg-customTeal dark:bg-Green hover:shadow-slate-500 rounded-full">
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
