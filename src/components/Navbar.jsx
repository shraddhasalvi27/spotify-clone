import React from "react";
import Logo from "../assets/sidebar/Logo.svg";
import {Link} from "react-router-dom";
const Navbar = () => {
  const navItems = [
    { name: "For You", path: "/" },
    { name: "Top Tracks", path: "/top-tracks" },
    { name: "Favourites", path: "/favourites" },
    { name: "Recently played", path: "/recently-played" },
  ];
  return (
    <div className="w-full flex flex-col items-start px-4 pt-4">
      {/* Logo */}
      <div className="mb-4">
        <img
          src={Logo}
          className="w-[120px] h-auto"
          alt="logo"
        />
      </div>

      {/* Navigation */}
      <ul className="w-full text-sm sm:text-base text-amber-50 flex justify-between overflow-x-auto no-scrollbar whitespace-nowrap ">
        {navItems.map((item, index) => (
          <li
            key={index}
            className="px-4 py-2 bg-white/20 rounded-full hover:bg-white/30 transition text-center flex-shrink-0"
          >
            <Link to={item.path}>
            {item.name}
            </Link>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Navbar;
