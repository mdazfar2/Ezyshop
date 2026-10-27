"use client";

import Image from "next/image";
import { Button } from "./button";
import Link from "next/link";
import {
  ArrowRight,
  Sparkles,
  Clock,
  ShieldCheck,
  Store,
  Star,
  CheckCircle2,
  TrendingUp,
} from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-6 pb-14 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-24">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[500px] h-[500px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10 transform-gpu will-change-transform" />
      <div className="absolute top-1/3 right-10 w-[450px] h-[450px] bg-yellow-400/10 dark:bg-yellow-400/5 rounded-full blur-3xl pointer-events-none -z-10 transform-gpu will-change-transform" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left Content Column */}
          <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            {/* Feature Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-customTeal dark:text-Green border border-emerald-200/80 dark:border-emerald-800/60 shadow-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-Yellow" />
              <span>The Smart Way to Shop Locally</span>
              <span className="hidden sm:inline text-gray-300 dark:text-zinc-600">|</span>
              <span className="hidden sm:inline text-gray-600 dark:text-gray-300 font-normal">Fast & Reliable</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-nunito tracking-tight text-gray-900 dark:text-white leading-[1.12]">
              Revolutionizing How You{" "}
              <span className="bg-gradient-to-r from-customTeal via-emerald-600 to-Yellow dark:from-Green dark:via-emerald-400 dark:to-Yellow bg-clip-text text-transparent">
                Shop Locally
              </span>
            </h1>

            {/* Subheading / Description */}
            <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
              Bringing your favorite neighborhood stores directly to your doorstep.
              Browse local shops, compare exclusive deals, and get fresh groceries
              and daily essentials delivered in minutes.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto pt-1">
              <Link href="/shops" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-12 px-8 rounded-full text-base font-semibold bg-customTeal hover:bg-customTeal/90 text-white shadow-lg shadow-emerald-600/25 hover:shadow-emerald-600/40 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Start Shopping</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="/Categories" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-12 px-7 rounded-full text-base font-medium border-gray-300 dark:border-zinc-700 hover:border-customTeal dark:hover:border-Green hover:bg-emerald-50/60 dark:hover:bg-zinc-800/80 transition-all duration-200 text-gray-700 dark:text-gray-200"
                >
                  Browse Categories
                </Button>
              </Link>
            </div>

            {/* Value Trust Badges */}
            <div className="grid grid-cols-3 gap-6 pt-6 border-t border-gray-200/80 dark:border-zinc-800/80 w-full max-w-lg">
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-customTeal dark:text-Green">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-900 dark:text-white">Fast Delivery</p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">Within minutes</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-customTeal dark:text-Green">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-900 dark:text-white">100% Quality</p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">Fresh guarantee</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <div className="p-2 rounded-xl bg-emerald-50 dark:bg-emerald-950/50 text-customTeal dark:text-Green">
                  <Store className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-900 dark:text-white">Local Stores</p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">Trusted vendors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual Column */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            {/* Visual Backplate with Soft Gradient & Glow */}
            <div className="relative w-full max-w-[460px] aspect-square rounded-3xl overflow-hidden p-2 bg-gradient-to-b from-emerald-100/60 via-emerald-50/20 to-transparent dark:from-emerald-900/20 dark:via-zinc-900/40 dark:to-transparent border border-emerald-200/50 dark:border-emerald-500/20 shadow-2xl shadow-emerald-900/10">
              <div className="relative w-full h-full rounded-2xl overflow-hidden">
                <Image
                  alt="EzyShop Fresh Delivery"
                  src="/hero-delivery.jpg"
                  fill
                  priority
                  className="object-cover object-center transition-transform duration-700 hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 460px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none" />
              </div>

              {/* Floating Badge 1 - Top Right: Rating */}
              <div className="absolute top-5 right-5 z-20 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-3.5 py-2 rounded-2xl shadow-lg border border-gray-100 dark:border-zinc-800 flex items-center gap-2 transition-transform hover:scale-105">
                <div className="p-1 rounded-full bg-amber-50 dark:bg-amber-950/60 text-Yellow">
                  <Star className="h-4 w-4 fill-Yellow text-Yellow" />
                </div>
                <div>
                  <div className="flex items-center gap-1">
                    <span className="text-xs font-bold text-gray-900 dark:text-white">4.9/5</span>
                    <span className="text-[10px] text-gray-500 dark:text-gray-400 font-medium">(10k+ reviews)</span>
                  </div>
                  <p className="text-[10px] text-customTeal dark:text-Green font-medium">Top Rated Service</p>
                </div>
              </div>

              {/* Floating Badge 2 - Bottom Left: Fast Delivery */}
              <div className="absolute bottom-5 left-5 z-20 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md px-4 py-2.5 rounded-2xl shadow-lg border border-gray-100 dark:border-zinc-800 flex items-center gap-3 transition-transform hover:scale-105">
                <div className="p-2 rounded-xl bg-emerald-500 text-white shadow-md shadow-emerald-500/30">
                  <CheckCircle2 className="h-4 w-4" />
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-900 dark:text-white">Delivered in 25 mins</p>
                  <p className="text-[10px] text-emerald-600 dark:text-emerald-400 font-medium">100% Fresh & Packed with Care</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;