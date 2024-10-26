"use client"
import BlogCard from "@/components/Blog/BlogCard";
import SeperatorHeading from "@/components/ui/seperatorHeading";
import { useEffect, useState } from 'react';
import Loading from "../loading";


const Blog: React.FC = () => {
  const [blogs, setBlogs] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => { 
      try {
        const response = await fetch('/api/blog'); // Call your API endpoint
        const data = await response.json();
        setBlogs(data);
      } catch (error) {
        console.error('Failed to fetch blogs:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);


  if (loading) return <Loading/>;

  if (!blogs) {
    return <p className="text-white text-center">Blogs not found.</p>;
  }
  
  return (
    <div className="h-full dark:bg-DarkGray pb-10">
      <div className="h-full">
        <div className="text-white flex items-center justify-center bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow h-full mb-20 p-24">
          <div className="text-4xl pt-5 lg:pt-0 lg:text-7xl text-center lg:text-start font-extrabold text-gray-200 font-handlee">
            Our Blog
          </div>
        </div>
      </div>
      <SeperatorHeading label="Latest Blog" />
      <div className="flex items-center justify-center px-5 text-3xl lg:px-0 my-10 lg:text-4xl font-bold text-customTeal dark:text-Green font-handlee">
        Latest articles from our blogs
      </div>

      {blogs.length > 0 ? (
        <BlogCard blogData={blogs} />
      ) : (
        <p className="text-customTeal dark:text-white text-center">Blogs not found.</p>
      )}
    </div>
  );
};

export default Blog;