
import LearnAboutUs from "@/components/about us/learnAboutUs";
import Features from "@/components/features";
import SeperatorHeading from "@/components/ui/seperatorHeading";

const About = () => {
  return (
    <div className="h-full dark:bg-DarkGray">
      <div className="h-full ">
        <div className="text-white flex items-center justify-center  bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow h-full mb-20 p-24">
          <div className=" text-4xl md:text-7xl text-gray-200 font-bold font-handlee">About us</div>
        </div>
      </div>
      <SeperatorHeading label="Learn About us"/>
      <LearnAboutUs />

      <div className="w-full border-b border-Green my-10"/>
      <Features/>

    </div>
  );
};

export default About;
