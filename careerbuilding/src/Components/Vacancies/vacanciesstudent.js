import React from "react";
import AwroSoft from "../images/AwroSoft.png";
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
                <p className="leading-relaxed">
                  {" "}
                  Social Media Specialists are responsible for planning,
                  implementing and monitoring the company's Social Media
                  strategy in order to increase brand awareness, improve
                  Marketing efforts and increase sales.{" "}
                </p>
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
              </div>
            </div>

            <div className=" justify-center items-center py-8 flex flex-wrap md:flex-nowrap">
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
                <p className="leading-relaxed">
                  {" "}
                  Social Media Specialists are responsible for planning,
                  implementing and monitoring the company's Social Media
                  strategy in order to increase brand awareness, improve
                  Marketing efforts and increase sales.{" "}
                </p>
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
              </div>
            </div>

            <div className="flex justify-center items-center py-8 flex flex-wrap md:flex-nowrap">
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
                <p className="leading-relaxed">
                  {" "}
                  Social Media Specialists are responsible for planning,
                  implementing and monitoring the company's Social Media
                  strategy in order to increase brand awareness, improve
                  Marketing efforts and increase sales.{" "}
                </p>
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
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default vacanciesstudent;
