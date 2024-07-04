import PropTypes from "prop-types";
import { useContext } from "react";
import { MdBloodtype } from "react-icons/md";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { authContext } from "../Authentication/AuthProvider";

const Navbar = () => {
  const { user, logout } = useContext(authContext);
  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <NavLink to={"/DonoReqs"}>Donation Requests</NavLink>
      </li>
      <li>
        <NavLink to={"/blogs"}>Blogs</NavLink>
      </li>
    </>
  );

  return (
    <div className=" bg-crimson">
      <div className="max-w-[1280px] mx-auto navbar text-white justify-between mb-5 ">
        <div className="navbar-start w-auto">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  bg-crimson text-white text-lg  mt-3 z-[1] p-2 shadow rounded-box w-52"
            >
              {links}
            </ul>
          </div>
          <Link to={"/"}>
            {" "}
            <button className="btn btn-ghost gap-0 text-xl ">
              <span className="text-4xl">
                <MdBloodtype />
              </span>
              <span>BloodSpring</span>
            </button>
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu  menu-horizontal  px-1">{links}</ul>
        </div>
        <div className="navbar-end w-auto">
          {user ? (
            <div className="dropdown dropdown-end">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <img src={user.photoURL} />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content rounded-box w-52 bg-crimson"
              >
                <li className="">
                  <Link to={"/dashboard"}>Dashboard</Link>
                </li>
                <li>
                  <a onClick={() => logout()}>Logout</a>
                </li>
              </ul>
            </div>
          ) : (
            <div className="flex gap-1 items-center justify-center">
              <button onClick={() => navigate("/login")} className="btn button">
                LogIn
              </button>
              <button
                onClick={() => navigate("/register")}
                className="btn button"
              >
                SignUp
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {};

export default Navbar;
