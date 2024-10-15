"use client"

import { orderItemProps } from "@/app/MyOrders/components/orderItem";
import Image from "next/image";


const CartItem:React.FC<orderItemProps> = ({
    item
}) => {

    // const cart=useCart();

    // const onRemove=()=>{
    //     // cart.removeItem(data.id);
    // }

    return ( 
        <li className="flex py-6 border-b">
            <div className="relative h-24 w-24 rounded-md overflow-hidden sm:h-48 sm:w-48">
                <Image
                    fill
                    src={item.image}
                    alt="product image"
                    className="object-cover object-center"
                />
            </div>
            <div className="relative ml-4 flex flex-1 flex-col justify-between sm:ml-6">
                <div className="absolute z-10 right-0 top-0">
                    {/* <IconButton
                        onClick={onRemove}
                        icon={<X size={12}/>}
                    /> */}
                </div>
                <div className="relative pr-9 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:pr-0">
                    <div className="flex justify-between">
                        <p className="text-lg font-semibold text-black">
                            {item.name}
                        </p>
                    </div>
                    <div className="mt-1 flex text-sm">
                        <p className="text-gray-500">
                            {/* haha */}
                            {item.variant}
                        </p>
                        <p className="text-gray-500 ml-4 border-l border-gray-200 pl-4">
                            {/* nunu */}
                            {item.count}
                        </p>
                    </div>
                    <div>₹{item.price}</div>

                </div>
            </div>
        </li>
     );
}
 
export default CartItem;