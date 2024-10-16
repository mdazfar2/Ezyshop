import { Folder, MessagesSquare, User } from "lucide-react";
import SeperatorHeading from "../ui/seperatorHeading";
import RelatedPosts from "./RelatedPosts";
import BlogComments from "./Comments";
import BlogAvatar from "./blogAvatar";
import CategoryByKeyword from "./CategoryByKeyword";
import RecentPosts from "./RecentPosts";
import Image from "next/image";

const Blog = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-5  h-full pb-20 px-20 lg:px-40">
      <div className="h-full flex items-center flex-col lg:grid lg:items-start grid-cols-12 lg:gap-10">
        {/* left half */}
        <div className="col-span-8 px-5 flex max-w-screen-sm lg:max-w-screen-xl items-center lg:items-start justify-center lg:px-10 flex-col">
          <SeperatorHeading label="blog detail page" />
          {/* blog heading */}
          <div className="flex items-center justify-center lg:justify-start lg:w-full px-24 text-3xl lg:px-0 my-10 lg:text-4xl font-bold text-customBlue dark:text-Green font-handlee">
            10 Ways to Save on Groceries This Month
          </div>

          {/* author category and comment */}

          <div className="flex items-center justify-start gap-4 mb-10">
            <div className="flex items-center justify-center gap-2">
              <User className="h-4 w-4 text-customTeal dark:text-Yellow" />
              <div className="text-sm text-gray-500"> Shreya</div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <Folder className="h-4 w-4 text-customTeal dark:text-Yellow" />
              <div className="text-sm text-gray-500">Shopping Tips</div>
            </div>
            <div className="flex items-center justify-center gap-2">
              <MessagesSquare className="h-4 w-4 text-customTeal dark:text-Yellow" />
              <div className="text-sm text-gray-500">23</div>
            </div>
          </div>

          {/* image */}

          <Image alt="blogImage" width={1000} height={1000} src="/detailblog.png" className="rounded-lg h-4/6 w-4/6 m-10 lg:m-0 lg:p-0 lg:h-full lg:w-full lg:mb-10"></Image>

          {/* content */}

          <div className="text-gray-500 w-4/6 lg:w-full lg:px-0 text-wrap">
            Grocery shopping can quickly add up, but with a few smart
            strategies, you can trim your monthly budget without compromising on
            quality. Start by planning your meals ahead of time and making a
            shopping list to avoid impulse purchases. Buy in bulk for items that
            you frequently use, and don’t forget to check for sales or discounts
            on those products. Shopping seasonal produce can also be a great way
            to get fresh, healthy foods at a lower cost.
            <br />
            <br />
            Another great tip is to compare prices between different stores.
            Apps like ezyshop make it easy to find the best deals across local
            stores and online markets. Look for store-brand products, which
            often provide the same quality as name brands but at a lower price.
            Lastly, avoid shopping when hungry to prevent unnecessary splurges.
            Happy saving!
          </div>
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
