import { Construction } from "lucide-react";

const UnderConstruction = () => {
  return (
    <div className="flex bg-customBlue dark:shadow-Green shadow-black shadow-2xl mx-10 lg:mx-60 rounded-lg gap-10 p-10  dark:bg-Yellow items-center justify-center">
      <Construction className="h-40 w-40 lg:h-20 lg:w-20 text-customTeal  dark:text-Green" />
      <div className="flex flex-col items-start font-handlee font-extrabold text-gray-200 dark:text-black text-2xl">
        <div>
          This page is under development. We apologise for the inconvinience{" "}
        </div>
        <div className="text-pink-700">Please check back soon.</div>
      </div>
    </div>
  );
};

export default UnderConstruction;
