"use client";
import { Button } from "@/components/ui/button";
import WishlistItem from "./components/wishlistItem";
import { useSession } from "next-auth/react";
import { WishlistGetByUser } from "@/actions/wishlist-actions";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Image, Product, Wishlist } from "@prisma/client";
// import { useTheme } from "@/context/themeProvider";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";

// const wishlistItems = [
//   {
//     id: 1,
//     name: "Hybrid Tomato",
//     price: "29",
//     image: "/products/tomato.avif",
//   },
//   {
//     id: 2,
//     name: "Hen Fruit White Protein Rich Eggs",
//     price: "92",
//     image: "/products/eggs.avif",
//   },
// ];

export interface productWithImages extends Product {
  images: Image[];
}
interface wishlistProps extends Wishlist {
  product: productWithImages;
}
const WishlistPage = () => {
  const session = useSession();
  const userId = session.data?.user.id;

  // const { theme } = useTheme() || { theme: "light" }; // Get the current theme and toggle function

  const [wishlistItems, setWishlistItems] = useState<wishlistProps[]>([]);

  const [loading, setLoading] = useState(false);

  // console.log(wishlistItems);
  

  useEffect(() => {
    const getItems = async () => {
      const response = await WishlistGetByUser(userId||"");
      if (response.success) {
        setWishlistItems(response.data);
      } else {
        toast.error("error fetching wishlist");
      }
      setLoading(false);
    };
    getItems();
  }, [userId]);

  // if (!userId) {
  //   // openDialog();

  //   return (
  //     <FlashAlert
  //       modalLogo={
  //         <LogIn
  //           className={`h-16 w-16 ${
  //             theme === "light" ? "text-customTeal" : "text-Green"
  //           } mx-auto`}
  //         />
  //       }
  //       modalTitle={"User not logged in"}
  //       modalDescription={"Please login to access your wishlist"}
  //     />
  //   );
  // }

  const handleRemove = (id: string) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
  };

  if (loading||!userId) {
    return <Spinner />;
  }

  // console.log(wishlistItems+"dakjnjkanefnj")
  return (
    <>
      <div className="h-full dark:bg-DarkGray pb-10">
        <div className="text-white flex items-center justify-center bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow h-full mb-20 p-24">
          <div className="text-4xl pt-5 lg:pt-0 lg:text-7xl text-center text-gray-200 lg:text-start font-extrabold font-handlee">
            Wish List
          </div>
        </div>
        <div className="mt-5 flex items-center justify-center">
          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
              {wishlistItems.map((item) => (
                <WishlistItem key={item.id} Id={item.id} userId={userId||""} product={item.product} onRemove={handleRemove}/>
              ))}
            </div>
          ) : (
            <div className="text-center text-gray-700 dark:text-gray-500">
              <p>Your wishlist is empty!</p>
              <Link href={"/shops"}>
                <Button className="bg-customTeal dark:text-gray-100 dark:hover:opacity-80 dark:bg-Green mt-4">
                  Continue Shopping
                </Button>
              </Link>
            </div>
          )}
        </div>
        <Toaster/>
      </div>
    </>
  );
};

export default WishlistPage;
