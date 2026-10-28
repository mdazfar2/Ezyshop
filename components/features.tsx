"use client";

import {
  Car,
  CreditCard,
  Zap,
  ShoppingCart,
  Store,
  TicketPercent,
  ArrowUpRight,
} from "lucide-react";
import SeperatorHeading from "./ui/seperatorHeading";

const Features = () => {
  const cardData = [
    {
      title: "Wide Product Selection",
      icon: <ShoppingCart className="h-6 w-6" />,
      badge: "10,000+ Items",
      description:
        "Discover everything from farm-fresh groceries to high-tech electronics, curated all in one seamless app.",
      accent: "from-emerald-500/20 to-teal-500/10",
    },
    {
      title: "Local & Mall-Based Stores",
      icon: <Store className="h-6 w-6" />,
      badge: "Neighborhood Favorites",
      description:
        "Support neighborhood boutiques and shop top malls with genuine inventory direct from verified local vendors.",
      accent: "from-yellow-500/20 to-amber-500/10",
    },
    {
      title: "Seamless Ordering",
      icon: <Zap className="h-6 w-6" />,
      badge: "1-Tap Checkout",
      description:
        "Enjoy a frictionless order flow designed to save your time with instant reorders and real-time order tracking.",
      accent: "from-emerald-500/20 to-green-500/10",
    },
    {
      title: "Express Doorstep Delivery",
      icon: <Car className="h-6 w-6" />,
      badge: "Under 30 Mins",
      description:
        "Our trained courier fleet delivers your orders fresh, packaged safely, and right on schedule.",
      accent: "from-teal-500/20 to-emerald-500/10",
    },
    {
      title: "Exclusive Deals & Offers",
      icon: <TicketPercent className="h-6 w-6" />,
      badge: "Daily Discounts",
      description:
        "Unlock special vendor-direct pricing, promo codes, and cashback rewards exclusive to EzyShop shoppers.",
      accent: "from-amber-500/20 to-yellow-500/10",
    },
    {
      title: "100% Secure Payments",
      icon: <CreditCard className="h-6 w-6" />,
      badge: "Bank-Grade Security",
      description:
        "Complete orders with absolute peace of mind using multiple encrypted gateways, UPI, cards, and COD.",
      accent: "from-emerald-500/20 to-emerald-700/10",
    },
  ];

  return (
    <section className="py-12 sm:py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <SeperatorHeading label="Our Facilities" />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-nunito tracking-tight text-gray-900 dark:text-white mt-3 mb-4">
          Built for a{" "}
          <span className="bg-gradient-to-r from-customTeal to-emerald-500 dark:from-Green dark:to-emerald-400 bg-clip-text text-transparent">
            Seamless Shopping
          </span>{" "}
          Experience
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
          Everything you need to discover, order, and receive products from your favorite local shops with total convenience.
        </p>
      </div>

      {/* Modern Facility Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {cardData.map((item) => (
          <div
            key={item.title}
            className="group relative rounded-2xl bg-white dark:bg-zinc-900/80 border border-gray-200/80 dark:border-zinc-800/80 p-7 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 dark:hover:shadow-emerald-500/5 hover:border-customTeal/40 dark:hover:border-Green/40 transition-all duration-300 flex flex-col justify-between hover:-translate-y-1.5"
          >
            {/* Top row: Icon + Badge */}
            <div>
              <div className="flex items-center justify-between mb-6">
                <div
                  className={`w-13 h-13 p-3.5 rounded-2xl bg-gradient-to-br ${item.accent} text-customTeal dark:text-Green flex items-center justify-center shadow-inner group-hover:scale-110 transition-transform duration-300`}
                >
                  {item.icon}
                </div>
                <span className="text-[11px] font-semibold tracking-wide uppercase px-3 py-1 rounded-full bg-gray-100 dark:bg-zinc-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-zinc-700">
                  {item.badge}
                </span>
              </div>

              {/* Title & Description */}
              <h3 className="text-xl font-bold font-nunito text-gray-900 dark:text-white mb-2.5 group-hover:text-customTeal dark:group-hover:text-Green transition-colors duration-200">
                {item.title}
              </h3>
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed">
                {item.description}
              </p>
            </div>

            {/* Bottom accent hover highlight */}
            <div className="pt-6 mt-4 border-t border-gray-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-semibold text-customTeal dark:text-Green opacity-80 group-hover:opacity-100 transition-opacity">
              <span>Learn more</span>
              <ArrowUpRight className="h-4 w-4 transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Features;
