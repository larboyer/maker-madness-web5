import React from 'react';
// import ContentBackground from './ContentBackground';
import mm_bulb from '../img/mm_bulb_00.png';

const PageHero = (props) => {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <div className="absolute inset-0">
        <img className="w-full h-full object-cover" src={mm_bulb} alt="" />
        <div
          className="absolute inset-0 bg-indigo-900"
          style={{ mixBlendMode: 'multiply' }}
          aria-hidden="true"
        />
      </div>
      <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:flex lg:justify-between">
        <div className="max-w-xl">
          <p className="text-base font-semibold text-indigo-200 tracking-wide uppercase">
            {props.supHeader}
          </p>
          <h1 className="text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            {props.mainHeader}
          </h1>
          <p className="mt-5 text-xl text-gray-400">{props.subHeader}</p>
        </div>
      </div>
    </div>
  );
};

export default PageHero;
