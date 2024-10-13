import ShopCard from "@/components/shops/shopCard";
import SeperatorHeading from "@/components/ui/seperatorHeading";

const shops = [
  {
    name: "Fashion Hub",
    category: "fashion",
    image: "/shops/fashion_image1.jpg",
    description: "Trendy clothes for all ages",
  },
  {
    name: "Tech World",
    category: "electronics",
    image: "/shops/tech_image1.jpg",
    description: "Latest gadgets and electronics",
  },
  {
    name: "Fresh Mart",
    category: "groceries",
    image: "/shops/grocery_image1.jpg",
    description: "Fresh produce and groceries",
  },
  {
    name: "Style Studio",
    category: "fashion",
    image: "/shops/fashion_image2.jpg",
    description: "Designer clothes and accessories",
  },
  {
    name: "Gadget Zone",
    category: "electronics",
    image: "/shops/tech_image2.jpg",
    description: "Cutting-edge technology products",
  },
  {
    name: "Green Grocer",
    category: "groceries",
    image: "/shops/grocery_image2.jpg",
    description: "Organic and local produce",
  },
  {
    name: "Wellness Center",
    category: "health",
    image: "/shops/wellness_image1.jpg",
    description: "Health and wellness products",
  },
  {
    name: "Book Nook",
    category: "books",
    image: "/shops/bookstore_image1.jpg",
    description: "Wide range of books and media",
  },
  {
    name: "Toy Box",
    category: "toys",
    image: "/shops/toystore_image1.jpeg",
    description: "Fun toys and games for all ages",
  },
  {
    name: "Baby Bliss",
    category: "baby products",
    image: "/shops/babystore_image1.jpg",
    description: "Everything for babies and new mothers",
  },
  {
    name: "Auto Zone",
    category: "automotive",
    image: "/shops/automative_image1.jpg",
    description: "Automotive parts and tools",
  },
  {
    name: "Pet Paradise",
    category: "pet supplies",
    image: "/shops/pet_image1.jpg",
    description: "Supplies and accessories for pets",
  },
];

const Shop = () => {
  return (
    <>
      <div className="h-full mb-10">
        <div className="text-white flex items-center justify-center bg-gradient-to-r from-Green to-Yellow h-full mb-20 p-24">
          <div className="text-4xl pt-5 lg:pt-0 lg:text-7xl text-center lg:text-start font-extrabold font-handlee">
            Our Shops
          </div>
        </div>

        <SeperatorHeading label="Our shops" />
        <div className="text-Green mt-10 text-3xl px-5 text-center lg:px-0 lg:text-center mb-10 lg:text-5xl font-bold  font-handlee">
          Explore Our Partner Shops
        </div>
        <div className="flex flex-col items-center justify-center gap-10 px-10 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-24">
            {shops.map((shop)=>(
                <ShopCard shop={shop}/>
            ))}
        </div>
      </div>
    </>
  );
};

export default Shop;
