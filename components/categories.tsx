"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "./ui/button";
import SeperatorHeading from "./ui/seperatorHeading";
import { useState, useMemo } from "react";
import {
  ArrowRight,
  Clock,
  ChevronRight,
  Flame,
} from "lucide-react";

export interface CategoryItem {
  id: number;
  title: string;
  logo: string;
  description: string;
  category: string;
  Offers: string;
  deliveryTime: string;
  startingFrom: string;
  buttonLink: string;
}

export const categories: CategoryItem[] = [
  {
    id: 1,
    title: "Fashion & Accessories",
    logo: "/categories/class-1.png",
    description: "Explore the latest trends in fashion with exclusive offers on clothing, shoes, and accessories.",
    category: "Fashion",
    Offers: "50+ Brands",
    deliveryTime: "Same Day Delivery",
    startingFrom: "$10",
    buttonLink: "/shops",
  },
  {
    id: 2,
    title: "Electronics & Gadgets",
    logo: "/categories/class-2.png",
    description: "Shop for the latest electronics and gadgets from top brands at the best prices.",
    category: "Electronics",
    Offers: "20+ Brands",
    deliveryTime: "Same Day Delivery",
    startingFrom: "$25",
    buttonLink: "/shops",
  },
  {
    id: 3,
    title: "Groceries & Essentials",
    logo: "/categories/class-3.png",
    description: "Order fresh groceries and daily essentials from trusted local stores, delivered to your doorstep.",
    category: "Grocery",
    Offers: "30+ Stores",
    deliveryTime: "30 Minute Delivery",
    startingFrom: "$2",
    buttonLink: "/shops",
  },
  {
    id: 4,
    title: "Home & Furniture",
    logo: "/categories/Home&Living.webp",
    description: "Transform your space with stylish furniture and home decor for every lifestyle.",
    category: "Home",
    Offers: "60+ Brands",
    deliveryTime: "Same Day Delivery",
    startingFrom: "$20",
    buttonLink: "/shops",
  },
  {
    id: 5,
    title: "Beauty & Personal Care",
    logo: "/categories/Beauty&PersonalCare.webp",
    description: "Explore premium skincare, makeup, and personal care essentials for your daily routine.",
    category: "Beauty",
    Offers: "30+ Brands",
    deliveryTime: "Same Day Delivery",
    startingFrom: "$10",
    buttonLink: "/shops",
  },
  {
    id: 6,
    title: "Sports & Fitness",
    logo: "/categories/Sports&Fitness.webp",
    description: "Get premium sports equipment and fitness accessories for staying active and reaching your goals.",
    category: "Sports",
    Offers: "40+ Stores",
    deliveryTime: "30 Minute Delivery",
    startingFrom: "$20",
    buttonLink: "/shops",
  },
  {
    id: 7,
    title: "Health & Wellness",
    logo: "/categories/Health&Wellness.webp",
    description: "Shop medicines, vitamins, supplements, and wellness gear for a wholesome and healthy lifestyle.",
    category: "Health",
    Offers: "100+ Brands",
    deliveryTime: "Same Day Delivery",
    startingFrom: "$1",
    buttonLink: "/shops",
  },
  {
    id: 8,
    title: "Books & Media",
    logo: "/categories/Books&Media.webp",
    description: "Enjoy a wide selection of bestsellers, educational books, and entertainment media.",
    category: "Books",
    Offers: "60+ Brands",
    deliveryTime: "Same Day Delivery",
    startingFrom: "$5",
    buttonLink: "/shops",
  },
  {
    id: 9,
    title: "Toys & Games",
    logo: "/categories/Toyes2.png",
    description: "Discover fun and educational toys and games for kids of all ages from trusted makers.",
    category: "Toys",
    Offers: "24+ Brands",
    deliveryTime: "Same Day Delivery",
    startingFrom: "$5",
    buttonLink: "/shops",
  },
  {
    id: 10,
    title: "Baby Products & Maternity",
    logo: "/categories/BabyProducts&Maternity.webp",
    description: "Find baby clothing, nursery essentials, and maternity care products for expecting parents.",
    category: "Baby Care",
    Offers: "60+ Brands",
    deliveryTime: "Same Day Delivery",
    startingFrom: "$5",
    buttonLink: "/shops",
  },
  {
    id: 11,
    title: "Automotive & Tools",
    logo: "/categories/Automotive&Tools.webp",
    description: "Shop car accessories, repair tools, and maintenance essentials for your vehicle.",
    category: "Automotive",
    Offers: "55+ Brands",
    deliveryTime: "Same Day Delivery",
    startingFrom: "$10",
    buttonLink: "/shops",
  },
  {
    id: 12,
    title: "Pet Supplies & Accessories",
    logo: "/categories/PetSupplies.webp",
    description: "Keep your furry companions happy with nutritious food, treats, toys, and grooming gear.",
    category: "Pet Supplies",
    Offers: "40+ Stores",
    deliveryTime: "30 Minute Delivery",
    startingFrom: "$20",
    buttonLink: "/shops",
  },
];

const filterTabs = [
  "All",
  "Grocery",
  "Fashion",
  "Electronics",
  "Beauty",
  "Home",
  "Health",
];

const Categories = ({ showLoadMore = true }: { showLoadMore?: boolean }) => {
  const [activeTab, setActiveTab] = useState("All");
  const [showAll, setShowAll] = useState(false);

  const filteredCategories = useMemo(() => {
    if (activeTab === "All") return categories;
    return categories.filter(
      (c) => c.category.toLowerCase() === activeTab.toLowerCase()
    );
  }, [activeTab]);

  const displayedCategories = useMemo(() => {
    if (!showLoadMore) {
      // On homepage, display 6 best items
      return filteredCategories.slice(0, 6);
    }
    return showAll ? filteredCategories : filteredCategories.slice(0, 6);
  }, [filteredCategories, showLoadMore, showAll]);

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-10">
        <SeperatorHeading label="Trending Deals" />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-nunito tracking-tight text-gray-900 dark:text-white mt-3 mb-3">
          Shop for Your{" "}
          <span className="bg-gradient-to-r from-customTeal to-emerald-500 dark:from-Green dark:to-emerald-400 bg-clip-text text-transparent">
            Favourite Products
          </span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Hand-picked offers from top local merchants, backed by lightning-fast delivery and verified quality.
        </p>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center justify-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
        {filterTabs.map((tab) => {
          const isActive = activeTab === tab;
          return (
            <button
              key={tab}
              onClick={() => {
                setActiveTab(tab);
                setShowAll(false);
              }}
              className={`px-4 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all whitespace-nowrap ${
                isActive
                  ? "bg-customTeal text-white shadow-md shadow-emerald-600/20"
                  : "bg-gray-100 dark:bg-zinc-800/80 text-gray-600 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-zinc-700"
              }`}
            >
              {tab === "All" ? "🔥 All Deals" : tab}
            </button>
          );
        })}
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {displayedCategories.map((card) => (
          <div
            key={card.id}
            className="group rounded-3xl bg-white dark:bg-zinc-900/90 border border-gray-200/80 dark:border-zinc-800/80 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 dark:hover:shadow-emerald-500/5 hover:border-customTeal/40 dark:hover:border-Green/40 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1"
          >
            <div>
              {/* Image Frame with Badges */}
              <div className="relative aspect-[16/10] w-full overflow-hidden bg-gray-100 dark:bg-zinc-800">
                <Image
                  src={card.logo}
                  alt={card.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />

                {/* Offer Pill */}
                <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-bold bg-white/95 dark:bg-zinc-900/90 text-customTeal dark:text-Green backdrop-blur-md shadow-sm border border-gray-100 dark:border-zinc-800 flex items-center gap-1.5">
                  <Flame className="h-3.5 w-3.5 text-amber-500 fill-amber-500" />
                  <span>{card.Offers}</span>
                </div>

                {/* Delivery Time Pill */}
                <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-md flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-Yellow" />
                  <span>{card.deliveryTime}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                <div className="flex items-center justify-between mb-2.5">
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 text-customTeal dark:text-Green border border-emerald-200/60 dark:border-emerald-800/50">
                    {card.category}
                  </span>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    Starting from{" "}
                    <strong className="text-sm font-bold text-gray-900 dark:text-white">
                      {card.startingFrom}
                    </strong>
                  </span>
                </div>

                <h3 className="text-xl font-bold font-nunito text-gray-900 dark:text-white mb-2 group-hover:text-customTeal dark:group-hover:text-Green transition-colors">
                  {card.title}
                </h3>

                <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed line-clamp-2">
                  {card.description}
                </p>
              </div>
            </div>

            {/* Card Footer */}
            <div className="px-6 pb-6 pt-2">
              <Link href={card.buttonLink} className="w-full block">
                <Button className="w-full h-11 rounded-xl bg-gray-100 hover:bg-customTeal hover:text-white text-gray-800 dark:bg-zinc-800/90 dark:text-gray-200 dark:hover:bg-Green dark:hover:text-zinc-950 font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 group-hover:shadow-md">
                  <span>Explore Products</span>
                  <ChevronRight className="h-4 w-4" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>

      {/* Footer Actions */}
      <div className="mt-12 text-center">
        {!showLoadMore ? (
          <Link href="/Categories">
            <Button
              size="lg"
              className="h-12 px-8 rounded-full bg-customTeal hover:bg-customTeal/90 text-white font-semibold text-sm sm:text-base shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/35 transition-all duration-200"
            >
              <span>View All Categories</span>
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        ) : (
          filteredCategories.length > 6 && (
            <Button
              onClick={() => setShowAll(!showAll)}
              variant="outline"
              size="lg"
              className="h-12 px-8 rounded-full border-gray-300 dark:border-zinc-700 hover:border-customTeal dark:hover:border-Green font-semibold text-sm sm:text-base"
            >
              {showAll ? "Show Less" : `Load More (${filteredCategories.length - 6} more)`}
            </Button>
          )
        )}
      </div>
    </section>
  );
};

export default Categories;
