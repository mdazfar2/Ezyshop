import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";

const OrderCard = () => {
  return (
    <div className="flex bg-gray-700 p-5 rounded-lg shadow-2xl w-full items-center justify-between">
      <div className="flex items-center justify-center gap-5">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <div className="flex text-gray-200 flex-col items-start justify-center">
          <div className="flex gap-2 font-bold items-center justify-center">
            <div>ORD71218238</div>
            <div className="rounded-full h-1 w-1 bg-gray-100"></div>
            <div>₹327</div>
          </div>
          <div className="text-sm text-gray-500">
            Placed on tue, 9 jan'24, 10:16 am
          </div>
        </div>
        <div className="rounded-full text-gray-200 bg-Green text-sm p-1">
          delivered
        </div>
      </div>
      <Link href={"/MyOrders/1"}>
        <Button className="border text-sm font-bold text-Green hover:bg-Green hover:text-gray-200 hover:border hover:border-DarkGray">
          view details
        </Button>
      </Link>
    </div>
  );
};

export default OrderCard;
