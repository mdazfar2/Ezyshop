import ReviewsCarousel from "@/components/Testimonials";
import SeperatorHeading from "@/components/ui/seperatorHeading";
import TeamMember from "@/components/ui/teamMember";

const Teams = () => {
  return (
    <>
      <div className="h-full">
        <div className="text-white flex items-center justify-center bg-gradient-to-r from-Green to-Yellow h-full mb-20 p-24">
          <div className="text-4xl pt-5 lg:pt-0 lg:text-7xl text-gray-200 text-center lg:text-start font-extrabold font-handlee">Our Teams</div>
        </div>
      </div>
      <SeperatorHeading label="Ezyshop Founder"/>
        <div className="flex items-center justify-center my-10 text-4xl font-bold text-Green font-handlee">Meet Our Founder</div>
      <TeamMember/>

      <SeperatorHeading label="Testimonials"/>
      <div className="flex items-center justify-center my-10 text-4xl font-bold text-Green font-handlee">Customer Reviews!</div>

      <ReviewsCarousel/>
    </>
  );
};

export default Teams;
