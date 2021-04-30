import logo from "../images/goal.svg";
import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { NavLink, useHistory } from "react-router-dom";
import firebase from "../../firebase/firebase";

export default function ProfileNavbar() {
  let history = useHistory();
  const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between lg:px-12 lg:py-6 py-4 navbar-expand-lg overflow-hidden">
        <div className="w-full relative flex items-center justify-between lg:w-1/5 lg:static lg:block lg:justify-start">
          <NavLink to="/">
            <div className="flex justify-center items-end">
              <img
                src={logo}
                className="w-16 md:w-20 lg:ml-0 md:ml-12 ml-8
                 cursor-pointer"
                alt="logo"
              />
              <h1 className="font-bold text-darkerBlue text-xl italic w-1/2">
                Career Building
              </h1>
            </div>
          </NavLink>

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
            <NavLink
              exact
              to="/"
              className="px-4 mx-4 py-4 lg:py-0 border-b hover:border-paleYellow"
              activeClassName="border-paleYellow border-b"
            >
              <p className="lg:px-4 ">{"Home"}</p>
            </NavLink>
            <NavLink
              exact
              to="/Profile"
              className="px-4 mx-4 py-4 lg:py-0 border-b hover:border-paleYellow"
              activeClassName="border-paleYellow border-b"
            >
              <p className="lg:px-4 ">{"Profile"}</p>
            </NavLink>
            <NavLink
              to="/PostVacancy"
              className="px-4 mx-4 py-4 lg:py-0 border-b hover:border-paleYellow"
              activeClassName="border-paleYellow border-b"
            >
              <p className="lg:px-4 ">{"Post A Vacancy"}</p>
            </NavLink>
            <NavLink
              to="/MyVacancies"
              className="px-4 mx-4 py-4 lg:py-0 border-b hover:border-paleYellow"
              activeClassName="border-paleYellow border-b"
            >
              <p className="lg:px-4 ">{"My Vacancies"}</p>
            </NavLink>
            <NavLink
              to="/Applications"
              className="px-4 mx-4 py-4 lg:py-0 border-b hover:border-paleYellow"
              activeClassName="border-paleYellow border-b"
            >
              <p className="lg:px-4 ">{"Applications"}</p>
            </NavLink>
          </div>
          <div className={`flex justify-around w-1/6 py-4 md:pt-0  `}>
            <NavLink to="/">
              <button
                className=" bg-darkBlue text-white lg:w-full font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1"
                type="button"
                onClick={() => {
                  logout();
                }}
                style={{ transition: "all .15s ease" }}
              >
                {"Log Out"}
              </button>
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );

  async function logout() {
    await firebase.logout();
    history.push("/login");
  }
}
