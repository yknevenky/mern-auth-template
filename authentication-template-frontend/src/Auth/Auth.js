import React from "react";
import SignUp from "./SignUp";
import SignIn from "./SignIn"
const Auth = () => {
  return (
    <div className="container min-vh-100 d-flex align-items-center">
      <SignIn />
      {/* <SignUp /> */}
    </div>
  );
};

export default Auth;
