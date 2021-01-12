import Career2 from "../images/home_career_2.svg";
import React from "react";
import { Link } from "react-router-dom";

export default function Connect() {
  return (
    <div className="flex justify-around lg:mx-auto items-center lg:pt-12 py-20 bg-paleBlue">
      <div className="flex xl:flex-row flex-col xl:justify-between justify-between lg:ml-4">
        <div className="xl:mt-0 leading-relaxed  md:mx-0 w-3/4 flex flex-col items-center">
          <h1 className="text-darkerBlue font-bold xl:text-4xl text-lg xl:w-2/3">
            {"Volunteering In Kurdistan"}
          </h1>
          <h6 className="text-darkerBlue xl:mt-8 mt-5  xl:text-base text-xs xl:w-1/2">
            {
              "Career Building is a place for undergradaute students of Kurdistan, where you can find a volunteering work, gain experience and start the journey of building your career."
            }
          </h6>
          <div>
            <Link>
              <button
                className=" bg-paleYellow text-darkerBlue w-20 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none m-6 "
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                {"Join"}
              </button>
            </Link>
          </div>
         
          
        
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
