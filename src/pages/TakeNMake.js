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
            <NavLink to={`/takemake/takemake01`}>TakeNMake 01</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake/takemake02`}>TakeNMake 02</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake/takemake03`}>TakeNMake 03</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake/takemake04`}>TakeNMake 04</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake/takemake05`}>TakeNMake 05</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake/takemake06`}>TakeNMake 06</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake/takemake07`}>TakeNMake 07</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake/takemake08`}>TakeNMake 08</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake/takemake09`}>TakeNMake 09</NavLink>
          </li>
          <li>
            <NavLink to={`/takemake/takemake10`}>TakeNMake 10</NavLink>
          </li>
        </ul>
      </PageTemplate>
    </>
  );
};

export default TakeNMake;
