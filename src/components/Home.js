import React from 'react';
import mm_logo from '../img/maker_madness_00.png';
import mm_bulb from '../img/mm_bulb_00.png';
import achieve_logo from '../img/achieve_logo_02.png';
import ContentBackground from './ContentBackground';

const Home = () => {
  return (
    <div className="relative py-16 bg-white overflow-hidden">
      <ContentBackground />
      <div className="relative px-4 sm:px-6 lg:px-8">
        <div className="text-lg max-w-prose mx-auto">
          <p className="mt-8 text-xl text-gray-500 leading-8">
            Welcome to Maker Madness 2021 - @Home edition! We're taking the event from
            the CHS cafe to your kitchen table. 
          </p>
        </div>
        <div className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto">
          <img class="mm-logo" src={mm_logo} alt="logo" />
          <h4 className="mt-8 text-xl text-gray-500 leading-8">
            Saturday, April 24th, 10-2pm.
          </h4>
          <p class="right-copy">
            <h4>Activities</h4>
            <ul class="bullet-items">
				<li><strong>Take&Make</strong> - Pick up project bags around South Orange & Maplewood.</li>
				<li><strong>OYO (OnYourOwn)</strong> - Do projects just with materials you can prob find @home</li>
				<li><strong>Meet the Bees</strong> - Come buzz with a real bee colony</li>
				<li><strong>Live Demos</strong> - Come see on utside woodworking demonstration</li>
				<li><strong>CodeJoy</strong> - Learn to code online with friendly, connected cardboard robots</li>
				<li><strong>Code.org</strong> - Or try other code challenges for all age levels</li>
            </ul>
          </p>
          <img class="achieve-logo" src={mm_bulb} alt="logo" />
          <img className="home-achieve-logo" src={achieve_logo} alt="logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;
