"use client"

import Image from "next/image";
// import { cartProps } from "../page";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import toast from "react-hot-toast";
import { CartDeleteProduct } from "@/actions/cart-actions";
import { cartProps, useCart } from "@/context/cartContext";

interface cartItemProps{
    item:cartProps
}
const CartItem:React.FC<cartItemProps> = ({
    item,
}) => {
    const {handleRemove} = useCart();
    const onDelete=async()=>{

        const res=await CartDeleteProduct(item.id);
    
        if(res.success){
          toast.success("removed from cart");
          handleRemove(item.id); 
        }
        else{
          toast.error(res.error||"error occured");
        }
    
      }
    

    return ( 
        <li className="flex py-6 border-b h-auto sm:h-48">
  {/* Image Section */}
  <div className="relative rounded-md overflow-hidden ">
    <Image
      width={1000}
      height={1000}
      src={item.product.images[0].url}
      alt={`${item.product.name} image`}
      className="object-cover w-full h-full rounded-lg"
    />
  </div>

  {/* Product Details Section */}
  <div className="flex-1 ml-4 sm:ml-6 flex flex-col justify-between">
    <div className="flex justify-between items-start sm:items-center">
      <p className="text-lg font-semibold dark:text-gray-200">
        {item.product.name}
      </p>

      {/* Remove Button */}
      <Button
        className=" hover:bg-gray-100 dark:hover:bg-gray-700 rounded-md"
        aria-label="Remove product"
        onClick={onDelete}
      >
        <X size={16} />
      </Button>
    </div>

    {/* Description */}
    <p className="mt-1 text-sm text-gray-500 dark:text-gray-400">
      {item.product.description}
    </p>

    {/* Price Section */}
    <div className="mt-2 text-lg font-medium dark:text-gray-200">
      ₹{item.product.price}
    </div>
  </div>
</li>

     );
}
 
export default CartItem;