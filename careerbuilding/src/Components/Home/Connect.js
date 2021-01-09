import Career2 from "../images/home_career_2.svg";
import React from "react";
import { Link } from "react-router-dom";

export default function Connect() {
  return (
    <div className="flex justify-around lg:mx-auto items-center lg:mt-12 py-20">
      <div className="flex xl:flex-row flex-col xl:justify-evenly justify-between lg:ml-4">
        <div className="xl:mt-0 leading-relaxed mx-auto md:mx-0 w-3/4">
          <h1 className="text-darkP font-bold xl:text-4xl text-lg xl:w-2/3">
            {"blah"}
          </h1>
          <h6 className="text-darkP xl:mt-8 mt-5 xl:text-base text-xs xl:w-1/2">
            {"blah"}
          </h6>
          <Link>
            <button
              className=" bg-darkBlue text-white w-24 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              style={{ transition: "all .15s ease" }}
            >
              {"Join"}
            </button>
          </Link>
        </div>
      </div>
      <img
        className="hidden lg:block w-2/6 mr-16"
        src={Career2}
        alt="Career Building"
      />
    </div>
  );
}
