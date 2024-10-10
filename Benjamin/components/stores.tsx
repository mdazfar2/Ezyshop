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
      <div className="text-customBlue text-5xl font-bold  font-handlee">
        Shop for your favourite products
      </div>

      <div className="h-full grid grid-cols-3 gap-20">
        {cardData.map((card) => (
          <Card className="w-[400px]  bg-gray-100">
            <CardHeader className="border-b">
              <div className="flex flex-col gap-2">
                <img alt="card image" src={card.logo} />

                <CardTitle className="flex items-center text-2xl pt-4 text-customBlue m-2 justify-center font-handlee">
                  {card.title}
                </CardTitle>
              </div>
              <CardDescription className="text-justify text-lg">
                {card.description}
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-center">
                <div className="border-r">
                  <div className="border-b p-2">Category</div>
                  <div className="border-b p-2">Offers Available</div>
                  <div className="border-b p-2">Delivery Time</div>
                  <div className="border-b p-2">Starting from</div>
                </div>
                <div>
                  <div className="border-b p-2">{card.category}</div>
                  <div className="border-b p-2">{card.Offers}</div>
                  <div className="border-b p-2">{card.deliveryTime}</div>
                  <div className="border-b p-2">{card.StartingFrom}</div>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex justify-center">
              <Button variant="default" className="bg-[#17a2b8] rounded-full">
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
