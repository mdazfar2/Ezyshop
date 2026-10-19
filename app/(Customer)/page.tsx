
import Features from "@/components/features";
import Categories from "@/components/categories";
import Hero from "@/components/ui/Hero";
import SeperatorHeading from "@/components/ui/seperatorHeading";
import LearnAboutUs from "@/components/about us/learnAboutUs";
import GitHubStats from '@/components/ui/gitHubStats';
import ChatBotPage from "@/components/chatbot/chatbotPage";
// import { useTheme } from "@/context/themeProvider";

export default function Home() {
  // const { theme} = useTheme() || {theme:"light"} // Get the current theme and toggle function

  return (
    <div className={`h-full dark:bg-DarkGray`}>
      <Hero />

      <div className="flex items-center justify-center">
        <GitHubStats />
      </div>

      <SeperatorHeading label="Learn About us" />

      <LearnAboutUs />
      <div className="w-full border-b border-gray-200/80 dark:border-zinc-800/80 my-10 max-w-7xl mx-auto px-4" />

      <Features />
      <div className="w-full border-b border-gray-200/80 dark:border-zinc-800/80 my-10 max-w-7xl mx-auto px-4" />

      <Categories showLoadMore = {false}/>

      <ChatBotPage/>
    </div>
  );
}
