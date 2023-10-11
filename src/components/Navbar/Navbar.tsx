import React from "react";
import Dropdownmenu from "../Dropdownmenu/Dropdownmenu";

const Navbar = () => {
  return (
    <>
      <div className="bg-purple-50 rounded-3xl flex justify-between items-center px-4 py-2 lg:hidden">
        <img src="/img/ep.png" alt="" />
        <Dropdownmenu />
        <img src="/img/profile.png" alt="" />
      </div>
    </>
  );
};

export default Navbar;
