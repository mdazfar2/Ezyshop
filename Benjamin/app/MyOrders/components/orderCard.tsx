import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { order } from "./columns";

interface OrderCardProps {
  orderItem: order;
}

const OrderCard = (props: OrderCardProps) => {
  const { orderItem } = props;
  let statusClass = "";
  switch (orderItem.status) {
    case "out for delivery":
      statusClass = "bg-yellow-500";
      break;
    case "processing":
      statusClass = "bg-blue-500";
      break;
    case "delivered":
      statusClass = "bg-green-500"; 
      break;
    case "failed":
      statusClass = "bg-red-500"; 
      break;
    default:
      statusClass = "bg-gray-500"; 
  }
  return (
    <div className="flex bg-gray-700 gap-2 md:gap-5 p-5 rounded-lg shadow-2xl w-full items-center justify-between">
      <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
      </div>
      <div className="w-full grid grid-col-8 gap-2">
        <div className="col-span-8 md:col-span-8 text-gray-200 ">
          <div className="flex gap-2 font-bold items-center justify-between">
            <div className="text-md md:text-lg">{ orderItem.orderId }</div>
            <div className={`text-sm md:text-md rounded-[10px] text-center text-gray-200 bg-Green text-xs md:text-sm py-1 px-1 sm:px-3 ${statusClass}`}>
              {orderItem.status}
            </div>
          </div>
        </div>
        <div className="col-span-8  md:col-span-8 text-gray-200 ">
          <div className="flex gap-2 text-sm md:text-md font-bold items-center justify-between">
            <div className="text-xs md:text-sm text-gray-500">
              {orderItem.date}
            </div>
            <div className="text-md md:text-xl ">₹{orderItem.amount}</div>
          </div>
        </div>
      </div>
      <Link href={"/MyOrders/1"}>
        <Button className="bg-transparent hover:bg-transparent text-sm font-bold text-Green hover:text-Yellow p-0 pl-1">
          <i className="text-md md:text-2xl fa-solid fa-angle-right"></i>
        </Button>
      </Link>
    </div>
  );
};

export default OrderCard;
