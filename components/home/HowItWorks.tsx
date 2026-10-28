"use client";

import { Search, ShoppingBag, Truck, Sparkles, ArrowRight } from "lucide-react";
import SeperatorHeading from "../ui/seperatorHeading";
import Link from "next/link";
import { Button } from "../ui/button";

const steps = [
  {
    step: "01",
    title: "Find Your Local Stores",
    description:
      "Enter your location to discover verified neighborhood supermarkets, pharmacies, bakeries, and boutiques right around you.",
    icon: <Search className="h-7 w-7" />,
    tag: "Instant Discovery",
  },
  {
    step: "02",
    title: "Order Daily Essentials",
    description:
      "Browse live inventory, enjoy exclusive neighborhood discounts, and place your order with 1-click secure checkout.",
    icon: <ShoppingBag className="h-7 w-7" />,
    tag: "Exclusive Deals",
  },
  {
    step: "03",
    title: "Delivered in Minutes",
    description:
      "Our dedicated local couriers pick your fresh items with care and deliver straight to your doorstep with live GPS tracking.",
    icon: <Truck className="h-7 w-7" />,
    tag: "Fresh & Fast",
  },
];

const HowItWorks = () => {
  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <SeperatorHeading label="How It Works" />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-nunito tracking-tight text-gray-900 dark:text-white mt-3 mb-4">
          Local Shopping in{" "}
          <span className="bg-gradient-to-r from-customTeal to-emerald-500 dark:from-Green dark:to-emerald-400 bg-clip-text text-transparent">
            Three Simple Steps
          </span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          We connect you directly to nearby shop owners for faster deliveries, fresher products, and stronger communities.
        </p>
      </div>

      {/* 3 Step Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        {steps.map((item, idx) => (
          <div
            key={item.step}
            className="relative rounded-3xl bg-white dark:bg-zinc-900/90 border border-gray-200/80 dark:border-zinc-800/80 p-8 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 dark:hover:shadow-emerald-500/5 hover:border-customTeal/40 dark:hover:border-Green/40 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1.5"
          >
            <div>
              {/* Header: Step Number & Icon */}
              <div className="flex items-center justify-between mb-6">
                <span className="text-3xl font-black font-nunito text-customTeal/30 dark:text-Green/30 group-hover:text-customTeal dark:group-hover:text-Green transition-colors">
                  {item.step}
                </span>
                <div className="p-3.5 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 text-customTeal dark:text-Green group-hover:scale-110 transition-transform duration-300 shadow-inner">
                  {item.icon}
                </div>
              </div>

              {/* Tag */}
              <div className="mb-3">
                <span className="inline-block text-xs font-semibold px-2.5 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/50 text-customTeal dark:text-Green border border-emerald-200/60 dark:border-emerald-800/60">
                  {item.tag}
                </span>
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold font-nunito text-gray-900 dark:text-white mb-3 group-hover:text-customTeal dark:group-hover:text-Green transition-colors">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Step Bottom Accent */}
            <div className="mt-8 pt-4 border-t border-gray-100 dark:border-zinc-800/80 flex items-center justify-between text-xs text-gray-400 dark:text-gray-500 font-medium">
              <span>Step {item.step} of 03</span>
              <span className="text-customTeal dark:text-Green font-semibold">Easy & Fast</span>
            </div>
          </div>
        ))}
      </div>

      {/* Action Banner */}
      <div className="mt-12 text-center">
        <Link href="/shops">
          <Button
            size="lg"
            className="h-12 px-8 rounded-full bg-customTeal hover:bg-customTeal/90 text-white font-semibold text-sm sm:text-base shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/35 transition-all duration-200"
          >
            <span>Explore Stores Near You</span>
            <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </Link>
      </div>
    </section>
  );
};

export default HowItWorks;
