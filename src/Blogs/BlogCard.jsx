import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const BlogCard = ({ blog }) => {
  const navigate = useNavigate();

  return (
    <div className="gap-x bg-crimson   text-white    ">
      <h1 className=" text-3xl py-5 px-3">{blog.title}</h1>
      <img src={blog.image} className="  border-y-[2px] border-white" />
      <p className=" text-lg sm:text-xl p-3    ">{blog.intro}</p>
      <div className="flex justify-center py-3 border-b-[10px] border-white">
        <button
          className="btn button"
          onClick={() =>
            navigate(`/blogs/${blog.id}`, { state: { blogData: blog } })
          }
        >
          Read More
        </button>
      </div>
    </div>
  );
};

BlogCard.propTypes = {
  blog: PropTypes.object,
};

export default BlogCard;
