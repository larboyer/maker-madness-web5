import React, { Fragment } from 'react';
import { NavLink } from 'react-router-dom';
import { Popover, Transition } from '@headlessui/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  PuzzleIcon,
  ScissorsIcon,
  MenuIcon,
  ChevronDownIcon,
  XIcon,
  CodeIcon,
  BookOpenIcon,
} from '@heroicons/react/outline';
import { faLightbulb } from '@fortawesome/free-solid-svg-icons';
import maker_madness from '../img/maker_madness_00.png';

const Header = () => {
  const make = [
    {
      name: 'Take&Make',
      href: '/takemake',
      description:
        'A bag of stuff with QR codes pointing to the specific activity!',
      icon: PuzzleIcon,
    },
    {
      name: 'OYO',
      href: '#',
      description: 'OnYourOwn with  written instructions!',
      icon: BookOpenIcon,
    },
  ];

  function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className="relative bg-white border-b-2">
      <Popover className="relative max-w-7xl mx-auto px-4 sm:px-6">
        {({ open }) => (
          <>
            <div className="flex justify-between items-center border-gray-100 py-6 md:justify-start md:space-x-10">
              <div className="flex justify-start lg:w-0 lg:flex-1">
                <a
                  href="/"
                  className="logo text-yellow-600 hover:text-yellow-500 active:text-yellow-500 flex flex-row items-center space-x-2 transition delay-150"
                >
                  <span className="sr-only">Maker Madness 2021</span>
                  <FontAwesomeIcon icon={faLightbulb} />
                  <img src={maker_madness} className="h-6" alt="logo" />
                </a>
              </div>
              <div className="-mr-2 -my-2 md:hidden">
                <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                  <span className="sr-only">Open menu</span>
                  <MenuIcon className="h-6 w-6" aria-hidden="true" />
                </Popover.Button>
              </div>
              <Popover.Group as="nav" className="hidden md:flex space-x-10">
                <Popover className="relative">
                  {({ open }) => (
                    <>
                      <Popover.Button
                        className={classNames(
                          open ? 'text-gray-900' : 'text-gray-500',
                          'group bg-white rounded-md inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500'
                        )}
                      >
                        <ScissorsIcon className="flex-shrink-0 h-6 w-6 text-blue-600" />
                        <span className="ml-3">Make</span>
                        <ChevronDownIcon
                          className={classNames(
                            open ? 'text-gray-600' : 'text-gray-400',
                            'ml-2 h-5 w-5 group-hover:text-gray-500'
                          )}
                          aria-hidden="true"
                        />
                      </Popover.Button>

                      <Transition
                        show={open}
                        as={Fragment}
                        enter="transition ease-out duration-200"
                        enterFrom="opacity-0 translate-y-1"
                        enterTo="opacity-100 translate-y-0"
                        leave="transition ease-in duration-150"
                        leaveFrom="opacity-100 translate-y-0"
                        leaveTo="opacity-0 translate-y-1"
                      >
                        <Popover.Panel
                          static
                          className="absolute -ml-4 mt-3 transform z-10 px-2 w-screen max-w-md sm:px-0 lg:ml-0 lg:left-1/2 lg:-translate-x-1/2"
                        >
                          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 overflow-hidden">
                            <div className="relative grid gap-6 bg-white px-5 py-6 sm:gap-8 sm:p-8">
                              {make.map((item) => (
                                <NavLink
                                  key={item.name}
                                  to={item.href}
                                  className="-m-3 p-3 flex items-start rounded-lg hover:bg-gray-50"
                                >
                                  <item.icon
                                    className="flex-shrink-0 h-6 w-6 text-indigo-600"
                                    aria-hidden="true"
                                  />
                                  <div className="ml-4">
                                    <p className="text-base font-medium text-gray-900">
                                      {item.name}
                                    </p>
                                    <p className="mt-1 text-sm text-gray-500">
                                      {item.description}
                                    </p>
                                  </div>
                                </NavLink>
                              ))}
                            </div>
                          </div>
                        </Popover.Panel>
                      </Transition>
                    </>
                  )}
                </Popover>
              </Popover.Group>
              <NavLink
                to="/code"
                className="hidden text-gray-500 group bg-white rounded-md md:inline-flex items-center text-base font-medium hover:text-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <CodeIcon className="flex-shrink-0 h-6 w-6 text-blue-600" />
                <span className="ml-3">Code</span>
              </NavLink>
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

            <Transition
              show={open}
              as={Fragment}
              enter="duration-200 ease-out"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="duration-100 ease-in"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <Popover.Panel
                focus
                static
                className="absolute top-0 inset-x-0 z-10 p-2 transition transform origin-top-right md:hidden"
              >
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
                        <Popover.Button className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span className="sr-only">Close menu</span>
                          <XIcon className="h-6 w-6" aria-hidden="true" />
                        </Popover.Button>
                      </div>
                    </div>
                    <div className="mt-6">
                      <nav className="grid gap-y-8">
                        {make.map((item) => (
                          <NavLink
                            key={item.name}
                            to={item.href}
                            className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                          >
                            <item.icon
                              className="flex-shrink-0 h-6 w-6 text-indigo-600"
                              aria-hidden="true"
                            />

                            <span className="ml-3 text-base font-medium text-gray-900">
                              {item.name}
                            </span>
                          </NavLink>
                        ))}
                        <NavLink
                          to="/code"
                          className="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                        >
                          <CodeIcon className="flex-shrink-0 h-6 w-6 text-blue-600" />

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
              </Popover.Panel>
            </Transition>
          </>
        )}
      </Popover>
    </div>
  );
};

export default Header;
