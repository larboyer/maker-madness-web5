import React from "react";
import { Nav, NavItem } from "reactstrap";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";
import maker_madness from "../img/maker_madness_00.png";

const Navigation2 = (props) => {
  return (
    <nav
      className="py-4 w-full sticky top-0 shadow-md bg-white"
      role="navigation"
    >
      <div className="mx-auto max-w-3xl">
        <div className="grid grid-cols-2 mx-4 sm:mx-0">
          <a
            href="/"
            className="logo text-yellow-600 hover:text-yellow-500 active:text-yellow-500 flex flex-row items-center space-x-2"
          >
            <FontAwesomeIcon className="fill-current" icon={faLightbulb} />
            <img src={maker_madness} className="h-6" alt="logo" />
          </a>
          <Nav className="flex flex-row space-x-2 place-self-end">
            <NavItem>
              <NavLink
                to="/make"
                className="text-gray-800 hover:text-blue-800 active:text-blue-800 hover:border-b border-blue-800 transition delay-200"
              >
                Make
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/code"
                className="text-gray-800 hover:text-blue-800 active:text-blue-800 hover:border-b border-blue-800 transition delay-200"
              >
                Code
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                to="/give"
                className="text-gray-800 hover:text-blue-800 active:text-blue-800 hover:border-b border-blue-800 transition delay-200"
              >
                Give
              </NavLink>
            </NavItem>
          </Nav>
        </div>
      </div>
    </nav>
  );
};

export default Navigation2;
