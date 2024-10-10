import { Folder, MessagesSquare, User } from "lucide-react";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";

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

const BlogCard = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 pb-10 h-full mb-10">
      <div className="h-full grid grid-cols-3 gap-10">
        {blogData.map((card) => (
          <Card className="w-[400px] hover:scale-105 transition duration-300 bg-gray-100">
            <CardHeader>
              <div className="flex flex-col gap-2">
                <img alt="card image" src={card.url} />

                <CardTitle className="flex text-center items-center text-2xl pt-4 text-customBlue mt-2 justify-center font-handlee">
                  {card.title}
                </CardTitle>
              </div>
              <CardDescription className="text-justify text-md">
                <div className="flex items-center justify-center gap-4 mb-4">
                  <div className="flex items-center justify-center gap-2">
                    <User className="h-4 w-4 text-customTeal" />
                    <div className="text-sm"> {card.author}</div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <Folder className="h-4 w-4 text-customTeal" />
                    <div className="text-sm">{card.category}</div>
                  </div>
                  <div className="flex items-center justify-center gap-2">
                    <MessagesSquare className="h-4 w-4 text-customTeal" />
                    <div className="text-sm">{card.comments}</div>
                  </div>
                </div>
                {card.content}
              </CardDescription>
            </CardHeader>
            <CardContent></CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="default" className="bg-[#17a2b8] rounded-full">
                Read more
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default BlogCard;
