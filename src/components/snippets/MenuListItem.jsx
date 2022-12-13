import React from "react";

const MenuListItem = ({ name, className, mobile }) => {
  return (
    <>
      <li
        className={
          mobile
            ? "p-4 border-b border-gray-600 " + className
            : "p-4 " + className
        }
      >
        {name}
      </li>
    </>
  );
};

export default MenuListItem;
