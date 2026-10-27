import type { Metadata } from "next";
import ContactUsFrom from "@/components/contactUsForm";
import SeperatorHeading from "@/components/ui/seperatorHeading";
import { Clock, Mail, MapPin, Phone, MessageSquare, Sparkles } from "lucide-react";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Contact Us - EzyShop Support & Help Desk",
  description:
    "Get in touch with EzyShop for customer assistance, delivery inquiries, or store partnership queries.",
};

const Contact = () => {
  return (
    <div className="pb-16 dark:bg-DarkGray min-h-screen">
      {/* Modern Refined Hero Section */}
      <section className="relative overflow-hidden pt-12 pb-12 sm:pt-16 sm:pb-16 border-b border-gray-200/80 dark:border-zinc-800/80 mb-10">
        {/* Ambient Glows */}
        <div className="absolute top-0 left-1/3 w-96 h-96 bg-emerald-500/10 dark:bg-emerald-500/5 rounded-full blur-3xl pointer-events-none -z-10 transform-gpu will-change-transform" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-yellow-500/10 dark:bg-yellow-500/5 rounded-full blur-3xl pointer-events-none -z-10 transform-gpu will-change-transform" />

        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs sm:text-sm font-semibold bg-emerald-50 dark:bg-emerald-950/60 text-customTeal dark:text-Green border border-emerald-200/80 dark:border-emerald-800/60 mb-5 shadow-sm">
            <MessageSquare className="h-4 w-4 text-Yellow" />
            <span>24/7 Dedicated Support</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black font-nunito tracking-tight text-gray-900 dark:text-white leading-tight mb-4">
            How Can We{" "}
            <span className="bg-gradient-to-r from-customTeal via-emerald-600 to-Yellow dark:from-Green dark:via-emerald-400 dark:to-Yellow bg-clip-text text-transparent">
              Help You Today?
            </span>
          </h1>

          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Have a question regarding your order, local store delivery, or merchant partnership?
            Our support team is always here to assist you.
          </p>
        </div>
      </section>

      {/* Main Content Area */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center justify-center">
          {/* Form & Illustration Card */}
          <div className="w-full max-w-5xl rounded-3xl bg-white dark:bg-zinc-900/90 border border-gray-200/80 dark:border-zinc-800/80 shadow-xl overflow-hidden flex flex-col md:flex-row items-center justify-between p-4 sm:p-8 mb-12">
            <div className="w-full md:w-3/5 p-2 sm:p-4">
              <ContactUsFrom />
            </div>
            <div className="hidden md:flex md:w-2/5 justify-center items-center p-6">
              <div className="relative w-full max-w-[340px] aspect-square rounded-2xl overflow-hidden">
                <Image
                  src="/contact.png"
                  alt="Contact EzyShop"
                  fill
                  className="object-contain"
                />
              </div>
            </div>
          </div>

          {/* Contact Details & Info Cards */}
          <div className="w-full max-w-5xl">
            <div className="text-center mb-8">
              <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300">
                Prefer to reach out directly? Connect with us through any of our official channels.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Address Card */}
              <div className="rounded-2xl bg-white dark:bg-zinc-900/90 border border-gray-200/80 dark:border-zinc-800/80 p-6 shadow-sm hover:shadow-md hover:border-customTeal/50 dark:hover:border-Green/50 transition-all flex flex-col items-center text-center group">
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-customTeal dark:text-Green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <MapPin className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold font-nunito text-gray-900 dark:text-white mb-1">
                  Our Office
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-400">
                  Jaipur, Rajasthan, India
                </p>
              </div>

              {/* Email Card */}
              <a
                href="mailto:ezyshop@gmail.com"
                className="rounded-2xl bg-white dark:bg-zinc-900/90 border border-gray-200/80 dark:border-zinc-800/80 p-6 shadow-sm hover:shadow-md hover:border-customTeal/50 dark:hover:border-Green/50 transition-all flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-amber-50 dark:bg-amber-950/60 text-Yellow flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Mail className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold font-nunito text-gray-900 dark:text-white mb-1">
                  Email Support
                </h3>
                <p className="text-sm text-customTeal dark:text-Green font-medium">
                  ezyshop@gmail.com
                </p>
              </a>

              {/* Phone Card */}
              <a
                href="tel:+917739317870"
                className="rounded-2xl bg-white dark:bg-zinc-900/90 border border-gray-200/80 dark:border-zinc-800/80 p-6 shadow-sm hover:shadow-md hover:border-customTeal/50 dark:hover:border-Green/50 transition-all flex flex-col items-center text-center group"
              >
                <div className="w-12 h-12 rounded-2xl bg-emerald-50 dark:bg-emerald-950/60 text-customTeal dark:text-Green flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <Phone className="h-6 w-6" />
                </div>
                <h3 className="text-lg font-bold font-nunito text-gray-900 dark:text-white mb-1">
                  Customer Hotline
                </h3>
                <p className="text-sm text-customTeal dark:text-Green font-medium">
                  +91 7739317870
                </p>
              </a>
            </div>

            <div className="flex items-center justify-center gap-2 mt-8 text-xs sm:text-sm text-gray-500 dark:text-gray-400">
              <Clock className="h-4 w-4 text-customTeal dark:text-Green" />
              <span>Available 24/7 for order tracking and urgent customer assistance</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
