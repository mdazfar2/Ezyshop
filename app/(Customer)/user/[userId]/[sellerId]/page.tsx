"use client";

import { useEffect, useState, useMemo } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import {
  ShoppingBag,
  Store as StoreIcon,
  MessageSquare,
  Search,
  ArrowLeft,
  Clock,
  Sparkles,
  ChevronRight,
  MapPin,
  CheckCircle2,
  Tag,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "@/components/ui/spinner";

interface ProductItem {
  id: string;
  name: string;
  price?: number;
  description?: string;
  category?: string;
  images?: { url: string }[];
}

interface SellerWithProducts {
  id: string;
  storeName?: string;
  name?: string;
  email: string;
  Products: ProductItem[];
}

const ProductsBySeller = () => {
  const params = useParams<{ userId: string; sellerId: string }>();
  const { userId, sellerId } = params;

  const [seller, setSeller] = useState<SellerWithProducts | null>(null);
  const [searchQuery, setSearchQuery] = useState("");
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const fetchSellerData = async () => {
      if (!sellerId) return;

      try {
        const response = await fetch("/data/store.json");
        const sellerList: SellerWithProducts[] = await response.json();

        const foundSeller = sellerList.find((s) => s.id === sellerId);
        setSeller(foundSeller || null);
      } catch (error) {
        console.error("Error fetching seller data:", error);
      } finally {
        setIsMounted(true);
      }
    };

    fetchSellerData();
  }, [sellerId]);

  const filteredProducts = useMemo(() => {
    if (!seller || !seller.Products) return [];
    if (!searchQuery.trim()) return seller.Products;
    return seller.Products.filter((product) =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [seller, searchQuery]);

  if (!isMounted || !seller) {
    return (
      <div className="min-h-[70vh] flex items-center justify-center dark:bg-DarkGray">
        <Spinner />
      </div>
    );
  }

  const storeDisplayName = seller.storeName || seller.name || "Local Partner Store";

  return (
    <div className="min-h-screen bg-gray-50/60 dark:bg-DarkGray py-8 sm:py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Navigation Breadcrumb */}
        <div className="mb-6 flex items-center gap-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          <Link
            href={`/user/${userId}/dashboard`}
            className="hover:text-customTeal dark:hover:text-Green flex items-center gap-1 transition-colors"
          >
            <ArrowLeft className="h-3.5 w-3.5" />
            <span>Back to Dashboard</span>
          </Link>
          <span>/</span>
          <span className="text-gray-700 dark:text-gray-200 font-semibold">{storeDisplayName}</span>
        </div>

        {/* Store Header Card */}
        <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 p-6 sm:p-8 shadow-sm mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 text-customTeal dark:text-Green flex items-center justify-center flex-shrink-0 shadow-inner">
                <StoreIcon className="h-8 w-8 sm:h-10 sm:w-10" />
              </div>

              <div>
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h1 className="text-2xl sm:text-3xl font-black font-nunito tracking-tight text-gray-900 dark:text-white">
                    {storeDisplayName}
                  </h1>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-emerald-100 dark:bg-emerald-950/80 text-emerald-700 dark:text-emerald-300">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    Online & Ready
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 flex flex-wrap items-center gap-x-4 gap-y-1">
                  <span className="flex items-center gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5 text-customTeal dark:text-Green" />
                    Verified Local Merchant
                  </span>
                  <span>•</span>
                  <span>{seller.Products.length} Items Listed</span>
                </p>
              </div>
            </div>

            {/* Quick General Chat Option */}
            {seller.Products.length > 0 && (
              <Link href={`/user/${userId}/${sellerId}/${seller.Products[0].id}`}>
                <Button
                  size="sm"
                  className="rounded-full bg-customTeal hover:bg-customTeal/90 text-white font-semibold text-xs sm:text-sm shadow-md shadow-emerald-500/20 flex items-center gap-2"
                >
                  <MessageSquare className="h-4 w-4" />
                  <span>Start Live Chat</span>
                </Button>
              </Link>
            )}
          </div>
        </div>

        {/* Product Selection Title & Search Bar */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold font-nunito text-gray-900 dark:text-white">
              Select a Product to Discuss
            </h2>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              Click any item below to start a dedicated chat thread with the shopkeeper about stock, pricing, or custom requests.
            </p>
          </div>

          <div className="w-full sm:w-72 relative">
            <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <input
              type="text"
              placeholder="Search store inventory..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full h-10 pl-9 pr-3.5 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 text-xs sm:text-sm text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-customTeal/40 shadow-sm"
            />
          </div>
        </div>

        {/* Product Cards Grid */}
        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProducts.map((product) => (
              <Link
                key={product.id}
                href={`/user/${userId}/${sellerId}/${product.id}`}
                className="group rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800 p-6 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 dark:hover:shadow-emerald-500/5 hover:border-customTeal/40 dark:hover:border-Green/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1"
              >
                <div>
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500/10 to-teal-500/10 text-customTeal dark:text-Green flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                      <ShoppingBag className="h-6 w-6" />
                    </div>

                    {product.price && (
                      <span className="px-3 py-1 rounded-full text-xs font-black bg-emerald-50 dark:bg-emerald-950/60 text-customTeal dark:text-Green border border-emerald-200/60 dark:border-emerald-800/60">
                        ₹{product.price}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold font-nunito text-gray-900 dark:text-white mb-1.5 group-hover:text-customTeal dark:group-hover:text-Green transition-colors line-clamp-1">
                    {product.name}
                  </h3>

                  <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2 mb-4">
                    {product.description || "Inquire with the store owner for item availability, specifications, and delivery options."}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-semibold text-customTeal dark:text-Green">
                  <span className="flex items-center gap-1.5">
                    <MessageSquare className="h-3.5 w-3.5" />
                    Chat About This Item
                  </span>
                  <ChevronRight className="h-4 w-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 p-12 text-center max-w-md mx-auto">
            <ShoppingBag className="h-10 w-10 text-gray-400 mx-auto mb-3" />
            <h4 className="text-base font-bold text-gray-900 dark:text-white mb-1">
              No products found
            </h4>
            <p className="text-xs text-gray-500 dark:text-gray-400 mb-4">
              We couldn&apos;t find any items matching &quot;{searchQuery}&quot; in this store.
            </p>
            <Button
              size="sm"
              variant="outline"
              onClick={() => setSearchQuery("")}
              className="rounded-full text-xs"
            >
              Clear Search
            </Button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductsBySeller;
