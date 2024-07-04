import {
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import PropTypes from "prop-types";
import { createContext, useEffect, useState } from "react";
import auth from "./firebase.config";
import { myAxios } from "../Axios.config";

export const authContext = createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (cUser) => {
      setUser(cUser);
      if (cUser) {
        const userInfo = { email: cUser.email };
        myAxios.post("/jwt", userInfo).then((res) => {
          // console.log(res.data);
          if (res.data.token) {
            localStorage.setItem("access-token", res.data.token);
            console.log("token has been set");
          }
        });
      } else {
        localStorage.removeItem("access-token");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  //   gmail login setup :
  const googleProvider = new GoogleAuthProvider();
  const googleLogin = () => {
    return signInWithPopup(auth, googleProvider);
  };

  //   email and password sign up setup:
  const register = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  //   email and password login setup:
  const login = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  //   log out setup:
  const logout = () => {
    return signOut(auth);
  };

  // update profile setup
  const update = (name, imageURL) => {
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: imageURL,
    });
  };

  const values = { user, googleLogin, register, login, logout, update };

  return <authContext.Provider value={values}>{children}</authContext.Provider>;
};

AuthProvider.propTypes = {
  children: PropTypes.node,
};

export default AuthProvider;
