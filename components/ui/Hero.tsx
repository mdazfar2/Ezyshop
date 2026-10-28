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
} from "lucide-react";

const Hero = () => {
  return (
    <section
      id="hero-section"
      className="relative overflow-hidden isolate w-full min-h-screen min-h-[100dvh] flex items-center pt-20 pb-12 sm:pt-24 sm:pb-16 lg:pt-28 lg:pb-16 bg-cover bg-no-repeat bg-[center_right] sm:bg-center bg-[url('/ezyshop-bg2.png')] dark:bg-[url('/ezyshop-bg-dark.png')]"
    >
      {/* Full Hero Background Next.js Image Layer - Light & Dark with instant seamless transition */}
      <div className="absolute inset-0 z-0 select-none pointer-events-none overflow-hidden">
        {/* Light Mode Background */}
        <div className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-100 dark:opacity-0">
          <Image
            src="/ezyshop-bg2.png"
            alt="EzyShop Background Light"
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-[78%_center] sm:object-[70%_center] md:object-right lg:object-center transform-gpu"
          />
        </div>

        {/* Dark Mode Background */}
        <div className="absolute inset-0 transition-opacity duration-300 ease-in-out opacity-0 dark:opacity-100">
          <Image
            src="/ezyshop-bg-dark.png"
            alt="EzyShop Background Dark"
            fill
            priority
            sizes="100vw"
            quality={95}
            className="object-cover object-[78%_center] sm:object-[70%_center] md:object-right lg:object-center transform-gpu"
          />
        </div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Content Column — Exact original text & structure */}
          <div className="lg:col-span-7 xl:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left gap-6">
            {/* Feature Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-50/90 dark:bg-emerald-950/80 text-customTeal dark:text-Green border border-emerald-200/80 dark:border-emerald-800/60 shadow-sm backdrop-blur-md">
              <Sparkles className="h-4 w-4 text-Yellow" />
              <span>The Smart Way to Shop Locally</span>
              <span className="hidden sm:inline text-gray-300 dark:text-zinc-600">|</span>
              <span className="hidden sm:inline text-gray-600 dark:text-gray-300 font-normal">Fast & Reliable</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black font-nunito tracking-tight text-gray-900 dark:text-white leading-[1.12]">
              Revolutionizing How <br />
              You{" "}
              <span className="bg-gradient-to-r from-customTeal via-emerald-600 to-Yellow dark:from-Green dark:via-emerald-400 dark:to-Yellow bg-clip-text text-transparent">
                Shop Locally
              </span>
            </h1>

            {/* Subheading / Description */}
            <p className="text-base sm:text-lg text-gray-700 dark:text-gray-200 max-w-xl leading-relaxed font-normal">
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
                  className="w-full sm:w-auto h-12 px-7 rounded-full text-base font-medium border-gray-300 dark:border-zinc-700 bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm hover:border-customTeal dark:hover:border-Green hover:bg-emerald-50/80 dark:hover:bg-zinc-800/90 transition-all duration-200 text-gray-700 dark:text-gray-200"
                >
                  Browse Categories
                </Button>
              </Link>
            </div>

            {/* Value Trust Badges */}
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-gray-200/80 dark:border-zinc-800/80 w-full max-w-lg">
              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <div className="p-2 rounded-xl bg-emerald-50/90 dark:bg-emerald-950/70 text-customTeal dark:text-Green backdrop-blur-sm shadow-sm">
                  <Clock className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-900 dark:text-white">Fast Delivery</p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">Within minutes</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <div className="p-2 rounded-xl bg-emerald-50/90 dark:bg-emerald-950/70 text-customTeal dark:text-Green backdrop-blur-sm shadow-sm">
                  <ShieldCheck className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-900 dark:text-white">100% Quality</p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">Fresh guarantee</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 justify-center lg:justify-start">
                <div className="p-2 rounded-xl bg-emerald-50/90 dark:bg-emerald-950/70 text-customTeal dark:text-Green backdrop-blur-sm shadow-sm">
                  <Store className="h-4 w-4" />
                </div>
                <div className="text-left">
                  <p className="text-xs font-bold text-gray-900 dark:text-white">Local Stores</p>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400">Trusted vendors</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right space left completely empty as requested */}
          <div className="hidden lg:block lg:col-span-5 xl:col-span-5" />
        </div>
      </div>
    </section>
  );
};

export default Hero;