import React, { useState } from "react";
import { Header } from "./Header";

export const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);

  const toggleSignUpForm = () => {
    setIsSignIn((prev) => !prev);
  };

  console.log(isSignIn);
  return (
    <div>
      <Header />
      <div>
        <img
          className="absolute "
          src="https://assets.nflxext.com/ffe/siteui/vlv3/9390f6f6-cf80-4bc9-8981-8c2cc8adf98a/web/IN-en-20250421-TRIFECTA-perspective_dc5bcfdf-88a5-4972-8ffe-b28ff942f76e_large.jpg"
          alt="background-image"
        />
      </div>
      <form
        action="submit"
        className="absolute p-12 bg-black flex flex-col w-3/12 my-36 mx-auto right-0 left-0 text-white rounded-lg bg-opacity-80"
      >
        <h1 className="font-bold text-2xl py-4 w-10/12">
          {isSignIn ? " Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
            type="text"
            placeholder="Name"
            className="p-3 my-4 w-full  bg-gray-800 "
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-3 my-4 w-ful bg-gray-800 border-white"
        />
        <input
          type="password"
          placeholder="Password"
          className="p-3 my-4 w-full  bg-gray-800 "
        />
        <button className="p-3 my-6 bg-red-700 w-full">
          {isSignIn ? " Sign In" : "Sign Up"}
        </button>
        <div className="flex">
          <p
            className="inline-block font-bold cursor-pointer"
            onClick={toggleSignUpForm}
          >
            {isSignIn
              ? "New to Netfix?Sign up now"
              : "Already a user?Sign in now..."}
          </p>
        </div>
      </form>
    </div>
  );
};
