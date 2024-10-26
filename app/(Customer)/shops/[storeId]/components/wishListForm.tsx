"use client";

import { WishlistPost } from "@/actions/wishlist-actions";
import { Wishlist } from "@prisma/client";
import { Heart } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast"; // Import react-hot-toast

interface WishlistForm {
  productId: string;
  userId?: string;
  isWishlisted:Wishlist[]
}

export default function WishlistForm({ productId, userId ,isWishlisted}: WishlistForm) {

  const [wishlisted, setWishlisted] = useState(isWishlisted.length > 0);

  const handleSubmit = async (formData: FormData) => {
    // Prevent default form submission behavior
    if (!userId) {
      toast.error("Please authenticate yourself");
    }
    const response = await WishlistPost(formData);
    if (response.success) {
      // Display success message
      toast.success("Added to wishlist!");
      setWishlisted(true);
    } else {
      // Display error message
      toast.error(response.error || "error");
    }
  };
  //   console.log("EFSfe")
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault(); // Prevent default form submission
        const target = e.target as HTMLFormElement; // Type assertion
        const formData = new FormData(target);
        handleSubmit(formData); // Call handleSubmit with FormData
      }}
      className="p-1"
    >
      <input
        hidden
        type="text"
        name="productid"
        value={productId}
        placeholder="Product ID"
        required
      />
      <input
        hidden
        type="text"
        name="userid"
        value={userId}
        placeholder="User ID"
        required
      />
      {!wishlisted?<button type="submit">
        <Heart />
      </button>:
      <Heart fill="red" onClick={()=>{toast.error("item is already wishlisted")}}/>
}
    </form>
  );
}
