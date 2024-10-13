"use client";
import ProductCard from "@/components/shops/productCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search } from "lucide-react";
import { useParams } from "next/navigation";

const products = [
  // Fashion
  {
    product_title: "Men's Casual Shirt",
    product_category: "Fashion",
    product_shop: "Fashion Hub",
    product_img_url: "",
    product_id: 1,
    cost: 25,
  },
  {
    product_title: "Women's Scarf",
    product_category: "Fashion",
    product_shop: "Style Studio",
    product_img_url: "",
    product_id: 2,
    cost: 25,
  },
  {
    product_title: "Kids' T-Shirt",
    product_category: "Fashion",
    product_shop: "Fashion Hub",
    product_img_url: "",
    product_id: 3,
    cost: 15,
  },
  {
    product_title: "Leather Jacket",
    product_category: "Fashion",
    product_shop: "Style Studio",
    product_img_url: "",
    product_id: 4,
    cost: 120,
  },
  {
    product_title: "Sports Shoes",
    product_category: "Fashion",
    product_shop: "Fashion Hub",
    product_img_url: "",
    product_id: 5,
    cost: 65,
  },
  {
    product_title: "Winter Coat",
    product_category: "Fashion",
    product_shop: "Style Studio",
    product_img_url: "",
    product_id: 6,
    cost: 150,
  },
  {
    product_title: "Jeans",
    product_category: "Fashion",
    product_shop: "Fashion Hub",
    product_img_url: "",
    product_id: 7,
    cost: 40,
  },
  {
    product_title: "Sunglasses",
    product_category: "Fashion",
    product_shop: "Style Studio",
    product_img_url: "",
    product_id: 8,
    cost: 20,
  },
  {
    product_title: "Handbag",
    product_category: "Fashion",
    product_shop: "Fashion Hub",
    product_img_url: "",
    product_id: 9,
    cost: 80,
  },
  {
    product_title: "Hand Kerchief",
    product_category: "Fashion",
    product_shop: "Style Studio",
    product_img_url: "",
    product_id: 76,
    cost: 80,
  },

  // Electronics
  {
    product_title: "Smartphone",
    product_category: "Electronics",
    product_shop: "Tech World",
    product_img_url: "",
    product_id: 10,
    cost: 699,
  },
  {
    product_title: "Laptop",
    product_category: "Electronics",
    product_shop: "Gadget Zone",
    product_img_url: "",
    product_id: 11,
    cost: 999,
  },
  {
    product_title: "Wireless Headphones",
    product_category: "Electronics",
    product_shop: "Tech World",
    product_img_url: "",
    product_id: 12,
    cost: 150,
  },
  {
    product_title: "Smartwatch",
    product_category: "Electronics",
    product_shop: "Gadget Zone",
    product_img_url: "",
    product_id: 13,
    cost: 250,
  },
  {
    product_title: "Bluetooth Speaker",
    product_category: "Electronics",
    product_shop: "Tech World",
    product_img_url: "",
    product_id: 14,
    cost: 80,
  },
  {
    product_title: "Tablet",
    product_category: "Electronics",
    product_shop: "Gadget Zone",
    product_img_url: "",
    product_id: 15,
    cost: 450,
  },
  {
    product_title: "External Hard Drive",
    product_category: "Electronics",
    product_shop: "Tech World",
    product_img_url: "",
    product_id: 16,
    cost: 100,
  },
  {
    product_title: "4K Monitor",
    product_category: "Electronics",
    product_shop: "Gadget Zone",
    product_img_url: "",
    product_id: 17,
    cost: 300,
  },
  {
    product_title: "Gaming Console",
    product_category: "Electronics",
    product_shop: "Tech World",
    product_img_url: "",
    product_id: 18,
    cost: 499,
  },

  // Groceries
  {
    product_title: "Organic Apples",
    product_category: "Groceries",
    product_shop: "Fresh Mart",
    product_img_url: "",
    product_id: 19,
    cost: 3,
  },
  {
    product_title: "Whole Grain Bread",
    product_category: "Groceries",
    product_shop: "Green Grocer",
    product_img_url: "",
    product_id: 20,
    cost: 2,
  },
  {
    product_title: "Milk (1L)",
    product_category: "Groceries",
    product_shop: "Fresh Mart",
    product_img_url: "",
    product_id: 21,
    cost: 1,
  },
  {
    product_title: "Eggs (dozen)",
    product_category: "Groceries",
    product_shop: "Green Grocer",
    product_img_url: "",
    product_id: 22,
    cost: 2,
  },
  {
    product_title: "Chicken Breast (1kg)",
    product_category: "Groceries",
    product_shop: "Fresh Mart",
    product_img_url: "",
    product_id: 23,
    cost: 10,
  },
  {
    product_title: "Fresh Spinach",
    product_category: "Groceries",
    product_shop: "Green Grocer",
    product_img_url: "",
    product_id: 24,
    cost: 3,
  },
  {
    product_title: "Rice (5kg)",
    product_category: "Groceries",
    product_shop: "Fresh Mart",
    product_img_url: "",
    product_id: 25,
    cost: 15,
  },
  {
    product_title: "Pasta (500g)",
    product_category: "Groceries",
    product_shop: "Green Grocer",
    product_img_url: "",
    product_id: 26,
    cost: 2,
  },
  {
    product_title: "Tomato Sauce",
    product_category: "Groceries",
    product_shop: "Fresh Mart",
    product_img_url: "",
    product_id: 27,
    cost: 2,
  },
  {
    product_title: "Soy Sauce",
    product_category: "Groceries",
    product_shop: "Green Grocer",
    product_img_url: "",
    product_id: 78,
    cost: 80,
  },

  // Beauty
  {
    product_title: "Moisturizer",
    product_category: "Beauty",
    product_shop: "Wellness Center",
    product_img_url: "",
    product_id: 36,
    cost: 25,
  },
  {
    product_title: "Lipstick",
    product_category: "Beauty",
    product_shop: "Wellness Center",
    product_img_url: "",
    product_id: 37,
    cost: 15,
  },
  {
    product_title: "Facial Cleanser",
    product_category: "Beauty",
    product_shop: "Wellness Center",
    product_img_url: "",
    product_id: 38,
    cost: 20,
  },
  {
    product_title: "Eye Shadow Palette",
    product_category: "Beauty",
    product_shop: "Wellness Center",
    product_img_url: "",
    product_id: 39,
    cost: 30,
  },
  {
    product_title: "Nail Polish",
    product_category: "Beauty",
    product_shop: "Wellness Center",
    product_img_url: "",
    product_id: 40,
    cost: 10,
  },
  {
    product_title: "Sunscreen",
    product_category: "Beauty",
    product_shop: "Wellness Center",
    product_img_url: "",
    product_id: 41,
    cost: 18,
  },
  {
    product_title: "Perfume",
    product_category: "Beauty",
    product_shop: "Wellness Center",
    product_img_url: "",
    product_id: 42,
    cost: 60,
  },
  {
    product_title: "Hair Dryer",
    product_category: "Beauty",
    product_shop: "Wellness Center",
    product_img_url: "",
    product_id: 43,
    cost: 50,
  },

  // Sports
  {
    product_title: "Running Shoes",
    product_category: "Sports",
    product_shop: "Wellness Center",
    product_img_url: "",
    product_id: 44,
    cost: 70,
  },
  {
    product_title: "Yoga Mat",
    product_category: "Sports",
    product_shop: "Wellness Center",
    product_img_url: "",
    product_id: 45,
    cost: 25,
  },
  {
    product_title: "Dumbbells Set",
    product_category: "Sports",
    product_shop: "Wellness Center",
    product_img_url: "",
    product_id: 46,
    cost: 50,
  },
  {
    product_title: "Tennis Racket",
    product_category: "Sports",
    product_shop: "Wellness Center",
    product_img_url: "",
    product_id: 47,
    cost: 80,
  },
  {
    product_title: "Soccer Ball",
    product_category: "Sports",
    product_shop: "Wellness Center",
    product_img_url: "",
    product_id: 48,
    cost: 30,
  },
  {
    product_title: "Swimming Goggles",
    product_category: "Sports",
    product_shop: "Wellness Center",
    product_img_url: "",
    product_id: 49,
    cost: 15,
  },
  {
    product_title: "Baseball Glove",
    product_category: "Sports",
    product_shop: "Wellness Center",
    product_img_url: "",
    product_id: 50,
    cost: 35,
  },

  // Health
  {
    product_title: "Multivitamins",
    product_category: "Health",
    product_shop: "Wellness Center",
    product_img_url: "",
    product_id: 51,
    cost: 20,
  },
  {
    product_title: "Protein Powder",
    product_category: "Health",
    product_shop: "Wellness Center",
    product_img_url: "",
    product_id: 52,
    cost: 40,
  },
  {
    product_title: "Blood Pressure Monitor",
    product_category: "Health",
    product_shop: "Wellness Center",
    product_img_url: "",
    product_id: 53,
    cost: 60,
  },
  {
    product_title: "Fitness Tracker",
    product_category: "Health",
    product_shop: "Wellness Center",
    product_img_url: "",
    product_id: 54,
    cost: 70,
  },
  {
    product_title: "Yoga Block",
    product_category: "Health",
    product_shop: "Wellness Center",
    product_img_url: "",
    product_id: 55,
    cost: 15,
  },

  // Books
  {
    product_title: "The Great Gatsby",
    product_category: "Books",
    product_shop: "Book Nook",
    product_img_url: "",
    product_id: 56,
    cost: 10,
  },
  {
    product_title: "1984",
    product_category: "Books",
    product_shop: "RBook Nook",
    product_img_url: "",
    product_id: 57,
    cost: 12,
  },
  {
    product_title: "To Kill a Mockingbird",
    product_category: "Books",
    product_shop: "Book Nook",
    product_img_url: "",
    product_id: 58,
    cost: 15,
  },
  {
    product_title: "Pride and Prejudice",
    product_category: "Books",
    product_shop: "Book Nook",
    product_img_url: "",
    product_id: 59,
    cost: 10,
  },
  {
    product_title: "Moby Dick",
    product_category: "Books",
    product_shop: "Book Nook",
    product_img_url: "",
    product_id: 60,
    cost: 18,
  },

  // Toys
  {
    product_title: "Building Blocks",
    product_category: "Toys",
    product_shop: "Toy Box",
    product_img_url: "",
    product_id: 63,
    cost: 30,
  },
  {
    product_title: "Puzzle Game",
    product_category: "Toys",
    product_shop: "Toy Box",
    product_img_url: "",
    product_id: 64,
    cost: 25,
  },
  {
    product_title: "Action Figure",
    product_category: "Toys",
    product_shop: "Toy Box",
    product_img_url: "",
    product_id: 65,
    cost: 20,
  },
  {
    product_title: "Doll Set",
    product_category: "Toys",
    product_shop: "Toy Box",
    product_img_url: "",
    product_id: 66,
    cost: 35,
  },
  {
    product_title: "Remote Control Car",
    product_category: "Toys",
    product_shop: "Toy Box",
    product_img_url: "",
    product_id: 67,
    cost: 45,
  },

  // Baby Products
  {
    product_title: "Diapers (Pack of 30)",
    product_category: "Baby Products",
    product_shop: "Baby Bliss",
    product_img_url: "",
    product_id: 68,
    cost: 25,
  },
  {
    product_title: "Baby Wipes",
    product_category: "Baby Products",
    product_shop: "Baby Bliss",
    product_img_url: "",
    product_id: 69,
    cost: 10,
  },
  {
    product_title: "Baby Monitor",
    product_category: "Baby Products",
    product_shop: "Baby Bliss",
    product_img_url: "",
    product_id: 70,
    cost: 70,
  },
  {
    product_title: "Baby Stroller",
    product_category: "Baby Products",
    product_shop: "Baby Bliss",
    product_img_url: "",
    product_id: 71,
    cost: 120,
  },

  // Automotive
  {
    product_title: "Car Wax",
    product_category: "Automotive",
    product_shop: "Auto Zone",
    product_img_url: "",
    product_id: 75,
    cost: 15,
  },
  {
    product_title: "Tire Inflator",
    product_category: "Automotive",
    product_shop: "Auto Zone",
    product_img_url: "",
    product_id: 80,
    cost: 30,
  },

  // Pet Supplies
  {
    product_title: "Dog Food (10kg)",
    product_category: "Pet Supplies",
    product_shop: "Pet Paradise",
    product_img_url: "",
    product_id: 81,
    cost: 45,
  },
  {
    product_title: "Cat Litter",
    product_category: "Pet Supplies",
    product_shop: "Pet Paradise",
    product_img_url: "",
    product_id: 82,
    cost: 20,
  },
  {
    product_title: "Dog Leash",
    product_category: "Pet Supplies",
    product_shop: "Pet Paradise",
    product_img_url: "",
    product_id: 83,
    cost: 15,
  },
];

const CategoryProducts = () => {
  const params = useParams();
  let shopCategory = params.shopCategory;

  shopCategory = String(shopCategory).replace("%20", " ");

  const productList = products.filter(
    (product) => product.product_shop === shopCategory
  );
//   console.log(productList);
  return (
    <>
      <div className="h-full  mb-10">
        <div className="flex items-center justify-center bg-customTeal h-full mb-20 p-24">
          <div className="text-4xl pt-5 lg:pt-0 lg:text-7xl text-center lg:text-start font-extrabold font-handlee">
            {shopCategory}
          </div>
        </div>

        {/* <SeperatorHeading label="Our shops" /> */}
        <div className="w-full flex justify-center px-5 lg:px-0 mb-10">
          <div className="bg-customTeal p-1  flex items-center justify-center rounded-full w-full lg:w-2/6">
            <Input
              placeholder="Search Products..."
              className="rounded-full bg-white"
            />
            <Button className="bg-customTeal hover:shadow-slate-500 rounded-full">
              <Search className="h-7 w-7" />
            </Button>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-10 px-10 lg:grid lg:grid-cols-3 lg:gap-10 lg:px-24">
          {productList.map((product) => (
            <ProductCard product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

export default CategoryProducts;
