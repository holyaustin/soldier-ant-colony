import React from "react";
import logo1 from "../assets/logo.png";

const RoadMap = () => (
  <div className="flex w-full justify-center items-center ">
    <div className="flex mf:flex-row flex-col items-center justify-between md:p-20 py-12 px-4">
      <div className="flex-1 flex flex-col justify-start items-start">

        <h1 className="text-white text-3xl sm:text-5xl py-2 ">
          Road-Map
          <br />
        </h1>

        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-2xl text-justify">
          Recyclant is an Environmental & Recycling Solutions that is committed to providing web3 recycling services to sound services to the commercial and industrial community with innovative approaches to todays problems with tomorrow in mind.
        </p>
        <br />  <br />
        <h1 className="text-white text-3xl sm:text-5xl py-2 ">
          Our Vision

        </h1>
        <br />
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-2xl">
          Eliminate, divert, or reduce waste
        </p>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-2xl">
          Recycle waste for valuable uses
        </p>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-2xl">
          Reduce the cost of managing and disposing waste
        </p>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-2xl">
          Limit waste going to landfills
        </p>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-2xl">
          Reduce your carbon footprint

        </p>
        <p className="text-left my-2 text-white font-light md:w-9/12 w-11/12 text-2xl">
          Improve your corporate image
        </p>
      </div>

      <div className="md:flex-[0.95] flex-initial justify-center items-center mt-">
        <img src={logo1} alt="welcome" className="w-350 cursor-pointer " />
      </div>
    </div>
  </div>
);

export default RoadMap;
