import PropTypes from "prop-types";
import { MdBloodtype } from "react-icons/md";
import { FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className=" bg-crimson">
      <div className="footer max-w-[1280px] mx-auto flex flex-col sm:flex-row p-10 text-white text-center items-center justify-center sm:justify-between  ">
        <aside className="flex flex-col items-center md:items-start">
          <span className="text-[80px] self-center">
            <MdBloodtype />
          </span>

          <p>BloodSpring Industries Ltd.</p>
          <div className=" flex flex-row flex-nowrap gap-7 mt-2 text-3xl self-center">
            <FaFacebook />
            <FaXTwitter />
            <FaLinkedin />
          </div>
        </aside>
        <nav className="flex flex-col items-center md:items-start">
          <h6 className="footer-title">Services</h6>
          <a className="link link-hover">Branding</a>
          <a className="link link-hover">Design</a>
          <a className="link link-hover">Marketing</a>
          <a className="link link-hover">Advertisement</a>
        </nav>
        <nav className="flex flex-col items-center md:items-start">
          <h6 className="footer-title">Company</h6>
          <a className="link link-hover">About us</a>
          <a className="link link-hover">Contact</a>
          <a className="link link-hover">Jobs</a>
          <a className="link link-hover">Press kit</a>
        </nav>
        <nav className="flex flex-col items-center md:items-start">
          <h6 className="footer-title">Legal</h6>
          <a className="link link-hover">Terms of use</a>
          <a className="link link-hover">Privacy policy</a>
          <a className="link link-hover">Cookie policy</a>
        </nav>
      </div>
      <p className="text-center text-lg text-white py-4 border-t-2">&copy; 2024 BloodSpring. All rights reserved.</p>
    </footer>
  );
};

Footer.propTypes = {};

export default Footer;
