import React from "react";
import AwroSoft from "../images/AwroSoft.png";
import  UNDP from "../images/UNDP.jpg";
import NYN from "../images/NYN.jpg";
import { Link } from "react-router-dom";
const vacanciesstudent = () => {
  return (
    <div>
      <div className=" font-bold text-2xl text-darkerBlue pt-8">
        <div className="flex justify-center items-center mt-2 mb-4">
          <h1 className="md:w-1/6 border-b-8 border-darkBlue"> Vacancies</h1>
        </div>
      </div>

      <section className="text-darkerBlue body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            <div className="justify-center items-center py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <div className="flex justify-center items-center">
                  <img src={AwroSoft} className="w-20 h-20" alt="AwroSoft" />
                </div>
                <span className="font-semibold title-font text-gray-700">
                  AWRO SOFT COMPANY
                </span>
                <span className="mt-1 text-gray-500 text-sm">15 Jan 2021</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                  Social Media Specialist
                </h2>
                <p classNmae="leading-relaxed">
                  {" "}
                  Social Media Specialists are responsible for planning,
                  implementing and monitoring the company's Social Media
                  strategy in order to increase brand awareness, improve
                  Marketing efforts and increase sales.{" "}
                </p>
                <Link to="/moredetails">
                <a className="text-darkerBlue inline-flex items-center mt-4 font-bold">
                  More Details
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                </Link>
              </div>
            </div>

            <div className="flex justify-center items-center py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <div className="flex justify-center items-center">
                  <img src={UNDP} className="w-20 h-20" alt="UNDP" />
                </div>
                <span className="font-semibold title-font text-gray-700">
                  UNDP IRAQ
                </span>
                <span className="mt-1 text-gray-500 text-sm">18 Jan 2021</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                 Assistant Manager
                </h2>
                <p className="leading-relaxed">
                  {" "}
                  An Assistant Manager supports a General Manager in the daily responsibilities 
                  required to keep a business running smoothly. 
                  Assistant Managers direct employees and ensure that work is being completed in a 
                  timely and effective manner. {" "}
                </p>
                <Link to="/moredetails2">
                <a className="text-darkerBlue inline-flex items-center mt-4 font-bold">
                  {" "}
                  More Details
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                </Link>
              </div>
            </div>

            <div className="flex justify-center items-center py-8 flex flex-wrap md:flex-nowrap">
              <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                <div className="flex justify-center items-center">
                  <img src={NYN} className="w-20 h-20" alt="NYN" />
                </div>
                <span className="font-semibold title-font text-gray-700">
                  NISHTMAN YOUTH NETWORK
                </span>
                <span className="mt-1 text-gray-500 text-sm">20 Jan 2021</span>
              </div>
              <div className="md:flex-grow">
                <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                Marketing Strategy
                </h2>
                <p className="leading-relaxed">
                  {" "}
                  Marketing strategy responsible for the comprehensive plan formulated
                    particularly for achieving the marketing objectives of the organization.
                  {" "}
                </p>
                <Link to="/moredetails3">
                <a className="text-darkerBlue inline-flex items-center mt-4 font-bold">
                  {" "}
                  More Details
                  <svg
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14"></path>
                    <path d="M12 5l7 7-7 7"></path>
                  </svg>
                </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default vacanciesstudent;
