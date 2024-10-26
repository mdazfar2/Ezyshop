"use client"
import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import Blog from "@/components/Blog/Blog";
import Loading from "../../loading";



const BlogPage = () => {
  const { blogId } = useParams(); 
  const [blogData, setBlogData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogData = async () => {
      if (blogId) {
        try {
          const response = await fetch(`/api/blog/${blogId}`);
          const data = await response.json();
          setBlogData(data);
          // console.log(data);
        } catch (error) {
          console.error('Failed to fetch blog data:', error);
        } finally {
          setLoading(false);
        }
      }
    };

    fetchBlogData();
  }, [blogId]);

 
  if (loading) return <Loading/>;

  if (!blogData) {
    return <p className="text-white text-center">Blog not found.</p>;
  }

    return ( 
        <div className="h-full dark:bg-DarkGray">
        <div className="h-full">
          <div className="text-white flex items-center justify-center bg-customTeal dark:bg-gradient-to-r from-Green to-Yellow h-full mb-20 p-24">
            <div className="text-4xl pt-5 lg:pt-0 lg:text-7xl text-center lg:text-start font-extrabold font-handlee">Blog Page</div>
          </div>
        </div>

        <Blog/>
        </div>
     );
}
 
export default BlogPage;