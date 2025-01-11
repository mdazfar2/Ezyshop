import { useState } from "react";
import ChatBot from "react-simple-chatbot";

const Chatbot = () => {
  const [userMessage, setUserMessage] = useState<string>("");

  const handleMessage = (msg: string) => {
    setUserMessage(msg); // Update user message on each interaction
  };
  // , { ChatBotProps, Step }
  const flow = [
    {
      id: "1",
      message:
        "Welcome to **EzyShop**, your one-stop shop for everything you need! What is your name?",
      trigger: "2",
    },
    {
      id: "2",
      user: true, // Correctly capturing user input without a message
      trigger: "3",
    },
    {
      id: "3",
      message:
        "Hi {previousValue}, nice to meet you! How can I assist you today?",
      trigger: "4",
    },
    {
      id: "4",
      message: "Please choose an option below to proceed:",
      trigger: "5",
    },
    {
      id: "5",
      options: [
        {
          value: "Request a product from a vendor",
          label: "Request a product",
          trigger: "6",
        },
        {
          value: "Browse product categories",
          label: "Browse categories",
          trigger: "8",
        },
        {
          value: "Explore vendor details",
          label: "Explore vendors",
          trigger: "16",
        },
      ],
    },
    // Request a product flow
    {
      id: "6",
      message:
        "Great! What type of product would you like to request from a vendor?",
      trigger: "7",
    },
    {
      id: "7",
      options: [
        { value: "Electronics", label: "Electronics", trigger: "9" },
        { value: "Clothing", label: "Clothing", trigger: "9" },
        { value: "Home Appliances", label: "Home Appliances", trigger: "9" },
        { value: "Furniture", label: "Furniture", trigger: "9" },
      ],
    },
    {
      id: "9",
      message:
        "Awesome! We will connect you to a vendor specializing in {previousValue} products. Please wait a moment.",
      trigger: "10",
    },
    {
      id: "10",
      message:
        "Your request has been forwarded! A vendor will contact you shortly. Is there anything else I can help you with?",
      trigger: "5",
    },
    // Browse Categories flow
    {
      id: "8",
      message: "Here are some categories you can explore:",
      trigger: "11",
    },
    {
      id: "11",
      options: [
        { value: "Electronics", label: "Electronics", trigger: "12" },
        { value: "Clothing", label: "Clothing", trigger: "12" },
        { value: "Home Appliances", label: "Home Appliances", trigger: "12" },
        { value: "Furniture", label: "Furniture", trigger: "12" },
      ],
    },
    {
      id: "12",
      message:
        "Here are some popular {previousValue} products:\n\n - Smart TV (₹30,000)\n - Bluetooth Headphones (₹3,500)\n - Gaming Laptop (₹70,000)\n\nWould you like to explore more, request a product, or view other categories?",
      trigger: "5",
    },
    // Explore Vendor Flow
    {
      id: "16",
      message: "Here are some top vendors on EzyShop:",
      trigger: "17",
    },
    {
      id: "17",
      options: [
        { value: "TechZone", label: "TechZone (Electronics)", trigger: "18" },
        { value: "StyleShop", label: "StyleShop (Clothing)", trigger: "18" },
        {
          value: "HomeComfort",
          label: "HomeComfort (Furniture)",
          trigger: "18",
        },
      ],
    },
    {
      id: "18",
      message:
        "{previousValue} specializes in {previousValue.split(' ')[1]} products. Here are some of their offerings:\n - Smartwatch (₹5,000)\n - Wireless Earbuds (₹2,000)\n - 4K TV (₹45,000)\n\nRating: 4.8/5\nWould you like to request a product or explore other vendors?",
      trigger: "5",
    },
    // Thank you message
    {
      id: "14",
      message: "Thank you for using EzyShop! Enjoy your shopping experience!",
      end: true,
    },
  ];

  return (
    <div className="relative">
      <ChatBot
        steps={flow}
        onUserMessage={handleMessage}
        userMessage={userMessage}
      />
    </div>
  );
};

export default Chatbot;
