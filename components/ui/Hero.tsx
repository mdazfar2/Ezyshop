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
    <section className="relative overflow-hidden pt-6 pb-14 sm:pt-10 sm:pb-20 lg:pt-14 lg:pb-24">
      {/* Background Ambient Glows */}
      <div className="absolute top-0 left-1/4 -translate-x-1/2 w-[520px] h-[520px] bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10 transform-gpu will-change-transform" />
      <div className="absolute top-1/4 right-5 w-[480px] h-[480px] bg-yellow-400/10 dark:bg-yellow-400/5 rounded-full blur-3xl pointer-events-none -z-10 transform-gpu will-change-transform" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-4 items-center">
          {/* Left Content Column — Exact original text & structure */}
          <div className="lg:col-span-6 xl:col-span-6 flex flex-col items-center lg:items-start text-center lg:text-left gap-6 z-10">
            {/* Feature Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-customTeal dark:text-Green border border-emerald-200/80 dark:border-emerald-800/60 shadow-sm backdrop-blur-sm">
              <Sparkles className="h-4 w-4 text-Yellow" />
              <span>The Smart Way to Shop Locally</span>
              <span className="hidden sm:inline text-gray-300 dark:text-zinc-600">|</span>
              <span className="hidden sm:inline text-gray-600 dark:text-gray-300 font-normal">Fast & Reliable</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-5xl xl:text-6xl font-black font-nunito tracking-tight text-gray-900 dark:text-white leading-[1.12]">
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
            <div className="grid grid-cols-3 gap-4 sm:gap-6 pt-6 border-t border-gray-200/80 dark:border-zinc-800/80 w-full max-w-lg">
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

          {/* Right Visual Column — Seamless 3D Artwork (Extended to center) */}
          <div className="lg:col-span-6 xl:col-span-6 relative flex items-center justify-center py-4 lg:py-0">
            {/* Soft Ambient Radial Backplate Glow matching artwork tones */}
            <div className="absolute inset-0 max-w-[680px] max-h-[680px] m-auto rounded-full bg-gradient-to-tr from-emerald-100/50 via-amber-50/40 to-emerald-50/20 dark:from-emerald-950/40 dark:via-zinc-900/30 dark:to-transparent blur-3xl pointer-events-none -z-10 transform-gpu will-change-transform" />

            {/* Seamless 3D Artwork Scene (Enlarged & Extended towards center) */}
            <div className="relative w-full max-w-[660px] lg:max-w-[760px] xl:max-w-[820px] aspect-[4/3] flex items-center justify-center select-none pointer-events-none scale-100 sm:scale-105 lg:scale-110 xl:scale-115 lg:-ml-6 xl:-ml-10">
              <Image
                alt="EzyShop Local Stores & Fast Delivery 3D Showcase"
                src="/hero-3d-showcase.png"
                fill
                priority
                className="object-contain filter drop-shadow-2xl"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 820px"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;