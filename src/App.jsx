import PropTypes from "prop-types";
import Navbar from "./Shared/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "./Shared/Footer";

const App = () => {
  return (
    <div className="min-w-[430px]  ">
      <Navbar></Navbar>
      <div className="">
        <Outlet></Outlet>
      </div>
      <Footer></Footer>
    </div>
  );
};

App.propTypes = {};

export default App;
