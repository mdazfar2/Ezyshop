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
         <div className="flex items-center justify-center my-10 text-4xl font-bold text-customBlue font-handlee">
            Filter categories by keywords
          </div>
        <ComboboxDemo />
        <div className="flex items-start justify-start mt-10 mb-5 text-4xl font-bold text-customBlue font-handlee">
            Categories
          </div>
        <div className="flex flex-col items-start justify-center">
        {categories.map((category)=>(
            <Link href={"#"} className=" w-full flex justify-between text-md py-3 border-b">
                <div className="text-customTeal hover:underline">{category.label}</div>
                <div className="bg-customTeal rounded-full px-2 ">{category.count}</div>
            </Link>
        ))}
        </div>
        </>

        
     );
}
 
export default CategoryByKeyword;