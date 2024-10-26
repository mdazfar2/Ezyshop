"use client";
import { Folder, MessagesSquare, User } from "lucide-react";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import Link from "next/link";
import Image from "next/image";

interface Blog {
  id: string;
  title: string;
  image: string;
  content: string;
  metaDescription: string;
  author: string;
  label: string;
}[];

interface BlogData{
  blogData : Blog[];
}

const BlogCard: React.FC<BlogData> = ({ blogData }) =>  {

  return (
    <div className="flex flex-col items-center justify-center gap-5 pb-10 h-full ">
      <div className="h-full flex items-center justify-center flex-col gap-5 lg:grid grid-cols-3 lg:gap-10">
        {blogData.map((card, index) => (
          <Card
            key={index}
            className="w-[400px] hover:scale-105 transition duration-300 bg-gray-200 dark:bg-gray-700"
          >
            <CardHeader>
              <div className="flex flex-col gap-2">
                <Image alt="card image" width={1000} height={1000} src={card.image} />

                <CardTitle className="flex text-center items-center text-2xl pt-4 text-customBlue dark:text-Green mt-2 justify-center font-handlee">
                  {card.title}
                </CardTitle>
              </div>
              <CardContent className="text-justify text-gray-500 text-md">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <User className="h-4 w-4 text-customTeal dark:text-Yellow" />
                    <div className="text-sm text-gray-500"> {card.author}</div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Folder className="h-4 w-4 text-customTeal dark:text-Yellow" />
                    <div className="text-sm text-gray-500">{card.label}</div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MessagesSquare className="h-4 w-4 text-customTeal dark:text-Yellow" />
                    <div className="text-sm text-gray-500">{ 22 }</div>
                  </div>
                </div>
                <div className="text-center dark:text-gray-200">{card.metaDescription}</div>
              </CardContent>
            </CardHeader>
            <CardFooter className="flex justify-center">
              <Link href={`/Blog/${card.id}`}>
                <Button
                  variant="default"
                  size={"lg"}
                  className="bg-customTeal dark:bg-Green dark:text-gray-100 dark:hover:opacity-80 rounded-full"
                >
                  Read more
                </Button>
              </Link>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
