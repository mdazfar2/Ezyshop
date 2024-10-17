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

const cardData = [
  {
    id: 1,
    title: "Fashion Hub",
    logo: "/shops/fashion_image1.jpg",
    description: "Explore trendy clothes for all ages.",
    category: "Fashion",
    Offers: "30+ Brands",
    deliveryTime: "1-2 day delivery",
    StartingFrom: "$15",
    ButtonLink: "/fashion-hub",
  },
  {
    id: 2,
    title: "Tech World",
    logo: "/shops/tech_image1.jpg",
    description: "Find the latest gadgets and electronics.",
    category: "Electronics",
    Offers: "40+ Brands",
    deliveryTime: "Same-day delivery",
    StartingFrom: "$100",
    ButtonLink: "/tech-world",
  },
  {
    id: 3,
    title: "Fresh Mart",
    logo: "/shops/grocery_image1.jpg",
    description: "Fresh produce and groceries at your doorstep.",
    category: "Groceries",
    Offers: "20+ Stores",
    deliveryTime: "30 min delivery",
    StartingFrom: "$10",
    ButtonLink: "/fresh-mart",
  },
  {
    id: 4,
    title: "Style Studio",
    logo: "/shops/fashion_image2.jpg",
    description: "Discover designer clothes and accessories.",
    category: "Fashion",
    Offers: "50+ Brands",
    deliveryTime: "2-3 day delivery",
    StartingFrom: "$50",
    ButtonLink: "/style-studio",
  },
  {
    id: 5,
    title: "Gadget Zone",
    logo: "/shops/tech_image2.jpg",
    description: "Shop for cutting-edge technology products.",
    category: "Electronics",
    Offers: "30+ Brands",
    deliveryTime: "Next-day delivery",
    StartingFrom: "$150",
    ButtonLink: "/gadget-zone",
  },
  {
    id: 6,
    title: "Green Grocer",
    logo: "/shops/grocery_image2.jpg",
    description: "Organic and locally sourced produce.",
    category: "Groceries",
    Offers: "10+ Organic Stores",
    deliveryTime: "45 min delivery",
    StartingFrom: "$12",
    ButtonLink: "/green-grocer",
  },
  {
    id: 7,
    title: "Wellness Center",
    logo: "/shops/wellness_image1.jpg",
    description: "Health and wellness products for your well-being.",
    category: "Health",
    Offers: "30+ Brands",
    deliveryTime: "2 day delivery",
    StartingFrom: "$20",
    ButtonLink: "/wellness-center",
  },
  {
    id: 8,
    title: "Book Nook",
    logo: "/shops/bookstore_image1.jpg",
    description: "Browse a wide range of books and media.",
    category: "Books",
    Offers: "50+ Publishers",
    deliveryTime: "2-3 day delivery",
    StartingFrom: "$5",
    ButtonLink: "/book-nook",
  },
  {
    id: 9,
    title: "Toy Box",
    logo: "/shops/toystore_image1.jpeg",
    description: "Fun toys and games for all ages.",
    category: "Toys",
    Offers: "20+ Brands",
    deliveryTime: "1-2 day delivery",
    StartingFrom: "$10",
    ButtonLink: "/toy-box",
  },
  {
    id: 10,
    title: "Baby Bliss",
    logo: "/shops/babystore_image1.jpg",
    description: "Everything for babies and new mothers.",
    category: "Baby Products",
    Offers: "15+ Stores",
    deliveryTime: "1 day delivery",
    StartingFrom: "$8",
    ButtonLink: "/baby-bliss",
  },
  {
    id: 11,
    title: "Auto Zone",
    logo: "/shops/automative_image1.jpg",
    description: "Automotive parts and tools for your vehicle.",
    category: "Automotive",
    Offers: "10+ Brands",
    deliveryTime: "3-4 day delivery",
    StartingFrom: "$50",
    ButtonLink: "/auto-zone",
  },
  {
    id: 12,
    title: "Pet Paradise",
    logo: "/shops/pet_image1.jpg",
    description: "Supplies and accessories for your pets.",
    category: "Pet Supplies",
    Offers: "20+ Brands",
    deliveryTime: "1-2 day delivery",
    StartingFrom: "$5",
    ButtonLink: "/pet-paradise",
  },
];

const Stores = () => {
  const [showMore, setShowMore] = useState(false);

  // Slice stores: Display only 3 in the first row initially
  const initialStores = cardData.slice(0, 3);
  const remainingStores = cardData.slice(3);

  return (
    <div className="flex flex-col items-center justify-center gap-5 pb-10 h-full">
      <SeperatorHeading label="Trending Deals" />
      <div className="text-customTeal dark:text-Green text-3xl px-5 text-center lg:px-0 lg:text-start lg:text-5xl font-bold  font-handlee">
        Shop for your favourite products
      </div>

      <div className="h-full flex flex-col gap-5 px-5 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
        {initialStores.map((card) => (
          <Card
            key={card.title}
            className="sm:w-[400px] md:hover:scale-105 border border-DarkGray transition duration-300 bg-gray-200 dark:bg-gray-700"
          >
            <CardHeader className="border-b border-gray-400 dark:border-DarkGray">
              <div className="flex flex-col gap-2">
                <div className="relative">
                  <Image
                    width={1000}
                    height={1000}
                    className="z-0"
                    alt="card image"
                    src={card.logo}
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end opacity-0 hover:opacity-100 transition-opacity duration-300">
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
                  <div className="border-b border-gray-400 dark:border-DarkGray p-2">
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
                  <div className="border-b border-gray-400 dark:border-DarkGray p-2">
                    {card.category}
                  </div>
                  <div className="border-b border-gray-400 dark:border-DarkGray p-2">
                    {card.Offers}
                  </div>
                  <div className="border-b border-gray-400 dark:border-DarkGray p-2">
                    {card.deliveryTime}
                  </div>
                  <div className="border-b border-gray-400 dark:border-DarkGray p-2">
                    {card.StartingFrom}
                  </div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button
                variant="default"
                className="bg-customTeal dark:bg-Green text-gray-200 rounded-full"
              >
                Shop Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {showMore && (
        <div className="h-full flex flex-col gap-5 px-5 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
          {remainingStores.map((card) => (
            <Card
              key={card.title}
              className="sm:w-[400px] md:hover:scale-105 border border-DarkGray transition duration-300 bg-gray-200 dark:bg-gray-700"
            >
              <CardHeader className="border-b border-gray-400 dark:border-DarkGray">
                <div className="flex flex-col gap-2">
                  <div className="relative">
                    <Image
                      width={1000}
                      height={1000}
                      className="z-0"
                      alt="card image"
                      src={card.logo}
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end opacity-0 hover:opacity-100 transition-opacity duration-300">
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
                    <div className="border-b border-gray-400 dark:border-DarkGray p-2">
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
                    <div className="border-b border-gray-400 dark:border-DarkGray p-2">
                      {card.category}
                    </div>
                    <div className="border-b border-gray-400 dark:border-DarkGray p-2">
                      {card.Offers}
                    </div>
                    <div className="border-b border-gray-400 dark:border-DarkGray p-2">
                      {card.deliveryTime}
                    </div>
                    <div className="border-b border-gray-400 dark:border-DarkGray p-2">
                      {card.StartingFrom}
                    </div>
                  </div>
                </div>
              </CardContent>
              <CardFooter className="flex justify-center">
                <Button
                  variant="default"
                  className="bg-customTeal dark:bg-Green text-gray-200 rounded-full"
                >
                  Shop Now
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      )}

    
        <Button
          onClick={() => setShowMore(!showMore)}
          className="mt-6 px-4 py-2 bg-customTeal dark:bg-Green dark:text-gray-200 rounded-full hover:opacity-90"
        >
            {showMore?"Show Less":"Show More"}
        </Button>
 
    </div>
  );
};

export default Stores;
