"use client";

import { ChevronRight, Copyright, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useState } from "react";

const Links = [
  {
    name: "Home",
    id: 1,
    href: "/",
  },
  {
    name: "About us",
    id: 2,
    href: "/About",
  },
  {
    name: "Our categories",
    id: 3,
    href: "/Categories",
  },
  {
    name: "Our Teams",
    id: 4,
    href: "/Teams",
  },
  {
    name: "Our blogs",
    id: 5,
    href: "/Blog",
  },
  {
    name: "Contact us",
    id: 6,
    href: "/Contact",
  },
  {
    name: "Terms and Conditions",
    id: 7,
    href: "/Terms",
  },
  {
    name: "Privacy and Policy",
    id: 8,
    href: "/Policy",
  },
];

const Footer = () => {
  const [id, setId] = useState(0);

  return (
    <div className="flex items-center flex-col p-5 bg-customBlue dark:bg-DarkGray">
      <div className="border-y border-customTeal dark:border-Green flex items-start justify-start flex-col lg:grid lg:grid-cols-4 py-2 gap-4">
        {/* section1 */}
        <div className="flex gap-4 items-start justify-between lg:px-4 pb-4 flex-col">
          <div className="flex justify-center items-center">
            <Image
              src={"/ezyshop.png"}
              width={80}
              height={80}
              alt="ezyshop logo"
            />
            <Link href="/" className="ml-4 lg:ml:0 gap-x-2">
              <p className="font-bold text-5xl text-gray-200 dark:text-Green font-nunito">
                Ezyshop
              </p>
            </Link>
          </div>
          <div className=" text-gray-200">
            EzyShop is a user-friendly platform that connects you to local
            stores, offering a seamless shopping experience. Compare prices,
            access exclusive deals, and enjoy hassle-free deliveries for
            groceries, essentials, and organic products—all in one app.
          </div>
          <div className="flex gap-2">
            <div className="d-flex justify-content-start mt-4">
              <a
                className="inline-block border text-customTeal border-customTeal hover:bg-customTeal  dark:border-Green dark:text-Yellow text-sm w-[38px] bg-transparent dark:hover:bg-Yellow hover:text-gray-200 dark:hover:text-gray-200 rounded-full text-center mr-2 p-2"
                href="https://github.com/mdazfar2/Ezyshop"
              >
                <i className="fab fa-github"></i>
              </a>
              <a
                className="inline-block border text-customTeal border-customTeal hover:bg-customTeal  dark:border-Green dark:text-Yellow text-sm w-[38px] bg-transparent dark:hover:bg-Yellow hover:text-gray-200 dark:hover:text-gray-200 rounded-full text-center mr-2 p-2"
                href="https://discord.gg/YnABU7tdU3"
              >
                <i className="fa-brands fa-discord"></i>
              </a>
              <a
                className="inline-block border text-customTeal border-customTeal hover:bg-customTeal  dark:border-Green dark:text-Yellow text-sm w-[38px] bg-transparent dark:hover:bg-Yellow hover:text-gray-200 dark:hover:text-gray-200 rounded-full text-center mr-2 p-2"
                href="https://www.linkedin.com/company/ezyshopz/"
              >
                <i className="fab fa-linkedin-in"></i>
              </a>
              <a
                className="inline-block border text-customTeal border-customTeal hover:bg-customTeal  dark:border-Green dark:text-Yellow text-sm w-[38px] bg-transparent dark:hover:bg-Yellow hover:text-gray-200 dark:hover:text-gray-200 rounded-full text-center mr-2 p-2"
                href="#"
              >
                <i className="fab fa-instagram"></i>
              </a>
            </div>
          </div>
        </div>
        {/* section 2 */}
        <div className="flex flex-col w-full items-start py-4  lg:ml-10 lg:p-4 gap-5">
          <p className="font-bold text-3xl text-customTeal dark:text-Green font-handlee">
            Get in touch
          </p>
          <div className="flex items-start flex-col gap-4 justify-center">
            <div className="flex gap-4">
              <MapPin className="h-7 w-7  text-customTeal dark:text-Yellow" />
              <div className="flex flex-col">
                <div className="text-gray-200 text-xl">Address</div>
                <a
                  target="_blank"
                  href="https://tinyurl.com/w8c3h6jc"
                  className="text-lg text-customTeal dark:text-Green"
                >
                  <div>Jaipur,Rajasthan</div>
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Mail className="h-7 w-7 text-customTeal dark:text-Yellow" />
              <div className="flex flex-col">
                <div className="text-gray-200 text-xl">Email</div>
                <a
                  target="_blank"
                  href="mailto:ezyshopz@gmail.com"
                  className="text-lg text-customTeal dark:text-Green"
                >
                  <div>ezyshop.open@gmail.com</div>
                </a>
              </div>
            </div>
            <div className="flex gap-4">
              <Phone className="h-7 w-7  text-customTeal dark:text-Yellow" />
              <div className="flex flex-col">
                <div className="text-gray-200 text-xl">Phone</div>
                <a
                  href="tel:+917739317870"
                  className="text-lg text-customTeal dark:text-Green"
                >
                  <div>+91 7739317870</div>
                </a>
              </div>
            </div>
          </div>
        </div>
        {/* section 3 */}
        <div className="flex flex-col w-full items-start py-4  lg:ml-10 lg:p-4 gap-5">
          <p className="font-bold text-3xl text-customTeal dark:text-Green font-handlee">
            Quick Links
          </p>
          <div className="text-gray-200 flex flex-col gap-2">
            {Links.map((link) => (
              <Link
                key={link.id}
                href={link.href}
                onMouseOver={() => {
                  setId(link.id);
                }}
                onMouseLeave={() => {
                  setId(0);
                }}
                className="flex items-center  gap-2"
              >
                <ChevronRight className="h-4 w-4" />
                <div className={id === link.id ? "underline" : ""}>
                  {link.name}
                </div>
              </Link>
            ))}
          </div>
        </div>
        {/* section 4 */}
        <div className="flex flex-col w-full lg:w-10/12 items-start py-4  lg:ml-10 lg:p-4 gap-5">
          <p className="font-bold text-3xl text-customTeal dark:text-Green font-handlee">
            News Letter
          </p>
          <Input
            placeholder="Name"
            className="bg-[#f9f9f9] dark:bg-[#2f4f4f] text-gray-800 dark:text-gray-200 h-10 w-10/12"
          />
          <Input
            placeholder="Email"
            className="bg-[#f9f9f9] dark:bg-[#2f4f4f] text-gray-800 dark:text-gray-200 h-10 w-10/12"
          />

          <Button className="lg:h-14 bg-customTeal dark:bg-Green dark:text-gray-100 dark:hover:opacity-80 rounded-full w-10/12">
            Subscribe
          </Button>
        </div>
      </div>
      <div className="flex flex-col lg:flex-row pt-5 items-center text-gray-100 justify-center">
        <div className="flex items-center text-gray-200 justify-center">
          <Copyright className="h-4 w-4 mr-2"></Copyright>
          <Link
            href={"/"}
            onMouseOver={() => {
              setId(7);
            }}
            onMouseLeave={() => {
              setId(0);
            }}
            className="text-customTeal dark:text-Green hover:text-gray-200 hover:underline pl-1"
          >
            Ezyshop
          </Link>
        </div>
        . All Rights Reserved. Designed by
        <Link
          href={"https://www.azfaralam.xyz/"}
          onMouseOver={() => {
            setId(7);
          }}
          onMouseLeave={() => {
            setId(0);
          }}
          className="text-customTeal dark:text-Green hover:text-gray-200 hover:underline pl-1 "
        >
          Azfar Alam
        </Link>
      </div>
    </div>
  );
};

export default Footer;
