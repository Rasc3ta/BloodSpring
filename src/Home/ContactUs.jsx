import PropTypes from "prop-types";
import { FaPhone } from "react-icons/fa";

const ContactUs = () => {
  return (
    <div className="my-10 max-w-[1280px] w-[90vw] mx-auto ">
      <form className="bg-crimson p-10  rounded-xl">
        <h1 className="text-3xl font-bold text-white mb-5 ">Contact Us </h1>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl  text-white">Email :</span>
          </label>
          <input
            type="email"
            placeholder="your email"
            className="text-2xl px-[10px] py-[5px] rounded-[5px] text-crimson focus:outline-none"
            required
          />
        </div>
        <div className="form-control">
          <label className="label">
            <span className="label-text text-xl  text-white">
              Description :
            </span>
          </label>
          <textarea
            placeholder="What you want to say ..."
            className="text-xl px-[10px] py-[5px] rounded-[5px] text-crimson focus:outline-none resize-none"
            required
          ></textarea>
        </div>
        <button className="btn button mt-2 text-xl">Submit</button>
        <h1 className="text-xl flex flex-nowrap items-center gap-2 text-white mt-5">
          <FaPhone /> <span>: +880 1777-888999</span>
        </h1>
      </form>
      
    </div>
  );
};

ContactUs.propTypes = {};

export default ContactUs;
