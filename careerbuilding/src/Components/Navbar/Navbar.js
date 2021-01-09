import logo from "../images/goal.svg";

import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  //   const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-4 lg:py-6 py-4 navbar-expand-lg">
        <div className="w-1/5 flex">
          <Link to="./">
            <img src={logo} className="w-16 h-16" alt="logo" />
          </Link>
        </div>
        <div className="flex justify-around ">
          <Link to="./" className="px-4">
            <p className="lg:px-4 border-b hover:border-paleYellow">{"Home"}</p>
          </Link>
          <Link to="./lol" className="px-4">
            <p className="lg:px-4 border-b hover:border-paleYellow">
              {"Vacancies"}
            </p>
          </Link>
          <Link to="./" className="px-4">
            <p className="lg:px-4 border-b hover:border-paleYellow">
              {"Contact Us"}
            </p>
          </Link>
          <Link to="./" className="px-4">
            <p className="lg:px-4 border-b hover:border-paleYellow">
              {"About Us"}
            </p>
          </Link>
        </div>
        <div className="flex justify-around w-1/6">
          <Link>
            <button
              className=" bg-darkBlue text-white w-24 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              style={{ transition: "all .15s ease" }}
            >
              {"Join"}
            </button>
          </Link>
          <Link>
            <button
              className=" bg-darkerBlue text-white w-24 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
              type="button"
              style={{ transition: "all .15s ease" }}
            >
              {"Login"}
            </button>
          </Link>
        </div>
      </nav>
    </>
  );
}
