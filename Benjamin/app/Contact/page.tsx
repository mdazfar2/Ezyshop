import ContactUsFrom from "@/components/contactUsForm";
import SeperatorHeading from "@/components/ui/seperatorHeading";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const Contact = () => {
  return (
    <div className="mb-10">
      <div className="h-full">
        <div className="flex items-center justify-center bg-customTeal h-full mb-20 p-24">
          <div className="text-7xl font-bold font-handlee">Contact Us</div>
        </div>
      </div>
      <SeperatorHeading label="Get In Touch" />
      <div className="flex items-center justify-center my-10 text-4xl font-bold text-customBlue font-handlee">
        Contact Us For Any Query
      </div>

      <div className="grid grid-cols-12 gap-5 px-32">
        <div className="col-span-7"><ContactUsFrom/></div>
        <div className="col-span-5">
          <div className="text-md text-gray-500 mb-10">
            Have a question or need assistance? We're here to help! Reach out to
            us for any inquiries regarding your orders, deliveries, or shopping
            experience with EzyShop. We're happy to assist you with all your
            needs.
          </div>
          <div className="flex items-start flex-col gap-4 justify-center">
            <div className="flex gap-7 items-center justify-center">
              <div className="rounded-full h-10 w-10 bg-customTeal flex items-center justify-center">
                <MapPin className="h-5 w-5 text-customBlue" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-customBlue text-xl font-handlee font-bold ">Address</div>
                <div className="text-md text-gray-500 font-nutino ">Jaipur, Rajisthan</div>
              </div>
            </div>
            <div className="flex gap-7 items-center justify-center">
              <div className="rounded-full h-10 w-10 bg-customTeal flex items-center justify-center">
                <Mail className="h-5 w-5 text-customBlue" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-customBlue text-xl font-handlee font-bold ">Email</div>
                <div className="text-md text-gray-500 font-nutino ">ezyshop@gmail.com</div>
              </div>
            </div>
            <div className="flex gap-7 items-center justify-center">
              <div className="rounded-full h-10 w-10 bg-customTeal flex items-center justify-center">
                <Phone className="h-5 w-5 text-customBlue" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-customBlue text-xl font-handlee font-bold ">Phone</div>
                <div className="text-md text-gray-500 font-nutino ">+91 7739317870</div>
              </div>
            </div>
            <div className="flex gap-7 items-center justify-center">
              <div className="rounded-full h-10 w-10 bg-customTeal flex items-center justify-center">
                <Clock className="h-5 w-5 text-customBlue" />
              </div>
              <div className="flex flex-col gap-2">
                <div className="text-customBlue text-xl font-handlee font-bold ">Opening Hours</div>
                <div className="text-md text-gray-500 font-nutino ">Our platform is available 24/7. For customer support</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
