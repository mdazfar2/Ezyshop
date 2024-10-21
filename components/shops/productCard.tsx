import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";
import { CategoryProductsProps } from "@/app/(Customer)/shops/[shopId]/page";

interface ProductCardProps {
  product:CategoryProductsProps
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="w-[400px] bg-gray-700 hover:scale-105 transition duration-300  border">
      <CardHeader className=" p-0">
        <div className="flex flex-col gap-2">
          <Image
            height={1000}
            width={1000}
            alt="card image"
            className="rounded-t-lg max-h-96"
            src={`${product.images[0].url}`}
          />

          <CardTitle className="flex items-center justify-between text-2xl pt-4 text-Green m-2 px-5 font-handlee">
            <div>{product.name}</div>
            <div className="text-gray-200">₹<span className="text-3xl">{product.price}</span></div>

          </CardTitle>
        </div>
      </CardHeader>

      <CardFooter className="flex flex-col">
        <div className="flex flex-col items-start w-full justify-start">
          <div className="text-gray-100 text-xl">{product.description}</div>

          <div className="text-gray-500 text-sm">{product.category.name}</div>
        </div>
        <Link href={`#`}>
          <Button
            variant="default"
            size={"lg"}
            className="bg-Green rounded-full w-full"
          >
            Add to cart
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
