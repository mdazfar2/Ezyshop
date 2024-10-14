import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";

interface ProductCardProps {
  product: {
    product_title: string;
    product_category: string;
    product_shop: string;
    product_img_url: string;
    product_id: number;
    cost: number;
  };
}

const ProductCard: React.FC<ProductCardProps> = ({ product }) => {
  return (
    <Card className="w-[400px] bg-gray-700 hover:scale-105 transition duration-300  border">
      <CardHeader className=" p-0">
        <div className="flex flex-col gap-2">
          <img
            alt="card image"
            className="rounded-t-lg max-h-96"
            src={`/products/${product.product_id}.jpeg`}
          />

          <CardTitle className="flex items-center justify-between text-2xl pt-4 text-Green m-2 px-5 font-handlee">
            <div>{product.product_title}</div>
            <div className="text-gray-200">₹<span className="text-3xl">{product.cost}</span></div>

          </CardTitle>
        </div>
      </CardHeader>

      <CardFooter className="flex flex-col">
        <div className="flex flex-col items-start w-full justify-start">
          <div className="text-gray-100 text-xl">{product.product_category}</div>

          <div className="text-gray-500 text-sm">{product.product_shop}</div>
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
