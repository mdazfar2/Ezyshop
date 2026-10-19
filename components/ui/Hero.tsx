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
    <section className="relative overflow-hidden py-4 sm:py-6 lg:py-10 mb-12 lg:mb-16">
      {/* Background Ambient Glows */}
      <div className="absolute top-1/2 -translate-y-1/2 left-1/4 w-96 h-96 bg-teal-500/10 dark:bg-teal-500/5 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/2 -translate-y-1/2 right-1/4 w-96 h-96 bg-sky-500/10 dark:bg-sky-500/5 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-3xl bg-gradient-to-br from-teal-50/80 via-white to-sky-50/60 dark:from-zinc-900/85 dark:via-[#131418] dark:to-zinc-950/90 border border-teal-100/80 dark:border-zinc-800/80 py-10 sm:py-14 px-6 sm:px-10 lg:px-14 shadow-sm overflow-hidden flex items-center justify-center">
          {/* Subtle Decorative Corner Glow */}
          <div className="absolute -top-24 -right-24 w-72 h-72 bg-teal-400/15 dark:bg-teal-400/10 rounded-full blur-3xl pointer-events-none" />

          <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center justify-center">
            {/* Left Content Column - Centered Vertically */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left justify-center gap-5 my-auto">
              {/* Feature Pill Badge */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-teal-500/10 text-customTeal dark:text-teal-400 border border-teal-500/20 backdrop-blur-sm">
                <Sparkles className="h-3.5 w-3.5 text-customTeal dark:text-teal-400" />
                <span>The Smart Way to Shop Locally</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black font-nunito tracking-tight text-gray-900 dark:text-white leading-[1.12]">
                Revolutionizing How You{" "}
                <span className="bg-gradient-to-r from-customTeal via-teal-500 to-sky-500 dark:from-teal-400 dark:via-teal-300 dark:to-sky-400 bg-clip-text text-transparent">
                  Shop Locally
                </span>
              </h1>

              {/* Subheading / Description */}
              <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-xl leading-relaxed">
                Bringing your favorite local stores directly to your doorstep.
                Browse neighborhood shops, compare exclusive deals, and get fresh
                groceries and daily essentials delivered in minutes.
              </p>

              {/* CTA Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto pt-1">
                <Link href="/shops" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    className="w-full sm:w-auto h-12 px-7 rounded-full text-sm sm:text-base font-semibold bg-customTeal hover:bg-customTeal/90 text-white shadow-lg shadow-teal-500/20 hover:shadow-teal-500/35 hover:-translate-y-0.5 transition-all duration-200"
                  >
                    <span>Start Shopping</span>
                    <ArrowRight className="h-4 w-4 ml-2" />
                  </Button>
                </Link>
                <Link href="/Categories" className="w-full sm:w-auto">
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto h-12 px-6 rounded-full text-sm sm:text-base font-medium border-gray-300 dark:border-zinc-700 hover:border-customTeal dark:hover:border-teal-400 hover:bg-teal-50/50 dark:hover:bg-zinc-800 transition-all duration-200 text-gray-700 dark:text-gray-200"
                  >
                    Browse Categories
                  </Button>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 pt-4 border-t border-gray-200/80 dark:border-zinc-800/80 w-full max-w-lg">
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Clock className="h-4 w-4 text-customTeal dark:text-teal-400 flex-shrink-0" />
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                    Fast Delivery
                  </span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <ShieldCheck className="h-4 w-4 text-customTeal dark:text-teal-400 flex-shrink-0" />
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                    100% Quality
                  </span>
                </div>
                <div className="flex items-center gap-2 justify-center lg:justify-start">
                  <Store className="h-4 w-4 text-customTeal dark:text-teal-400 flex-shrink-0" />
                  <span className="text-xs font-medium text-gray-600 dark:text-gray-300">
                    Local Stores
                  </span>
                </div>
              </div>
            </div>

            {/* Right Visual Image Column - Centered Vertically & Horizontally */}
            <div className="lg:col-span-5 relative flex items-center justify-center my-auto">
              {/* Ambient radial glow behind image */}
              <div className="absolute inset-4 sm:inset-8 bg-gradient-to-tr from-teal-500/20 to-sky-500/20 dark:from-teal-500/10 dark:to-sky-500/10 rounded-full blur-2xl pointer-events-none" />

              {/* The Hero Image */}
              <div className="relative z-10 max-w-[340px] sm:max-w-[400px] lg:max-w-[440px] w-full flex items-center justify-center transition-transform duration-500 hover:scale-[1.02]">
                <Image
                  alt="Ezyshop Delivery Partner"
                  src="/hero.png"
                  width={500}
                  height={500}
                  priority
                  className="w-full h-auto object-contain drop-shadow-xl"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;