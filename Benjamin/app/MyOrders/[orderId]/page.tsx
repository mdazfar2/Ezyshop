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
    <div className="flex items-center my-10 w-full justify-center">
      <div className="w-3/4">
        <Link href={"/MyOrders"}>
          <Button className="h-12 mb-10 hover:shadow-lg w-12 p-0">
            <ArrowLeft className="h-10 w-10" />
          </Button>
        </Link>
        <div className="text-gray-200 font-bold text-2xl">Order Summary</div>
        <div className="text-gray-500 text-sm">Arrived at 9:59 pm</div>
        <div className="flex mb-10 hover:cursor-pointer hover:underline items-center text-Green justify-start">
          <div>Download Invoice</div>
          <Download className="h-4 w-4" />
        </div>

        <div className="w-full flex gap-5 flex-col items-center justify-center">
          {orderItems.map((item) => (
            <OrderItem key={item.name} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Order;
