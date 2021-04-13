import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLightbulb,
  faCode,
  faToolbox,
  faPaperPlane,
} from '@fortawesome/free-solid-svg-icons';
import { NavLink } from 'react-router-dom';
import maker_madness from '../img/maker_madness_00.png';

const MobileNavigation = (props) => {
  const mobileMenuClasses = classNames([
    'absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden',
    props.show ? 'z-10' : 'hidden',
  ]);

  return (
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
                <FontAwesomeIcon className="fill-current" icon={faLightbulb} />
                <img src={maker_madness} className="h-6" alt="logo" />
              </a>
            </div>
            <div className="-mr-2">
              <button
                type="button"
                onClick={props.clickHandler}
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
  );
};

export default MobileNavigation;
