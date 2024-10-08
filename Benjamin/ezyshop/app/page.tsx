import Features from "@/components/features";
import Stores from "@/components/stores";
import Hero from "@/components/ui/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full">
      <Hero/>
      <Features/>
      <Stores/>
    </div>
  );
}
