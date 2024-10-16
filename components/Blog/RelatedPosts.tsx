"use client";
import { Folder, MessagesSquare, User } from "lucide-react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel";
import Autoplay from "embla-carousel-autoplay";
import Image from "next/image";

const blogData = [
  {
    id: "1",
    title: "10 Ways to Save on Groceries This Month",
    url: "/blog-1.png",
    author: "Admin",
    category: "Shopping Tips",
    comments: "15",
    content:
      "Check out these insider tips to help you cut down on your monthly food budget.",
  },
  {
    id: "2",
    title: "How to Compare Prices and Find Deals Across Multiple Stores",
    url: "/blog-2.png",
    author: "Admin",
    category: "Online Shopping",
    comments: "18",
    content:
      "Learn how to use Ezyshop's comparison tool to get the best deals across stores.",
  },
  {
    id: "3",
    title: "Best Local Stores for Organic Products in Your Area",
    url: "/blog-3.png",
    author: "Admin",
    category: "Local Shopping",
    comments: "15",
    content: "Support local stores and discover organic groceries near you.",
  },
];

const RelatedPosts = () => {
  return (
    <>
      <div className="flex items-center justify-center mt-10 text-4xl font-bold text-customBlue dark:text-Green font-handlee">
        Related Posts
      </div>

      {/* Ensure no overflow with max-width and padding adjustments */}
      <div className="w-full max-w-screen-xl mx-auto  mt-10 text-white overflow-hidden mb-10">
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
          <CarouselContent className="flex gap-4">
            {blogData.map((card) => (
              <CarouselItem key={card.id} className="lg:basis-1/2 p-4">
                <Link
                  href={`/Blog/${card.id}`}
                  className="flex items-center justify-center lg:block"
                >
                  <Card
                    className="w-[400px] sm:w-[320px] h-[160px] flex lg:p-2 items-center justify-center hover:scale-105 transition duration-800 bg-gray-200 dark:bg-gray-700"
                  >
                    <CardHeader className="h-full flex flex-col items-center justify-center lg:p-0 w-full">
                      <div className="flex items-center justify-center p-0">
                        <Image
                          width={350}
                          height={350}
                          alt="card image"
                          className="w-20 h-20 rounded-full"
                          src={card.url}
                        />
                      </div>
                    </CardHeader>

                    <CardContent className="text-justify  lg:p-0 flex flex-col items-center justify-center text-md">
                      <CardTitle className="flex p-0 text-center items-center text-xl pt-4 text-customBlue dark:text-Green mt-2 justify-center font-handlee">
                        {card.title}
                      </CardTitle >

                      <div className="flex items-center justify-center gap-2 mb-4">
                        <div className="flex items-center justify-center gap-2">
                          <User className="h-4 w-4 text-customTeal dark:text-Yellow" />
                          <div className="text-sm text-gray-500">
                            {card.author}
                          </div>
                        </div>

                        <div className="flex items-center justify-center gap-2">
                          <Folder className="h-4 w-4 text-customTeal dark:text-Yellow" />
                          <div className="text-sm text-gray-500">
                            {card.category}
                          </div>
                        </div>

                        <div className="flex items-center justify-center gap-2">
                          <MessagesSquare className="h-4 w-4 text-customTeal dark:text-Yellow" />
                          <div className="text-sm text-gray-500">
                            {card.comments}
                          </div>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </>
  );
};

export default RelatedPosts;
