
import { Card, CardFooter, CardHeader, CardTitle } from "../ui/card";
import { Products } from "@/app/(Customer)/shops/[storeId]/page";
import Image from "next/image";

export interface ProductCardProps {
  product: Products;
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="w-[300px] bg-gray-700">
      <CardHeader className=" p-0">
        <div className="flex flex-col gap-2">
          <Image
            height={1000}
            width={1000}
            alt="card image"
            className=" max-h-96"
            src={product.images[0].url}
          />

          <CardTitle className="flex items-center justify-between text-2xl pt-4 text-Green m-2 px-5 font-handlee">
            <div>{product.name}</div>
            <div className="text-gray-200">
              ₹<span className="text-3xl">{product.price}</span>
            </div>
          </CardTitle>
        </div>
      </CardHeader>

      <CardFooter className="flex flex-col">
        <div className="flex flex-col items-start w-full justify-start">
          <div className="text-gray-100 text-xl">{product.description}</div>

          <div className="text-gray-500 text-sm">{product.category.name}</div>
        </div>
        
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
