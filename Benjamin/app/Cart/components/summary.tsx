"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";

const Summary = () => {
  const [userDetails, updateUserDetails] = useState({
    Fullname: "",
    Address: "",
    Phone: "",
    Email: ""
  });

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
            "
    >
      <div>
        <h2 className="text-lg font-bold text-Green pb-2">Order Summary</h2>
        <h3 className="text-m font-medium text-gray-900 py-4 border-t">Your Details</h3>
        {/* Each Inputbox component handles its respective field */}
        <div className="lg:grid gap-2 grid-cols-2">
          <Input
            placeholder="Name"
            onChange={handleInputChange("Fullname")} // Call handleInputChange with the specific field
            // data={userDetails.Fullname}
          />
          <Input
            placeholder="Address"
            onChange={handleInputChange("Address")}
            // data={userDetails.Address}
          />
          <Input
            placeholder="Phone"
            onChange={handleInputChange("Phone")}
            // data={userDetails.Phone}
          />
          <Input
            placeholder="Email"
            onChange={handleInputChange("Email")}
            // data={userDetails.Email}
          />
        </div>
      </div>
      <div className="mt-6 space-y-4">
        <div className="flex items-center justify-between border-t border-gray-200 pt-4">
          <div className="text-base font-medium text-gray-900">Order Total</div>
          {/* <Currency value={totalPrice} />
           */}
           ₹{566}
        </div>
      </div>
      <Button className="w-full bg-Green mt-6">
        Checkout
      </Button>
    </div>
  );
};

export default Summary;
