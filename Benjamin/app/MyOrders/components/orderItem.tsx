import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

export interface orderItemProps {
  item: {
    name: string;
    variant: String;
    count: number;
    price: number;
    image: string;
  };
}

const OrderItem: React.FC<orderItemProps> = ({ item }) => {
  return (
    <div className="flex bg-gray-700 p-5 rounded-lg shadow-2xl w-full items-center justify-between">
      <div className="flex items-center text-gray-200 justify-center gap-5">
        <Image
          src={item.image}
          className="rounded-lg"
          width={"100"}
          height={"100"}
          alt="orderImage"
        />
        <div className="flex text-gray-200 flex-col items-start justify-center">
          <div className="flex gap-2 font-bold items-center justify-center">
            <div>{item.name}</div>
          </div>
          <div className="text-sm text-gray-500">
            {item.variant} X {item.count}
          </div>
        </div>
      </div>
      <div className="text-gray-200">₹{item.price}</div>
      
    </div>
  );
};

export default OrderItem;
