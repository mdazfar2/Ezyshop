import { Check } from "lucide-react";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

const LearnAboutUs = () => {
  return (
    <div className="flex items-center dark:text-gray-200 justify-center flex-col px-20 md:px-20 ">
      <div className="grid grid-cols-12  lg:w-10/12 ">
        <div className=" col-span-12 lg:col-span-5 py-5 lg:mr-10 flex justify-center">
          <Image
            alt="aboutusImage"
            src={"/about-us-1.png"}
            width={500}
            height={500}
            className="rounded-lg w-full max-w-[full]"
          />
        </div>
        <div className="col-span-12 lg:col-span-7 flex gap-8  flex-col justify-start">
          <div className="font-handlee text-2xl text-customBlue dark:text-Green font-bold md:text-4xl">
            Bringing Every Store to Your Door
          </div>
          <div>
            <p className=" text-md md:text-base font-nunito">
              {" "}
              EzyShop is your go-to platform for shopping locally from the
              comfort of your home. Whether you&apos;re looking for products
              from your favorite local store or the nearest mall, we make it
              easy to browse, order, and have it delivered to you fast. Enjoy
              seamless shopping with access to the stores you love, all in one
              place.
            </p>
          </div>
          <div className="flex flex-col md:flex-row gap-5">
            <Image
              src={"/about-us-2.png"}
              alt="aboutusImage"
              width={350}
              height={350}
              className="rounded-lg"
            />
            <div className="flex flex-col gap-2 font-nunito ">
              <div className="border-b-2 border-gray-500" />
              <div className="flex gap-2">
                <Check className="h-7 w-7 font-bold text-customTeal dark:text-Yellow " />
                <div className="text-base">
                  Shop from local stores or malls near you
                </div>
              </div>
              <div className="border-b-2 border-gray-500 " />
              <div className="flex gap-2">
                <Check className="h-7 w-7 font-bold text-customTeal dark:text-Yellow " />
                <div className="text-base">
                  Quick, reliable delivery from the stores you trust
                </div>
              </div>
              <div className="border-b-2 border-gray-500" />
              <div className="flex gap-2">
                <Check className="h-7 w-7 font-bold text-customTeal dark:text-Yellow " />
                <div className="text-base">
                  Exclusive offers, only available through EzyShop
                </div>
              </div>
              <div className="border-b-2 border-gray-500" />
            </div>
          </div>
        </div>
      </div>
      <Link href={"/shops"}>
        <Button className="rounded-full bg-customTeal dark:bg-Green dark:text-white dark:hover:opacity-80 h-10 w-40 text-md m-10 font-nunito ">
          Explore Stores
        </Button>
      </Link>
    </div>
  );
};

export default LearnAboutUs;
