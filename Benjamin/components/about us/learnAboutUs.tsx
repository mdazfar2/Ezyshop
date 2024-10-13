import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";

const LearnAboutUs = () => {
  return (
    <div className="flex items-center justify-center flex-col px-10 md:px-20">
      <div className="grid grid-cols-12">
        <div className=" col-span-12 lg:col-span-5 py-5 lg:mr-10 flex justify-center">
          <Image
            alt="aboutusImage"
            src={"/about-us-1.png"}
            width={500}
            height={500}
            className="rounded-lg w-full max-w-[full]"
          />
        </div>
        <div className="col-span-12 lg:col-span-7 flex gap-10  flex-col justify-start">
          <div className="font-handlee text-2xl text-customBlue font-bold md:text-5xl">
            Bringing Every Store to Your Door
          </div>
          <div className="text-gray-500 text-md md:text-xl">
            EzyShop is your go-to platform for shopping locally from the comfort
            of your home. Whether you're looking for products from your favorite
            local store or the nearest mall, we make it easy to browse, order,
            and have it delivered to you fast. Enjoy seamless shopping with
            access to the stores you love, all in one place.
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <Image
              src={"/about-us-2.png"}
              alt="aboutusImage"
              width={350}
              height={350}
              className="rounded-lg"
            />
            <div className="flex flex-col gap-2">
              <div className="border-b border-customTeal" />
              <div className="flex gap-2">
                <Check className="h-7 w-7 font-bold text-customTeal " />
                <div className="text-gray-500 text-xl">Shop from local stores or malls near you</div>
              </div>
              <div className="border-b-2 border-customTeal" />
              <div className="flex gap-2">
                <Check className="h-7 w-7 font-bold text-customTeal " />
                <div className="text-gray-500 text-xl">Quick, reliable delivery from the stores you trust</div>
              </div>
              <div className="border-b-2 border-customTeal" />
              <div className="flex gap-2">
                <Check className="h-7 w-7 font-bold text-customTeal " />
                <div className="text-gray-500 text-xl">Exclusive offers, only available through EzyShop</div>
              </div>
              <div className="border-b border-customTeal" />

            </div>
          </div>
        </div>
      </div>
      <Button className="rounded-full bg-customTeal h-10 w-40 text-lg m-10">
        Explore Stores
      </Button>
    </div>
  );
};

export default LearnAboutUs;
