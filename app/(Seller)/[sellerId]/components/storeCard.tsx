import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { NEXT_AUTH_CONFIG } from "@/lib/auth";
import { Store } from "@prisma/client";
import { getServerSession } from "next-auth";
import Image from "next/image";
import Link from "next/link";

const StoreCard = async ({ card }: { card: Store }) => {
  const session = await getServerSession(NEXT_AUTH_CONFIG);

  const sellerId = session?.user.id;

  return (
    <Card
      key={card.storeName}
      className="min-w-[250px] max-w-[350px] shadow-md bg-gray-200 dark:bg-gray-700 "
    >
      <CardHeader>
        <div className="flex gap-2 items-center flex-col text-customTeal dark:text-Green justify-center">
          <Image width={1000} height={1000} src={card.coverUrl} alt="" />
          <CardTitle className="text-xl md:text-2xl ml-4 font-bold font-handlee text-customBlue dark:text-Yellow">
            {card.storeName}
          </CardTitle>
        </div>
        <CardDescription className="text-xl text-gray-500 dark:text-gray-200">
          {card.storeDescription}
        </CardDescription>
      </CardHeader>
      <CardFooter className="flex items-center justify-center">
        <Link href={`/${sellerId}/${card.id}/dashboard`}>
          <Button>Dashboard</Button>
        </Link>
      </CardFooter>
    </Card>
  );
};

export default StoreCard;
