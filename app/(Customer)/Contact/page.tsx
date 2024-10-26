import ContactUsFrom from "@/components/contactUsForm";
import SeperatorHeading from "@/components/ui/seperatorHeading";
import { Clock, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
const Contact = () => {
  return (
    <div className="pb-10 dark:bg-DarkGray ">
      <div className="h-full">
        <div className="text-white flex items-center justify-center bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow h-full pb-20 p-24">
          <div className="text-4xl pt-5 lg:pt-0 lg:text-7xl text-center text-gray-200 lg:text-start font-extrabold font-handlee">
            Contact Us</div>
        </div>
      </div>
      <SeperatorHeading label="Get In Touch" />
      <div className="text-customTeal dark:text-Green text-3xl px-5 text-center lg:px-0 lg:text-center mb-10 lg:text-5xl font-bold  font-handlee">
        Contact Us For Any Query
      </div>
      <div className="flex items-center justify-center">
  <div className="flex flex-col px-8 lg:gap-5 lg:px-32 md:w-11/12  items-center justify-center">
    <div className="border-2 border-customTeal dark:border-[#3A6E2E] rounded-3xl shadow-md shadow-[#17A2B8] dark:shadow-[#3A6E2E] flex md:flex-nowrap flex-col md:flex-row justify-center items-center md:w-9/12 overflow-hidden px-3">
      <div className="md:w-3/4 w-full">
        <ContactUsFrom />
      </div>
      <div className="hidden md:flex lg:flex">
        <Image src="/contact.png" width={600} height={700} alt="img" />
      </div>
    </div>

    <div className="md:w-9/12 py-2 md:px-8 justify-center items-center flex flex-col">
      <div className="text-md dark:text-gray-200 font-nunito text-center text-[#088395] md:mt-0 mt-5">
        <p>We&apos;re here to help! Reach out to us for any inquiries regarding your orders, deliveries, or shopping experience with EzyShop.</p>
        <p className="font-semibold">We&apos;re happy to assist you with all your needs.</p>
      </div>
      <div className="flex items-center gap-5 font-nunito mt-5 md:flex-nowrap flex-col md:flex-row w-full flex-wrap">
        {/* Address Card */}
        <div className="flex flex-col items-center border-2 dark:border-[#3A6E2E] gap-4 border-customTeal shadow-sm shadow-customTeal dark:shadow-[#3A6E2E] px-2 md:w-[18vw] w-full  py-4 rounded-2xl justify-center transition-all hover:shadow-lg duration-300 cursor-pointer">
          <div className="rounded-full h-10 w-10 bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow flex items-center justify-center">
            <MapPin className="h-5 w-5 dark:text-gray-100" />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-customTeal dark:text-Green text-xl font-handlee font-bold">Address</div>
            <div className="text-md text-gray-500 font-nutino">Jaipur, Rajasthan</div>
          </div>
        </div>

        {/* Email Card */}
        <div className="flex flex-col items-center border-2 dark:border-[#3A6E2E] gap-4 border-customTeal shadow-sm shadow-customTeal dark:shadow-[#3A6E2E] px-2 py-4 md:w-[18vw] w-full rounded-2xl justify-center transition-all hover:shadow-lg duration-300 cursor-pointer">
          <div className="rounded-full h-10 w-10 bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow flex items-center justify-center">
            <Mail className="h-5 w-5 dark:text-gray-100" />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-customTeal dark:text-Green text-xl font-handlee font-bold">Email</div>
            <div className="text-md text-gray-500 font-nutino">ezyshop@gmail.com</div>
          </div>
        </div>

        {/* Phone Card */}
        <div className="flex flex-col items-center border-2 dark:border-[#3A6E2E] gap-4 border-customTeal shadow-sm shadow-customTeal dark:shadow-[#3A6E2E] px-2 py-4 md:w-[18vw] w-full rounded-2xl justify-center transition-all hover:shadow-lg duration-300 cursor-pointer">
          <div className="rounded-full h-10 w-10 bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow flex items-center justify-center">
            <Phone className="h-5 w-5 dark:text-gray-100" />
          </div>
          <div className="flex flex-col items-center">
            <div className="text-customTeal dark:text-Green text-xl font-handlee font-bold">Phone</div>
            <div className="text-md text-gray-500 font-nutino">+91 7739317870</div>
          </div>
        </div>
      </div>

      <div className="w-full flex md:items-center justify-center mt-3 italic">
        <div className="rounded-full h-10 w-10 flex md:items-center justify-center">
          <Clock className="h-5 w-5 dark:text-gray-500" />
        </div>
        <div className="flex flex-col items-center">
          <div className="text-md text-gray-500 font-nutino">Our platform is available 24/7. For customer support</div>
        </div>
      </div>
    </div>
  </div>
</div>

    </div>
  );
};

export default Contact;
