import PropTypes from "prop-types";
import { useContext, useState } from "react";
import { MdBloodtype } from "react-icons/md";
import { Link, Outlet } from "react-router-dom";
import { authContext } from "../Authentication/AuthProvider";

const Dashboard = () => {
  const { user, logout } = useContext(authContext);



  const links = (
    <>
      <Link to={"/"}>
        <li className="flex justify-center my-5  flex-col">
          <div className=" flex flex-nowrap flex-row items-center justify-center py-4 border-y-[4px] text-white">
            {" "}
            <button className="btn btn-ghost gap-0 text-xl ">
              <span className="text-4xl">
                <MdBloodtype />
              </span>
              <span>BloodSpring</span>
            </button>
          </div>
          <img
            src={user.photoURL}
            className="size-[90px] mt-10 mx-auto  rounded-full "
          />
        </li>
      </Link>
      <Link to={"/dashboard/profile"}>
        <li className="text-white text-xl border-[4px] flex justify-center border-crimson hover:bg-[rgba(0,0,0,0.1)] active:border-white transition-colors duration-200 p-2 rounded-xl px-4">
          Profile
        </li>
      </Link>
      <Link to={"/dashboard"}>
        <li className="text-white text-xl border-[4px] flex justify-center border-crimson hover:bg-[rgba(0,0,0,0.1)] active:border-white transition-colors duration-200 p-2 rounded-xl px-4">
          Home
        </li>
      </Link>
      <Link to={"/dashboard/create-donation-request"}>
        <li className="text-white text-xl border-[4px] flex justify-center border-crimson hover:bg-[rgba(0,0,0,0.1)] active:border-white transition-colors duration-200 p-2 rounded-xl px-4">
          Create Donation Request
        </li>
      </Link>
      <Link to={"/dashboard/my-donation-requests"}>
        <li className="text-white text-xl border-[4px] flex justify-center border-crimson hover:bg-[rgba(0,0,0,0.1)] active:border-white transition-colors duration-200 p-2 rounded-xl px-4">
          My Donation Requests
        </li>
      </Link>
      <li
        onClick={() => logout()}
        className="text-white text-xl border-[4px] flex justify-center border-crimson hover:bg-[rgba(0,0,0,0.1)] active:border-white transition-colors duration-200 p-2 rounded-xl px-4 hover:cursor-pointer"
      >
        Log out
      </li>
    </>
  );

  return (
    <div className="drawer min-w-[430px]">
      <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col">
        {/* Navbar */}
        <div className="w-full navbar bg-crimson text-white lg:hidden border-b-[4px] border-white">
          <div className="flex-none lg:hidden">
            <label
              htmlFor="my-drawer-3"
              aria-label="open sidebar"
              className="btn btn-square btn-ghost"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-6 h-6 stroke-current"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
          </div>
          <Link to={"/"}>
            {" "}
            <button className="btn btn-ghost gap-0 text-2xl ">
              <span className="text-4xl">
                <MdBloodtype />
              </span>
              <span>BloodSpring</span>
            </button>
          </Link>
        </div>
        {/* Page content here */}
        <div className="lg:pl-[4px] ">
          <Outlet></Outlet>
        </div>
      </div>
      <div className="drawer-side lg:hidden">
        <label
          htmlFor="my-drawer-3"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className=" p-4 w-[300px] min-h-full bg-crimson flex flex-col gap-2 ">
          {/* Sidebar content here */}
          {links}
        </ul>
      </div>
      <div className="w-[300px] bg-crimson min-h-screen h-full hidden lg:block border-r-[4px] border-white">
        <ul className=" p-4 w-[300px] h-full bg-crimson flex flex-col gap-2 ">
          {/* Sidebar content here */}
          {links}
        </ul>
      </div>
    </div>
  );
};

Dashboard.propTypes = {};

export default Dashboard;
