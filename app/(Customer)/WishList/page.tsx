"use client";

import { Button } from "@/components/ui/button";
import WishlistItem from "./components/wishlistItem";
import { useSession } from "next-auth/react";
import { WishlistGetByUser } from "@/actions/wishlist-actions";
import { useEffect, useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { Image as PrismaImage, Product, Wishlist } from "@prisma/client";
import { Spinner } from "@/components/ui/spinner";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Heart, ArrowRight, Store } from "lucide-react";

export interface productWithImages extends Product {
  images: PrismaImage[];
}

interface wishlistProps extends Wishlist {
  product: productWithImages;
}

const WishlistPage = () => {
  const router = useRouter();
  const session = useSession();
  const userId = session.data?.user.id;

  const [wishlistItems, setWishlistItems] = useState<wishlistProps[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!userId) return;
    const getItems = async () => {
      setLoading(true);
      const response = await WishlistGetByUser(userId || "");
      if (response.success) {
        setWishlistItems(response.data);
      } else {
        toast.error("Error fetching wishlist items");
      }
      setLoading(false);
    };
    getItems();
  }, [userId]);

  useEffect(() => {
    if (session.status === "unauthenticated" || (session.status !== "loading" && !userId)) {
      toast.error("Please login as a customer first to view your wishlist", {
        id: "wishlist-auth-required",
        duration: 4000,
      });
      router.push("/auth/customer?redirect=wishlist");
    }
  }, [session.status, userId, router]);

  const handleRemove = (id: string) => {
    setWishlistItems((prevItems) => prevItems.filter((item) => item.id !== id));
    toast.success("Item removed from wishlist");
  };

  if (session.status === "loading" || loading) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center dark:bg-DarkGray">
        <Spinner />
      </div>
    );
  }

  if (!userId) {
    return null;
  }

  return (
    <div className="min-h-screen dark:bg-DarkGray pb-20">
      <Toaster />

      {/* Modern Refined Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16 border-b border-gray-200/80 dark:border-zinc-800/80 mb-10">
        {/* Ambient glow accents */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-rose-500/10 dark:bg-rose-500/5 rounded-full blur-3xl pointer-events-none -z-10 transform-gpu will-change-transform" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10 transform-gpu will-change-transform" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-rose-50 dark:bg-rose-950/60 text-rose-600 dark:text-rose-400 border border-rose-200/80 dark:border-rose-800/60 mb-5 shadow-sm">
            <Heart className="h-4 w-4 fill-rose-500 text-rose-500" />
            <span>Saved Favorites & Watchlist</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-nunito tracking-tight text-gray-900 dark:text-white leading-tight mb-4">
            Your Personal{" "}
            <span className="bg-gradient-to-r from-rose-500 via-emerald-600 to-Yellow dark:from-rose-400 dark:via-emerald-400 dark:to-Yellow bg-clip-text text-transparent">
              Wishlist
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Keep track of your favorite items from local neighborhood stores. Move them straight to your shopping bag anytime with a single click.
          </p>

          {wishlistItems.length > 0 && (
            <div className="mt-5 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-xs font-semibold text-gray-700 dark:text-gray-300">
              <span>{wishlistItems.length} saved {wishlistItems.length === 1 ? "item" : "items"}</span>
            </div>
          )}
        </div>
      </section>

      {/* Main Wishlist Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {wishlistItems.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {wishlistItems.map((item) => (
              <WishlistItem
                key={item.id}
                Id={item.id}
                userId={userId || ""}
                product={item.product}
                onRemove={handleRemove}
              />
            ))}
          </div>
        ) : (
          /* Attractive Empty Wishlist Card */
          <div className="max-w-xl mx-auto my-8">
            <div className="relative rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 p-8 sm:p-12 text-center flex flex-col items-center shadow-lg">
              <div className="w-20 h-20 rounded-3xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200/80 dark:border-rose-800/60 text-rose-500 flex items-center justify-center mb-6 shadow-inner">
                <Heart className="h-10 w-10 fill-rose-500/20" />
              </div>

              <h3 className="text-2xl font-bold font-nunito text-gray-900 dark:text-white mb-2">
                Your Wishlist is Empty
              </h3>

              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 max-w-md leading-relaxed mb-8">
                Explore thousands of fresh groceries, electronics, and daily essentials from trusted neighborhood shops and save what you love.
              </p>

              <Link href="/shops">
                <Button
                  size="lg"
                  className="rounded-full bg-customTeal hover:bg-customTeal/90 text-white font-semibold text-sm sm:text-base px-8 h-12 shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/35 hover:-translate-y-0.5 transition-all flex items-center gap-2"
                >
                  <Store className="h-4 w-4" />
                  <span>Start Exploring Shops</span>
                  <ArrowRight className="h-4 w-4 ml-1" />
                </Button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default WishlistPage;
