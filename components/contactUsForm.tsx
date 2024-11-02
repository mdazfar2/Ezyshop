import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const ContactUsForm = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5 py-4 md:py-8 lg:px-10 text-gray-200">
      <h1 className="mb-2 text-lg font-semibold md:text-2xl font-nunito text-customTeal dark:text-[#75c364]">
        Have a question or need assistance?
      </h1>
      <Input
        className="dark:bg-gray-700 border-customTeal dark:border-[#3A6E2E]"
        placeholder="Your Name"
      />
      <Input
        className="dark:bg-gray-700 border-customTeal dark:border-[#3A6E2E]"
        placeholder="Your Email"
      />
      <Input
        className="dark:bg-gray-700 border-customTeal dark:border-[#3A6E2E]"
        placeholder="Your Subject"
      />
      <Textarea
        className="dark:bg-gray-700 border-customTeal dark:border-[#3A6E2E]"
        rows={5}
        placeholder="Message"
      />
      <Button
        variant="default"
        size="lg"
        className="bg-customTeal dark:bg-Green dark:text-gray-100 dark:hover:opacity-80 md:mt-5 mb-10 lg:mb-0 text-sm md:text-md rounded-full"
      >
        Send Message
      </Button>
    </div>
  );
};

export default ContactUsForm;
