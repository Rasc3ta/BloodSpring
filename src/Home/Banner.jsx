import React from "react";
import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

const Banner = () => {
  const navigate = useNavigate();

  return (
    <div className=" w-[90vw] max-w-[1280px] p-6 lg:p-10 bg-[url('https://i.ibb.co/SdpXKZL/banner.jpg')] bg-cover bg-no-repeat mx-auto flex flex-col gap-4 bg-crimson text-white rounded-xl">
      <div className="bg-[rgb(220,20,60,0.45)] backdrop-blur-sm p-5 rounded-xl">
        <h1 className="text-2xl font-bold">
          {" "}
          Donate Blood and Be a Hero Today!
        </h1>
        <p className="text-lg max-w-[600px]">
          Your blood donation can save lives and make a difference in your
          community. Join us and provide a steady supply of blood for those in
          need. Whether you’re a first-time donor or a lifelong supporter, your
          contribution matters.
        </p>
        <div className="flex gap-2 mt-3">
          <button onClick={() => navigate("/register")} className="btn button">
            Join as a donor
          </button>
          <button onClick={() => navigate("/search")} className="btn button">
            Search donors
          </button>
        </div>
      </div>
    </div>
  );
};

Banner.propTypes = {};

export default Banner;
