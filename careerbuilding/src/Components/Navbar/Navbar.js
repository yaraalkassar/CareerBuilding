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
            <img src={logo} className="w-16 h-16" alt="logo" />
          </Link>
        </div>
      </nav>
    </>
  );
}
