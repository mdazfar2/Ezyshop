"use client";
import { CartPost } from "@/actions/cart-actions";
import { WishlistDeleteProduct } from "@/actions/wishlist-actions";
import { Button } from "@/components/ui/button";
import { useCart } from "@/context/cartContext";
import Image from "next/image";
import toast from "react-hot-toast";
import { productWithImages } from "../page";

interface wishlistItemProps {
  product: productWithImages;
  Id: string;
  onRemove: (id: string) => void;
  userId: string;
}
// WishlistItem.js
const WishlistItem: React.FC<wishlistItemProps> = ({
  product,
  onRemove,
  Id,
  userId,
}) => {
  const { cartItems, setCartItems } = useCart();

  const onDelete = async () => {
    const res = await WishlistDeleteProduct(Id);

    if (res.success) {
      toast.success("removed from wishlist");
      onRemove(Id);
    } else {
      toast.error(res.error || "error occured");
    }
  };

  const onAddToCart = async (formData: FormData) => {
    if (!userId) {
      toast.error("please authenticate yourself");
      return;
    }
      const res = await CartPost(formData); // Make sure CartPost is defined to accept FormData
      // console.log(res)
      if (res.success && res.data) {
        // Display success message
        toast.success("Added to cart!");
        // Update your state or context here
        setCartItems([
          ...cartItems,
          {
            id: res.data.id,
            userId: res.data.userId,
            productId: res.data.productId,
            product: {
              ...product,
              images: product.images,
            },
            createdAt: res.data?.createdAt,
            // Include additional properties as needed
          },
        ]);
      } else {
        // Display error message
        toast.error("Error adding to cart, maybe Item already in cart");
      }
    // }
  };
  return (
    <div className="border flex items-center justify-center flex-col dark:border-gray-200 max-w-full p-4 rounded-lg shadow-md hover:shadow-lg transition">
      <Image
        width={1000}
        height={1000}
        src={product.images[0].url}
        alt={product.name}
        className="w-full h-full object-cover rounded border-b"
      />
      <h2 className="mt-2 text-xl dark:text-gray-200 font-semibold">
        {product.name}
      </h2>
      <p className="text-lg text-gray-600">₹{product.price}</p>
      <div className="mt-4 flex justify-between gap-2">
        <Button
          onClick={onDelete}
          variant="outline"
          className="dark:text-gray-200 dark:hover:bg-[#f8f8f8] dark:hover:text-gray-700"
        >
          Remove
        </Button>

        <form
        onSubmit={(e) => {
          e.preventDefault(); // Prevent default form submission
          const target = e.target as HTMLFormElement; // Type assertion
          const formData = new FormData(target);
          onAddToCart(formData); // Call handleSubmit with FormData
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
        <Button
          type="submit"
          variant={"default"}
          className="bg-customTeal dark:bg-Green dark:text-gray-100 dark:hover:opacity-80"
        >Move to Cart
        </Button>
      </form>







      
          
      </div>
    </div>
  );
};

export default WishlistItem;
