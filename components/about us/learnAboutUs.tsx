"use client";

import { useState, useEffect } from "react";
import { Check, ArrowRight, Users, Store, HeartHandshake } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const LearnAboutUs = () => {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    const storedVisits = localStorage.getItem("visitCount");
    const count = storedVisits ? parseInt(storedVisits) + 1 : 1420;
    localStorage.setItem("visitCount", count.toString());
    setVisitors(count);
  }, []);

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        {/* Left Visual Column */}
        <div className="lg:col-span-5 relative flex flex-col gap-4">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border border-gray-200/80 dark:border-zinc-800/80 bg-gray-100 dark:bg-zinc-800 aspect-[4/3]">
            <Image
              alt="EzyShop Community Stores"
              src="/about-us-1.png"
              fill
              className="object-cover hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 1024px) 100vw, 450px"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-2xl p-4 bg-emerald-50 dark:bg-zinc-900/90 border border-emerald-200/60 dark:border-zinc-800 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-customTeal text-white">
                <Store className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold font-nunito text-gray-900 dark:text-white">500+</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">Local Vendors</p>
              </div>
            </div>

            <div className="rounded-2xl p-4 bg-amber-50 dark:bg-zinc-900/90 border border-amber-200/60 dark:border-zinc-800 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-Yellow text-zinc-900">
                <Users className="h-5 w-5" />
              </div>
              <div>
                <h4 className="text-xl font-bold font-nunito text-gray-900 dark:text-white">50k+</h4>
                <p className="text-xs text-gray-600 dark:text-gray-400">Happy Shoppers</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Content Column */}
        <div className="lg:col-span-7 flex flex-col gap-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-customTeal dark:text-Green border border-emerald-200/80 dark:border-emerald-800/60 w-fit">
            <HeartHandshake className="h-3.5 w-3.5 text-Yellow" />
            <span>Community-Driven Commerce</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-nunito tracking-tight text-gray-900 dark:text-white leading-tight">
            Bringing Every Neighborhood Store Straight to Your Door
          </h2>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
            EzyShop empowers local shopkeepers and neighborhood supermarkets to connect with nearby shoppers. Get the personal care and trusted quality of your favorite local shops, with the modern convenience of 1-click doorstep delivery.
          </p>

          <div className="space-y-3.5 pt-2">
            {[
              "Direct inventory from neighborhood grocery, bakeries, and boutiques",
              "Super-fast, reliable delivery from the stores you already trust",
              "Exclusive local discounts and promotional bundles every day",
              "Transparent tracking and contactless, bank-grade payment options",
            ].map((text, i) => (
              <div key={i} className="flex items-center gap-3">
                <div className="p-1 rounded-full bg-emerald-100 dark:bg-emerald-950/80 text-customTeal dark:text-Green flex-shrink-0">
                  <Check className="h-4 w-4" />
                </div>
                <span className="text-sm sm:text-base text-gray-700 dark:text-gray-200 font-medium">{text}</span>
              </div>
            ))}
          </div>

          {/* Action row & live visitor pill */}
          <div className="flex flex-col sm:flex-row items-center gap-5 pt-4">
            <Link href="/shops" className="w-full sm:w-auto">
              <Button
                size="lg"
                className="w-full sm:w-auto h-12 px-8 rounded-full bg-customTeal hover:bg-customTeal/90 text-white font-semibold text-sm sm:text-base shadow-lg shadow-emerald-600/20 hover:shadow-emerald-600/35 transition-all duration-200"
              >
                <span>Explore Stores</span>
                <ArrowRight className="h-4 w-4 ml-2" />
              </Button>
            </Link>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gray-100 dark:bg-zinc-800/80 text-xs font-medium text-gray-600 dark:text-gray-300">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Website Visits: <strong className="text-customTeal dark:text-Green font-bold">{visitors.toLocaleString()}</strong></span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LearnAboutUs;