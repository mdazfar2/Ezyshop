import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Sparkles,
  Store,
  Users,
  ShieldCheck,
  Zap,
  HeartHandshake,
  ArrowRight,
  Globe,
  Award,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import SeperatorHeading from "@/components/ui/seperatorHeading";
import Features from "@/components/features";

export const metadata: Metadata = {
  title: "About Us - EzyShop | Revolutionizing Hyperlocal Shopping",
  description:
    "Learn about EzyShop's mission to empower local merchants and deliver fresh groceries and essentials to neighborhood doorsteps.",
};

const pillars = [
  {
    icon: <Store className="h-6 w-6" />,
    title: "Empowering Local Stores",
    description:
      "We champion neighborhood shop owners and mom-and-pop boutiques by giving them cutting-edge digital storefronts, fair fees, and reliable logistics.",
    tag: "Community First",
  },
  {
    icon: <Zap className="h-6 w-6" />,
    title: "Ultra-Fast Delivery",
    description:
      "Because our partner stores are already right in your neighborhood, orders travel shorter distances and reach your doorstep within 20 to 30 minutes.",
    tag: "Speed & Freshness",
  },
  {
    icon: <ShieldCheck className="h-6 w-6" />,
    title: "Transparent Quality",
    description:
      "Real products from real shelves. No mystery dark warehouses — only verified products inspected and packed fresh by trusted store personnel.",
    tag: "100% Authentic",
  },
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: "Sustainable Economy",
    description:
      "Every dollar spent through EzyShop directly supports local business owners, delivery couriers, and neighborhood community vitality.",
    tag: "Local Impact",
  },
];

const stats = [
  { value: "500+", label: "Verified Local Stores", icon: <Store className="h-5 w-5 text-customTeal dark:text-Green" /> },
  { value: "50,000+", label: "Happy Shoppers", icon: <Users className="h-5 w-5 text-Yellow" /> },
  { value: "< 28 Mins", label: "Average Delivery Time", icon: <Zap className="h-5 w-5 text-customTeal dark:text-Green" /> },
  { value: "99.8%", label: "Satisfaction Rate", icon: <Award className="h-5 w-5 text-Yellow" /> },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen dark:bg-DarkGray">
      {/* Modern Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-16 lg:pt-16 lg:pb-24 border-b border-gray-200/80 dark:border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-customTeal dark:text-Green border border-emerald-200/80 dark:border-emerald-800/60 mb-6 shadow-sm">
            <Sparkles className="h-4 w-4 text-Yellow" />
            <span>Our Mission & Story</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-nunito tracking-tight text-gray-900 dark:text-white max-w-4xl mx-auto leading-tight mb-6">
            Empowering{" "}
            <span className="bg-gradient-to-r from-customTeal via-emerald-600 to-Yellow dark:from-Green dark:via-emerald-400 dark:to-Yellow bg-clip-text text-transparent">
              Local Commerce
            </span>
          </h1>

          <p className="text-base sm:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed mb-10">
            EzyShop bridges the gap between traditional brick-and-mortar neighborhood stores and modern digital shoppers.
            We make shopping from your favorite local shops fast, transparent, and effortlessly convenient.
          </p>

          {/* Stats Bar */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-5xl mx-auto">
            {stats.map((s, i) => (
              <div
                key={i}
                className="rounded-2xl bg-white dark:bg-zinc-900/90 border border-gray-200/80 dark:border-zinc-800/80 p-6 shadow-sm flex flex-col items-center justify-center text-center"
              >
                <div className="mb-2 p-2 rounded-xl bg-gray-50 dark:bg-zinc-800">{s.icon}</div>
                <div className="text-2xl sm:text-3xl font-extrabold font-nunito text-gray-900 dark:text-white">
                  {s.value}
                </div>
                <div className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
                  {s.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story & Vision Section */}
      <section className="py-16 sm:py-24 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6 relative">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-zinc-800 aspect-[4/3]">
              <Image
                src="/about-us-1.png"
                alt="EzyShop Team and Store Partners"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 550px"
              />
            </div>
            {/* Overlay badge */}
            <div className="absolute -bottom-6 -right-6 sm:bottom-6 sm:right-6 bg-white/95 dark:bg-zinc-900/95 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-gray-100 dark:border-zinc-800 flex items-center gap-3">
              <div className="p-2.5 rounded-xl bg-customTeal text-white">
                <Globe className="h-5 w-5" />
              </div>
              <div>
                <p className="text-xs font-bold text-gray-900 dark:text-white">Hyperlocal Delivery Network</p>
                <p className="text-[11px] text-gray-500 dark:text-gray-400">Connecting cities shop-by-shop</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6 flex flex-col gap-6">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-customTeal dark:text-Green">
              <span>Why We Started EzyShop</span>
            </div>

            <h2 className="text-3xl sm:text-4xl font-extrabold font-nunito text-gray-900 dark:text-white leading-tight">
              Local Stores Are the Heart of Every Vibrant Community
            </h2>

            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              For generations, neighborhood shopkeepers have known their customers personally, stocking fresh produce and everyday essentials tailored to local tastes. But as centralized e-commerce giants dominated, independent local shops were left behind.
            </p>

            <p className="text-base text-gray-600 dark:text-gray-300 leading-relaxed">
              EzyShop was created to level the playing field. By empowering local merchants with a powerful digital marketplace, automated inventory, and on-demand delivery, we ensure neighborhood shops thrive while customers enjoy speed and personal trust.
            </p>

            <div className="space-y-3 pt-2">
              {[
                "100% locally sourced items directly from nearby verified retailers",
                "Eco-friendly, short-distance deliveries with minimal carbon footprint",
                "Supporting local employment and independent entrepreneurship",
              ].map((point, idx) => (
                <div key={idx} className="flex items-center gap-3">
                  <CheckCircle2 className="h-5 w-5 text-customTeal dark:text-Green flex-shrink-0" />
                  <span className="text-sm font-medium text-gray-700 dark:text-gray-200">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Core Pillars Grid */}
      <section className="py-16 bg-gray-50/50 dark:bg-zinc-950/40 border-y border-gray-200/80 dark:border-zinc-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-14">
            <SeperatorHeading label="Our Core Pillars" />
            <h2 className="text-3xl sm:text-4xl font-extrabold font-nunito text-gray-900 dark:text-white mt-3 mb-4">
              What Sets EzyShop Apart
            </h2>
            <p className="text-base text-gray-600 dark:text-gray-300">
              Built on transparency, community connection, and unwavering reliability.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {pillars.map((p, i) => (
              <div
                key={i}
                className="rounded-3xl bg-white dark:bg-zinc-900 border border-gray-200/80 dark:border-zinc-800/80 p-7 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 dark:hover:shadow-emerald-500/5 hover:border-customTeal/40 dark:hover:border-Green/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-customTeal dark:text-Green flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                    {p.icon}
                  </div>
                  <span className="text-[11px] font-semibold uppercase tracking-wider text-customTeal dark:text-Green mb-2 block">
                    {p.tag}
                  </span>
                  <h3 className="text-lg font-bold font-nunito text-gray-900 dark:text-white mb-2.5">
                    {p.title}
                  </h3>
                  <p className="text-sm text-gray-600 dark:text-gray-300 leading-relaxed">
                    {p.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Section Reusable */}
      <Features />

      {/* Final Call to Action */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-3xl bg-gradient-to-r from-emerald-800 via-emerald-900 to-zinc-950 p-10 sm:p-14 text-white text-center shadow-xl relative overflow-hidden">
          <div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-5">
            <h2 className="text-3xl sm:text-4xl font-extrabold font-nunito tracking-tight">
              Ready to Experience the Best of Local Shopping?
            </h2>
            <p className="text-emerald-100 text-base sm:text-lg">
              Explore hundreds of neighborhood stores and daily discounts available for instant delivery today.
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 pt-2">
              <Link href="/shops">
                <Button
                  size="lg"
                  className="h-12 px-8 rounded-full bg-Yellow hover:bg-Yellow/90 text-zinc-950 font-bold shadow-lg shadow-yellow-500/20 hover:-translate-y-0.5 transition-all"
                >
                  <span>Explore Stores Now</span>
                  <ArrowRight className="h-4 w-4 ml-2" />
                </Button>
              </Link>
              <Link href="/seller">
                <Button
                  size="lg"
                  variant="outline"
                  className="h-12 px-7 rounded-full border-white/30 text-white hover:bg-white/10"
                >
                  Register Your Shop
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
