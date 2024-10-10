"use client";

import { useEffect } from "react";
import { Card, CardHeader, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Quote, TextQuote } from "lucide-react";

const reviews = [
  {
    text: "Managing work and kids is tough, but ezshop has been a lifesaver. I can order everything from groceries to household items without leaving home. Highly recommended!",
    name: "Priya Nair",
    role: "Mother of Two",
    image: "/priya.jpg",
  },
  {
    text: "Ezshop makes my grocery shopping so much easier. I can compare prices from multiple stores and get my essentials delivered right to my doorstep. It’s a game-changer for busy families!",
    name: "Rajesh Sharma",
    role: "Frequent Shopper",
    image: "/rajesh.jpg",
  },
  {
    text: "The convenience of browsing multiple stores at once is amazing. Ezshop saves me time and helps me find great deals. The user-friendly app makes everything a breeze!",
    name: "Anita Desai",
    role: "Online Shopper",
    image: "/anita.jpg",
  },
  {
    text: "Managing work and kids is tough, but ezshop has been a lifesaver. I can order everything from groceries to household items without leaving home. Highly recommended!",
    name: "Priya Nair",
    role: "Mother of Two",
    image: "/priya.jpg",
  },
  {
    text: "Ezshop makes my grocery shopping so much easier. I can compare prices from multiple stores and get my essentials delivered right to my doorstep. It’s a game-changer for busy families!",
    name: "Rajesh Sharma",
    role: "Frequent Shopper",
    image: "/rajesh.jpg",
  },
  {
    text: "The convenience of browsing multiple stores at once is amazing. Ezshop saves me time and helps me find great deals. The user-friendly app makes everything a breeze!",
    name: "Anita Desai",
    role: "Online Shopper",
    image: "/anita.jpg",
  },
];

const ReviewsCarousel = () => {
  return (
    <div className="w-full px-20 text-white mb-10">
      <Carousel
        opts={{
          align: "start",
          loop: true,
        }}
        plugins={[
          Autoplay({
            delay: 2000,
          }),
        ]}
      >
        <CarouselContent className="-ml-4">
          {reviews.map((review, index) => (
            <CarouselItem className="basis-1/3 pl-4">
              <div key={index} className="w-full  p-4">
                <Card className="bg-gray-100 p-6 rounded-lg shadow-lg h-full">
                  <CardHeader className="items-center justify-center mb-4">
                    <img
                      src={review.image}
                      alt={review.name}
                      className="w-20 h-20 rounded-full object-cover"
                    />
                    <div className="text-center">
                      <h4 className="font-bold text-2xl text-customBlue font-handlee ">
                        {review.name}
                      </h4>
                      <p className="text-sm text-gray-500">{review.role}</p>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-md">
                      <Quote className="h-10 w-10 text-customTeal" />“
                      {review.text}”
                    </p>
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>
    </div>
  );
};

export default ReviewsCarousel;
