import React, { useRef, useState, useEffect } from "react";
import { ArrowLeft } from "lucide-react"; // Make sure you're using lucide icons
import threedot from "../assets/Vector (2).svg";
import backplay from "../assets/Vector (4).svg";
import play from "../assets/Vector (3).svg";
import nextplay from "../assets/Vector (5).svg";
import sound from "../assets/Vector (7).svg";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

const NowPlayingCard = ({ song, onClose,songs = [] }) => {
  const [currentIndex, setCurrentIndex] = useState(
    songs.findIndex((s) => s.id === song?.id)
  );

  if (!song) return null;

  const currentSong = songs[currentIndex];

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % songs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + songs.length) % songs.length);
  };


  return (
    <div className=" lg:w-[480px] max-w-full mx-auto text-white shadow-xl h-screen lg:h-full flex flex-col lg:mt-20 mt-15 px-4 sm:px-6 md:px-8 lg:px-4">
      {onClose && (
        <button
          className=" flex flex-row gap-2 absolute top-4 left-4 lg:hidden bg-white/10 text-white px-5 py-1 rounded-xl"
          onClick={onClose}
        >
           <ArrowLeft className="w-5 h-5" />
           {/* <span className="text-sm">Back</span> */}
        </button>
      )}
      {/* Song Info */}
      <div className="mb-4 flex flex-col gap-2">
        <h1 className="text-2xl sm:text-3xl font-bold font-basier">
          {currentSongsong.title}
        </h1>
        <p className="text-base sm:text-lg font-normal font-basier text-white/60">
          {song.artist}
        </p>
      </div>

      {/* Album Cover */}
      <div className="mb-6">
        <img
          src={song.cover_image}
          alt="Album Cover"
          className="w-full h-[300px] sm:h-[350px] object-cover"
        />
      </div>

      {/* Progress Bar */}
      <div className="w-full h-2 bg-gray-700 rounded-full mb-4 relative">
        <div className="w-1/3 h-full bg-amber-400 rounded-full"></div>
      </div>

      {/* Controls */}
      <div className="flex justify-between items-center">
        {/* Left Dot Icon */}
        <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center">
          <img src={threedot} alt="options" className="w-5 h-5" />
        </div>

        {/* Center Controls */}
        <div className="flex items-center gap-8 sm:gap-[38.5px]">
          <img src={backplay} alt="back" className="w-6 sm:w-7" />
          <img src={play} alt="play" className="w-8 sm:w-10" />
          <img src={nextplay} alt="next" className="w-6 sm:w-7" />
        </div>

        {/* Right Dot Icon */}
        <div className="bg-white/10 w-12 h-12 rounded-full flex items-center justify-center">
          <img src={sound} alt="options" className="w-5 h-5" />
        </div>
      </div>
    </div>
  );
};



export default NowPlayingCard;
