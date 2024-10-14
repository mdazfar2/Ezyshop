import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactUsFrom = () => {
    return (
        <div className="flex items-center text-gray-200 lg:px-10 flex-col justify-center gap-5">
            <Input placeholder="Your Name"/>
            <Input placeholder="Your Email"/>
            <Input placeholder="Your Subject"/>
            <Textarea rows={5} placeholder="Message"/>
            <Button variant="default" size={"lg"}  className="bg-Green mb-10 lg:mb-0 text-xl rounded-full">
                Send Message
              </Button>
        </div>
      );
}
 
export default ContactUsFrom;