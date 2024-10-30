import { Folder, MessagesSquare, User } from "lucide-react";
import SeperatorHeading from "../ui/seperatorHeading";
import RelatedPosts from "./RelatedPosts";
import BlogComments from "./Comments";
import BlogAvatar from "./blogAvatar";
import CategoryByKeyword from "./CategoryByKeyword";
import RecentPosts from "./RecentPosts";
import Image from "next/image";
import React from 'react';
import SubBlog from './SubBlog';
import {blogs} from './BlogCard'

export interface BlogContentSection {
  type: 'paragraph' | 'imageWithText'
  subheading?: string
  imagePosition?: 'left' | 'right'
  image?: string
  text?: string
}

interface BlogProps {
  blogId: string;
}

const Blog: React.FC<BlogProps> = ({ blogId }) =>  {
  const blogData = blogs[parseInt(blogId)];
  return (
    <div className="flex flex-col items-center justify-center gap-5  h-full pb-20 px-20 lg:px-40">
      <div className="h-full flex items-center flex-col lg:grid lg:items-start grid-cols-12 lg:gap-10">
        {/* left half */}
        <div className="col-span-8 px-5 flex max-w-screen-sm lg:max-w-screen-xl items-center lg:items-start justify-center lg:px-10 flex-col">
          <SeperatorHeading label="blog detail page" />
          {/* blog heading */}
          <div className="flex items-center justify-center lg:justify-start lg:w-full px-24 text-3xl lg:px-0 my-10 lg:text-4xl font-bold text-customBlue dark:text-Green font-handlee">
            {blogData.title}
          </div>

          {/* author category and comment */}

          <div className="flex items-center justify-start gap-4 mb-10">
            <div className="flex items-center justify-center gap-2">
              <User className="h-4 w-4 text-customTeal dark:text-Yellow" />
              <div className="text-sm text-gray-500"> Admin</div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Folder className="h-4 w-4 text-customTeal dark:text-Yellow" />
              <div className="text-sm text-gray-500">{blogData.label}</div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MessagesSquare className="h-4 w-4 text-customTeal dark:text-Yellow" />
              <div className="text-sm text-gray-500">{blogData.comments}</div>
            </div>
          </div>

          {/* image */}

          <Image alt="blogImage" width={1000} height={1000} src={blogData.image} className="rounded-lg h-4/6 w-4/6 m-10 lg:m-0 lg:p-0 lg:h-full lg:w-full"></Image>

          {/* content */}

          {blogData.content.map((section, index) =>(
            <SubBlog key={index} blogSection={section  as BlogContentSection}/>
          ))}

          <RelatedPosts />
          <BlogComments />

        </div>

        {/* right half*/}
        
        <div className="col-span-4 px-40 lg:px-0">
          <BlogAvatar />
          <CategoryByKeyword />
          <RecentPosts />
        </div>
      </div>
    </div>
  );
};

export default Blog;
