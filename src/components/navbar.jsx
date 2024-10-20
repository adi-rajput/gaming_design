import React from "react";
import logo from "../assets/image.png";
const Navbar = () => {
  return (
    <div className="flex custom-font font-[18px] justify-between text-white ">
      {/* Left Navigation */}
      <div className="flex ml-[120px] mt-[45px]">
        <ul className="flex space-x-8 gap-4 text-[16px] font-thin">
          <li>Join the team</li>
          <li>Contact Us</li>
        </ul>
      </div>

      <div>
        <img src={logo} alt="logo" className="w-[55px] h-[75px] ml-14 mt-8"/>
      </div>

      {/* Right Navigation */}
      <div className="flex mr-[120px] mt-[45px]">
        <ul className="flex space-x-8 gap-4 text-[16px] font-thin">
          <li>Previous Campaign</li>
          <li>All Game List</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
