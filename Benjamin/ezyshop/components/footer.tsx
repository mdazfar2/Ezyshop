import {
  InstagramLogoIcon,
  LinkedInLogoIcon,
  TwitterLogoIcon,
} from "@radix-ui/react-icons";
import { ChevronRight, Copyright, Facebook, Mail, MapPin, Phone, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const Footer = () => {
  return (
    <div className="flex items-center flex-col p-5 bg-[#00394f]">
      <div className="border-b grid grid-cols-3 py-2 gap-4">
        {/* section1 */}
        <div className="flex gap-4 items-start justify-between px-4 pb-4 flex-col">
          <div className="flex justify-center items-center">
            <Image
              src={"/ezyshop.png"}
              width={80}
              height={80}
              alt="ezyshop logo"
            />
            <Link href="/" className="ml-4 lg:ml:0 gap-x-2">
              <p className="font-bold text-5xl text-[#17a2b8] ">Ezyshop</p>
            </Link>
          </div>
          <div className=" text-gray-100">
            EzyShop is a user-friendly platform that connects you to local
            stores, offering a seamless shopping experience. Compare prices,
            access exclusive deals, and enjoy hassle-free deliveries for
            groceries, essentials, and organic products—all in one app.
          </div>
          <div className="flex gap-2">
            <InstagramLogoIcon className="h-10 w-10 text-[#17a2b8]" />
            <TwitterLogoIcon className="h-10 w-10 text-[#17a2b8]" />
            <LinkedInLogoIcon className="h-10 w-10 text-[#17a2b8]" />
            <Facebook className="h-10 w-10 text-[#17a2b8]" />
          </div>
        </div>
        {/* section 2 */}
        <div className="flex flex-col items-start ml-10 justify-center p-4 gap-5">
          <p
            className="font-medium text-5xl text-[#17a2b8]"
            style={{ fontStyle: "italic" }}
          >
            Get in touch
          </p>
          <div className="flex items-start flex-col gap-4 justify-center">
            <div className="flex gap-4">
              <MapPin className="h-7 w-7" />
              <div className="flex flex-col">
                <div className="text-gray-100 text-xl">Address</div>
                <div className="text-lg text-[#17a2b8]">Jaipur, Rajisthan</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="h-7 w-7" />
              <div className="flex flex-col">
                <div className="text-gray-100 text-xl">Email</div>
                <div className="text-lg text-[#17a2b8]">ezyshop@gmail.com</div>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="h-7 w-7" />
              <div className="flex flex-col">
                <div className="text-gray-100 text-xl">Phone</div>
                <div className="text-lg text-[#17a2b8]">+91 7739317870</div>
              </div>
            </div>
          </div>
        </div>
        {/* section 3
        <div className="flex flex-col">
          <p className="font-medium text-5xl text-[#17a2b8] " style={{fontStyle:"italic"}}>Quick Links</p>
          <div>
            <ChevronRight className="h-4 w-4"/>

          </div>
        </div> */}
        {/* section 4 */}
        <div className="flex flex-col items-start justify-start gap-5 p-4">
          <p
            className="font-medium text-5xl text-[#17a2b8] "
            style={{ fontStyle: "italic" }}
          >
            News Letter
          </p>
          <Input placeholder="Name" className="bg-gray-100 h-10 w-10/12" />
          <Input placeholder="Email" className="bg-gray-100 h-10 w-10/12"/>
          <Button>
            Subscribe
          </Button>
        </div>
      </div>
      <div className="flex pt-5 items-center text-gray-100 justify-center">
        <Copyright className="h-4 w-4 mr-2"></Copyright>Ezyshop. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
