import React from "react";
import Logo from "../assets/sidebar/Logo.svg";
import {Link} from "react-router-dom";

const Sidebar = () => {
  const navItems = [
    { name: "For You", path: "/" },
    { name: "Top Tracks", path: "/top-tracks" },
    { name: "Favourites", path: "/favourites" },
    { name: "Recently played", path: "/recently-played" },
  ];
  return (
    <div className="w-full lg:w-[200px] flex-shrink-0 px-4 py-6 hidden lg:block">
      {/* Logo */}
      <div className="mb-6">
        <img
          src={Logo}
          className="w-[120px] h-auto"
          alt="logo"
        />
      </div>

      {/* Navigation */}
      <ul className="text-base lg:text-xl text-amber-50 flex flex-col gap-4">
        {navItems.map((item, index) => (
          <li key={index}>
            <Link
              to={item.path}
              className="leading-[28px] font-normal font-basier hover:text-white/60 transition"
            >
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
