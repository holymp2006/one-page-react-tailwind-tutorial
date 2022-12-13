import React from "react";
import Typed from "react-typed";
import UpperPTag from "./snippets/UpperPTag";

const Hero = () => {
  return (
    <div className="text-white">
      <div className="mx-auto mt-[-96px] flex h-screen w-full max-w-[800px] flex-col justify-center text-center">
        <UpperPTag title="GROWING WITH DATA ANALYTICS" />
        <h2 className="text-4xl font-bold sm:text-6xl md:py-6 md:text-7xl">
          Grow with data.
        </h2>
        <div>
          <p className="py-4 text-xl font-bold sm:text-4xl md:text-5xl">
            Fast, flexible financing for
            <Typed
              className="pl-2 md:pl-4"
              strings={["BTB", "BTC", "SAAS"]}
              typeSpeed={120}
              backSpeed={140}
              loop
            />
          </p>
        </div>
        <p className="text-xl font-bold text-gray-500 md:text-2xl">
          Monitor your data analytics to increase revenue for BTB, BTC, & SAAS
          platforms
        </p>
        <a
          href="#"
          className="my-6 mx-auto w-[200px] rounded-md bg-[#00df9a] py-3 font-medium text-black"
        >
          Get Started
        </a>
      </div>
    </div>
  );
};

export default Hero;
