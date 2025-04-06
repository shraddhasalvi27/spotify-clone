import React from "react";
import { ArrowLeft } from "lucide-react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import { Volume2, MoreVertical } from "lucide-react";
import threedot from "../assets/Vector (5).svg"


const NowPlayingCard = ({ song, onClose, onNext, onPrev, audioRef }) => {
  if (!song) return null;

  return (
    <div
      className="w-full max-w-full lg:w-[480px] h-screen lg:h-[calc(100vh-20px)] mx-auto flex flex-col text-white px-4 sm:px-6 md:px-8 lg:px-4 overflow-hidden lg:mt-[20px]"
    >
      {/* Close Button for Mobile */}
      {onClose && (
        <button
          className="flex flex-row gap-2 absolute top-4 left-4 lg:hidden bg-white/10 text-white px-5 py-1 rounded-xl z-10"
          onClick={onClose}
        >
          <ArrowLeft className="w-5 h-5" />
        </button>
      )}

      {/* Main Content */}
      <div className="flex flex-col h-screen mt-12">
  {/* Title Section - Fixed */}
  <div className="flex-shrink-0 flex flex-col gap-2 px-4">
    <h1 className="text-2xl sm:text-3xl font-bold font-basier">
      {song.title}
    </h1>
    <p className="text-base sm:text-lg font-normal font-basier text-white/60">
      {song.artist}
    </p>
  </div>

  {/* Album Cover - Fills remaining height */}
  <div className="flex-grow px-4 py-4">
    <img
      src={song.cover_image}
      alt="Album Cover"
      className="w-full h-full object-cover rounded-xl"
    />
  </div>

  {/* Audio Player - Fixed */}
  <AudioPlayer
  ref={audioRef}
  autoPlay
  src={song.audio_url}
  onPlay={() => console.log("Playing")}
  onClickNext={onNext}
  onClickPrevious={onPrev}
  showSkipControls
  showJumpControls={false}
  customAdditionalControls={[
    <img
    key="menu"
    src={threedot}
    alt="Menu"
    className="w-5 h-5 ml-10 cursor-pointer"
    />
  ]}
  customVolumeControls={[
    <Volume2 key="volume" className="text-white mr-2 cursor-pointer size-14" />,
  ]}
  layout="stacked"
  className="custom-player"
/>

</div>


    </div>
  );
};

export default NowPlayingCard;
