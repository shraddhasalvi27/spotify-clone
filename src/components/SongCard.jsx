import React from "react";
import { useState } from "react";

const SongCard = ({ title, subtitle, time,image,onClick,selected }) => {
  

  
  return (
    <div
      className={`w-full  p-5 shadow flex items-center justify-between rounded-[4px] cursor-pointer transition-colors duration-300 ${
        selected ? "bg-[rgba(255,255,255,0.08)]" : "bg-transparent"
      }`}
      onClick={onClick}
    >      {/* Left Section: Image + Text */}
      <div className="flex items-center gap-4">
        <img
          src={image} // Replace with your image path
          alt="Thumbnail"
          className="w-12 h-12 rounded-[56px] object-cover"
        />
        <div>
          <h2
            className="font-basier"
            style={{
              fontWeight: "400",
              fontSize: "18px",
              lineHeight: "24px",
              letterSpacing: "0%",
              color: "white",
            }}
          >
            {title}
          </h2>
          <p className="text-sm text-white/60">{subtitle}</p>
        </div>
      </div>

      {/* Right Section: Time */}
      <div className="text-sm text-white">{time}</div>
    </div>
  );
};

export default SongCard;
