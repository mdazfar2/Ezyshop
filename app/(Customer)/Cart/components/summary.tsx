"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useCart } from "@/context/cartContext";
import { useSession } from "next-auth/react";
import { useState } from "react";

const Summary = () => {
  const session=useSession()
  console.log(session.data)
  const [userDetails, updateUserDetails] = useState({
    Fullname: session.data?.user.name,
    Address: "",
    Phone: "",
    Email: session.data?.user.email
  });

  const {cartItems}=useCart();

  const amount=cartItems.reduce((initial,value)=>{
    return initial+value.product.price
  },0);

  const handleInputChange = (field: keyof typeof userDetails) => (e: React.ChangeEvent<HTMLInputElement>) => {
    updateUserDetails({
      ...userDetails, // Spread the previous state
      [field]: e.target.value // Update the specific field
    });
  };

  return (
    <div
      className="
            mt-16 
            rounded-lg 
            bg-gray-50
            px-4
            py-6
            sm:p-6
            lg:col-span-5
            lg:mt-0
            lg:p-8
            dark:bg-gray-700
            "
    >
      <div >
        <h2 className="text-lg font-bold dark:bg-gray-700 text-customTeal dark:text-Green pb-2">Order Summary</h2>
        <h3 className="text-m font-medium dark:text-gray-100  py-4 border-t ">Your Details</h3>
        {/* Each Inputbox component handles its respective field */}
        <div className="lg:grid gap-2 grid-cols-2">
          <Input
          className="dark:bg-gray-800"
            placeholder="Name"
            onChange={handleInputChange("Fullname")} // Call handleInputChange with the specific field
            // data={userDetails.Fullname}
            value={userDetails.Fullname}
          />
          <Input
          className="dark:bg-gray-800"
            placeholder="Address"
            onChange={handleInputChange("Address")}
            // data={userDetails.Address}
          />
          <Input
          className="dark:bg-gray-800"
            placeholder="Phone"
            onChange={handleInputChange("Phone")}
            // data={userDetails.Phone}
          />
          <Input
          className="dark:bg-gray-800"
            placeholder="Email"
            onChange={handleInputChange("Email")}
            // data={userDetails.Email}
            value={userDetails.Email}
          />
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200  dark:text-gray-100 pt-4">
          <div className="text-base font-medium text-gray-900 dark:text-gray-100">Order Total</div>
          {/* <Currency value={totalPrice} />
           */}
           ₹{amount}
        </div>
      </div>
      <Button className="w-full bg-customTeal dark:bg-Green dark:text-gray-100 dark:hover:opacity-80 mt-6">
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
