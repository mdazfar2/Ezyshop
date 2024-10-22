"use client";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { ChevronDown } from "lucide-react";
import Link from "next/link";


const Login = () => {
  return (
    <div className="dark:bg-DarkGray ">
      <div className="flex mb-10 lg:h-screen w-full items-center min-h-96 justify-center">
        <div className="flex rounded-2xl p-10 lg:p-0 justify-between shadow-xl shadow-black dark:shadow-Green relative lg:h-4/6 lg:w-2/4 border overflow-hidden">
          {/* First background div */}
          <div
            className={`w-full h-full absolute left-60 bottom-[9.5rem] rotate-45 transition-opacity duration-1000 ease-in-out bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow `}
          ></div>
          <DropdownMenu>
            <DropdownMenuTrigger className="flex bg-customTeal dark:bg-Green rounded-full p-5 mt-10 md:ml-20  md:mt-20 lg:mt-40 h-10 items-center justify-center">
              Proceed as a
              <ChevronDown className="h-5 w-5" />
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="bg-gray-200 dark:bg-DarkGray">
                Role
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <Link href="/auth/customer">
                <DropdownMenuItem>Customer</DropdownMenuItem>
              </Link>
              <Link href="/auth/seller">
                <DropdownMenuItem>Seller</DropdownMenuItem>
              </Link>
              
            </DropdownMenuContent>
          </DropdownMenu>

          <div
            className={`text-white flex lg:pt-10 px-4 flex-col w-2/4  z-10 h-full`}
          >
            <div className="text-4xl lg:text-7xl text-right font-handlee font-bold ">
              Welcome to EzyShop!
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
