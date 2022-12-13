import React from "react";
import Laptop from "../assets/laptop.jpg";
import UpperPTag from "./snippets/UpperPTag";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="mx-auto grid max-w-[1240px] md:grid-cols-2">
        <img className="mx-auto my-4 w-[500px]" src={Laptop} alt="#" />
        <div className="flex flex-col justify-center">
          <UpperPTag
            className="text-center md:pl-0 md:text-left"
            title="DATA ANALYTICS DASHBOARD"
          />
          <h3 className="py-2 text-center text-2xl font-bold sm:text-3xl md:text-left md:text-4xl">
            Manage Data Analytics Centrally
          </h3>
          <p className="text-center md:text-left">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
            repudiandae porro! Culpa incidunt tenetur veniam corrupti, maiores
            magni beatae ab corporis omnis magnam molestias laborum sunt cumque
            asperiores accusamus voluptate!
          </p>
          <a
            href="#"
            className="my-6 mx-auto w-[200px] rounded-md bg-black py-3 text-center font-medium text-[#00df9a] md:mx-0"
          >
            Get Started
          </a>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
