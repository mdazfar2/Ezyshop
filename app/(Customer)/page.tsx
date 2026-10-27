import Features from "@/components/features";
import Categories from "@/components/categories";
import Hero from "@/components/ui/Hero";
import SeperatorHeading from "@/components/ui/seperatorHeading";
import LearnAboutUs from "@/components/about us/learnAboutUs";
import GitHubStats from "@/components/ui/gitHubStats";
import ChatBotPage from "@/components/chatbot/chatbotPage";
import HowItWorks from "@/components/home/HowItWorks";
import SellerPromoBanner from "@/components/home/SellerPromoBanner";
import TestimonialsSection from "@/components/home/TestimonialsSection";

export default function Home() {
  return (
    <div className="h-full dark:bg-DarkGray">
      <Hero />

      <div className="flex items-center justify-center">
        <GitHubStats />
      </div>

      <SeperatorHeading label="Learn About Us" />
      <LearnAboutUs />

      <div className="w-full border-b border-gray-200/80 dark:border-zinc-800/80 my-10 max-w-7xl mx-auto px-4" />

      <HowItWorks />

      <div className="w-full border-b border-gray-200/80 dark:border-zinc-800/80 my-10 max-w-7xl mx-auto px-4" />

      <Features />

      <div className="w-full border-b border-gray-200/80 dark:border-zinc-800/80 my-10 max-w-7xl mx-auto px-4" />

      <Categories showLoadMore={false} />

      <div className="w-full border-b border-gray-200/80 dark:border-zinc-800/80 my-10 max-w-7xl mx-auto px-4" />

      <SellerPromoBanner />

      <div className="w-full border-b border-gray-200/80 dark:border-zinc-800/80 my-10 max-w-7xl mx-auto px-4" />

      <TestimonialsSection />

      <ChatBotPage />
    </div>
  );
}
