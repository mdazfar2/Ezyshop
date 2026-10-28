"use client";

import Link from "next/link";
import { Button } from "../ui/button";
import Image from "next/image";
import { Shop } from "@/app/(Customer)/shops/page";
import {
  MapPin,
  Phone,
  Star,
  Clock,
  CheckCircle2,
  ArrowRight,
} from "lucide-react";

interface ShopCardProps {
  shop: Shop;
}

const ShopCard: React.FC<ShopCardProps> = ({ shop }) => {
  const fallbackImage = "/hero.png";
  const displayImage = shop.coverUrl || fallbackImage;

  return (
    <div className="group rounded-3xl bg-white dark:bg-zinc-900/90 border border-gray-200/80 dark:border-zinc-800/80 shadow-sm hover:shadow-xl hover:shadow-emerald-950/5 dark:hover:shadow-emerald-500/5 hover:border-customTeal/40 dark:hover:border-Green/40 transition-all duration-300 overflow-hidden flex flex-col justify-between hover:-translate-y-1">
      <div>
        {/* Cover Image */}
        <div className="relative aspect-[16/9] w-full overflow-hidden bg-gray-100 dark:bg-zinc-800">
          <Image
            height={400}
            width={700}
            alt={shop.storeName}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            src={displayImage}
            onError={(e) => {
              // fallback if invalid url
              (e.target as HTMLImageElement).src = fallbackImage;
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent pointer-events-none" />

          {/* Open Now Pill */}
          <div className="absolute top-3 left-3 px-3 py-1 rounded-full text-xs font-semibold bg-white/95 dark:bg-zinc-900/90 text-customTeal dark:text-Green backdrop-blur-md shadow-sm border border-gray-100 dark:border-zinc-800 flex items-center gap-1.5">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
            <span>Open Now</span>
          </div>

          {/* Delivery estimate */}
          <div className="absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-md flex items-center gap-1.5">
            <Clock className="h-3.5 w-3.5 text-Yellow" />
            <span>20-35 mins</span>
          </div>
        </div>

        {/* Card Content */}
        <div className="p-6">
          <div className="flex items-start justify-between gap-2 mb-2">
            <div>
              <div className="flex items-center gap-1.5">
                <h3 className="text-xl font-bold font-nunito text-gray-900 dark:text-white group-hover:text-customTeal dark:group-hover:text-Green transition-colors">
                  {shop.storeName}
                </h3>
                <CheckCircle2 className="h-4 w-4 text-customTeal dark:text-Green flex-shrink-0" />
              </div>

              {shop.storeAddress && (
                <div className="flex items-center gap-1 text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <MapPin className="h-3.5 w-3.5 text-customTeal dark:text-Green flex-shrink-0" />
                  <span className="truncate">{shop.storeAddress}</span>
                </div>
              )}
            </div>

            <div className="flex items-center gap-1 px-2 py-1 rounded-lg bg-amber-50 dark:bg-amber-950/40 text-Yellow font-bold text-xs">
              <Star className="h-3.5 w-3.5 fill-Yellow text-Yellow" />
              <span>4.8</span>
            </div>
          </div>

          <p className="text-sm text-gray-600 dark:text-gray-300 line-clamp-2 leading-relaxed mt-2.5">
            {shop.storeDescription || "Your trusted neighborhood store providing fresh items and daily essentials."}
          </p>

          {shop.storeMobile && (
            <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mt-3 pt-3 border-t border-gray-100 dark:border-zinc-800/80">
              <Phone className="h-3.5 w-3.5 text-gray-400" />
              <span>{shop.storeMobile}</span>
            </div>
          )}
        </div>
      </div>

      {/* Card Footer */}
      <div className="px-6 pb-6 pt-1">
        <Link href={`/shops/${shop.id}?isfeatured=true`} className="w-full block">
          <Button className="w-full h-11 rounded-xl bg-customTeal hover:bg-customTeal/90 text-white dark:bg-Green dark:text-zinc-950 dark:hover:bg-Green/90 font-semibold text-sm transition-all duration-200 flex items-center justify-center gap-2 shadow-sm group-hover:shadow-md">
            <span>Visit Store & Browse</span>
            <ArrowRight className="h-4 w-4" />
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default ShopCard;
