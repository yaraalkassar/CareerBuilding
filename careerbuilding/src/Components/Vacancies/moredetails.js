import React from "react";
import AwroSoft from "../images/AwroSoft.png";
function moredetails() {
  return (
    <div>
      <div className=" font-bold text-2xl text-darkerBlue pt-8">
        <div className="flex justify-center items-center mt-2 mb-4">
          <h1 className="md:w-1/6 border-b-8 border-paleBlue"> APPLY</h1>
        </div>
      </div>

      <div className=" flex justify-center items-center py-2 flex flex-wrap md:flex-nowrap ">
        <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col ">
          <div className="flex justify-center items-center">
            <img src={AwroSoft} className="w-20 h-20" alt="AwroSoft" />
          </div>
          <span className="font-semibold title-font text-gray-700">
            AWRO SOFT COMPANY
          </span>
          <span className="mt-1 text-gray-500 text-sm">15 Jan 2021</span>
        </div>
      </div>

      <form>
        <div className="bg-paleBlue px-2 pt-6 pb-8 mb-4 flex flex-col my-2 ">
          <div className="md:flex justify-between mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-darkerBlue text-s font-bold mb-2"
                for="job-name"
              >
                Job Name:
              </label>
              <p className="text-m  text-darkerBlue">Social Media Specialist</p>
            </div>

            <div className="md:w-2/5 px-3 ">
              <label
                className="block uppercase tracking-wide text-darkerBlue text-s font-bold mb-2"
                for="job-description"
              >
                Job Description:
              </label>
              <p className="text-m  text-darkerBlue">
                A Social Media Specialist is responsible for creating and
                administering content on all social media platforms, such as
                Facebook, Instagram, and Twitter, to build an audience and
                ensure customer engagement. The Specialist may also monitor site
                metrics, respond to reader comments, and oversee creative
                design.
              </p>
            </div>
          </div>

          <div className=" md:flex justify-between mb-6">
            <div className="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                className="block uppercase tracking-wide text-darkerBlue text-s font-bold mb-2"
                for="Requirements"
              >
                Requirements:
              </label>
              <div className="">
                <p className="text-m  text-darkerBlue">
                  1- Excellent consulting, writing, editing (photo/video/text),
                  presentation and communication skills.
                </p>
                <br />
                <p className="text-m  text-darkerBlue">
                  {" "}
                  2- Fluency in English, Kurdish and Arabic.{" "}
                </p>

                <br />
                <p className=" text-m  text-darkerBlue">
                  {" "}
                  3- Positive attitude, detail and customer oriented with good
                  multitasking and organisational ability{" "}
                </p>
              </div>
            </div>

            <div className="md:w-2/5 px-3">
              <label
                className="block uppercase tracking-wide text-darkerBlue text-s font-bold mb-2"
                for="Responsibilities"
              >
                Responsibilities:
              </label>
              <p className="text-m  text-darkerBlue">
                1- Build and execute social media strategy through competitive
                research, platform determination, benchmarking, messaging and
                audience identification.
              </p>
              <br />
              <p className="text-m  text-darkerBlue">
                {" "}
                2- Set up and optimize company pages within each platform to
                increase the visibility of company’s social content.{" "}
              </p>

              <br />
              <p className=" text-m  text-darkerBlue">
                {" "}
                3- Moderate all user-generated content in line with the
                moderation policy for each community{" "}
              </p>
            </div>
          </div>

          <div>
            <label
              for="job-type "
              className="block uppercase tracking-wide text-darkerBlue text-s font-bold mb-2"
            >
              Job Type:
            </label>
            <div className="text-center text-darkerBlue ">
              <p> Part-Time</p>
            </div>
          </div>

          
          <div className="block uppercase tracking-wide text-darkerBlue text-s font-bold  py-8 pr-80 flex w-1/2">
           <div><label>
              upload CV:
              <br />
            </label>
            <input
              className="w-full  bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkerBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
              id="uploadcv"
              type="file"
            ></input></div> 
            <button className=" mt-5 flex mx-auto text-darkerBlue font-bold bg-paleYellow border-0 py-2 px-8 focus:outline-none hover:bg-dakBlue rounded text-lg">
              APPLY
            </button>
          </div>
        </div>
        
      </form>
    </div>
  );
}

export default moredetails;
