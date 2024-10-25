"use client";
import { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import SignupPage from "../components/signupPage";
import LoginPage from "../components/loginPage";

const Login = () => {
  // BE logic and states

  const [error, setError] = useState("");
  const [loading, setloading] = useState(false);

  if (error != "") {
    toast.error(error);
    setError("");
  }
  // FE logic and states
  const [switchCss, setSwitchCss] = useState(true);
  const [isResetOpen, setIsResetOpen] = useState(false);

  return (
    <div className="dark:bg-DarkGray ">
      {/* <div className="bg-slate-700 h-100 w-100">{switchCss ? "1" : "0"}</div>
      <Button onClick={() => setSwitchCss(!switchCss)}>Toggle CSS</Button> */}
      <div className="flex lg:h-screen px-10 lg:px-0 h-full w-full flex-col lg:flex-row items-center justify-center">
        <div
          className={`text-white lg:hidden flex items-center justify-center mt-10 px-4 flex-col max-h-60 w-full z-10 `}
        >
          <div className="text-3xl lg:text-5xl font-handlee font-bold ">
            {switchCss ? "Welcome Back!" : "Welcome!"}
          </div>
          <div className="mt-5 text-md lg:text-lg text-center">
            EzyShop makes it easy to browse, order, and receive products from
            your favorite stores.
          </div>
        </div>
        <div className="flex rounded-2xl my-10 lg:my-0 justify-between shadow-xl shadow-black dark:shadow-Green relative w-full lg:h-4/6 lg:w-2/4 border overflow-hidden">
          {/* First background div */}
          <div
            className={`w-full h-full hidden lg:block absolute left-60 bottom-[9.5rem] rotate-45 transition-opacity duration-1000 ease-in-out bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow ${
              switchCss ? "opacity-100" : "opacity-0"
            }`}
          ></div>
          {/* Second background div */}
          <div
            className={`w-full h-full hidden lg:block absolute right-60 bottom-[9.5rem] -rotate-45 transition-opacity duration-1000 ease-in-out bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow ${
              !switchCss ? "opacity-100" : "opacity-0"
            }`}
          ></div>

          <LoginPage
            switchCss={switchCss}
            setSwitchCss={setSwitchCss}
            isResetOpen={isResetOpen}
            setIsResetOpen={setIsResetOpen}
            loading={loading}
            setError={setError}
            setloading={setloading}
          />

          <div
            className={`text-white pt-28 hidden md:flex px-4 flex-col w-2/4 ${
              switchCss ? "items-end text-right" : "items-start text-left"
            } z-10 h-full`}
          >
            <div className="text-2xl lg:text-5xl font-handlee font-bold ">
              {switchCss ? "Welcome Back!" : "Welcome!"}
            </div>
            <div className="mt-5 text-md lg:text-lg w-52">
              EzyShop makes it easy to browse, order, and receive products from
              your favorite stores.
            </div>
          </div>

          <SignupPage
            switchCss={switchCss}
            setSwitchCss={setSwitchCss}
            setError={setError}
            loading={loading}
            setloading={setloading}
          />
        </div>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
