import React from 'react';
import ContentBackground from './ContentBackground';

const Give = () => {
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
              Give
            </span>
          </h1>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <p>
            Please consider a small contribution to{' '}
            <a href="https://achievefoundation.org/donation-form/">
              help out all the activies of The Achieve Foundation.
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Give;
