"use client";
import { useState, useEffect } from "react";
import ShopCard from "@/components/shops/shopCard";
import SeperatorHeading from "@/components/ui/seperatorHeading";
import axios from "axios";
import { Spinner } from "@/components/ui/spinner";
import toast, { Toaster } from "react-hot-toast";



export interface Shop {
  id: string;
  name: string;
  email: string;
  storeName: string;
  storeAddress: string;
  storeMobile: string;
  storeDescription: string;
  coverUrl:string
}

const Shop = () => {
  const [shops, setShops] = useState<Shop[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Fetch shops data on component mount
  useEffect(() => {
    const fetchShops = async () => {
      try {
        const response = await axios.get(`${process.env.NEXT_PUBLIC_BASE_URL}/api/seller`);
        setShops(response.data);
      } catch (err) {
        setError(err instanceof Error ? err.message : "An unknown error occurred");
        console.error("Error fetching products:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchShops();
  }, []);

  if (loading) return <Spinner/>;
  if (error) {
    toast.error(error)
  };

  return (
    <div className="h-full dark:bg-DarkGray pb-10">
      <Toaster/>
      <div className="text-white flex items-center justify-center bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow h-full mb-20 p-24">
        <div className="text-4xl pt-5 lg:pt-0 lg:text-7xl text-center lg:text-start font-extrabold font-handlee">
          Our Shops
        </div>
      </div>

      <SeperatorHeading label="Our shops" />
      <div className="text-customTeal dark:text-Green mt-10 text-3xl px-5 text-center lg:px-0 lg:text-center mb-10 lg:text-5xl font-bold font-handlee">
        Explore Our Partner Shops
      </div>
      <div className="flex flex-col items-center justify-center gap-10 px-10 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-24">
        {shops.map((shop) => (
          <ShopCard key={shop.id} shop={shop} />
        ))}
      </div>
    </div>
  );
};

export default Shop;
