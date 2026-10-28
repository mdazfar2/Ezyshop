"use client";

import { Star, CheckCircle2 } from "lucide-react";
import SeperatorHeading from "../ui/seperatorHeading";
import Image from "next/image";

const testimonials = [
  {
    name: "Aarav Sharma",
    role: "Regular Shopper, Green Glen",
    image: "/rajesh.jpg",
    rating: 5,
    text: "EzyShop has transformed the way my family buys groceries. We get fresh veggies from our trusted neighborhood vendor delivered in under 20 minutes!",
    store: "Ordered from Green Valley Organics",
  },
  {
    name: "Priya Nair",
    role: "Working Professional",
    image: "/priya.jpg",
    rating: 5,
    text: "The ability to order from real neighborhood shops rather than opaque warehouses is a game changer. The quality is exceptional and customer service is top notch.",
    store: "Ordered from Baker's Delight & Pharmacy",
  },
  {
    name: "Anita Desai",
    role: "Local Store Partner",
    image: "/anita.jpg",
    rating: 5,
    text: "As a local merchant, joining EzyShop expanded our customer reach 3x in just two months. The order fulfillment and delivery logistics are completely effortless.",
    store: "Partner: Fresh Express Mart",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-16 sm:py-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto mb-14">
        <SeperatorHeading label="Customer Reviews" />
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold font-nunito tracking-tight text-gray-900 dark:text-white mt-3 mb-4">
          Loved by Shoppers &{" "}
          <span className="bg-gradient-to-r from-customTeal to-emerald-500 dark:from-Green dark:to-emerald-400 bg-clip-text text-transparent">
            Local Merchants
          </span>
        </h2>
        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Discover why thousands of neighborhood residents count on EzyShop every day for their daily essentials.
        </p>
      </div>

      {/* Testimonials Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <div
            key={i}
            className="rounded-3xl bg-white dark:bg-zinc-900/90 border border-gray-200/80 dark:border-zinc-800/80 p-8 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 dark:hover:shadow-emerald-500/5 transition-all duration-300 flex flex-col justify-between relative group hover:-translate-y-1"
          >
            <div>
              {/* Star Rating */}
              <div className="flex items-center gap-1 mb-4 text-Yellow">
                {[...Array(t.rating)].map((_, idx) => (
                  <Star key={idx} className="h-4 w-4 fill-Yellow text-Yellow" />
                ))}
              </div>

              {/* Review Text */}
              <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base leading-relaxed italic mb-6">
                &ldquo;{t.text}&rdquo;
              </p>
            </div>

            {/* Author info */}
            <div className="pt-4 border-t border-gray-100 dark:border-zinc-800/80 flex items-center gap-3">
              <div className="relative w-11 h-11 rounded-full overflow-hidden border border-emerald-500/30 flex-shrink-0 bg-gray-100">
                <Image
                  src={t.image}
                  alt={t.name}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <div className="flex items-center gap-1.5">
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white truncate">
                    {t.name}
                  </h4>
                  <CheckCircle2 className="h-3.5 w-3.5 text-customTeal dark:text-Green flex-shrink-0" />
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {t.role}
                </p>
                <p className="text-[11px] text-customTeal dark:text-Green font-medium truncate mt-0.5">
                  {t.store}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TestimonialsSection;
