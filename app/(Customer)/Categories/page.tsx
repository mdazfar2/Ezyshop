import type { Metadata } from "next";
import Categories from "@/components/categories";
import { Sparkles, Layers, ShieldCheck, Clock, Truck } from "lucide-react";

export const metadata: Metadata = {
  title: "Categories - EzyShop | Explore Neighborhood Products",
  description:
    "Explore a curated variety of product categories to find groceries, electronics, fashion, and daily essentials on EzyShop.",
};

const CategoryPage = () => {
  return (
    <div className="min-h-screen dark:bg-DarkGray pb-20">
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16 border-b border-gray-200/80 dark:border-zinc-800/80 mb-8">
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10 transform-gpu will-change-transform" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 dark:bg-yellow-500/5 rounded-full blur-3xl pointer-events-none -z-10 transform-gpu will-change-transform" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-customTeal dark:text-Green border border-emerald-200/80 dark:border-emerald-800/60 mb-5 shadow-sm">
            <Layers className="h-4 w-4 text-Yellow" />
            <span>12+ Curated Categories</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-nunito tracking-tight text-gray-900 dark:text-white leading-tight mb-4">
            Explore All{" "}
            <span className="bg-gradient-to-r from-customTeal via-emerald-600 to-Yellow dark:from-Green dark:via-emerald-400 dark:to-Yellow bg-clip-text text-transparent">
              Categories & Deals
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Find everything your household needs with guaranteed freshness, vendor-direct discounts, and ultra-fast local doorstep delivery.
          </p>

          {/* Quick Value Points */}
          <div className="flex flex-wrap items-center justify-center gap-6 mt-6 pt-6 border-t border-gray-200/60 dark:border-zinc-800/60 text-xs sm:text-sm font-medium text-gray-600 dark:text-gray-300">
            <div className="flex items-center gap-2">
              <Clock className="h-4 w-4 text-customTeal dark:text-Green" />
              <span>Express 30-min delivery</span>
            </div>
            <span className="text-gray-300 dark:text-zinc-700">•</span>
            <div className="flex items-center gap-2">
              <ShieldCheck className="h-4 w-4 text-customTeal dark:text-Green" />
              <span>100% Verified authenticity</span>
            </div>
            <span className="text-gray-300 dark:text-zinc-700">•</span>
            <div className="flex items-center gap-2">
              <Truck className="h-4 w-4 text-customTeal dark:text-Green" />
              <span>Local neighborhood couriers</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Categories & Trending Deals Component */}
      <Categories showLoadMore={true} />
    </div>
  );
};

export default CategoryPage;
