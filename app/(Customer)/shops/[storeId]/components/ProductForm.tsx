"use client";

import { CartPost } from "@/actions/cart-actions";
import { WishlistPost } from "@/actions/wishlist-actions";
import { Cart, Wishlist } from "@prisma/client";
import { Heart, ShoppingCart } from "lucide-react";
import { useState } from "react";
import toast from "react-hot-toast"; // Import react-hot-toast

interface ProductForm {
  productId: string;
  userId?: string;
  isWishlisted:Wishlist[],
  isInCart:Cart[]
}

export default function ProductForm({ productId, userId ,isWishlisted,isInCart}: ProductForm) {

  const [wishlisted, setWishlisted] = useState(isWishlisted.length > 0);
  const [incart,setInCart] = useState(isInCart.length > 0);

  //   console.log("EFSfe")
  const handleSubmitWishlist = async (formData: FormData) => {
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

  const handleSubmitCart = async (formData: FormData) => {
    // Prevent default form submission behavior
    if (!userId) {
      toast.error("Please authenticate yourself");
    }
    const response = await CartPost(formData);
    if (response.success) {
      // Display success message
      toast.success("Added to cart!");
      setInCart(true);
    } else {
      // Display error message
      toast.error(response.error || "error");
    }
  };
  return (
    <div className="flex p-2 items-center justify-start gap-2">
    <form
      onSubmit={(e) => {
        e.preventDefault(); // Prevent default form submission
        const target = e.target as HTMLFormElement; // Type assertion
        const formData = new FormData(target);
        handleSubmitWishlist(formData); // Call handleSubmit with FormData
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
    <form
      onSubmit={(e) => {
        e.preventDefault(); // Prevent default form submission
        const target = e.target as HTMLFormElement; // Type assertion
        const formData = new FormData(target);
        handleSubmitCart(formData); // Call handleSubmit with FormData
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
      {!incart?<button type="submit">
        <ShoppingCart />
      </button>:
      <ShoppingCart fill="blue" onClick={()=>{toast.error("item is already added to the cart")}}/>
}
    </form>
    </div>
  );
}
