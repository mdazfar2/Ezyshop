import { Button } from "@/components/ui/button";
import Image from "next/image";
import { productWithImages } from "../page";

interface wishlistItemProps{
    item:productWithImages
    Id:string,
    onRemove: (id: string) => void;
}
// WishlistItem.js
const WishlistItem:React.FC<wishlistItemProps> = ({ item, }) => {

 
  // console.log(item);
    return (
      <div className="border flex items-center justify-center flex-col dark:border-gray-200 max-w-full p-4 rounded-lg shadow-md hover:shadow-lg transition">
        <Image width={1000} height={1000} src={item.images[0].url} alt={item.name} className="w-full h-full object-cover rounded border-b" />
        <h2 className="mt-2 text-xl dark:text-gray-200 font-semibold">{item.name}</h2>
        <p className="text-lg text-gray-600">₹{item.price}</p>
        <div className="mt-4 flex justify-between gap-2">
          <Button variant="outline" className="dark:text-gray-200 dark:hover:bg-[#f8f8f8] dark:hover:text-gray-700">Remove</Button>
          <Button variant={"default"} className= "bg-customTeal dark:bg-Green dark:text-gray-100 dark:hover:opacity-80">Move to Cart</Button>
        </div>
      </div>
    );
  };
  
  export default WishlistItem;
  