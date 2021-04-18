import React from 'react';
import { NavLink } from 'react-router-dom';
import PageHero from '../components/PageHero';
import PageTemplate from '../components/PageTemplate';

const TakeNMake = () => {
  return (
    <>
      <PageHero
        supHeader="Maker Madness"
        mainHeader="Take&amp;Make Activities"
        subHeader="A bag of stuff with QR codes pointing to the specific activity!"
      />
      <PageTemplate>
        <ul>
          <li>
            <NavLink to={`/takemake01`}>TakeNMake 01</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake02`}>TakeNMake 02</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake03`}>TakeNMake 03</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake04`}>TakeNMake 04</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake05`}>TakeNMake 05</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake06`}>TakeNMake 06</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake07`}>TakeNMake 07</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake08`}>TakeNMake 08</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake09`}>TakeNMake 09</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake10`}>TakeNMake 10</NavLink>
          </li>
        </ul>
      </PageTemplate>
    </>
  );
};

export default TakeNMake;
