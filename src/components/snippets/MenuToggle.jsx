import React from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import "./MenuToggle.scss";

const MenuToggle = ({ onClick, showMenu }) => {
  return (
    <div onClick={onClick} className="menu-toggle block md:hidden">
      {showMenu ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
    </div>
  );
};

export default MenuToggle;
