import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "../ui/button";

const CommentCard = ({
  comment,
}: {
  comment: {
    text: string;
    name: string;
    role: string;
    date: string;
    image: string;
  };
}) => {
  return (
    <div className="flex items-center border-b pb-5 border-gray-500 my-4 gap-4 text-gray-500 justify-center">
      <Avatar>
        <AvatarImage src={comment.image} />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className="flex items-start justify-center flex-col gap-2 lg:gap-0">
        <div className="flex items-center justify-center gap-2">
          <div className="font-nunito text-lg text-customBlue dark:text-Green font-bold">{comment.name}</div>
          <div className="h-1 w-1 bg-customTeal dark:bg-Yellow rounded-full"/>
          <div className="font-handlee text-customBlue dark:text-Green text-sm">{comment.date}</div>
        </div>
        <div className="mb-2 text-wrap pr-10 lg:p-0">
            {comment.text}
        </div>
        <Button
        variant="secondary"
        size={"sm"}
        className="dark:bg-gray-700 hover:opacity-80 hover:shadow-md text-lg rounded-lg"
      >
        Reply
      </Button>
      </div>
    </div>
  );
};

export default CommentCard;
