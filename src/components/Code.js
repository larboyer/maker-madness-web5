import React from 'react';
import ContentBackground from './ContentBackground';

const Code = () => {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <ContentBackground />
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <h1>
            <span className="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              Maker Madness
            </span>
            <span className="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Code
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            Make awsome things. Do it often!
          </p>
        </div>
      </div>
    </div>
  );
};

export default Code;
