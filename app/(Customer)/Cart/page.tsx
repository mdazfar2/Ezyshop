"use client";

import { CartGetByUser } from "@/actions/cart-actions";
import { useCart } from "@/context/cartContext";
import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import CartItem from "./components/cart-item";
import Summary from "./components/summary";

const CartPage = () => {
  const [isMounted, setIsMounted] = useState(false);

  const {cartItems,setCartItems} = useCart();

  const session = useSession();
  const userId=session.data?.user.id;

  useEffect(() => {
    const getItems = async () => {
      const response = await CartGetByUser(userId||"");
      if (response.success) {
        setCartItems(response.data);
      } else {
        toast.error("error fetching wishlist");
      }
      setIsMounted(true);
    };
    getItems();
    
  }, [userId,setCartItems]);

  if (!isMounted) return null;
  console.log(cartItems);
  return (
    <div className="dark:bg-DarkGray">
      <div className="px-4 py-5 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-customTeal dark:text-Green">Shopping Cart</h1>
        <div className="mt-5 lg:grid lg:grid-cols-12 lg:items-start gap-x-12">
          <div className="lg:col-span-7">
            {/* {cart.items.length===0&&<NoResults/>} */}
            <ul className="flex flex-col gap-2">
              {cartItems.map((item) => (
                <CartItem key={item.id} item={item}/>
              ))}
            </ul>
          </div>
          <Summary/>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default CartPage;
