import React, { useState } from "react";
import HeaderLogo from "./snippets/HeaderLogo";
import MenuList from "./snippets/MenuList";
import MenuToggle from "./snippets/MenuToggle";

const Navbar = () => {
  const [showMenu, setMenuOpen] = useState(false);
  const handleShowMenu = () => {
    setMenuOpen(!showMenu);
  };

  return (
    <div className="mx-auto flex h-24 max-w-[1240px] items-center justify-between px-4 text-white">
      <HeaderLogo />
      <MenuList className="hidden md:flex" mobile={false} />
      <MenuToggle showMenu={showMenu} onClick={handleShowMenu} />
      <div
        className={
          showMenu
            ? "fixed left-0 top-0 h-full w-[60%] border-r border-r-gray-800 bg-[#000300] duration-500 ease-in-out"
            : "fixed left-[-100%]"
        }
      >
        <HeaderLogo className="m-4" />
        <MenuList className="p-4" />
      </div>
    </div>
  );
};

export default Navbar;
