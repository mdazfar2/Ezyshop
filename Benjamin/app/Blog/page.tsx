import BlogCard from "@/components/Blog/BlogCard";
import SeperatorHeading from "@/components/ui/seperatorHeading";

const Blogs = () => {
  return (
    <>
      <div className="h-full">
        <div className="flex items-center justify-center bg-customTeal h-full mb-20 p-24">
          <div className="text-7xl font-bold font-handlee">Our Blog</div>
        </div>
      </div>
      <SeperatorHeading label="Latest BLog" />
      <div className="flex items-center justify-center my-10 text-4xl font-bold text-customBlue font-handlee">
        Latest articles from our blogs
      </div>
      <BlogCard/>
    </>
  );
};

export default Blogs;
