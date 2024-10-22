"use client"

import Image from "next/image";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import SeperatorHeading from "./ui/seperatorHeading";
import { useState } from "react";

const categories = [
  {
    id: 1,
    title: "Fashion & Accessories",
    logo: "/categories/class-1.png",
    description: "Explore the latest trends in fashion with exclusive offers on clothing, shoes, and accessories.",
    category: "Fashion",
    Offers: "50+ Brands",
    deliveryTime: "Same Day Delivery",
    startingFrom: "$10",
    buttonLink: "/fashion",
  },
  {
    id: 2,
    title: "Electronics & Gadgets",
    logo: "/categories/class-2.png",
    description: "Shop for the latest electronics and gadgets from top brands at the best prices.",
    category: "Electronics",
    Offers: "20+ Brands",
    deliveryTime: "Same Day Delivery",
    startingFrom: "$25",
    buttonLink: "/electronics",
  },
  {
    id: 3,
    title: "Groceries & Essentials",
    logo: "/categories/class-3.png",
    description: "Order fresh groceries and daily essentials from trusted local stores, delivered to your doorstep.",
    category: "Grocery",
    Offers: "30+ Stores",
    deliveryTime: "30 Minute Delivery",
    startingFrom: "$2",
    buttonLink: "/groceries",
  },
  {
    id: 4,
    title: "Home & Furniture",
    logo: "/categories/Home&Living.webp",
    description: "Transform your space with stylish furniture and home decor.",
    category: "Home",
    Offers: "60+ Brands",
    deliveryTime: "Same Day Delivery",
    startingFrom: "$20",
    buttonLink: "/home",
  },
  {
    id: 5,
    title: "Beauty & Personal Care",
    logo: "/categories/Beauty&PersonalCare.webp",
    description: "Explore beauty products and personal care essentials for your daily routine.",
    category: "Beauty",
    Offers: "30+ Brands",
    deliveryTime: "Same Day Delivery",
    startingFrom: "$10",
    buttonLink: "/beauty",
  },
  {
    id: 6,
    title: "Sports & Fitness",
    logo: "/categories/Sports&Fitness.webp",
    description: "Get premium sports equipment and fitness accessories for all activities. Stay active with fitness goals and top-rated gear.",
    category: "Sports",
    Offers: "40+ Stores",
    deliveryTime: "30 Minute Delivery",
    startingFrom: "$20",
    buttonLink: "/sports",
  },
  {
    id: 7,
    title: "Health & Wellness",
    logo: "/categories/Health&Wellness.webp",
    description: "Shop medicines, vitamins, supplements, and fitness gear for a healthy lifestyle.",
    category: "Health",
    Offers: "100+ Brands",
    deliveryTime: "Same Day Delivery",
    startingFrom: "$1",
    buttonLink: "/health",
  },
  {
    id: 8,
    title: "Books & Media",
    logo: "/categories/Books&Media.webp",
    description: "Enjoy a wide selection of books, movies and music gadgets for entertainment.",
    category: "Books",
    Offers: "60+ Brands",
    deliveryTime: "Same Day Delivery",
    startingFrom: "$5",
    buttonLink: "/books",
  },
  {
    id: 9,
    title: "Toys & Games",
    logo: "/categories/Toyes2.png",
    description: "Discover fun and educational toys and games for kids of all ages.",
    category: "Toys",
    Offers: "24+ Brands",
    deliveryTime: "Same Day Delivery",
    startingFrom: "$5",
    buttonLink: "/toys",
  },
  {
    id: 10,
    title: "Baby Products & Maternity",
    logo: "/categories/BabyProducts&Maternity.webp",
    description: "Find baby clothing, toys, and maternity products for new and expecting parents.",
    category: "Baby Products",
    Offers: "60+ Brands",
    deliveryTime: "Same Day Delivery",
    startingFrom: "$5",
    buttonLink: "/baby-products",
  },
  {
    id: 11,
    title: "Automotive & Tools",
    logo: "/categories/Automotive&Tools.webp",
    description: "Shop car accessories, tools, and maintenance essentials for your vehicle.",
    category: "Automotive",
    Offers: "55+ Brands",
    deliveryTime: "Same Day Delivery",
    startingFrom: "$10",
    buttonLink: "/automotive",
  },
  {
    id: 12,
    title: "Pet Supplies & Accessories",
    logo: "/categories/PetSupplies.webp",
    description: "Keep your furry friends happy and healthy with top-quality products like food and toys to grooming essentials.",
    category: "Pet Supplies",
    Offers: "40+ Stores",
    deliveryTime: "30 Minute Delivery",
    startingFrom: "$20",
    buttonLink: "/pet-supplies",
  },
];

const Categories = ({ showLoadMore = true }) => {
  const [showMore, setShowMore] = useState(false);

  // Slice stores: Display only 3 in the first row initially
  const initialStores = categories.slice(0, 3);
  const remainingStores = categories.slice(3);

  return (
    <div className="flex flex-col items-center justify-center gap-5 pb-10 h-full">
      <SeperatorHeading label="Trending Deals" />
      <div className="text-customTeal dark:text-Green text-3xl px-5 text-center lg:px-0 lg:text-start lg:text-5xl font-bold  font-handlee">
        Shop for your favourite products
      </div>

      <div className="h-full flex flex-col justify-center items-center gap-5 px-5 md:grid md:grid-cols-2 lg:grid-cols-3">
        {initialStores.map((card) => (
          <Card
            key={card.title}
            className="sm:w-[400px] my-5 md:hover:scale-105 transition duration-300 bg-gray-200 dark:bg-gray-700"
          >
            <CardHeader className="dark:border-DarkGray p-0">
              <div className="flex flex-col gap-2">
                <div className="relative">
                  <Image
                    width={700}
                    height={700}
                    className="z-0 rounded-tl-lg rounded-tr-lg"
                    alt="card image m-0"
                    src={card.logo}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                    <CardDescription className="text-white text-md text-center font-nunito p-4 ">
                      {card.description}
                    </CardDescription>
                  </div>
                </div>
                <CardTitle className="flex items-center text-2xl pt-4 text-customBlue dark:text-Yellow m-2 justify-center font-handlee">
                  {card.title}
                </CardTitle>
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex text-[#525252] dark:text-gray-200 items-center justify-center font-nunito ">
                <div className="border-r border-gray-400 dark:border-DarkGray font-bold">
                  <div className=" border-t border-b border-gray-400 dark:border-DarkGray p-2">
                    Category
                  </div>
                  <div className="border-b border-gray-400 dark:border-DarkGray p-2">
                    Offers Available
                  </div>
                  <div className="border-b border-gray-400 dark:border-DarkGray p-2">
                    Delivery Time
                  </div>
                  <div className="border-b border-gray-400 dark:border-DarkGray p-2">
                    Starting from
                  </div>
                </div>
                <div>
                  <div className="border-t border-b border-gray-400 dark:border-DarkGray p-2">
                    {card.category}
                  </div>
                  <div className="border-b border-gray-400 dark:border-DarkGray p-2">
                    {card.Offers}
                  </div>
                  <div className="border-b border-gray-400 dark:border-DarkGray p-2">
                    {card.deliveryTime}
                  </div>
                  <div className="border-b border-gray-400 dark:border-DarkGray p-2">
                    {card.startingFrom}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center pt-0 md:pt-0">
              <Button
                variant="default"
                className="bg-customTeal dark:bg-Green text-gray-200 rounded-full dark:text-gray-100 dark:hover:opacity-8 "
              >
                Shop Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {showLoadMore && showMore && (
        <div className="h-full flex flex-col justify-center items-center gap-5 px-5 md:grid md:grid-cols-2 lg:grid-cols-3">
          {remainingStores.map((card) => (
            <Card
              key={card.title}
              className="sm:w-[400px] md:hover:scale-105 mb-6 transition duration-300 bg-gray-200 dark:bg-gray-700 "
            >
              <CardHeader className="dark:border-DarkGray p-0">
                <div className="flex flex-col gap-2">
                  <div className="relative">
                    <Image
                      width={700}
                      height={700}
                      className="z-0  rounded-tl-lg rounded-tr-lg"
                      alt="card image"
                      src={card.logo}
                    />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-center text-center opacity-0 hover:opacity-100 transition-opacity duration-300">
                      <CardDescription className="text-white text-md text-center font-nunito p-4 ">
                        {card.description}
                      </CardDescription>
                    </div>
                  </div>
                  <CardTitle className="flex items-center text-2xl pt-4 text-customBlue dark:text-Yellow m-2 justify-center font-handlee">
                    {card.title}
                  </CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <div className="flex dark:text-gray-200 items-center justify-center font-nunito">
                  <div className="border-r border-gray-400 dark:border-DarkGray font-semibold">
                    <div className="border-t border-b border-gray-400 dark:border-DarkGray p-2">
                      Category
                    </div>
                    <div className="border-b border-gray-400 dark:border-DarkGray p-2">
                      Offers Available
                    </div>
                    <div className="border-b border-gray-400 dark:border-DarkGray p-2">
                      Delivery Time
                    </div>
                    <div className="border-b border-gray-400 dark:border-DarkGray p-2">
                      Starting from
                    </div>
                  </div>
                  <div>
                    <div className="border-t border-b border-gray-400 dark:border-DarkGray p-2">
                      {card.category}
                    </div>
                    <div className="border-b border-gray-400 dark:border-DarkGray p-2">
                      {card.Offers}
                    </div>
                    <div className="border-b border-gray-400 dark:border-DarkGray p-2">
                      {card.deliveryTime}
                    </div>
                    <div className="border-b border-gray-400 dark:border-DarkGray p-2">
                      {card.startingFrom}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center pt-0 md:pt-0">
                <Button
                  variant="default"
                  className="bg-customTeal dark:bg-Green text-gray-200 dark:text-gray-100 rounded-full  dark:hover:opacity-80"
                >
                  Shop Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

      { showLoadMore && 
        <Button
          onClick={() => setShowMore(!showMore)}
          className="mt-6 px-4 py-2 bg-customTeal rounded-full dark:bg-Green dark:text-gray-100 dark:hover:opacity-80"
        >
            {showMore?"Show Less":"Show More"}
        </Button>
      }

    
 
    </div>
  );
};

export default Categories;
