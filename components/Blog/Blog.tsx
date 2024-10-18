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
 
  Here are 10 more tips to help you save on groceries this month:
  <br />
  <br />
  <b> 1.  Meal Plan Around Sales and Discounts 🛍️</b>: Plan meals based on what's on sale to avoid expensive items and make use of weekly discounts.
  <br />
  <br />
  <b>2. Use Cashback Apps 💰</b>: Download cashback apps to earn rewards on your grocery purchases, making saving even easier.
  <br />
  <br />
  <b> 3. Buy Seasonal Produce 🍏</b>: Stick to fruits and vegetables that are in season for cheaper, fresher options.
  <br />
  <br />
  <b> 4. Shop in Bulk (But Wisely) 📦</b>: Purchase pantry staples like rice and pasta in bulk, but avoid overbuying perishables.
  <br />
  <br />
  <b>5. Cut Down on Convenience Foods 🚫🍱</b>: Pre-packaged items are convenient but expensive. Save by prepping your meals yourself.
  <br />
  <br />
  <b> 6. Utilize Freezer-Friendly Meals 🥶</b>: Cook large batches of meals to freeze, reducing the need for frequent grocery trips.
  <br />
  <br />
  <b> 7. Stick to a Grocery List 📝</b>: Avoid impulse buys by sticking to a carefully planned grocery list.
  <br />
  <br />
  <b> 8. **Avoid Brand Loyalty 🏷️</b>: Generic or store brands often offer the same quality as big-name brands for a lower price.
  <br />
  <br />
  <b> 9. Shop Late for Markdown Deals 🌙 </b>: Many stores mark down perishable items at the end of the day. Look for these deals in the evening.
  <br />
  <br />
  <b> 10. Grow Your Own Herbs and Vegetables </b>🌿: Growing your own herbs or small vegetables can save money and provide fresh produce.
  <br />
  <br />
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
