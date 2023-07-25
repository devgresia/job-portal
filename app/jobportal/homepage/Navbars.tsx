"use client";
import Link from "next/link";
import React, { useState } from "react";

const NavBar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleToggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="bg-red-500 sticky-navbar">
      <header className="navbar flex flex-wrap items-center justify-between bg-rebeccapurple text-white font-helvetica font-light">
        <div className="navbar__left flex items-center w-full sm:w-auto">
          <div className="navbar__logo cursor-pointer text-2xl py-3 px-4">
            <Link className="text-2xl" href={"/"}>
              YourLogo
            </Link>
          </div>
          <div className="navbar__site-name cursor-pointer py-4 px-4">
            Gresia
          </div>
        </div>
        <div className="navbar__right cursor-pointer flex items-center space-x-4 w-full sm:w-auto">
          <div
            className={`navbar__item py-4 px-4 ${
              isMenuOpen ? "block" : "hidden sm:block"
            }`}
          >
            <Link href={"/auth"}>Sign In</Link>
          </div>
          <div
            className={`navbar__item py-4 px-4 ${
              isMenuOpen ? "block" : "hidden sm:block"
            }`}
          >
            <Link href={"/auth/registration/jobseeker"}>Register</Link>
          </div>
          <div
            className={`navbar__item py-4 px-4 ${
              isMenuOpen ? "block" : "hidden sm:block"
            }`}
          >
            <Link href={"/company/adduser"}>Employer</Link>
          </div>
          {/* Mobile Menu */}
          <div className="sm:hidden">
            <button
              className="navbar__menu-btn py-4 px-4 text-white"
              onClick={handleToggleMenu}
            >
              {isMenuOpen ? "Close" : "Menu"}
            </button>
          </div>
        </div>
      </header>
    </div>
  );
};

export default NavBar;
