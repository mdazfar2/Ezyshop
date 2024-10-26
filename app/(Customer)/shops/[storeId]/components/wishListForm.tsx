"use client";

import { WishlistPost } from "@/actions/wishlist-actions";
import { Heart } from "lucide-react";
import toast from "react-hot-toast"; // Import react-hot-toast

interface WishlistForm {
  productId: string;
  userId?: string;
}

export default function WishlistForm({ productId, userId }: WishlistForm) {
  // This is a client-side function for handling form submissions
  const handleSubmit = async (formData: FormData) => {
    // Prevent default form submission behavior
    if (!userId) {
      toast.error("Please authenticate yourself");
    }
    const response = await WishlistPost(formData);
    if (response.success) {
      // Display success message
      toast.success("Added to wishlist!");
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
      <button type="submit">
        <Heart />
      </button>
    </form>
  );
}
