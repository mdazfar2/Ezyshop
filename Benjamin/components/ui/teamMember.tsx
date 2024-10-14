import { GitHubLogoIcon, LinkedInLogoIcon } from "@radix-ui/react-icons";
import { Link } from "lucide-react";
import Image from "next/image";
import React from "react";

const TeamMember = () => {
  return (
    <div className="flex justify-center">
      <div className="text-center team mb-5 w-full md:w-1/2 lg:w-1/6">
        <div
          className="relative flex items-center justify-center w-full mb-4"
        >
          <Image
            width={1000}
            height={1000}
            className="img-fluid rounded-full w-2/3 lg:w-full"
            src="/Founder.jpeg"
            alt="Azfar Alam"
          />
          <div className="flex items-center rounded-full w-2/3 lg:w-full bg-white justify-center  h-full absolute  bg-opacity-80 opacity-0 hover:opacity-100 transition-opacity gap-2 duration-300">
            <a
              className="btn btn-outline-light  text-center mr-2"
              style={{ width: "38px", height: "38px" }}
              href="https://github.com/mdazfar2"
              aria-label="GitHub"
            >
              <div className="h-10 w-10 rounded-full border-white border p-2 bg-opacity-100 hover:opacity-100 flex items-center justify-center">
                <GitHubLogoIcon className="h-5 text-Yellow w-5" />
              </div>
            </a>
            <a
              className="btn btn-outline-light text-center mr-2"
              style={{ width: "38px", height: "38px" }}
              href="https://www.linkedin.com/in/md-azfar-alam/"
              aria-label="GitHub"
            >
              <div className="h-10 w-10 rounded-full border-white border p-2 bg-opacity-100 hover:opacity-100 flex items-center justify-center">
                <LinkedInLogoIcon className="h-5 text-Yellow  w-5" />
              </div>
            </a>
            <a
              className="btn btn-outline-light text-center mr-2"
              style={{ width: "38px", height: "38px" }}
              href="https://www.azfaralam.xyz/"
              aria-label="GitHub"
            >
              <div className="h-10 w-10 rounded-full border-white border p-2 bg-opacity-100 hover:opacity-100 flex items-center justify-center">
                <Link className="h-5 text-Yellow  w-5" />
              </div>
            </a>
          </div>
        </div>
        <h4 className="text-gray-200 font-bold text-3xl font-handlee mb-2">Azfar Alam</h4>
        <div className="italic text-gray-400">Founder & CEO</div>
      </div>
    </div>
  );
};

export default TeamMember;
