import Image from "next/image";
import React from 'react';
import { BlogContentSection } from "./Blog";


interface BlogProps {
    blogSection: BlogContentSection;
}

const SubBlog: React.FC<BlogProps> = ({ blogSection }) =>  {
  return (
    <div className="text-gray-500 w-4/6 lg:w-full mb-2 lg:px-0 text-wrap text-justify"> 
        <div className="flex items-center justify-center lg:justify-start lg:w-full px-24 text-2xl lg:px-0 my-5 lg:text-3xl font-bold text-customBlue dark:text-Green font-handlee">
            {blogSection.subheading}
        </div>
        {blogSection.image && 
           <Image alt="blogImage" width={800} height={800} src={blogSection.image} className={`${(blogSection.imagePosition == 'left')?"float-left mr-4": "float-right ml-4"}  rounded-lg h-1/2 w-1/2`}></Image>
        }
        {blogSection.text}
    </div>
  )
};

export default SubBlog;
