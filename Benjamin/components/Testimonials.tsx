"use client";

import { Card, CardHeader, CardContent } from "./ui/card";
import Autoplay from "embla-carousel-autoplay";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import { Quote } from "lucide-react";
import Image from "next/image";

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
  // Duplicate entries removed for brevity
];

const ReviewsCarousel = () => {
  return (
    <div className="w-full px-4 sm:px-10 lg:px-20 text-white mb-10">
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
            <CarouselItem key={index} className="basis-full sm:basis-1/2 lg:basis-1/3 p-2">
              <div className="w-full p-4">
                <Card className="bg-gray-700 border border-DarkGray lg:p-6 rounded-lg shadow-lg h-full">
                  <CardHeader className="flex flex-col items-center justify-center mb-4">
                    <Image
                      width={1000}
                      height={1000}
                      src={review.image}
                      alt={review.name}
                      className="w-20 h-20 rounded-full object-cover mb-2"
                    />
                    <h4 className="font-extrabold text-lg sm:text-xl lg:text-2xl text-Green font-handlee text-center">
                      {review.name}
                    </h4>
                    <p className="text-sm text-gray-500 text-center">{review.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="mb-4 text-gray-200 text-sm sm:text-md">
                      <Quote className="h-10 w-10 text-Yellow inline-block mr-2" />
                      “{review.text}”
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
