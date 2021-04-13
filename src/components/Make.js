import React from 'react';
import ContentBackground from './ContentBackground';

const Make = () => {
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
              Make
            </span>
          </h1>
          <p className="mt-8 text-xl text-gray-500 leading-8">
            Make awsome things. Do it often!
          </p>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <p>
            Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong>{' '}
            sed <strong>eget risus enim</strong>. Mattis mauris semper sed amet
            vitae sed turpis id. Id dolor praesent donec est. Odio penatibus
            risus viverra tellus varius sit neque erat velit. Faucibus commodo
            massa rhoncus, volutpat. Dignissim sed eget risus enim.{' '}
            <a href="/">Mattis mauris semper</a> sed amet vitae sed turpis id.
          </p>
          <ul>
            <li>
              <a href="/takemake01">Project 1</a>
            </li>
            <li>
              <a href="/takemake02">Project 2</a>
            </li>
            <li>
              <a href="/takemake03">Project 3</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Make;
