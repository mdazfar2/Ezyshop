"use client"; // Ensure it runs only in the browser

import { productWithImages } from "@/app/(Customer)/WishList/page";
import { Cart } from "@prisma/client";
import React, {
  createContext,
  useContext,
  useState,
  ReactNode,
  Dispatch,
  SetStateAction,
} from "react";

// Cart item interface extending Prisma's Cart model
export interface CartProps extends Cart {
  product: productWithImages;
}

// CartContextType with necessary types
interface CartContextType {
  cartItems: CartProps[]; // List of cart items
  setCartItems: Dispatch<SetStateAction<CartProps[]>>; // Setter for cart items
  handleRemove: (id: string) => void; // Function to remove item by ID
}

// Create the context with undefined as initial value
const CartContext = createContext<CartContextType | undefined>(undefined);

// CartProvider to wrap components where cart state is required
export const CartProvider = ({ children }: { children: ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartProps[]>([]);

  // Function to remove an item from the cart by its ID
  const handleRemove = (id: string) => {
    setCartItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  return (
    <CartContext.Provider value={{ cartItems, setCartItems, handleRemove }}>
      {children}
    </CartContext.Provider>
  );
};

// Custom hook to use the CartContext in any component
export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider. Please ensure that you wrap your components with CartProvider.");
  }
  return context;
};
