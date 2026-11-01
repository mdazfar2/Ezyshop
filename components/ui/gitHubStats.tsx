"use client";

import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

interface RatingForkProps {
  type: "star" | "fork";
  count: string | number;
  link: string;
  bgColor: string;
  btnBgColor: string;
  btnTextColor: string;
  btnHoverColor: string;
  btnText: string;
}

const RatingForkComponent: React.FC<RatingForkProps> = ({
  type,
  count,
  link,
  btnBgColor,
  btnTextColor,
  btnHoverColor,
  btnText,
}) => {
  const [hovered, setHovered] = useState(false);
  const buttonStyle = {
    backgroundColor: hovered ? btnHoverColor : btnBgColor,
    color: btnTextColor,
    transition: "background-color 0.3s ease-in-out, color 0.3s ease-in-out",
  };

  return (
    <div
      className="dark:text-white border border-gray-200 dark:border-gray-700/60 rounded-xl md:w-[200px] text-3xl p-4 dark:bg-white/[0.08] bg-black/[0.04] w-full"
    >
      {type === "star" ? (
        <div className="inline-block text-[18px] w-[38px] h-[38px] leading-[38px] dark:text-[#000] bg-Yellow rounded-full text-center p-0">
          <i className="fa-solid fa-star"></i>
        </div>
      ) : (
        <div className="inline-block text-[18px] w-[38px] h-[38px] leading-[38px] dark:text-[#000] bg-Green rounded-full text-center p-0">
          <i className="fa-solid fa-code-fork"></i>
        </div>
      )}
      <div className="text-3xl my-1 mt-2">
        {count}
        <span className="text-lg m-2">
          {type === "star" ? "Stars" : "Forks"}
        </span>
      </div>
      <Link href={link} target="_blank" rel="noopener noreferrer">
        <button
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
          style={buttonStyle}
          className="text-base p-2 mt-2 rounded-lg text-center shadow-sm w-full font-medium cursor-pointer"
        >
          {btnText}
        </button>
      </Link>
    </div>
  );
};

const GitHubStats = () => {
  const [starCount, setStarCount] = useState<number | null>(null);
  const [forkCount, setForkCount] = useState<number | null>(null);

  useEffect(() => {
    let isMounted = true;
    const getStarForkCount = async () => {
      try {
        const response = await fetch(
          "https://api.github.com/repos/mdazfar2/Ezyshop"
        );
        if (!response.ok) return;
        const data = await response.json();
        if (isMounted) {
          if (typeof data.stargazers_count === "number") {
            setStarCount(data.stargazers_count);
          }
          if (typeof data.forks === "number") {
            setForkCount(data.forks);
          }
        }
      } catch (error) {
        console.error("Error fetching repository stats:", error);
      }
    };
    getStarForkCount();
    return () => {
      isMounted = false;
    };
  }, []);

  return (
    <div className="min-h-52 max-w-[1130px] w-full p-6 rounded-3xl bg-white dark:bg-gradient-to-br dark:from-[#112617]/95 dark:via-[#0c1d12]/95 dark:to-[#08150d]/95 mx-4 md:mx-8 mt-14 sm:mt-18 lg:mt-24 mb-16 sm:mb-20 border border-gray-200/90 dark:border-emerald-500/25 shadow-md transition-all duration-300">
      <div className="h-full flex flex-col lg:flex-row items-center justify-around">
        <div className="mr-0 lg:mr-8">
          <div className="flex items-start justify-between lg:px-4 pb-4 flex-col">
            <div className="flex justify-center items-center">
              <Image
                src="/ezyshop.png"
                width={60}
                height={60}
                alt="ezyshop logo"
              />
              <Link href="/" className="lg:ml:0 gap-x-2">
                <p className="font-bold text-4xl text-customTeal dark:text-Green font-nunito">
                  Ezyshop
                </p>
              </Link>
            </div>
            <p className="ml-2 text-gray-700 dark:text-gray-200 text-justify pt-3">
              EzyShop is a user-friendly platform that connects you to local
              stores, offering a seamless shopping experience. Compare prices,
              access exclusive deals, and enjoy hassle-free deliveries for
              groceries, essentials, and organic products all in one app.
            </p>
          </div>
        </div>
        <div className="flex sm:flex-row flex-col items-center justify-center gap-10 mt-4 lg:mt-0 w-full">
          <RatingForkComponent
            type="star"
            count={starCount !== null ? starCount : "150+"}
            link="https://github.com/mdazfar2/Ezyshop"
            bgColor="#575448"
            btnBgColor="#D4A017"
            btnHoverColor="#E8C820"
            btnTextColor="white"
            btnText="Give a star"
          />

          <RatingForkComponent
            type="fork"
            count={forkCount !== null ? forkCount : "220+"}
            link="https://github.com/mdazfar2/Ezyshop/blob/main/CONTRIBUTING.md"
            bgColor="#403B56"
            btnBgColor="#1B8A2C"
            btnHoverColor="#6DBB3A"
            btnTextColor="white"
            btnText="Contribute now"
          />
        </div>
      </div>
    </div>
  );
};

export default GitHubStats;
