import Blog from "@/components/Blog/Blog";

const BlogPage = () => {
    return ( 
        <>
        <div className="h-full">
          <div className="flex items-center justify-center bg-customTeal h-full mb-20 p-24">
            <div className="text-7xl font-bold font-handlee">Blog Page</div>
          </div>
        </div>

        <Blog/>
        </>
     );
}
 
export default BlogPage;