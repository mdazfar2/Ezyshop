"use client";

import { ChevronRight, Mail, MapPin, Phone } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import NewsLetterForm from "./footer/newsletterForm";
import { Toaster } from "react-hot-toast";

const Links = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/About" },
  { name: "Our Categories", href: "/Categories" },
  { name: "Our Teams", href: "/Teams" },
  { name: "Our Blogs", href: "/Blog" },
  { name: "Contact us", href: "/Contact" },
  { name: "Terms & Conditions", href: "/Terms" },
  { name: "Privacy Policy", href: "/Policy" },
  { name: "Github Contributors", href: "/contributors" },
  { name: "Forum", href: "/forum" },
];

const Footer = () => {
  return (
    <footer className="w-full bg-slate-100/90 dark:bg-[#07090e] border-t border-slate-200/90 dark:border-slate-800/80 text-slate-600 dark:text-slate-300 transition-colors duration-200">
      <Toaster />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-14 pb-5 sm:pb-6">
        {/* Main Footer Content Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-8 lg:gap-8 pb-8 sm:pb-10 border-b border-slate-300/80 dark:border-slate-800/80">
          {/* Section 1: Brand & About (4 cols) */}
          <div className="lg:col-span-4 flex flex-col gap-3.5">
            <Link href="/" className="flex items-center gap-2.5 group focus:outline-none w-fit">
              <div className="relative h-10 w-10 flex-shrink-0 transition-transform duration-300 group-hover:scale-105">
                <Image
                  src="/ezyshop.png"
                  alt="Ezyshop Logo"
                  width={40}
                  height={40}
                  priority
                  className="h-full w-full object-contain drop-shadow-sm"
                />
              </div>
              <span className="font-extrabold text-2xl font-nunito tracking-tight bg-gradient-to-r from-customTeal to-teal-700 dark:from-customTeal dark:to-teal-400 inline-block text-transparent bg-clip-text select-none">
                Ezyshop
              </span>
            </Link>

            <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed max-w-sm">
              EzyShop connects you directly to verified local stores, offering a
              seamless shopping experience. Compare prices, discover exclusive
              deals, and enjoy fast deliveries for groceries and essentials.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-2 pt-1">
              <a
                href="https://github.com/mdazfar2/Ezyshop"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="h-8.5 w-8.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-transparent hover:bg-customTeal hover:text-white dark:hover:bg-customTeal dark:hover:text-white flex items-center justify-center transition-all duration-200 text-slate-600 dark:text-slate-300 shadow-xs"
              >
                <i className="fab fa-github text-sm"></i>
              </a>
              <a
                href="https://discord.gg/YnABU7tdU3"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Discord"
                className="h-8.5 w-8.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-transparent hover:bg-customTeal hover:text-white dark:hover:bg-customTeal dark:hover:text-white flex items-center justify-center transition-all duration-200 text-slate-600 dark:text-slate-300 shadow-xs"
              >
                <i className="fa-brands fa-discord text-sm"></i>
              </a>
              <a
                href="https://www.linkedin.com/company/ezyshopz/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="h-8.5 w-8.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-transparent hover:bg-customTeal hover:text-white dark:hover:bg-customTeal dark:hover:text-white flex items-center justify-center transition-all duration-200 text-slate-600 dark:text-slate-300 shadow-xs"
              >
                <i className="fab fa-linkedin-in text-sm"></i>
              </a>
              <a
                href="#"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
                className="h-8.5 w-8.5 rounded-xl bg-white dark:bg-slate-800/80 border border-slate-200/80 dark:border-transparent hover:bg-customTeal hover:text-white dark:hover:bg-customTeal dark:hover:text-white flex items-center justify-center transition-all duration-200 text-slate-600 dark:text-slate-300 shadow-xs"
              >
                <i className="fab fa-instagram text-sm"></i>
              </a>
            </div>
          </div>

          {/* Section 2: Contact Info (3 cols) */}
          <div className="lg:col-span-3 flex flex-col gap-3">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white font-nunito">
              Get in Touch
            </h3>
            <div className="flex flex-col gap-2.5 text-sm text-slate-600 dark:text-slate-400">
              <div className="flex items-start gap-2.5">
                <MapPin className="h-4.5 w-4.5 text-customTeal flex-shrink-0 mt-0.5" />
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://tinyurl.com/w8c3h6jc"
                  className="hover:text-customTeal transition-colors"
                >
                  Jaipur, Rajasthan, India
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="h-4.5 w-4.5 text-customTeal flex-shrink-0" />
                <a
                  href="mailto:ezyshop.open@gmail.com"
                  className="hover:text-customTeal transition-colors"
                >
                  ezyshop.open@gmail.com
                </a>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="h-4.5 w-4.5 text-customTeal flex-shrink-0" />
                <a
                  href="tel:+919508078935"
                  className="hover:text-customTeal transition-colors"
                >
                  +91 9508078935
                </a>
              </div>
            </div>
          </div>

          {/* Section 3: Quick Links (2 cols) */}
          <div className="lg:col-span-2 flex flex-col gap-3">
            <h3 className="font-bold text-xs uppercase tracking-wider text-slate-900 dark:text-white font-nunito">
              Quick Links
            </h3>
            <div className="flex flex-col gap-2 text-sm text-slate-600 dark:text-slate-400">
              {Links.slice(0, 6).map((link) => (
                <Link
                  key={link.name}
                  href={link.href}
                  className="flex items-center gap-1.5 hover:text-customTeal hover:translate-x-1 transition-all duration-200 group"
                >
                  <ChevronRight className="h-3.5 w-3.5 text-slate-400 dark:text-slate-500 group-hover:text-customTeal transition-colors" />
                  <span>{link.name}</span>
                </Link>
              ))}
            </div>
          </div>

          {/* Section 4: Newsletter (3 cols) */}
          <div className="lg:col-span-3">
            <NewsLetterForm />
          </div>
        </div>

        {/* Bottom Bar: Copyright on Left, Crafted with ✨ by in Center */}
        <div className="pt-5 sm:pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-xs sm:text-sm text-slate-500 dark:text-slate-400 relative">
          <p className="order-2 md:order-1 text-center md:text-left">
            &copy; {new Date().getFullYear()}{" "}
            <Link
              href="/"
              className="text-slate-800 dark:text-white hover:text-customTeal font-semibold transition-colors"
            >
              Ezyshop
            </Link>
            . All Rights Reserved.
          </p>

          <div className="order-1 md:order-2 md:absolute md:left-1/2 md:-translate-x-1/2 flex items-center justify-center gap-1.5 text-slate-700 dark:text-slate-300 font-medium">
            <span>Crafted with</span>
            <span className="text-amber-500 text-sm">✨</span>
            <span>by</span>
            <a
              href="https://azfaralam.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center ml-1 transition-transform duration-200 hover:scale-110 active:scale-95"
              title="Azfar Alam"
            >
              <Image
                src="/Azfar-fevico.webp"
                alt="Azfar Alam"
                width={22}
                height={22}
                className="h-5 w-5 object-contain inline-block align-middle"
              />
            </a>
          </div>

          <div className="hidden md:block order-3 w-48" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
