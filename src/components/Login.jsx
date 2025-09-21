import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignUpToggle = () => {
    setIsSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/c95abc7a-8124-4630-bb7a-3b160bdc6de3/web/IN-en-20250915-TRIFECTA-perspective_d3d87aa7-58ed-4c6b-98dc-231ed05ba675_small.jpg"
          alt="Banner"
        />
      </div>
      <form className="  w-3/12 absolute p-12 bg-black text-white my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="text-2xl">{isSignInForm ? "Sign In" : "Sign Up"}</h1>
        {!isSignInForm && (
          <input
            className="p-4 my-4 w-full bg-gray-800"
            type="text"
            placeholder="Enter Full Name"
          />
        )}
        <input
          className="p-4 my-4 w-full bg-gray-800"
          type="text"
          placeholder="Enter Email Id"
        />
        <input
          className="p-4 my-4 w-full bg-gray-800"
          type="password"
          placeholder="Password"
        />
        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>
        <p className="py-4 cursor-pointer" onClick={handleSignUpToggle}>
          {isSignInForm
            ? "New to Netflix? Sign up now"
            : "Already have account! Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
