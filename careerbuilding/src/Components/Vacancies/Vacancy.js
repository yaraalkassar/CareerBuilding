import React from "react";
import NYN from "../images/NYN.jpg";
function Vacancy() {
  return (
    <div>
      <div className=" font-bold text-2xl text-darkerBlue pt-8">
        <div className="flex justify-center items-center mt-2 mb-4">
          <h1 className="md:w-1/6 border-b-8 border-paleBlue"> APPLY</h1>
        </div>
      </div>

      <div className=" flex justify-center items-center py-2 flex-wrap md:flex-nowrap ">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col ">
          <div className="flex justify-center items-center">
            <img src={NYN} className="w-20 h-20" alt="NYN" />
          </div>
          <span className="font-semibold title-font text-gray-700">
            NISHTMAN YOUTH NETWORK
          </span>
          <span className="mt-1 text-gray-500 text-sm">20 Jan 2021</span>
        </div>
      </div>

      <div className="bg-paleBlue px-4 pt-6 pb-8 flex flex-col justify-center items-center">
        <div className="md:flex justify-between mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase  text-darkerBlue text-s font-bold mb-2"
              for="job-name"
            >
              Job Name:
            </label>
            <p className="text-m  text-darkerBlue">Marketing Strategy</p>
          </div>

          <div className="md:w-2/5 px-3 ">
            <label
              className="block uppercase  text-darkerBlue text-s font-bold mb-2"
              for="job-description"
            >
              Job Description:
            </label>
            <p className="text-m  text-darkerBlue">
              Marketing Strategist is a marketing professional who works with
              the marketing team member(s) to assure the execution of
              high-quality marketing strategies within the defined time frame.
            </p>
          </div>
        </div>

        <div className=" md:flex justify-between mb-6">
          <div className="md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase  text-darkerBlue text-s font-bold mb-2"
              for="Requirements"
            >
              Requirements:
            </label>
            <div className="">
              <p className="text-m  text-darkerBlue">
                1- Excellent communication, interpersonal and presentation
                skills.
              </p>
              <br />
              <p className="text-m  text-darkerBlue">
                2- Fluency in English and Kurdish and arabic.
              </p>

              <br />
              <p className=" text-m  text-darkerBlue">
                3- Outstanding organizational and time management skills.
              </p>
            </div>
          </div>

          <div className="md:w-2/5 px-3">
            <label
              className="block uppercase  text-darkerBlue text-s font-bold mb-2"
              for="Responsibilities"
            >
              Responsibilities:
            </label>
            <p className="text-m  text-darkerBlue">
              1- Set specific marketing goals that align with the overall
              direction and business goals.
            </p>
            <br />
            <p className="text-m  text-darkerBlue">
              2- Research market to identify new opportunities.
            </p>

            <br />
            <p className=" text-m  text-darkerBlue">
              3- Use customer feedback to ensure client satisfaction.
            </p>
          </div>
        </div>

        <div>
          <label
            for="job-type "
            className="block uppercase  text-darkerBlue text-s font-bold mb-2"
          >
            Job Type:
          </label>
          <div className="text-center text-darkerBlue ">
            <p> Full-Time</p>
          </div>
        </div>

        <div className="uppercase  text-darkerBlue text-s font-bold py-8 flex flex-col w-1/4 space-y-2">
          <div>
            <label>
              Upload CV:
              <br />
            </label>
          </div>
          <div className="flex items-center justify-center space-x-1">
            <input
              className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkerBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              id="uploadcv"
              type="file"
            ></input>

            <button className="flex mx-auto text-darkerBlue font-bold bg-paleYellow border-0 py-2 px-8 focus:outline-none hover:bg-dakBlue rounded text-lg">
              APPLY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Vacancy;
