import React from "react";
import Card from "./Card";
import Single from "../assets/single.png";
import Double from "../assets/double.png";
import Triple from "../assets/triple.png";

const Cards = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="mx-auto grid max-w-[1240px] gap-8 md:grid-cols-3">
        <Card title="Single User" imgSrc={Single} price="$149" />
        <Card
          title="Double User"
          imgSrc={Double}
          price="$249"
          btnClassName="bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 py-3 px-6 mx-auto block text-center"
          className="my-8 flex w-full flex-col rounded-lg bg-gray-100 p-4 shadow-xl duration-300 hover:scale-105 md:my-0"
        />
        <Card title="Triple User" imgSrc={Triple} price="$349" />
      </div>
    </div>
  );
};

export default Cards;
