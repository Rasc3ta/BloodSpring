import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import data from "../data";
import Blog from "./Blog";
import BlogCard from "./BlogCard";

const Blogs = () => {

  const [blogs, setBlogs] = useState([]);

  useEffect(()=>{
    setBlogs(data);
  },[])
  
  return (
    <div>
      <h1 className="text-3xl font-bold py-5 pb-10 mb-0 text-center bg-crimson text-white">
        Blogs
      </h1>

      {/* blog container */}
      <div className="  pb-10 mt-[10px]">
        {/* blog */}
        {/* <div className="gap-x bg-crimson   text-white    ">
          <h1 className=" text-3xl py-5 px-3">
            The Ripple Effect of a Single Donation: Unveiling the Life-Saving
            Journey
          </h1>
          <img
            src={"https://i.ibb.co/C2fNSRq/donating-blood.jpg"}
            className="  border-y-[2px]"
          />
          <p className=" text-lg sm:text-xl p-3    border-b-[2px]">
            Have you ever wondered what happens after you donate blood? The
            impact goes far beyond simply saving a life. It&apos;s a ripple
            effect that touches countless individuals and their loved ones. In
            this blog post, we&apos;ll delve deeper into the incredible journey
            of donated blood, from the moment you step into a donation center to
            the life-saving procedures it facilitates.
          </p>
          <div className="flex justify-center py-3">
            <button className="btn button">Read More</button>
          </div>
        </div> */}

        {

          blogs.map(blog=>{
            return <BlogCard key={blog.id} blog={blog}></BlogCard>;
          })
          
      }
      </div>
    </div>
  );
};

Blogs.propTypes = {};

export default Blogs;
