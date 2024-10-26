"use client";

import { CartPost } from "@/actions/cart-actions";
import { WishlistPost } from "@/actions/wishlist-actions";
import { Spinner } from "@/components/ui/spinner";
import { useCart } from "@/context/cartContext";
import { Heart, ShoppingCart } from "lucide-react";
import { useEffect, useState } from "react";
import toast from "react-hot-toast"; // Import react-hot-toast
import { Products } from "../page";

interface ProductForm {
  userId?: string;
  product: Products;
}

export default function ProductForm({ product, userId }: ProductForm) {
  const { cartItems, setCartItems } = useCart();

  const [wishlisted, setWishlisted] = useState(product.wishlists.length > 0);
  const [incart, setInCart] = useState(product.cart.length>0);
  const [loading,setloading]=useState(false);

  //   console.log("EFSfe")
  useEffect(() => {
    // const isInCart = cartItems.some((item) => item.productId === product.id); // Use .some() for boolean result
    // setInCart(isInCart); // Update inCart
    setloading(false)
  }, []);


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
    if (response.success && response.data) {
      // Display success message
      toast.success("Added to cart!");
      // setInCart(true);
      setCartItems([
        ...cartItems,
        {
          userId: response.data.userId,
          productId: response.data.productId,
          product: {
            ...product,
            images: product.images,
          },
          id: response.data.id,
          createdAt: response.data?.createdAt,
        },
      ]);
      setInCart(true); 
    } else {
      // Display error message
      toast.error(response.error || "error");
    }
  };

  if(loading) return <Spinner/>

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
          value={product.id}
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
        {!wishlisted ? (
          <button type="submit">
            <Heart />
          </button>
        ) : (
          <Heart
            fill="red"
            onClick={() => {
              toast.error("item is already wishlisted");
            }}
          />
        )}
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
          value={product.id}
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
        {!incart ? (
          <button type="submit" >
            <ShoppingCart />
          </button>
        ) : (
          <ShoppingCart
            fill="blue"
            onClick={() => {
              toast.error("item is already added to the cart");
            }}
          />
        )}
      </form>
    </div>
  );
}
