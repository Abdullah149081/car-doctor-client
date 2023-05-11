import React from "react";
import About from "../About/About";
import Banner from "../Banner/Banner";

const Home = () => {
  return (
    <div className="car-container lg:py-8">
      <Banner />
      <About></About>
    </div>
  );
};

export default Home;
