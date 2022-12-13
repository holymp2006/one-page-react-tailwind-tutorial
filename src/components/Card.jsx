import React from "react";

const Card = ({ title, price, imgSrc, ...others }) => {
  return (
    <div
      className={
        others.className ||
        "my-4 flex w-full flex-col rounded-lg p-4 shadow-xl duration-300 hover:scale-105"
      }
    >
      <img
        src={imgSrc}
        alt={title}
        className="mx-auto mt-[-3rem] w-20 bg-transparent"
      />
      <h5 className="py-8 text-center text-2xl font-bold">{title}</h5>
      <h4 className="text-center text-4xl font-bold">{price}</h4>
      <ul className="mt-8 text-center font-medium">
        <li className="mx-8 border-b py-2">
          <p>500 GB Storage</p>
        </li>
        <li className="mx-8 border-b py-2">
          <p>2 Users Allowed</p>
        </li>
        <li className="mx-8 border-b py-2">
          <p>Send up to 3 GB</p>
        </li>
      </ul>
      <a
        href="#"
        className={
          others.btnClassName ||
          "my-6 mx-auto block w-[200px] rounded-md bg-[#00df9a] py-3 px-6 text-center font-medium text-black"
        }
      >
        Start Trial
      </a>
    </div>
  );
};

export default Card;
