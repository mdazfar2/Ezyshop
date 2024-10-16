import { Button } from "@/components/ui/button";
import { ArrowLeft, Download } from "lucide-react";
import OrderItem from "../components/orderItem";
import Link from "next/link";

const orderItems = [
  {
    name: "Hybrid Tomato",
    variant: "500 g",
    count: 1,
    price: 29,
    image: "/products/tomato.avif",
  },
  {
    name: "Hen Fruit White Protein Rich Eggs",
    variant: "10 pieces",
    count: 1,
    price: 92,
    image: "/products/eggs.avif",
  },
  {
    name: "M-Seal Regular Epoxy Compound Sealant Adhesive",
    variant: "1 piece (90 g)",
    count: 1,
    price: 30,
    image: "/products/mseal.avif",
  },
  {
    name: "Limcee 500mg Vitamin C Chewable Orange Tablets",
    variant: "1 pack (15 pieces)",
    count: 2,
    price: 48,
    image: "/products/limcee.avif",
  },
  {
    name: "Coca-Cola Zero Sugar Soft Drink",
    variant: "300 ml",
    count: 2,
    price: 76,
    image: "/products/cola.avif",
  },
  {
    name: "Happydent White Spearmint Sugar Free Chewing Gum",
    variant: "24.2 g",
    count: 1,
    price: 48,
    image: "/products/happydent.avif",
  },
];

const Order = () => {
  return (
    <div className="flex items-start dark:bg-DarkGray py-10 w-full justify-center min-h-screen">
      <div className="w-3/4 flex flex-col gap-2">
        <Link href={"/MyOrders"}>
          <Button className="h-12 mb-2 bg-customTeal dark:bg-Green hover:opacity-90 hover:shadow-lg w-12 p-0">
            <ArrowLeft className="h-10 w-10" />
          </Button>
        </Link>

        <div className="dark:text-gray-200 font-bold text-2xl">Order Summary</div>
        <div className="text-gray-500 text-sm">Arrived at 9:59 pm</div>
        <div className="flex mb-5 hover:cursor-pointer hover:underline items-center text-customTeal dark:text-green-500 justify-start">
          <div>Download Invoice</div>
          <Download className="h-4 w-4 ml-1" />
        </div>

        {/* Scrollable Content Section */}
        <div className="flex-1 shadow-2xl overflow-y-auto max-h-[400px] w-full border border-gray-700 rounded-lg ">
          {orderItems.map((item) => (
            <OrderItem key={item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
