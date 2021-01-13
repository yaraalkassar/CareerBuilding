import logo from "../images/goal.svg";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link, useHistory } from "react-router-dom";
export default function Navbar() {
  const [navbarOpen, setNavbarOpen] = useState(false);
  // let history = useHistory();

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between lg:px-12 lg:py-6 py-4 navbar-expand-lg overflow-hidden">
        <div className="w-full relative flex items-center justify-between lg:w-1/5 lg:static lg:block lg:justify-start">
          <Link to="/">
            <img
              src={logo}
              className="w-16 md:w-20 lg:ml-0 md:ml-12 ml-8
                 cursor-pointer"
              alt="logo"
            />
          </Link>
          <button
            className={
              "text-darkerBlue cursor-pointer text-xl leading-none mr-4 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            }
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FiMenu className="text-2xl" />
          </button>
        </div>
        <div
          className={
            " lg:flex flex-grow items-center justify-around pt-4" +
            (navbarOpen ? " flex flex-col" : " hidden")
          }
          id="example-navbar-danger"
        >
          <div className="flex flex-col lg:flex-row">
            <Link to="./" className="px-4 py-4 lg:py-0">
              <p className="lg:px-4 border-b hover:border-paleYellow">
                {"Home"}
              </p>
            </Link>
            <Link to="./Vacancy" className="px-4 py-4 lg:py-0">
              <p className="lg:px-4 border-b hover:border-paleYellow">
                {"Vacancies"}
              </p>
            </Link>
            <Link to="./Contact" className="px-4 py-4 lg:py-0">
              <p className="lg:px-4 border-b hover:border-paleYellow">
                {"Contact Us"}
              </p>
            </Link>
            <Link to="./About" className="px-4 py-4 lg:py-0">
              <p className="lg:px-4 border-b hover:border-paleYellow">
                {"About Us"}
              </p>
            </Link>
          </div>
          <div className="flex justify-around w-1/6 py-4 md:pt-0 space-x-4">
            <Link to="./Join">
              <button
                className=" bg-darkBlue text-white lg:w-24 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                {"Join"}
              </button>
            </Link>
            <Link to="./Login">
              <button
                className=" bg-darkerBlue text-white lg:w-24 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                style={{ transition: "all .15s ease" }}
              >
                {"Login"}
              </button>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
