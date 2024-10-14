"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Lock, Mail, User } from "lucide-react";
import { useState } from "react";

const Login = () => {
  const [switchCss, setSwitchCss] = useState(true);
  const [isResetOpen, setIsResetOpen] = useState(false);

  return (
    <>
      {/* <div className="bg-slate-700 h-100 w-100">{switchCss ? "1" : "0"}</div>
      <Button onClick={() => setSwitchCss(!switchCss)}>Toggle CSS</Button> */}
      <div className="flex h-screen w-full items-center justify-center">
        <div className="flex rounded-lg justify-between shadow-xl relative lg:h-4/6 lg:w-2/4 border overflow-hidden">
          {/* First background div */}
          <div
            className={`w-full h-full absolute left-60 bottom-[9.5rem] rotate-45 transition-opacity duration-1000 ease-in-out bg-gradient-to-r from-Green to-Yellow ${
              switchCss ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          {/* Second background div */}
          <div
            className={`w-full h-full absolute right-60 bottom-[9.5rem] -rotate-45 transition-opacity duration-1000 ease-in-out bg-gradient-to-r from-Green to-Yellow ${
              !switchCss ? "opacity-100" : "opacity-0"
            }`}
          ></div>

          {switchCss && !isResetOpen && (
            <div className="flex flex-col z-10 items-center justify-start pt-24  pr-14 gap-4 w-2/4">
              <div className="font-nunito text-4xl text-Green font-extrabold">Login</div>
              <div className="flex items-center w-4/5 justify-center">
                <Input
                  className="rounded-full"
                  type="text"
                  placeholder="Username"
                />
                <User className="h-7 w-7 text-Yellow" />
              </div>
              <div className="flex items-center w-4/5 justify-center">
                <Input
                  className="rounded-full"
                  type="password"
                  placeholder="Password"
                />
                <Lock className="h-7 w-7 text-Yellow" />
              </div>
              <Button className="rounded-full bg-Green font-bold h-10 w-4/5 ">
                Login
              </Button>
              <div
                className="text-Green cursor-pointer"
                onClick={() => setIsResetOpen(!isResetOpen)}
              >
                Forgot Password?
              </div>
              <div className="flex items-center justify-center gap-2">
                Don&apos;t have an account?
                <div
                  className="text-Green cursor-pointer"
                  onClick={() => setSwitchCss(!switchCss)}
                >
                  {" "}
                  Sign Up
                </div>
              </div>
            </div>
          )}

          {switchCss && isResetOpen && (
            <div className="flex flex-col z-10 items-center justify-start pt-32  pr-14 gap-4 w-2/4">
              <div className="font-nunito text-4xl font-extrabold">
                Forgot Password
              </div>
              <div className="flex items-center gap-2 w-4/5 justify-center">
                <Input
                  className="rounded-full"
                  type="text"
                  placeholder="Email"
                />
                <Mail className="h-7 w-7 text-Yellow" />
              </div>
              <Button className="rounded-full font-bold h-10 w-4/5 bg-Green">
                Send reset link
              </Button>
              <div
                className="text-Green cursor-pointer"
                onClick={() => setIsResetOpen(!isResetOpen)}
              >
                Back to Login
              </div>
              
            </div>
          )}

          <div
            className={`text-white flex pt-28 px-4 flex-col w-2/4 ${
              switchCss ? "items-end text-right" : "items-start text-left"
            } z-10 h-full`}
          >
            <div className="text-5xl font-handlee font-bold ">
              {switchCss ? "Welcome Back!" : "Welcome!"}
            </div>
            <div className="mt-5 text-lg w-52">
              EzyShop makes it easy to browse, order, and receive products from
              your favorite stores.
            </div>
          </div>

          {!switchCss && (
            <div className="flex flex-col z-10 items-center justify-start pt-24  pl-14 gap-4 w-2/4">
              <div className="font-nunito text-4xl text-Green font-extrabold">Sign Up</div>
              <div className="flex items-center w-4/5 justify-center">
                <Input
                  className="rounded-full"
                  type="text"
                  placeholder="Username"
                />
                <User className="h-7 w-7 text-Yellow" />
              </div>
              <div className="flex items-center w-4/5 justify-center">
                <Input
                  className="rounded-full"
                  type="password"
                  placeholder="Enter Password"
                />
                <Lock className="h-7 w-7 text-Yellow" />
              </div>
              <div className="flex items-center w-4/5 justify-center">
                <Input
                  className="rounded-full"
                  type="password"
                  placeholder="Confirm Password"
                />
                <Lock className="h-7 w-7 text-Yellow" />
              </div>
              <Button className="rounded-full h-10 w-4/5 font-bold bg-Green">
                Sign Up
              </Button>
              <div className="flex items-center justify-center gap-2">
                Already have an account?
                <div
                  className="text-Green cursor-pointer"
                  onClick={() => setSwitchCss(!switchCss)}
                >
                  {" "}
                  Login
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default Login;
