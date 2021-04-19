import React, { useRef, useEffect } from 'react';
import mm_bulb from '../img/mm_bulb_00.png';
import achieve_logo from '../img/achieve_logo_02.png';
import PageTemplate from '../components/PageTemplate';
import { NavLink } from 'react-router-dom';

const Home = () => {
  const ref = useRef(null);

  useEffect(() => {
    if (document.hasFocus()) {
      console.log(ref.current);
      ref.current.focus();
    }
  }, []);
  return (
    <>
      <div className="relative bg-white py-16 overflow-hidden">
        <div className="absolute inset-0">
          <img className="w-full h-full object-cover" src={mm_bulb} alt="" />
          <div
            className="absolute inset-0 bg-indigo-900"
            style={{ mixBlendMode: 'multiply' }}
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-base font-semibold text-indigo-200 tracking-wide uppercase">
              @Home edition!
            </p>
            <h1
              ref={ref}
              tabIndex={-1}
              className="mt-1 text-4xl font-extrabold text-white sm:text-5xl sm:tracking-tight lg:text-6xl  focus:outline-none focus:ring-8 focus:ring-indigo-600 focus:ring-offset-8 focus:ring-offset-indigo-700"
            >
              Maker Madness 2021
            </h1>
            <p className="max-w-xl mt-5 mx-auto text-xl text-gray-300">
              We're taking the event from the CHS cafe to your kitchen table.
            </p>
          </div>
        </div>
      </div>
      <PageTemplate>
        <h3 className="text-lg">Saturday, April 24th, 10-2pm.</h3>
        <h4>Activities</h4>
        <ul>
          <li>
            <NavLink to={`/takemake`}>
              <strong>Take&amp;Make</strong>
            </NavLink>
            - Pick up project bags around South Orange &amp; Maplewood.
          </li>
          <li>
            <strong>OYO (OnYourOwn)</strong> - Do projects just with materials
            you can prob find @home
          </li>
          <li>
            <strong>Meet the Bees</strong> - Come buzz with a real bee colony
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
            <strong>Code.org</strong> - Or try other code challenges for all age
            levels
          </li>
        </ul>
        <img src={achieve_logo} alt="logo" />
      </PageTemplate>
    </>
  );
};

export default Home;
