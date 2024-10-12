import { Car, CreditCard, Drum, SendToBack, ShoppingCart, Store, TicketPercent } from "lucide-react";
import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

const Features = () => {
  const cardData = [
    {
      title: "Wide Product Selection",
      logo: <ShoppingCart className="h-10 w-10 text-customTeal"/>,
      decription:
        "Discover a variety of products from groceries to electronics, all in one app.",
    },
    {
      title: "Local & Mall-Based Stores",
      logo: <Store className="h-10 w-10 text-customTeal" />,
      decription:
        "Easily shop from your favorite local stores and top malls, all from home.",
    },
    {
      title: "Seamless Ordering Process",
      logo: <SendToBack className="h-10 w-10 text-customTeal"/>,
      decription:
        "Enjoy a simple and intuitive ordering system that saves you time and hassle.",
    },
    {
      title: "Fast & Reliable Delivery",
      logo: <Car className="h-10 w-10 text-customTeal"/>,
      decription:
        "Get your items delivered to your doorstep quickly and reliably, wherever you are.",
    },
    {
      title: "Exclusive Discounts & Offers",
      logo: <TicketPercent className="h-10 w-10 text-customTeal"/>,
      decription: "Unlock deals and discounts available only through EzyShop.",
    },
    {
      title: "Secure Payments",
      logo: <CreditCard className="h-10 w-10 text-customTeal"/>,
      decription:
        "Shop with peace of mind, thanks to our safe and secure payment gateway.",
    },
  ];

//  
return (
  <div className="flex items-center  justify-center py-10 px-4 h-full">
    <div className="h-full flex flex-col gap-4 md:grid md:grid-cols-2 lg:gap-10 lg:grid-cols-3 lg:gap-20">
      {cardData.map((card) => (
        <Card className="min-w-[250px] max-w-[350px]  bg-gray-100 ">
          <CardHeader>
              <div className="flex gap-2 items-center justify-center">
                  {card.logo}
            <CardTitle className="text-xl md:text-2xl ml-4 font-bold font-handlee text-customBlue" >{card.title}</CardTitle>

              </div>
            <CardDescription className="text-xl">{card.decription}</CardDescription>
          </CardHeader>
        </Card>
      ))}
    </div>
  </div>
);
};

export default Features;
