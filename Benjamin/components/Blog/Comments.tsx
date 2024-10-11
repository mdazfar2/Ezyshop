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
    <div>
      <div className="flex items-center justify-start mt-10 text-4xl font-bold text-customBlue font-handlee">
        {comments.length} Comments
      </div>
      {comments.map((comment) => (
        <CommentCard comment={comment} />
      ))}

      <Input placeholder="Add a comment" className="mb-5 rounded-full"/>
      <Button
        variant="default"
        size={"sm"}
        className="bg-[#17a2b8] text-lg rounded-full"
      >
        Add Comment
      </Button>
    </div>
  );
};

export default BlogComments;
