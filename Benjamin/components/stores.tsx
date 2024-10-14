import Image from "next/image";
import { Button } from "./ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import SeperatorHeading from "./ui/seperatorHeading";

const Stores = () => {
  const cardData = [
    {
      id:1,
      title: "Fashion & Accessories",
      logo: "/fasion.png",
      description:
        "Explore the latest trends with exclusive offers on clothing, shoes and accessories",
      category: "Fashion",
      Offers: "50+ Brands",
      deliveryTime: "Same day delivery",
      StartingFrom: "$10",
      ButtonLink: "/",
    },
    {
      id:2,
      title: "Electronics & Gadgets",
      logo: "/electronics.png",
      description:
        "Shop for the latest electronics and gadgets from top brands at the best prices.",
      category: "Fashion",
      Offers: "50+ Brands",
      deliveryTime: "Same day delivery",
      StartingFrom: "$10",
      ButtonLink: "/",
    },
    {
      id:3,
      title: "Groceries & Essentials",
      logo: "/groceries.png",
      description:
        "Order fresh groceries and daily essentials from trusted local stores, delivered to your doorstep.",
      category: "Fashion",
      Offers: "50+ Brands",
      deliveryTime: "30 min delivery",
      StartingFrom: "$10",
      ButtonLink: "/",
    },
  ];
  return (
    <div className="flex flex-col items-center justify-center gap-5 pb-10 h-full">
      <SeperatorHeading label="Trending Deals" />
      <div className="text-Green text-3xl px-5 text-center lg:px-0 lg:text-start lg:text-5xl font-bold  font-handlee">
        Shop for your favourite products
      </div>
     


      <div className="h-full flex flex-col gap-5 px-5 md:grid md:grid-cols-2 lg:grid-cols-3 lg:gap-20">
        {cardData.map((card) => (
          <Card  key={card.title} className="sm:w-[400px] md:hover:scale-105 border border-DarkGray transition duration-300  bg-gray-700">
            <CardHeader className="border-b border-DarkGray">
              <div className="flex flex-col gap-2">
               <div className="relative">
               <Image width={1000} height={1000} alt="card image" src={card.logo} />
                <div className="absolute inset-0 bg-black bg-opacity-60 flex items-end opacity-0 hover:opacity-100 transition-opacity duration-300">
            <CardDescription className="text-white text-md text-center font-nunito p-4 ">
              {card.description}
            </CardDescription>
          </div>
               </div>
                <CardTitle className="flex items-center text-2xl pt-4 text-Yellow m-2 justify-center font-handlee">
                  {card.title}
                </CardTitle>
              </div>
              <CardDescription className="text-justify text-gray-200 text-lg">
                {card.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex text-gray-200 items-center justify-center font-nunito">
                <div className="border-r border-DarkGray font-semibold">
                  <div className="border-b border-DarkGray p-2">Category</div>
                  <div className="border-b border-DarkGray p-2">Offers Available</div>
                  <div className="border-b border-DarkGray p-2">Delivery Time</div>
                  <div className="border-b border-DarkGray p-2">Starting from</div>
                </div>
                <div>
                  <div className="border-b border-DarkGray p-2">{card.category}</div>
                  <div className="border-b border-DarkGray p-2">{card.Offers}</div>
                  <div className="border-b border-DarkGray p-2">{card.deliveryTime}</div>
                  <div className="border-b border-DarkGray p-2">{card.StartingFrom}</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="default" className="bg-Green text-gray-200 rounded-full">
                Shop Now
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Stores;
