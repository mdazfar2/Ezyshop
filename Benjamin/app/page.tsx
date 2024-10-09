import Features from "@/components/features";
import Stores from "@/components/stores";
import Hero from "@/components/ui/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full">
      <Hero/>
      <div className="w-full border-b border-[#00394f] my-10"/>
      <Features/>
      <Stores/>
    </div>
  );
}
