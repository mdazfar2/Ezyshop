import Features from "@/components/features";
import Stores from "@/components/stores";
import Hero from "@/components/ui/Hero";
import Image from "next/image";
import SeperatorHeading from "@/components/ui/seperatorHeading";
import LearnAboutUs from "@/components/about us/learnAboutUs";
export default function Home() {
  return (
    <div className="h-full">
      <Hero/>
      <SeperatorHeading label="Learn About us"/>
      <LearnAboutUs />
      <Features/>
      <div className="w-full border-b border-[#00394f] my-10"/>

      <Stores/>
    </div>
  );
}
