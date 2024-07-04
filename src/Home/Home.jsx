import PropTypes from "prop-types";
import Banner from "./Banner";
import Featured from "./Featured";
import ContactUs from "./ContactUs";

const Home = (props) => {
  return (
    <div>
      <Banner></Banner>
      <Featured></Featured>
      <ContactUs> </ContactUs>
    </div>
  );
};

Home.propTypes = {};

export default Home;
