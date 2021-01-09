import React, { useState } from "react";
import { Link } from "react-router-dom";
export default function Navbar() {
  //   const [navbarOpen, setNavbarOpen] = useState(false);

  return (
    <>
      <nav className="relative flex flex-wrap items-center justify-between px-2 lg:py-6 py-4 navbar-expand-lg bg-beige text-darkP text-sm">
        <div>
          <Link to="./">
            <img src="../images/goal.svg" alt="logo" />
          </Link>
        </div>
      </nav>
    </>
  );
}
