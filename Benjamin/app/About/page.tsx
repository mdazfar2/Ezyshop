import LearnAboutUs from "@/components/about us/learnAboutUs";
import Features from "@/components/features";
import SeperatorHeading from "@/components/ui/seperatorHeading";

const About = () => {
  return (
    <>
      <div className="h-full">
        <div className="flex items-center justify-center bg-customTeal h-full mb-20 p-24">
          <div className="text-4xl md:text-7xl font-bold font-handlee">About us</div>
        </div>
      </div>
      <SeperatorHeading label="Learn About us"/>
      <LearnAboutUs />

      <div className="w-full border-b border-[#17a2b830] my-10"/>
      <Features/>
      <div className="w-full border-b border-[#17a2b830] my-10"/>

    </>
  );
};

export default About;
