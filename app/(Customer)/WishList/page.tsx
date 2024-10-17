// Wishlist.js
import { Button } from "@/components/ui/button";
import WishlistItem from "./components/wishlistItem";

const wishlistItems = [
  {
    id: 1,
    name: "Hybrid Tomato",
    price: "29",
    image: "/products/tomato.avif",
  },
  {
    id: 2,
    name: "Hen Fruit White Protein Rich Eggs",
    price: "92",
    image: "/products/eggs.avif",
  },
];

const Wishlist = () => {
  return (
    <div className="h-full dark:bg-DarkGray pb-10">
      <div className="text-white flex items-center justify-center bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow h-full mb-20 p-24">
        <div className="text-4xl pt-5 lg:pt-0 lg:text-7xl text-center text-gray-200 lg:text-start font-extrabold font-handlee">
          Wish List
        </div>
      </div>
      <div className="mt-5 flex items-center justify-center">
        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {wishlistItems.map((item) => (
              <WishlistItem key={item.id} item={item} />
            ))}
          </div>
        ) : (
          <div className="text-center text-gray-500">
            <p>Your wishlist is empty!</p>
            <Button className=" bg-Green mt-4">Continue Shopping</Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Wishlist;
