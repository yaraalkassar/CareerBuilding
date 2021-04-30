import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import firebase from "../../firebase/firebase";
const VacanciesStudent = () => {
  const [vacanciesList, setVacanciesList] = useState([]);

  useEffect(() => {
    getVacanies();
  }, []);

  async function getVacanies() {
    try {
      await firebase.getVacanies(setVacanciesList);
    } catch {
      alert("not working");
    }
  }
  return (
    <div>
      <div className=" font-bold text-2xl text-darkerBlue pt-8">
        <div className="flex justify-center items-center mt-2 mb-4">
          <h1 className="md:w-1/6 border-b-8 border-darkBlue"> Vacancies</h1>
        </div>
      </div>
      <div class="pt-2 relative mx-auto text-gray-600">
        <input
          class="border-2 border-gray-300 bg-white h-10 px-5 pr-16 rounded-lg text-sm focus:outline-none"
          type="search"
          name="search"
          placeholder="Search"
        />
        <button type="submit" class="absolute right-0 top-0 mt-5 mr-4">
          <svg
            class="text-gray-600 h-4 w-4 fill-current"
            xmlns="http://www.w3.org/2000/svg"
            version="1.1"
            id="Capa_1"
            x="0px"
            y="0px"
            viewBox="0 0 56.966 56.966"
            style={{ enableBackground: "new 0 0 56.966 56.966" }}
            width="512px"
            height="512px"
          ></svg>
        </button>
      </div>
      <section className="text-darkerBlue body-font overflow-hidden">
        <div className="container px-5 py-24 mx-auto">
          <div className="-my-8 divide-y-2 divide-gray-100">
            {vacanciesList.map((vacancy, key) => {
              return (
                <div
                  className="justify-center items-center py-8 flex flex-wrap md:flex-nowrap"
                  key={key}
                >
                  <div className="md:w-64 md:mb-0 mb-6 flex-shrink-0 flex flex-col">
                    <div className="flex justify-center items-center">
                      <img
                        src={vacancy.authorAvatar}
                        className="w-20 h-20"
                        alt={vacancy.authorName}
                      />
                    </div>
                    <span className="font-semibold title-font text-gray-700">
                      {vacancy.authorName}
                    </span>
                    <span className="mt-1 text-gray-500 text-sm">
                      {vacancy.createdAt}
                    </span>
                  </div>
                  <div className="md:flex-grow">
                    <h2 className="text-2xl font-medium text-gray-900 title-font mb-2">
                      {vacancy.j_name}
                    </h2>
                    <p className="leading-relaxed">{vacancy.j_desc}</p>
                    <Link to={`/Vacancies/${vacancy.v_Id}`}>
                      <p className="text-darkerBlue inline-flex items-center mt-4 font-bold">
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
                      </p>
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default VacanciesStudent;
