"use client"
import Main from "@/components/setUpGuide/main";
import Sidebar from "@/components/setUpGuide/sidebar";
import { useTheme } from "context/themeProvider";
import Image from "next/image";
import React from "react";

const SetUpGuide= ({params}:{params:{sellerId:string}}) => {
  
  const {sellerId}=params
  // console.log(sellerId)
  const {theme}=useTheme()|| { theme: "light" };
  return (
    <>
    
      <main className="bg-secondary-mongolia relative h-screen md:overflow-hidden overflow-y-auto md:flex items-center justify-center font-ubuntu">
        <div className="flex flex-col items-center justify-start gap-20 ">
        <div className="hidden lg:block text-customTeal dark:text-Green text-5xl font-handlee font-bold">Store Setup Guide</div>
        <Image src={theme==="light"?`/storeSetupTeal.svg`:`/storeSetupGreen.svg`} width={1000} height={1000} alt="storeSetuppage"
         className="hidden md:block h-2/4 w-2/4"
        />
        </div>
        
        <div className="md:gray-200  bg-gray-200 dark:bg-gray-700 rounded-xl shadow-md absolute md:relative p-4 flex md:flex-row flex-col md:max-h-[550px] md:max-w-[900px] h-full w-full">
          <Sidebar />
          <Main sellerId={sellerId}/>
        </div>
      </main>
    </>
  );
};

export default SetUpGuide;
