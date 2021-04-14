import React from 'react';
import mm_bulb from '../img/mm_bulb_00.png';
import achieve_logo from '../img/achieve_logo_02.png';
import ContentBackground from './ContentBackground';

const Home = () => {
  return (
    <>
      <div class="bg-white">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div class="text-center">
            <h2 class="text-base font-semibold text-indigo-600 tracking-wide uppercase">
              Maker Madness 2021
            </h2>
            <p class="mt-1 text-4xl font-extrabold text-gray-900 sm:text-5xl sm:tracking-tight lg:text-6xl">
              @Home edition!
            </p>
            <p class="max-w-xl mt-5 mx-auto text-xl text-gray-500">
              We're taking the event from the CHS cafe to your kitchen table.
            </p>
          </div>
        </div>
      </div>

      <div className="relative py-16 bg-white overflow-hidden">
        <ContentBackground />
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="text-lg max-w-prose mx-auto prose prose-lg">
            <h3>Saturday, April 24th, 10-2pm.</h3>
          </div>
          <div className="mt-6 prose prose-blue prose-lg text-gray-500 mx-auto">
            <h4>Activities</h4>
            <ul>
              <li>
                <strong>Take&amp;Make</strong> - Pick up project bags around
                South Orange &amp; Maplewood.
              </li>
              <li>
                <strong>OYO (OnYourOwn)</strong> - Do projects just with
                materials you can prob find @home
              </li>
              <li>
                <strong>Meet the Bees</strong> - Come buzz with a real bee
                colony
              </li>
              <li>
                <strong>Live Demos</strong> - Come see on utside woodworking
                demonstration
              </li>
              <li>
                <strong>CodeJoy</strong> - Learn to code online with friendly,
                connected cardboard robots
              </li>
              <li>
                <strong>Code.org</strong> - Or try other code challenges for all
                age levels
              </li>
            </ul>
            <img class="achieve-logo" src={mm_bulb} alt="logo" />
            <img className="home-achieve-logo" src={achieve_logo} alt="logo" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
