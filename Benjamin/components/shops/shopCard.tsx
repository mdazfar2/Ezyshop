import Link from "next/link";
import { Button } from "../ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Image from "next/image";

interface shopCardProps {
  shop: {
    name: string;
    category: string;
    image: string;
    description: string;
  };
}

const ShopCard: React.FC<shopCardProps> = ({ shop }) => {
  return (
    <Card className="w-[400px] border-DarkGray bg-gray-700 hover:scale-105 transition duration-300  border">
      <CardHeader className="mb-5 p-0">
        <div className="flex flex-col gap-2">
          <Image
            height={1000}
            width={1000}
            alt="card image"
            className="rounded-t-lg max-h-52"
            src={shop.image}
          />

          <CardTitle className="flex items-center text-2xl pt-4 text-Green m-2 justify-center font-handlee">
            {shop.name}
          </CardTitle>
        </div>
        <CardDescription className="text-center text-gray-200 text-lg">
          {shop.description}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-center">
        <Link href={`/shops/${shop.name}`}>
          <Button
            variant="default"
            size={"lg"}
            className="bg-Green rounded-full"
          >
            Products
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ShopCard;
