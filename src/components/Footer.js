import React from 'react';
import { NavLink } from 'react-router-dom';
import achieve_logo from '../img/achieve_logo_02.png';

const Footer = () => {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav
          className="-mx-5 -my-2 flex flex-wrap justify-center"
          aria-label="Footer"
        >
          <div className="px-5 py-2">
            <NavLink
              to="/"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              Home
            </NavLink>
          </div>

          <div className="px-5 py-2">
            <NavLink
              to="/takemake"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              Take&amp;Make
            </NavLink>
          </div>

          <div className="px-5 py-2">
            <NavLink
              to="/oyo"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              OYO
            </NavLink>
          </div>

          <div className="px-5 py-2">
            <NavLink
              to="/code"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              Code
            </NavLink>
          </div>

          <div className="px-5 py-2">
            <NavLink
              to="/give"
              className="text-base text-gray-500 hover:text-gray-900"
            >
              Give
            </NavLink>
          </div>
        </nav>
        <img className="w-32 mx-auto" src={achieve_logo} alt="logo" />
        <p className="mt-8 text-center text-base text-gray-400">
          &copy; 2021 Maker Madness. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
