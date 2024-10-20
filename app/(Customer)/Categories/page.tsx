import Categories from "@/components/categories";

const Category = () => {
  return (
    <div className="h-full   dark:bg-DarkGray">
      <div className="h-full">
        <div className="text-white flex items-center justify-center bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow h-full mb-20 p-24">
          <div className="text-4xl pt-5 lg:pt-0 lg:text-7xl text-center lg:text-start text-gray-200 font-extrabold font-handlee">Our Categories</div>
        </div>
      </div>
      {/* <SeperatorHeading label="Trending Deals"/> */}
      <Categories />
      
    </div>
  );
};

export default Category;
