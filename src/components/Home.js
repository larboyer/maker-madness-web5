import React from 'react';
import mm_bulb from '../img/mm_bulb_00.png';
import achieve_logo from '../img/achieve_logo_02.png';
import ContentBackground from './ContentBackground';

const Home = () => {
  return (
    <div class="relative py-16 bg-white overflow-hidden">
      <ContentBackground />
      <div class="relative px-4 sm:px-6 lg:px-8">
        <div class="text-lg max-w-prose mx-auto">
          <h1>
            <span class="block text-base text-center text-indigo-600 font-semibold tracking-wide uppercase">
              Maker Madness
            </span>
            <span class="mt-2 block text-3xl text-center leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Home
            </span>
          </h1>
          <p class="mt-8 text-xl text-gray-500 leading-8">
            Make awsome things. Do it often!
          </p>
        </div>
        <div class="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <img src={mm_bulb} alt="logo" />
          <br />
          <img src={achieve_logo} alt="logo" />
          <p>
            Faucibus commodo massa rhoncus, volutpat. <strong>Dignissim</strong>{' '}
            sed <strong>eget risus enim</strong>. Mattis mauris semper sed amet
            vitae sed turpis id. Id dolor praesent donec est. Odio penatibus
            risus viverra tellus varius sit neque erat velit. Faucibus commodo
            massa rhoncus, volutpat. Dignissim sed eget risus enim.{' '}
            <a href="/">Mattis mauris semper</a> sed amet vitae sed turpis id.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Home;
