import logo from '../images/goal.svg';

import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  //   const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-4 lg:py-6 py-4 navbar-expand-lg">
        <div>
          <Link to="./">
            <img src={logo} className="" alt="logo" />
          </Link>
        </div>
        <div className="flex justify-between content-between">
        <Link to="./"><p className="px-2 ">{"Home"}</p></Link>
        <Link to="./"><p className="px-2 ">{"Vacancies"}</p></Link>
        <Link to="./"><p className="px-2 ">{"Contact Us"}</p></Link>
        <Link to="./"><p className="px-2 ">{"About Us"}</p></Link>
        </div>
        <div>
        <Link>
        <button className="bg-black text-white px-2 py-4">
        {"Join"}
        </button>
        </Link>
        </div>
      </nav>
    </>
  );
}
