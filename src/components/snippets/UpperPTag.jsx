import React from "react";

const UpperPTag = ({ title, className }) => {
  return <p className={"p-2 font-bold text-[#00df9a] " + className}>{title}</p>;
};

export default UpperPTag;
