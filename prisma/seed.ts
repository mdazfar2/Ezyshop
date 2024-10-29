// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
// import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

async function main() {
  // Password hashing
  // const hashedPassword1 = await bcrypt.hash("password123", 10);
  // const hashedPassword2 = await bcrypt.hash("password456", 10);

  // Create users
  // const user1 = await prisma.user.create({
  //   data: {
  //     mobileNumber: "1234567899",
  //     name: "John Doe",
  //     email: "john@examplle.com",
  //     // passwordHash: hashedPassword1,
  //   },
  // });

  // const user2 = await prisma.user.create({
  //   data: {
  //     mobileNumber: "0987654322",
  //     name: "Jane Smith",
  //     email: "jane@examplee.com",
  //     // passwordHash: hashedPassword2,
  //   },
  // });


  // console.log({ user1, user2 });

  // Create blog posts
  const blogPost1 = await prisma.blog.create({
    data: {
      title: "10 Ways to Save on Groceries This Month",
      image: "/blog-1.png", 
      content: [
        {
          "type": "paragraph",
          "text": "Grocery shopping can quickly add up, but with a few smart strategies, you can trim your monthly budget without compromising on quality. Start by planning your meals ahead of time and making a shopping list to avoid impulse purchases. Buy in bulk for items that you frequently use, and don’t forget to check for sales or discounts on those products. Shopping seasonal produce can also be a great way to get fresh, healthy foods at a lower cost.\\n\\nAnother great tip is to compare prices between different stores. Apps like ezyshop make it easy to find the best deals across local stores and online markets. Look for store-brand products, which often provide the same quality as name brands but at a lower price. Lastly, avoid shopping when hungry to prevent unnecessary splurges. Happy saving!"
        },
        {
          "type": "imageWithText",
          "subheading": "Use Digital Coupons and Loyalty Programs",
          "imagePosition": "left",
          "image": "https://res.cloudinary.com/ddu7aak9i/image/upload/loyalty-ezy.png",
          "text": "One of the easiest ways to save money on groceries is by taking advantage of digital coupons and store loyalty programs. Many supermarkets offer apps or online portals where you can access exclusive discounts and promotions. Before heading to the store, check these apps for available deals and apply the coupons directly to your account. Additionally, signing up for loyalty programs can provide further savings, including points that can be redeemed for discounts on future purchases. Some stores also offer bonus savings on certain products when you use their app. Using tools like ezyshop, you can compare the best deals and even discover new promotions across different stores, maximizing your savings potential. It’s a simple way to reduce your grocery bill without much effort—just make sure to scan your loyalty card at checkout! Another smart way to save on groceries is by planning your meals around weekly sales and promotions. Before creating your shopping list, check out store flyers or ezyshop’s deal aggregator to find which items are currently discounted. By planning meals based on what's on sale, you can take advantage of lower prices and even stock up on non-perishable items that you’ll need later. For example, if chicken is on sale, you can plan multiple meals using it as the main ingredient, such as stir-fry, chicken salad, or soup."
        },
        {
          "type": "imageWithText",
          "subheading": "Use Digital Coupons and Cashback Apps",
          "imagePosition": "right",
          "image": "https://res.cloudinary.com/ddu7aak9i/image/upload/cashback.png",
          "text": "Take advantage of digital coupons and cashback apps to save even more on your grocery shopping. Many grocery stores, as well as ezyshop, offer digital coupons that you can easily apply at checkout. Simply browse through the coupon section on the app or topic to find discounts on the products you plan to buy. In addition to store-specific coupons, there are cashback apps like Rakuten, Ibotta, and Honey that allow you to earn money back on your purchases, giving you even more savings. When using cashback apps, make sure to upload your receipts or link your ezyshop account for automatic tracking. These apps often have deals on everyday items like dairy, snacks, or household products, so even small savings can add up over time. Combining coupons with cashback offers can lead to significant savings over the month."
        }
      ]
      ,
      metaDescription : "Check out these insider tips to help you cut down on your monthly food budget.",
      label: "Shopping Tips",
    },
  });

  const blogPost2 = await prisma.blog.create({
    data: {
      title: "How to Compare Prices and Find Deals Across Multiple Stores",
      image: "/blog-2.png",
      content: [
        {
          type: "paragraph",
          text: "With so many online and in-store options, it can be overwhelming to find the best deals on products you need. Fortunately, there are strategies and tools that make it easy to compare prices across different stores, ensuring you get the best value for your money. One effective approach is to use price comparison apps or websites, which aggregate prices from various retailers in real time. These tools provide a quick overview of where to find the lowest price, saving you both time and effort.\n\nAnother tip is to check for promotions and seasonal sales. Many stores hold sales at specific times of the year, like Black Friday, Cyber Monday, or back-to-school events, where you can score significant discounts. Planning your purchases around these sales can save you a considerable amount. Also, keep an eye out for bundle deals or multi-buy offers. By combining products into one purchase, you might get a better price overall."
        },
        {
          type: "imageWithText",
          subheading: "Use Price Comparison Apps and Tools",
          imagePosition: "left",
          image: "https://res.cloudinary.com/ddu7aak9i/image/upload/price-compare_lgwjem.webp",
          text: "Price comparison apps are essential for modern shoppers who want to make informed purchases. Apps like ezyshop, Google Shopping, and ShopSavvy allow you to search for a product and compare prices across multiple online stores instantly. Some of these apps even notify you when prices drop, so you can grab the best deal without constantly checking. For instance, ezyshop offers a handy feature to track price changes, helping you plan your purchases better. By using these tools, you can ensure you're paying the lowest possible price without compromising on quality. Next time you're shopping, open one of these apps and quickly compare before you buy."
        },
        {
          type: "imageWithText",
          subheading: "Look for Store Loyalty Programs and Cashback Offers",
          imagePosition: "right",
          image: "https://res.cloudinary.com/ddu7aak9i/image/upload/cashback.png",
          text: "Another effective way to save on purchases is by enrolling in store loyalty programs and using cashback offers. Many stores, both online and in-store, offer loyalty programs that reward frequent shoppers with exclusive discounts, early sale access, or points redeemable for future purchases. For example, some grocery stores offer double points on certain days, helping you accumulate rewards faster. Additionally, cashback apps like Rakuten, Ibotta, and Honey provide cashback offers on everyday purchases. When combined with store loyalty points, cashback apps can help you achieve more savings across your shopping journey."
        },
        {
          type: "imageWithText",
          subheading: "Track Prices and Set Alerts",
          imagePosition: "left",
          image: "https://res.cloudinary.com/ddu7aak9i/image/upload/price-alerts_k3zlr0.webp",
          text: "Tracking prices and setting alerts can help you buy at the best time. Tools like CamelCamelCamel for Amazon, or ezyshop’s price tracking feature, let you see price history and set alerts for when a product reaches your preferred price range. By keeping track of price trends, you can avoid paying full price and instead make purchases when prices are most favorable. This approach is particularly useful for big-ticket items, allowing you to plan your purchases strategically and avoid overspending."
        }
      ],
      metaDescription: "Learn how to use Ezyshop's comparison tool to get the best deals across stores.",
      label: "Online Shopping",
    },
  });
  
  const blogPost3 = await prisma.blog.create({
    data: {
      title: "Best Local Stores for Organic Products in Your Area",
      image: "/blog-3.png",
      content: [{
        "type": "paragraph",
        "text": "Shopping for organic products is a priority for many, but finding high-quality, fresh organic goods locally can sometimes be challenging. With EzyShop, however, discovering a variety of stores dedicated to organic products has never been easier. Whether you're looking for fresh produce, dairy, or pantry items, EzyShop helps you find the best spots for organic shopping in your area, all in one convenient place. Let’s dive into the top locations and options available through EzyShop that bring healthy and organic products right to your fingertips."
      },{
        "type": "imageWithText",
        "subheading": "Farmer's Markets: Fresh and Local",
        "imagePosition": "left",
        "image": "https://res.cloudinary.com/ddu7aak9i/image/upload/v1730213286/farmers-market_ubhktt.webp",
        "text": "Farmers' markets are fantastic places to find fresh, organic produce, and EzyShop lets you browse and locate the best local markets nearby. Many farmers use sustainable practices to provide seasonal and organic fruits and vegetables, all sourced directly from local farms. By exploring farmers' markets through EzyShop, you can even learn more about the sources of your food before heading out. Use the EzyShop app to check out your local farmers' market offerings today. You’ll also find unique artisanal products, like handmade jams, honey, and organic snacks, adding variety to your shopping experience. Supporting local farmers not only ensures you’re eating healthy but also strengthens the community by promoting small businesses."
      },{
        "type": "imageWithText",
        "subheading": "Specialty Organic Stores",
        "imagePosition": "right",
        "image": "https://res.cloudinary.com/ddu7aak9i/image/upload/v1730213285/organic-store_u4agpj.webp",
        "text": "Specialty stores focusing on organic and natural foods are increasingly popular, and EzyShop makes it easy to explore these stores from the comfort of your home. With a wide range of organic products – from produce to household items – these stores provide certified organic options sourced with sustainable practices. Use EzyShop to discover specialty organic stores near you and enjoy products chosen to support your health and wellness. These stores often carry unique items not found in typical supermarkets, such as organic skincare, eco-friendly cleaning products, and sustainably sourced snacks. By shopping at specialty stores through EzyShop, you also gain access to knowledgeable staff recommendations, helping you make informed choices that align with your lifestyle. Explore a curated selection that promotes both personal well-being and environmental responsibility."
      },{
        "type": "imageWithText",
        "subheading": "Organic Sections in Supermarkets",
        "imagePosition": "left",
        "image": "https://res.cloudinary.com/ddu7aak9i/image/upload/v1730213285/organic-aisle_jcialh.webp",
        "text": "Many supermarkets now offer dedicated organic sections, making it convenient to buy organic items during your regular grocery trips. EzyShop’s platform includes popular supermarkets, allowing you to check their organic offerings and find everything you need in one trip. With options ranging from organic produce to pantry staples and dairy, EzyShop ensures you're able to locate and purchase high-quality organic items with ease. This feature lets you compare prices and availability, helping you make the best choices for your budget. Plus, with EzyShop’s real-time inventory updates, you’ll know exactly which items are in stock before heading to the store."
      }, {
        "type": "imageWithText",
        "subheading": "Online Options for Organic Shopping",
        "imagePosition": "right",
        "image": "/blog-3.png",
        "text": "For those who prefer the convenience of online shopping, EzyShop connects you with numerous e-commerce platforms and local delivery services offering organic products. Some services even partner with local farms to deliver fresh organic produce right to your doorstep. With EzyShop, you can easily browse local and national organic options, compare prices, and schedule deliveries that suit your busy lifestyle, all while prioritizing high-quality organic foods. You can also filter by specific dietary needs, such as gluten-free or vegan options, ensuring your organic purchases meet all your health preferences. Plus, EzyShop offers exclusive deals on select organic items, making it easier to maintain a wholesome diet without stretching your budget."
      }],
      metaDescription: "Support local stores and discover organic groceries near you.",
      label: "Local Shopping",
    },
  });
  
  console.log({  blogPost2, blogPost3 });
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
