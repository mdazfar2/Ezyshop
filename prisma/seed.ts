// prisma/seed.ts

import { PrismaClient } from '@prisma/client';
// import bcrypt from 'bcrypt';

const prisma = new PrismaClient();

// Constants for user data
const users = [
  {
    mobileNumber: "1234567899",
    name: "John Doe",
    email: "john@example.com",
    // password: "password123", // Uncomment if using password hashing
  },
  {
    mobileNumber: "0987654322",
    name: "Jane Smith",
    email: "jane@example.com",
    // password: "password456", // Uncomment if using password hashing
  },
];

// Constants for blog posts
const blogPosts = [
  {
    title: "10 Ways to Save on Groceries This Month",
    image: "/blog-1.png",
    content: `Grocery shopping can quickly add up, but with a few smart strategies, you can trim your monthly budget without compromising on quality. Start by planning your meals ahead of time and making a shopping list to avoid impulse purchases. Buy in bulk for items that you frequently use, and don’t forget to check for sales or discounts on those products. Shopping seasonal produce can also be a great way to get fresh, healthy foods at a lower cost. 
    Another great tip is to compare prices between different stores. Apps like ezyshop make it easy to find the best deals across local stores and online markets. Look for store-brand products, which often provide the same quality as name brands but at a lower price. Lastly, avoid shopping when hungry to prevent unnecessary splurges. Happy saving!`,
    metaDescription: "Check out these insider tips to help you cut down on your monthly food budget.",
    label: "Shopping Tips",
  },
  {
    title: "How to Compare Prices and Find Deals Across Multiple Stores",
    image: "/blog-2.png",
    content: `Grocery shopping doesn't have to break the bank, especially when you utilize a few effective strategies to compare prices and find the best deals. Start by making a list of essential items you need and then visit several stores to gather their prices. Take advantage of technology by using apps and websites that allow you to compare prices from multiple retailers at once, saving you both time and money.
    Don't forget to check online grocery stores and local markets, as they often have exclusive discounts not found in traditional grocery chains. Look out for weekly ads and promotions; many stores will have rotating sales, so timing your shopping trip can yield significant savings.      
    Another tip is to join loyalty programs, which many retailers offer. These programs often provide special discounts and early notifications about sales. By being a loyal customer, you can stack savings over time and make your budget stretch further.      
    Finally, remember that the cheapest option isn't always the best. Compare not just prices, but also the quality of the products. Sometimes spending a little extra for higher-quality items can save you money in the long run by reducing waste. Happy shopping and smart saving!`,
    metaDescription: "Support local stores and discover organic groceries near you.",
    label: "Online Shopping",
  },
  {
    title: "Best Local Stores for Organic Products in Your Area",
    image: "/blog-3.png",
    content: `As more consumers shift towards healthy eating, the demand for organic products has surged, making it easier to find quality options in your local area. Farmers' markets are excellent sources of fresh, seasonal organic produce, allowing you to support local farmers while enjoying unbeatable taste. Health food stores and specialty grocery stores often have dedicated sections for organic items, offering a wide variety of choices, including unique products you might not find in larger supermarkets. 
    Joining a Community Supported Agriculture (CSA) program can also be a great way to receive a box of seasonal organic goods directly from local farms, ensuring freshness while supporting sustainable practices. Additionally, many online grocery services specialize in organic products and offer convenient delivery options, making it easier than ever to stock up on healthy foods. By exploring these local sources, you can enjoy delicious organic products while benefiting your health and supporting your community.`,
    metaDescription: "Explore local options for organic produce and products.",
    label: "Local Shopping",
  },
];

// Function to create users
async function createUsers() {
  const userPromises = users.map(async (user) => {
    // Uncomment if using password hashing
    // const hashedPassword = await bcrypt.hash(user.password, 10);
    return prisma.user.create({
      data: {
        mobileNumber: user.mobileNumber,
        name: user.name,
        email: user.email,
        // passwordHash: hashedPassword,
      },
    });
  });
  return Promise.all(userPromises);
}

// Function to create blog posts
async function createBlogPosts() {
  const blogPromises = blogPosts.map(post => {
    return prisma.blog.create({
      data: post,
    });
  });
  return Promise.all(blogPromises);
}

async function main() {
  try {
    const createdUsers = await createUsers();
    console.log('Created Users:', createdUsers);

    const createdBlogPosts = await createBlogPosts();
    console.log('Created Blog Posts:', createdBlogPosts);
  } catch (error) {
    console.error('Error during seeding:', error);
  } finally {
    await prisma.$disconnect();
  }
}

// Run the seed script
main();