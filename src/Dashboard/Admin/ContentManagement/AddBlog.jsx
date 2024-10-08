import { useState } from "react";
import PropTypes from "prop-types";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import { TiBatteryLow } from "react-icons/ti";
import useGetUser from "../../../Shared/CustomHooks/useGetUser";
import { Navigate } from "react-router-dom";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../Shared/CustomHooks/useAxiosSecure";

const AddBlog = () => {
  const myAxiosSecure = useAxiosSecure();
  const { data: user = {}, isPending } = useGetUser();

  const [title, setTitle] = useState("");
  const [thumbnail, setThumbnail] = useState("");
  const [value, setValue] = useState("");
  const addBlog = (e) => {
    e.preventDefault();
    const blog = {
      title: title,
      thumbnail: thumbnail,
      content: `<div>${value}</div>`,
      status: "draft",
    };
    myAxiosSecure
      .post(`/addBlog?email=${user.email}`, { blog })
      .then((res) => {
        if (res.data.insertedId) {
          Swal.fire("Blog added to database .");
        }
      })
      .catch((e) => console.log(e.message));
  };

  if (!isPending && user.role === "donor") {
    return <Navigate to={"/forbidden"}></Navigate>;
  }

  if (!isPending) {
    return (
      <div className="bg-crimson  text-white pb-5">
        <div className=" border-b-[4px] border-white mb-5 py-5 px-5 flex justify-between">
          <h1 className="text-4xl font-bold  ">Add Blog</h1>
        </div>

        <form
          onSubmit={addBlog}
          className="flex flex-col items-center max-w-[1280px]"
        >
          <div className="flex gap-1 items-center mb-5 min-w-[90%]">
            <span className="text-2xl">Title:</span>
            <input
              required
              onChange={(e) => setTitle(e.target.value)}
              value={title}
              type="text"
              placeholder="Title of the blog . . . "
              className=" p-1 w-full focus:outline-none text-black"
            />
          </div>
          <div className="flex gap-1 items-center mb-5 min-w-[90%]">
            <span className="text-2xl">Thumbnail:</span>
            <input
              required
              onChange={(e) => setThumbnail(e.target.value)}
              value={thumbnail}
              type="text"
              placeholder="Title of the blog . . . "
              className=" p-1 w-full focus:outline-none text-black"
            />
          </div>
          <div className="  mx-auto min-w-[90%] ">
            <h2 className="text-2xl bg-crimson text-white w-full mb-2">
              Content:
            </h2>
            <div className=" bg-white text-black p-1 ">
              <ReactQuill theme="snow" value={value} onChange={setValue} />
            </div>
          </div>
          <button type="submit" className="btn button h-auto mt-5 ">
            Add Blog
          </button>
        </form>
      </div>
    );
  }
};

AddBlog.propTypes = {};

export default AddBlog;
