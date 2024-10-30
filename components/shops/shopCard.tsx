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

interface Shop {
  id: string;
  coverUrl: string;
  storeName: string;
  storeDescription: string;
}

interface ShopCardProps {
  shop: Shop;
}

const ShopCard: React.FC<ShopCardProps> = ({ shop }) => {
  return (
    <Card className="w-[400px] bg-gray-200 dark:bg-gray-700 hover:scale-105 transition duration-300 border hover:shadow-lg">
      <CardHeader className="mb-5 p-0">
        <div className="flex flex-col gap-2">
          <Image
            height={1000}
            width={1000}
            alt={`Cover image for ${shop.storeName}`}
            className="rounded-t-lg max-h-52 object-cover"
            src={shop.coverUrl || "/path/to/default-image.png"} // Add a default image path
          />
          <h2 className="text-2xl pt-4 text-customTeal dark:text-Green m-2 justify-center font-handlee text-center">
            {shop.storeName}
          </h2>
        </div>
        <CardDescription className="text-center dark:text-gray-200 text-lg">
          {shop.storeDescription}
        </CardDescription>
      </CardHeader>

      <CardFooter className="flex justify-center">
        <Link href={`/shops/${shop.id}?isfeatured=true`}>
          <Button
            variant="default"
            size={"lg"}
            className="bg-customTeal dark:bg-Green dark:hover:opacity-80 dark:text-gray-100 rounded-full"
          >
            Products
          </Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default ShopCard;