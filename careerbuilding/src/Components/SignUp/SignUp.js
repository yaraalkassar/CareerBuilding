import React from "react";
import { Link } from "react-router-dom";
import "./toggleStyle.css";
const SignUp = () => {
  return (
    <>
      <section className="text-gray-600 body-font ">
        <div className="container px-5 py-16 mx-auto flex flex-wrap items-center justify-center">
          <div className="lg:w-1/4 md:w-1/2 bg-paleBlue rounded-lg p-8 flex flex-col  w-full mt-10 md:mt-0">
            <h2 className="text-gray-900 text-lg font-medium title-font mb-5">
              Sign Up
            </h2>

            <div className="flex flex-col items-start mb-4">
              <label for="email" className="leading-7 text-sm text-gray-600">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="w-full bg-white rounded border border-gray-300 focus:border-darkerBlue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="flex flex-col items-start mb-4">
              <label for="password" className="leading-7 text-sm text-gray-600">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="w-full bg-white rounded border border-gray-300 focus:border-darkerBlue text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              />
            </div>
            <div className="flex items-center justify-center w-full mb-8 mt-8 text-sm">
              <label
                htmlFor="toogleA"
                className="flex items-center cursor-pointer"
              >
                <div className="mr-3 text-darkP font-medium">Student</div>
                <div className="relative">
                  <input id="toogleA" type="checkbox" className="hidden" />
                  <div className="toggle__line w-8 h-3 bg-white rounded-full shadow-inner"></div>
                  <div className="toggle__dot absolute w-5 h-5 bg-darkerBlue rounded-full shadow "></div>
                </div>
                <div className="ml-3 text-darkP font-medium">
                  Business Owner
                </div>
              </label>
            </div>
            <button className="text-white bg-darkBlue border-0 py-2 px-8 focus:outline-none hover:bg-darkerBlue rounded text-lg">
              Sign Up
            </button>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
