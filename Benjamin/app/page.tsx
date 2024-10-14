import Features from "@/components/features";
import Stores from "@/components/stores";
import Hero from "@/components/ui/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full bg-DarkGray">
      <Hero/>
      <Features/>
      <div className="w-full border-b border-Green my-10"/>

      <Stores/>
    </div>
  );
}
