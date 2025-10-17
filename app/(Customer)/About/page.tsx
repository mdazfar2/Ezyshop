import type { Metadata } from "next";
import LearnAboutUs from "@/components/about us/learnAboutUs";
import Features from "@/components/features";
import SeperatorHeading from "@/components/ui/seperatorHeading";

export const metadata: Metadata = {
  title: "Ezyshop - About",
  description: "Learn more about Ezyshop, our mission, vision, and values driving our platform.",
};

const About = () => {
  return (
    <div className="h-full dark:bg-DarkGray">
      <header className="flex items-center justify-center h-[60vh] bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow mb-20 p-8">
        <h1 className="text-4xl md:text-7xl text-gray-200 font-bold font-handlee">About Us</h1>
      </header>
      
      <section aria-labelledby="about-us-heading">
        <SeperatorHeading label="Learn About Us" />
        <LearnAboutUs />
      </section>

      <div className="w-full border-b border-Green my-10" />

      <section aria-labelledby="features-heading">
        <Features />
      </section>
    </div>
  );
};

export default About;
