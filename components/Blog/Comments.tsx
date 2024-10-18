import { Button } from "../ui/button";
import { Input } from "../ui/input";
import CommentCard from "./commentCard";

const comments = [
  {
    text: "Managing work and kids is tough, but ezshop has been a lifesaver. I can order everything from groceries to household items without leaving home. Highly recommended!",
    name: "Priya Nair",
    role: "Mother of Two",
    image: "/priya.jpg",
    date: "01 Jan 2045 at 12:00pm",
  },
  {
    text: "Ezshop makes my grocery shopping so much easier. I can compare prices from multiple stores and get my essentials delivered right to my doorstep. It’s a game-changer for busy families!",
    name: "Rajesh Sharma",
    role: "Frequent Shopper",
    image: "/rajesh.jpg",
    date: "01 Jan 2045 at 12:00pm",
  },
  {
    text: "The convenience of browsing multiple stores at once is amazing. Ezshop saves me time and helps me find great deals. The user-friendly app makes everything a breeze!",
    name: "Anita Desai",
    role: "Online Shopper",
    image: "/anita.jpg",
    date: "01 Jan 2045 at 12:00pm",
  },
  {
    text: "Managing work and kids is tough, but ezshop has been a lifesaver. I can order everything from groceries to household items without leaving home. Highly recommended!",
    name: "Priya Nair",
    role: "Mother of Two",
    image: "/priya.jpg",
    date: "01 Jan 2045 at 12:00pm",
  },
  {
    text: "Ezshop makes my grocery shopping so much easier. I can compare prices from multiple stores and get my essentials delivered right to my doorstep. It’s a game-changer for busy families!",
    name: "Rajesh Sharma",
    role: "Frequent Shopper",
    image: "/rajesh.jpg",
    date: "01 Jan 2045 at 12:00pm",
  },
  {
    text: "The convenience of browsing multiple stores at once is amazing. Ezshop saves me time and helps me find great deals. The user-friendly app makes everything a breeze!",
    name: "Anita Desai",
    role: "Online Shopper",
    image: "/anita.jpg",
    date: "01 Jan 2045 at 12:00pm",
  },
];

const BlogComments = () => {
  return (
    <div className="px-24 lg:px-0">
      <div className="flex items-center justify-center lg:justify-start lg:w-full px-14 text-3xl lg:px-0 my-10 lg:text-4xl font-bold text-customBlue dark:text-Green font-handlee">
        {comments.length} Comments
      </div>
      {comments.map((comment) => (
        <CommentCard key={comment.date} comment={comment} />
      ))}

      <Input placeholder="Add a comment" className="mb-5 h-14 dark:shadow dark:shadow-white  rounded-full"/>
      <Button
        variant="default"
        size={"sm"}
        className="bg-customBlue dark:bg-Green dark:text-gray-100 dark:hover:opacity-80 text-md md:text-lg h-10 rounded-full"
      >
        Add Comment
      </Button>
    </div>
  );
};

export default BlogComments;
