import React from "react";
import mm_bulb from "../img/mm_bulb_00.png";
import achieve_logo from "../img/achieve_logo_02.png";

const Home = () => {
  return (
    <div className="max-w-xl sm:mx-auto my-8 mx-8 text-center">
      <img src={mm_bulb} alt="logo" />
      <br />
      <img src={achieve_logo} alt="logo" />
      <p>Home page body content</p>
    </div>
  );
};

export default Home;
