import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactUsFrom = () => {
    return (
        <div className="flex items-center text-gray-200 lg:px-10 flex-col justify-center gap-5">
            <Input className=" dark:bg-gray-700 " placeholder="Your Name"/>
            <Input className=" dark:bg-gray-700 " placeholder="Your Email"/>
            <Input className=" dark:bg-gray-700 " placeholder="Your Subject"/>
            <Textarea  className=" dark:bg-gray-700 " rows={5} placeholder="Message"/>
            <Button variant="default" size={"lg"}  className="bg-customTeal dark:bg-Green dark:text-gray-100 dark:hover:opacity-80 md:mt-5 mb-10 lg:mb-0 text-md md:text-lg rounded-full">
                Send Message
              </Button>
        </div>
      );
}
 
export default ContactUsFrom;