"use client";
import { useState, useEffect } from "react";
import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const LearnAboutUs = () => {
  const [visitors, setVisitors] = useState(0);

  useEffect(() => {
    // Simulate visit count (you can replace this with backend logic)
    const storedVisits = localStorage.getItem("visitCount");
    const count = storedVisits ? parseInt(storedVisits) + 1 : 1;
    localStorage.setItem("visitCount", count.toString());
    setVisitors(count);
  }, []);

  return (
    <div className="flex items-center dark:text-gray-200 justify-center flex-col px-20 md:px-20">
      <div className="grid grid-cols-12 lg:w-10/12">
        {/* Left Image */}
        <div className="col-span-12 lg:col-span-5 py-5 lg:mr-10 flex justify-center">
          <Image
            alt="aboutusImage"
            src={"/about-us-1.png"}
            width={500}
            height={500}
            className="rounded-lg w-full max-w-[full]"
          />
        </div>

        {/* Right Content */}
        <div className="col-span-12 lg:col-span-7 flex gap-8 flex-col justify-start">
          <div className="font-handlee text-2xl text-customBlue dark:text-Green font-bold md:text-4xl">
            Bringing Every Store to Your Door
          </div>
          <p className="text-md md:text-base font-nunito">
            EzyShop is your go-to platform for shopping locally from the comfort of your home.
          </p>

          <div className="flex flex-col md:flex-row gap-5">
            <Image
              src={"/about-us-2.png"}
              alt="aboutusImage"
              width={350}
              height={350}
              className="rounded-lg"
            />
            <div className="flex flex-col gap-2 font-nunito">
              <div className="border-b-2 border-gray-500" />
              {[
                "Shop from local stores or malls near you",
                "Quick, reliable delivery from the stores you trust",
                "Exclusive offers, only available through EzyShop",
              ].map((text, i) => (
                <div key={i} className="flex gap-2">
                  <Check className="h-7 w-7 font-bold text-customTeal dark:text-Yellow" />
                  <div className="text-base">{text}</div>
                </div>
              ))}
              <div className="border-b-2 border-gray-500" />
            </div>
          </div>
        </div>
      </div>

      {/* ✅ Visitors Counter */}
      <div className="mt-8 text-center text-lg font-semibold dark:text-yellow-300">
        👥 Website Visitors: <span className="text-customTeal dark:text-green-400">{visitors}</span>
      </div>

      <Link href={"/shops"}>
        <Button className="rounded-full bg-customTeal dark:bg-Green dark:text-white dark:hover:opacity-80 h-10 w-40 text-md m-10 font-nunito">
          Explore Stores
        </Button>
      </Link>
    </div>
  );
};

export default LearnAboutUs;