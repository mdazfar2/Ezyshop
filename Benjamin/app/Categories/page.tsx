import Stores from "@/components/stores";
import { Button } from "@/components/ui/button";
import SeperatorHeading from "@/components/ui/seperatorHeading";

const Category = () => {
  return (
    <>
      <div className="h-full">
        <div className="flex items-center justify-center bg-customTeal h-full mb-20 p-24">
          <div className="text-4xl pt-5 lg:pt-0 lg:text-7xl text-center lg:text-start font-extrabold font-handlee">Our Categories</div>
        </div>
      </div>
      {/* <SeperatorHeading label="Trending Deals"/> */}
      <Stores />
      <div className="flex items-center justify-center flex-col px-20">
        <Button className="rounded-full bg-customTeal h-10 w-40 flex items-center justify-center text-lg m-10">
          Load more
        </Button>
      </div>
    </>
  );
};

export default Category;
