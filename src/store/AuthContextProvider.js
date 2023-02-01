import React, { useState, useEffect } from "react";
import AuthContext from "./auth-context";

const AuthContextProvider = (props) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  useEffect(() => {
    const storeUserInfo = localStorage.getItem("isLoggedIn");
    if (storeUserInfo === "1") {
      setIsLoggedIn(true);
    }
  }, []);

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "1");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
    <>
      <AuthContext.Provider
        value={{
          isLoggedIn: isLoggedIn,
          onLogin: loginHandler,
          onLogout: logoutHandler,
        }}
      >
        {props.children}
      </AuthContext.Provider>
    </>
  );
};

export default AuthContextProvider;
