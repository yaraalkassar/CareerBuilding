import React from "react";
const vacancies = () => {
  return (
    <div className=" font-bold text-2xl text-darkerBlue pt-8">
      <div className="flex justify-center items-center mt-2 mb-4">
        <h1 className="w-1/4 border-b-8 border-paleYellow">
          {" "}
          Posting Vacancies
        </h1>
      </div>
      <form>
        <div className="bg-white px-8 pt-6 pb-8 mb-4 flex flex-col my-2">
          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="job-name"
              >
                Job Name:
              </label>
              <input
                class="w-full md:w-3/4 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkerBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                id="job-name"
                type="text"
              ></input>
            </div>

            <div class="md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="job-description"
              >
                Job Description:
              </label>
              <input
                class="w-full md:w-3/4 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkerBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                id="job-description"
                type="text"
              ></input>
            </div>
          </div>

          <div class="-mx-3 md:flex mb-6">
            <div class="md:w-1/2 px-3 mb-6 md:mb-0">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="Requirements"
              >
                Requirements:
              </label>
              <input
                class="w-full md:w-3/4 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkerBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                id="Requirements"
                type="text"
              ></input>
            </div>

            <div class="md:w-1/2 px-3">
              <label
                class="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2"
                for="Responsibilities"
              >
                Responsibilities:
              </label>
              <input
                class="w-full md:w-3/4 bg-gray-100 bg-opacity-50 rounded border border-gray-300 focus:border-darkerBlue focus:bg-white focus:ring-2 focus:ring-indigo-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
                id="Responsibilities"
                type="text"
              ></input>
            </div>
          </div>

          <div>
            <label for="job-type " className="text-xs">
              Job Type:
            </label>
            <div>
              <select id="job-type" className="text-xs">
                <option>Full-Time</option>
                <option>Part-Time</option>
              </select>
            </div>
          </div>
          <button className=" mt-5 flex mx-auto text-darkerBlue font-bold bg-paleYellow border-0 py-2 px-8 focus:outline-none hover:bg-dakBlue rounded text-lg">
            Post
          </button>
        </div>
      </form>
    </div>
  );
};

export default vacancies;
