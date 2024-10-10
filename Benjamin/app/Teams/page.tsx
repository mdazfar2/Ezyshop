import ReviewsCarousel from "@/components/Testimonials";
import SeperatorHeading from "@/components/ui/seperatorHeading";
import TeamMember from "@/components/ui/teamMember";

const Teams = () => {
  return (
    <>
      <div className="h-full">
        <div className="flex items-center justify-center bg-customTeal h-full mb-20 p-24">
          <div className="text-7xl font-bold font-handlee">Our Teams</div>
        </div>
      </div>
      <SeperatorHeading label="Ezyshop Founder"/>
        <div className="flex items-center justify-center my-10 text-4xl font-bold text-customBlue font-handlee">Meet Our Founder</div>
      <TeamMember/>

      <SeperatorHeading label="Testimonials"/>
      <div className="flex items-center justify-center my-10 text-4xl font-bold text-customBlue font-handlee">Customer Reviews!</div>

      <ReviewsCarousel/>
    </>
  );
};

export default Teams;
