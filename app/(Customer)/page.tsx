
import Features from "@/components/features";
import Categories from "@/components/categories";
import Hero from "@/components/ui/Hero";
import SeperatorHeading from "@/components/ui/seperatorHeading";
import LearnAboutUs from "@/components/about us/learnAboutUs";
// import { useTheme } from "@/context/themeProvider";

export default function Home() {
  // const { theme} = useTheme() || {theme:"light"} // Get the current theme and toggle function

  return (
    <div className={`h-full dark:bg-DarkGray`}>
      <Hero />
      <SeperatorHeading label="Learn About us" />

      <LearnAboutUs />
      <div className="w-full border-b border-customBlue dark:border-Green my-10" />

      <Features />
      <div className="w-full border-b border-customBlue dark:border-Green my-10" />

      <Categories showLoadMore = {false}/>
    </div>
  );
}
