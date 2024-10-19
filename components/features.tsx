import { Car, CreditCard, SendToBack, ShoppingCart, Store, TicketPercent } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";
import SeperatorHeading from "./ui/seperatorHeading";

const Features = () => {
  const cardData = [
    {
      title: "Wide Product Selection",
      logo: <ShoppingCart className="h-10 w-10 "/>,
      decription:
        "Discover a variety of products from groceries to electronics, all in one app.",
    },
    {
      title: "Local & Mall-Based Stores",
      logo: <Store className="h-10 w-10 " />,
      decription:
        "Easily shop from your favorite local stores and top malls, all from home.",
    },
    {
      title: "Seamless Ordering Process",
      logo: <SendToBack className="h-10 w-10 "/>,
      decription:
        "Enjoy a simple and intuitive ordering system that saves you time and hassle.",
    },
    {
      title: "Fast & Reliable Delivery",
      logo: <Car className="h-10 w-10 "/>,
      decription:
        "Get your items delivered to your doorstep quickly and reliably, wherever you are.",
    },
    {
      title: "Exclusive Discounts & Offers",
      logo: <TicketPercent className="h-10 w-10 "/>,
      decription: "Unlock deals and discounts available only through EzyShop.",
    },
    {
      title: "Secure Payments",
      logo: <CreditCard className="h-10 w-10 "/>,
      decription:
        "Shop with peace of mind, thanks to our safe and secure payment gateway.",
    },
  ];

//  
return (
  <div className="pt-10">    
    <SeperatorHeading label="Our Facilities" />
  <div className="flex items-center  justify-center py-10 px-4 h-full">
    
    <div className="h-full flex flex-col gap-4 md:grid md:grid-cols-2 lg:gap-10 lg:grid-cols-3 ">
      {cardData.map((card) => (
        <Card key={card.title} className="min-w-[250px] max-w-[350px] shadow-md bg-gray-200 dark:bg-gray-700 ">
          <CardHeader>
              <div className="flex gap-2 items-center text-customTeal dark:text-Green justify-center">
                  {card.logo}
            <CardTitle className="text-xl md:text-2xl ml-4 font-bold font-handlee text-customBlue dark:text-Yellow" >{card.title}</CardTitle>

              </div>
            <CardDescription className="text-xl text-gray-500 dark:text-gray-200">{card.decription}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  </div>
  </div>
);
};

export default Features;
