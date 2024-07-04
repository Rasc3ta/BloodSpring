import { useContext } from "react";
import PropTypes from "prop-types";
import { authContext } from "../Authentication/AuthProvider";
import { Navigate, useLocation, useNavigate } from "react-router-dom";

const PrivateRouteProvider = ({ children }) => {
  const { user } = useContext(authContext);
  const path = useLocation().pathname;

  if (!user) {
    return <Navigate to={"/login"} state={path}></Navigate>;
  }

  return <>{children}</>;
};

PrivateRouteProvider.propTypes = {
  children: PropTypes.node,
};

export default PrivateRouteProvider;
