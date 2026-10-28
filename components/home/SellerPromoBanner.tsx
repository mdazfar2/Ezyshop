"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import { Store, TrendingUp, Users, ArrowRight, ShieldCheck, Check } from "lucide-react";

const SellerPromoBanner = () => {
  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-emerald-900 via-emerald-950 to-zinc-950 border border-emerald-500/20 p-8 sm:p-12 lg:p-16 text-white shadow-2xl">
        {/* Decorative background glows */}
        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-emerald-500/20 blur-3xl pointer-events-none transform-gpu will-change-transform" />
        <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-yellow-500/10 blur-3xl pointer-events-none transform-gpu will-change-transform" />

        <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          {/* Left Text */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 w-fit">
              <Store className="h-3.5 w-3.5 text-Yellow" />
              <span>Partner With EzyShop</span>
            </div>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-nunito tracking-tight text-white leading-tight">
              Grow Your Local Store with Thousands of New Customers
            </h2>

            <p className="text-emerald-100/80 text-base sm:text-lg leading-relaxed max-w-xl">
              Take your neighborhood business online without any technical hassle.
              Manage digital catalog, accept orders seamlessly, and access our dedicated delivery fleet.
            </p>

            {/* Seller perks */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
              {[
                "0% Commission on first 30 days",
                "Dedicated courier support fleet",
                "Instant payouts & live analytics",
                "Quick 10-minute store setup",
              ].map((perk, i) => (
                <div key={i} className="flex items-center gap-2.5">
                  <div className="p-1 rounded-full bg-emerald-500/30 text-emerald-300">
                    <Check className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm text-emerald-100">{perk}</span>
                </div>
              ))}
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-4">
              <Link href="/seller" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  className="w-full sm:w-auto h-12 px-8 rounded-full bg-Yellow hover:bg-Yellow/90 text-zinc-950 font-bold shadow-lg shadow-yellow-500/20 hover:-translate-y-0.5 transition-all duration-200"
                >
                  <span>Become a Seller</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="/Contact" className="w-full sm:w-auto">
                <Button
                  size="lg"
                  variant="outline"
                  className="w-full sm:w-auto h-12 px-7 rounded-full border-emerald-500/40 hover:bg-emerald-800/40 text-emerald-100"
                >
                  Contact Merchant Support
                </Button>
              </Link>
            </div>
          </div>

          {/* Right Stats Showcase */}
          <div className="lg:col-span-5 grid grid-cols-2 gap-4">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col justify-center">
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 w-fit mb-3">
                <Store className="h-5 w-5" />
              </div>
              <h4 className="text-3xl font-extrabold text-white">500+</h4>
              <p className="text-xs text-emerald-200/80 mt-1">Verified Local Shops</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col justify-center">
              <div className="p-2.5 rounded-xl bg-yellow-500/20 text-Yellow w-fit mb-3">
                <TrendingUp className="h-5 w-5" />
              </div>
              <h4 className="text-3xl font-extrabold text-white">2.5x</h4>
              <p className="text-xs text-emerald-200/80 mt-1">Avg Merchant Revenue Boost</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col justify-center">
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 w-fit mb-3">
                <Users className="h-5 w-5" />
              </div>
              <h4 className="text-3xl font-extrabold text-white">50k+</h4>
              <p className="text-xs text-emerald-200/80 mt-1">Active Neighborhood Shoppers</p>
            </div>

            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 flex flex-col justify-center">
              <div className="p-2.5 rounded-xl bg-emerald-500/20 text-emerald-300 w-fit mb-3">
                <ShieldCheck className="h-5 w-5" />
              </div>
              <h4 className="text-3xl font-extrabold text-white">99.8%</h4>
              <p className="text-xs text-emerald-200/80 mt-1">On-Time Delivery Rate</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SellerPromoBanner;
