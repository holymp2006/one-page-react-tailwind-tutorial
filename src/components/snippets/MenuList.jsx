import React from "react";
import MenuListItem from "./MenuListItem";
import "./MenuList.scss";

const MenuList = ({ className, mobile = true }) => {
  return (
    <>
      <ul className={"uppercase " + className}>
        <MenuListItem name="Home" mobile={mobile} />
        <MenuListItem name="Company" mobile={mobile} />
        <MenuListItem name="Resources" mobile={mobile} />
        <MenuListItem name="About" mobile={mobile} />
        <MenuListItem name="Contact" mobile={mobile} />
      </ul>
    </>
  );
};

export default MenuList;
