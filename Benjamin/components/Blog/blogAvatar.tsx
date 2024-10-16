import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const BlogAvatar = () => {
  return (
    <div className="flex flex-col items-center gap-5 justify-center bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow my-5 rounded-lg py-10">
      <Avatar>
        <AvatarImage src={"/priya.jpg"} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="text-customBlue dark:text-DarkGray text-2xl font-handlee font-bold">
        Priya Verma
      </div>
      <div className="text-lg">
        Shopper since 4 years
      </div>
    </div>
  );
};

export default BlogAvatar;
