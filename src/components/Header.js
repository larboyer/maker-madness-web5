import React, { useState } from 'react';
import classNames from 'classnames';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faCode,
  faTools,
  faToolbox,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import maker_madness from '../img/maker_madness_00.png';

const Header = (props) => {
  const [menuState, setMobileMenuState] = useState(false);

  /**
   * Click handler for the mobile menu
   * Toggles the menuState
   *
   * @param {Object} e - Event object
   */
  const handleMobileMenu = (e) => {
    e.preventDefault();
    if (menuState) {
      setMobileMenuState(false);
    } else {
      setMobileMenuState(true);
    }
  };

  const mobileMenuClasses = classNames([
    'absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden',
    menuState ? null : 'hidden',
  ]);

  return (
    <div className="relative bg-white border-b-2">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <a
              href="/"
              className="logo text-yellow-600 hover:text-yellow-500 active:text-yellow-500 flex flex-row items-center space-x-2"
            >
              <span className="sr-only">Maker Madness 2021</span>
              <FontAwesomeIcon icon={faLightbulb} />
              <img src={maker_madness} className="h-6" alt="logo" />
            </a>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              onClick={handleMobileMenu}
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false"
            >
              <span className="sr-only">Open menu</span>
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <div className="relative">
              <NavLink
                to="/make"
                className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                aria-expanded="false"
              >
                <FontAwesomeIcon
                  className="flex-shrink-0 h-6 w-6 text-blue-600"
                  icon={faTools}
                />
                <span className="ml-3">Make</span>
                <svg
                  className="text-gray-400 ml-2 h-5 w-5 group-hover:text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    clipRule="evenodd"
                  />
                </svg>
              </NavLink>

              <div className={mobileMenuClasses}>
                <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                  <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                    <NavLink
                      to="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <FontAwesomeIcon
                        icon={faToolbox}
                        className="flex-shrink-0 h-6 w-6 text-blue-600"
                      />
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          Take&amp;Make
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          A bag of stuff with the QR code pointing to the
                          specific page!
                        </p>
                      </div>
                    </NavLink>

                    <NavLink
                      to="#"
                      className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                    >
                      <FontAwesomeIcon
                        icon={faPaperPlane}
                        className="flex-shrink-0 h-6 w-6 text-blue-600"
                      />
                      <div className="ml-4">
                        <p className="text-base font-medium text-gray-900">
                          OYO
                        </p>
                        <p className="mt-1 text-sm text-gray-500">
                          OnYourOwn written instructions
                        </p>
                      </div>
                    </NavLink>
                  </div>
                </div>
              </div>
            </div>

            <NavLink
              to="/code"
              className="text-gray-500 group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
            >
              <FontAwesomeIcon
                className="flex-shrink-0 h-6 w-6 text-blue-600"
                icon={faCode}
              />
              <span className="ml-3">Code</span>
            </NavLink>
          </nav>
          <div className="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
            <NavLink
              to=""
              className="whitespace-nowrap text-base font-medium text-gray-500 hover:text-gray-900"
            >
              Sign in
            </NavLink>
            <NavLink
              to="/give"
              className="ml-8 whitespace-nowrap inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
            >
              Give
            </NavLink>
          </div>
        </div>
      </div>
      {/* Mobile Navigation */}
      <div className={mobileMenuClasses}>
        <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
          <div className="pt-5 pb-6 px-5">
            <div className="flex items-center justify-between">
              <div>
                <a
                  href="/"
                  className="logo text-yellow-600 hover:text-yellow-500 active:text-yellow-500 flex flex-row items-center space-x-2"
                >
                  <span className="sr-only">Maker Madness 2021</span>
                  <FontAwesomeIcon
                    className="fill-current"
                    icon={faLightbulb}
                  />
                  <img src={maker_madness} className="h-6" alt="logo" />
                </a>
              </div>
              <div className="-mr-2">
                <button
                  type="button"
                  onClick={handleMobileMenu}
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                >
                  <span className="sr-only">Close menu</span>
                  {/* <!-- Heroicon name: outline/x --> */}
                  <svg
                    className="h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>
            </div>
            <div className="mt-6">
              <nav className="grid gap-y-8">
                <NavLink
                  to="/make"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <FontAwesomeIcon
                    className="flex-shrink-0 h-6 w-6 text-blue-600"
                    icon={faTools}
                  />
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Make
                  </span>
                </NavLink>

                <NavLink
                  to="/make"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <FontAwesomeIcon
                    icon={faToolbox}
                    className="flex-shrink-0 h-6 w-6 text-blue-600"
                  />
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Take&amp;Make
                  </span>
                </NavLink>

                <NavLink
                  to="#"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  {/* <!-- Heroicon name: outline/cursor-click --> */}
                  <FontAwesomeIcon
                    icon={faPaperPlane}
                    className="flex-shrink-0 h-6 w-6 text-blue-600"
                  />
                  <span className="ml-3 text-base font-medium text-gray-900">
                    OYO
                  </span>
                </NavLink>

                <NavLink
                  to="/code"
                  className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <FontAwesomeIcon
                    className="flex-shrink-0 h-6 w-6 text-blue-600"
                    icon={faCode}
                  />
                  <span className="ml-3 text-base font-medium text-gray-900">
                    Code
                  </span>
                </NavLink>
              </nav>
            </div>
          </div>
          <div className="py-6 px-5 space-y-6">
            <div>
              <NavLink
                to="/give"
                className="w-full flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-base font-medium text-white bg-indigo-600 hover:bg-indigo-700"
              >
                Give
              </NavLink>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;