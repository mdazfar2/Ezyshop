"use client";

import ShopCard from "@/components/shops/shopCard";
import SeperatorHeading from "@/components/ui/seperatorHeading";
import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useEffect, useState, useMemo } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";
import { Search, Store, Mail, Globe, ArrowRight } from "lucide-react";
import Link from "next/link";

export interface Shop {
  id: string;
  name: string;
  email: string;
  storeName: string;
  storeAddress: string;
  storeMobile: string;
  storeDescription: string;
  coverUrl: string;
}

const ShopPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState("");

  // Customer authentication guard: redirect to customer login if not authenticated
  useEffect(() => {
    if (status === "unauthenticated") {
      toast.error("Please log in as a customer first to explore shops near you.", {
        id: "customer-auth-required",
        duration: 4000,
      });
      router.push("/auth/customer?redirect=shops");
    }
  }, [status, router]);

  // Fetch shops in real time when authenticated
  useEffect(() => {
    if (status !== "authenticated") return;

    const fetchShops = async () => {
      try {
        const response = await axios.get(`/api/getAllStores`);
        if (Array.isArray(response.data)) {
          setShops(response.data);
        } else {
          setShops([]);
        }
      } catch (err) {
        console.error("Error fetching real-time shops:", err);
        setShops([]);
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, [status]);

  const filteredShops = useMemo(() => {
    if (!searchQuery.trim()) return shops;
    return shops.filter((shop) => {
      return (
        shop.storeName?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shop.storeDescription?.toLowerCase().includes(searchQuery.toLowerCase()) ||
        shop.storeAddress?.toLowerCase().includes(searchQuery.toLowerCase())
      );
    });
  }, [shops, searchQuery]);

  // Show spinner while checking auth status or fetching shops
  if (status === "loading" || (status === "authenticated" && loading)) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center dark:bg-DarkGray">
        <Spinner />
      </div>
    );
  }

  // If unauthenticated, do not render content while redirecting
  if (status === "unauthenticated" || !session) {
    return (
      <div className="min-h-[60vh] flex items-center justify-center dark:bg-DarkGray">
        <Spinner />
      </div>
    );
  }

  return (
    <div className="min-h-screen dark:bg-DarkGray pb-20">
      <Toaster />

      {/* Header Section */}
      <section className="relative overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16 border-b border-gray-200/80 dark:border-zinc-800/80 mb-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-customTeal dark:text-Green border border-emerald-200/80 dark:border-emerald-800/60 mb-5 shadow-sm">
            <Store className="h-4 w-4 text-Yellow" />
            <span>Verified Neighborhood Partners</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-nunito tracking-tight text-gray-900 dark:text-white leading-tight mb-4">
            Discover Our{" "}
            <span className="bg-gradient-to-r from-customTeal via-emerald-600 to-Yellow dark:from-Green dark:via-emerald-400 dark:to-Yellow bg-clip-text text-transparent">
              Partner Shops
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-8">
            Shop directly from trusted local stores in your community. Experience fast delivery, authentic products, and personalized service.
          </p>

          {/* Search bar when shops are present */}
          {shops.length > 0 && (
            <div className="max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search stores by name, products, or location..."
                className="w-full h-12 pl-12 pr-4 rounded-full bg-white dark:bg-zinc-900 border border-gray-200 dark:border-zinc-800 shadow-sm text-sm sm:text-base text-gray-900 dark:text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-customTeal/50 dark:focus:ring-Green/50 transition-all"
              />
            </div>
          )}
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {shops.length === 0 ? (
          /* Attractive empty state card */
          <div className="max-w-2xl mx-auto my-6">
            <div className="relative rounded-3xl bg-white dark:bg-zinc-900/90 border border-gray-200/90 dark:border-zinc-800/90 p-8 sm:p-12 shadow-xl shadow-emerald-950/5 text-center flex flex-col items-center overflow-hidden">
              {/* Subtle decorative glow */}
              <div className="absolute top-0 right-0 -mr-16 -mt-16 w-48 h-48 rounded-full bg-emerald-500/10 blur-2xl pointer-events-none transform-gpu will-change-transform" />
              <div className="absolute bottom-0 left-0 -ml-16 -mb-16 w-48 h-48 rounded-full bg-yellow-500/10 blur-2xl pointer-events-none transform-gpu will-change-transform" />

              {/* Visual Store Icon badge */}
              <div className="relative mb-6">
                <div className="w-20 h-20 rounded-3xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/80 dark:border-emerald-800/60 text-customTeal dark:text-Green flex items-center justify-center shadow-inner">
                  <Store className="h-10 w-10 opacity-70" />
                </div>
                <div className="absolute -bottom-2 -right-2 p-1.5 rounded-full bg-amber-50 dark:bg-zinc-800 border border-amber-200 dark:border-zinc-700 text-Yellow">
                  <Globe className="h-4 w-4" />
                </div>
              </div>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full text-xs font-semibold bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 mb-4 border border-gray-200 dark:border-zinc-700">
                <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                <span>Market Rollout in Progress</span>
              </div>

              {/* Title */}
              <h3 className="text-2xl sm:text-3xl font-extrabold font-nunito text-gray-900 dark:text-white mb-3">
                No Stores Available Yet
              </h3>

              {/* Description Message */}
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed max-w-lg mb-8">
                No shops are available right now. EzyShop is not yet available globally.{" "}
                <a
                  href="https://azfaralam.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-customTeal dark:text-Green font-bold no-underline hover:text-Yellow transition-colors"
                >
                  Azfar
                </a>{" "}
                needs to discuss with the team and develop a proper plan to launch it in the market.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto">
                <a
                  href="mailto:azfaralam.ops@gmail.com?subject=Inquiry%20regarding%20EzyShop%20Launch"
                  className="w-full sm:w-auto"
                >
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-12 px-7 rounded-full bg-customTeal hover:bg-customTeal/90 text-white font-semibold text-sm sm:text-base shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all flex items-center justify-center gap-2"
                  >
                    <Mail className="h-4 w-4 text-Yellow" />
                    <span>Chat with Azfar</span>
                  </Button>
                </a>

                <Link href="/" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-12 px-6 rounded-full border-gray-300 dark:border-zinc-700 hover:border-customTeal dark:hover:border-Green hover:bg-emerald-50/50 dark:hover:bg-zinc-800 transition-all text-sm sm:text-base font-medium text-gray-700 dark:text-gray-200"
                  >
                    Back to Home
                  </Button>
                </Link>
              </div>

              {/* Footer email link */}
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-6">
                Have questions or partnership ideas? Email Azfar at{" "}
                <a
                  href="mailto:azfaralam.ops@gmail.com"
                  className="text-customTeal dark:text-Green font-medium underline hover:opacity-80"
                >
                  azfaralam.ops@gmail.com
                </a>
              </p>
            </div>
          </div>
        ) : filteredShops.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {filteredShops.map((shop) => (
              <ShopCard key={shop.id} shop={shop} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 px-4 max-w-md mx-auto">
            <p className="text-base text-gray-600 dark:text-gray-400 mb-4">
              No stores match &quot;{searchQuery}&quot;.
            </p>
            <button
              onClick={() => setSearchQuery("")}
              className="px-4 py-2 rounded-full bg-customTeal text-white text-xs font-semibold"
            >
              Clear Search
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default ShopPage;
