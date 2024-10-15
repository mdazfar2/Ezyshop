import { Button } from "@/components/ui/button";
import Image from "next/image";

interface wishlistItemProps{
    item:{
        id:number,
        price:string,
        name:string,
        image:string
    }
}
// WishlistItem.js
const WishlistItem:React.FC<wishlistItemProps> = ({ item }) => {
    return (
      <div className="border max-w-[400px] p-4 rounded-lg shadow-md hover:shadow-lg transition">
        <Image width={1000} height={1000} src={item.image} alt={item.name} className="w-full h-40 object-cover rounded" />
        <h2 className="mt-2 text-xl font-semibold">{item.name}</h2>
        <p className="text-lg text-gray-600">₹{item.price}</p>
        <div className="mt-4 flex justify-between">
          <Button variant="outline">Remove</Button>
          <Button variant={"default"} className="bg-Green">Move to Cart</Button>
        </div>
      </div>
    );
  };
  
  export default WishlistItem;
  