import Link from "next/link";
import { ComboboxDemo } from "../ui/combobox";

const categories = [
    {
      value: "Online Shopping Tips",
      label: "Online Shopping Tips",
      count: "10",
    },
    {
      value: "Grocery Savings Hacks",
      label: "Grocery Savings Hacks",
      count: "10",
    },
    {
      value: "Local Store Discoveries",
      label: "Local Store Discoveries",
      count: "10",
    },
    {
      value: "Health & Organic Products",
      label: "Health & Organic Products",
      count: "10",
    },
    {
      value: "Shopping Trends & Innovations",
      label: "Shopping Trends & Innovations",
      count: "10",
    },
  ];
const CategoryByKeyword = () => {
    return ( 
        <>
         <div className="flex items-center justify-center lg:justify-start lg:w-full px-14  lg:px-0 my-10 text-4xl font-bold text-customBlue dark:text-Green font-handlee">
            Filter categories by keywords
          </div>
        <ComboboxDemo />
        <div className="flex items-center justify-center lg:justify-start lg:w-full px-14  lg:px-0 my-10 text-4xl font-bold text-customBlue dark:text-Green font-handlee">
            Categories
          </div>
        <div className="flex px-10 lg:px-0 flex-col items-start justify-center">
        {categories.map((category)=>(
            <Link key={category.label} href={"#"} className=" w-full flex justify-between text-md py-3 border-b dark:border-gray-200">
                <div className="text-customTeal dark:text-Green hover:underline">{category.label}</div>
                <div className="bg-customTeal dark:bg-Green rounded-full px-2 ">{category.count}</div>
            </Link>
        ))}
        </div>
        </>

        
     );
}
 
export default CategoryByKeyword;