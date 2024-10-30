import getCategories from "actions/get-categories";
import getProducts from "actions/get-products";
import ProductCard from "@/components/shops/productCard";
import { Cart, Category, Image, Product, Store, Wishlist } from "@prisma/client";
import Filter from "./components/filter";
import prismadb from "lib/prismadb";
import ClientSearchBar from "@/components/shops/clientSearchBar";
import StaticMap from "@/components/Maps/staticMap";
import { Heading } from "@/components/ui/heading";
import { getServerSession } from "next-auth";
import { NEXT_AUTH_CONFIG } from "lib/auth";
import { Toaster } from "react-hot-toast";
import ProductForm from "./components/ProductForm";

export interface CategoryProductsProps {
  params: {
    storeId: string;
  };
  searchParams: {
    categoryId?: string;
    isfeatured?: boolean;
    productName?: string;
  };
}

export interface Products extends Product {
  Store: {
    storeName: string;
  };
  category: {
    name: string;
  };
  images: Image[];
  wishlists: Wishlist[];
  cart:Cart[]
}
// export const revalidate = 0;
const CategoryProducts: React.FC<CategoryProductsProps> = async ({
  params,
  searchParams,
}) => {
  const session = await getServerSession(NEXT_AUTH_CONFIG);

  // Access the user ID from the session
  const userId = session?.user?.id;

  // console.log(userId);
  // if(!userId)
  const store: Store | null = await prismadb.store.findUnique({
    where: {
      id: params.storeId,
    }
  });

  if(!store){
    return <div>
      no store found
    </div>
  }


  const categories: Category[] = await getCategories(store?.SellerId,params.storeId);
  const products: Products[] = await getProducts(
    {
      isFeatured: searchParams.isfeatured,
      categoryId: searchParams.categoryId,
      productName: searchParams.productName,
    },
    params.storeId,
    userId
  );
  

  
  // console.log(products);

  // if (loading) {
  // return <Spinner />;
  // }

  // console.log(categories)
  // console.log(products[0]+"<-------------")
  if (!store) return <div>store not found</div>;
  return (
    <>
      <div className="h-full mb-10">
        <div className="relative flex items-center justify-center p-24 ">
          {/* Background via ::before */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: store?.coverUrl
                ? `url(${store.coverUrl})`
                : "none",
              opacity: 0.2, // Control the opacity of the background image
              zIndex: -1, // Keep it behind the content
            }}
          ></div>

          {/* Foreground content */}
          <div className="relative z-10 text-4xl pt-5 lg:pt-0 lg:text-7xl text-center lg:text-start font-extrabold font-handlee">
            {store?.storeName || "Store"}
            {/* <LazyStaticMap longitude={store?.storeLat||0} latitude={store?.storeLng||0}/> */}
          </div>
        </div>
        <div className="flex gap-2 my-2 items-center justify-center">
          {categories.map((category) => (
            <Filter
              key={category.id}
              category={category}
              currentId={searchParams.categoryId}
            />
            
          ))}
        </div>

        <div className="w-full flex justify-center px-5 lg:px-0 mb-10">
          <ClientSearchBar initialSearch={searchParams.productName || ""} />
        </div>
        <div className="grid grid-cols-12">
          <div className="flex col-span-3 rounded-xl max-h-fit ml-5 p-5 bg-gray-200 dark:bg-gray-700  flex-col items-center justify-center gap-10 ">
            <div className="text-gray-200">
              <Heading
                title={store.storeName}
                description={`Contact us at: ${store.storeMobile}`}
              />
            </div>
            <div className="w-full">
              <StaticMap
                storeLat={store.storeLat || 0}
                storeLng={store.storeLng || 0}
              />
            </div>
          </div>
          <div className="flex col-span-9 flex-col items-center justify-center gap-10 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-24">
            {products.map((product) => (
              <div key={product.id} className="rounded-xl bg-gray-700 w-[300px]  hover:scale-105 transition duration-300  border">
                {userId&&(<ProductForm product={product} userId={userId}/>)}

                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
        <Toaster/>
      </div>
    </>
  );
};

export default CategoryProducts;
