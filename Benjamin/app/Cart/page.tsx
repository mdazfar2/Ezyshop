"use client";

import { useEffect, useState } from "react";
import Summary from "./components/summary";
import CartItem from "./components/cart-item";
const cart = [
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

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // const cart=useCart()

  if (!isMounted) return null;

  return (
    <div className="bg-white">
      <div className="px-4 py-5 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-Green">Shopping Cart</h1>
        <div className="mt-5 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
          <div className="lg:col-span-7">
            {/* {cart.items.length===0&&<NoResults/>} */}
            <ul>
              {cart.map((item) => (
                <CartItem key={item.name} item={item} />
              ))}
            </ul>
          </div>
          {/* <div>
                            hi
                        </div> */}
          <Summary />
        </div>
      </div>
    </div>
  );
};

export default CartPage;
