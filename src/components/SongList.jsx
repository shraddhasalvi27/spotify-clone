import React, { useState, useEffect } from "react";
import SongCard from "./SongCard";
import { Search } from "lucide-react";
import { useLocation } from "react-router-dom";

export const allSongs = [
  {
    title: "Blinding Lights",
    artist: "The Weeknd",
    time: "4:23",
    cover_image:
      "https://res.cloudinary.com/dxfcs2l60/image/upload/v1743940588/hq720_tn8pj6.jpg",
    audio_url:
      "https://res.cloudinary.com/dxfcs2l60/video/upload/v1743940392/The_Weeknd_-_Blinding_Lights_Official_Video_wzodxt.mp3",
    gradient: "linear-gradient(115deg, #000000, #ce2029)",
  },
  {
    title: "Bad Guy",
    artist: "Billie Eilish",
    time: "3:25",
    cover_image:
      "https://res.cloudinary.com/dxfcs2l60/image/upload/v1743940837/hq720_surel2.jpg",
    audio_url:
      "https://res.cloudinary.com/dxfcs2l60/video/upload/v1743940841/Billie_Eilish_-_bad_guy_Official_Music_Video_eam2wl.mp3",
    gradient: "linear-gradient(115deg, #000000, #ce2029)",
  },
  {
    title: "Shape of You",
    artist: "Ed Sheeran",
    time: "4:23",
    cover_image:
      "https://res.cloudinary.com/dxfcs2l60/image/upload/v1743941501/hqdefault_bq8j6u.jpg",
    audio_url:
      "https://res.cloudinary.com/dxfcs2l60/video/upload/v1743941509/Ed_Sheeran_-_Shape_of_You_Official_Music_Video_xcqtnk.mp3",
    gradient: "linear-gradient(115deg, #287e98, #000000)",
  },
  {
    title: "Rolling in the Deep",
    artist: "Adele",
    time: "3:53",
    cover_image:
      "https://res.cloudinary.com/dxfcs2l60/image/upload/v1743941739/hq720_yfj8qp.jpg",
    audio_url:
      "https://res.cloudinary.com/dxfcs2l60/video/upload/v1743941741/Adele_-_Rolling_in_the_Deep_Official_Music_Video_ahyvtu.mp3",
    gradient: "linear-gradient(115deg, #f89004, #000000)",
  },
  {
    title: "Uptown Funk",
    artist: "Mark Ronson ft. Bruno Mars",
    time: "4:30",
    cover_image:
      "https://res.cloudinary.com/dxfcs2l60/image/upload/v1743941991/hq720_1_guglnh.jpg",
    audio_url:
      "https://res.cloudinary.com/dxfcs2l60/video/upload/v1743941997/Mark_Ronson_-_Uptown_Funk_Official_Video_ft._Bruno_Mars_zkiovb.mp3",
    gradient: "linear-gradient(115deg, #fd0075, #000000)",
  },
  {
    title: "Believer",
    artist: "Imagine Dragons",
    time: "3:36",
    cover_image:
      "https://res.cloudinary.com/dxfcs2l60/image/upload/v1743942377/hq720_drkhhv.jpg",
    audio_url:
      "https://res.cloudinary.com/dxfcs2l60/video/upload/v1743942379/Imagine_Dragons_-_Believer_Official_Music_Video_ili5ti.mp3",
    gradient: "linear-gradient(115deg, #00c3ff, #ffff1c)",
  },
  {
    title: "Skyfall",
    artist: "Adele",
    time: "4:50",
    cover_image:
      "https://res.cloudinary.com/dxfcs2l60/image/upload/v1743945821/hq720_1_qyz2fc.jpg",
    audio_url:
      "https://res.cloudinary.com/dxfcs2l60/video/upload/v1743945823/Adele_-_Skyfall_Lyrics_zkv58r.mp3",
    gradient: "linear-gradient(115deg, #3c7ab3, #000000)",
  },
  {
    title: "Arcade",
    artist: "Duncan Laurence",
    time: "3:05",
    cover_image:
      "https://res.cloudinary.com/dxfcs2l60/image/upload/v1743945995/hq720_e88y0w.jpg",
    audio_url:
      "https://res.cloudinary.com/dxfcs2l60/video/upload/v1743946084/Duncan_Laurence_-_Arcade_Lyric_Video_ft._FLETCHER_bytste.mp3",
    gradient: "linear-gradient(115deg, #287e98, #000000)",
  },
  {
    title: "Bones",
    artist: "Imagine Dragons",
    time: "2:45",
    cover_image:
      "https://res.cloudinary.com/dxfcs2l60/image/upload/v1743946322/hq720_n4xlaz.jpg",
    audio_url:
      "https://res.cloudinary.com/dxfcs2l60/video/upload/v1743946322/Imagine_Dragons_-_Bones_Official_Music_Video_pmaeff.mp3",
    gradient: "linear-gradient(115deg, #000000, #444444)",
  },
  {
    title: "Hymn For The Weekend ",
    artist: "Coldplay",
    time: "4:20",
    cover_image:
      "https://res.cloudinary.com/dxfcs2l60/image/upload/v1743946782/hq720_1_k0wqie.jpg",
    audio_url:
      "https://res.cloudinary.com/dxfcs2l60/video/upload/v1743946786/Coldplay_-_Hymn_For_The_Weekend_Official_Video_suf0jw.mp3",
    gradient: "linear-gradient(115deg, #fa6969, #000000)",
  },
];
// inside SongList.js

const SongList = ({ onSelectSong, currentIndex }) => {
  const [search, setSearch] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const getTitleByRoute = () => {
    const route = location.pathname;
    if (route === "/top-tracks") return "Top Tracks";
    if (route === "/favourites") return "Your Favourites";
    if (route === "/recently-played") return "Recently Played";
    return "For You"; // default
  };

  const filteredSongs =
    allSongs?.filter((song) => {
      const title = song?.title?.toLowerCase() || "";
      const subtitle = song?.subtitle?.toLowerCase() || "";
      const keyword = search.toLowerCase();
      return title.includes(keyword) || subtitle.includes(keyword);
    }) || [];

  useEffect(() => {
    const savedIndex = localStorage.getItem("selectedIndex");
    if (savedIndex !== null) {
      setSelectedIndex(Number(savedIndex));
    }
  }, []);

  // Save to localStorage whenever it changes
  const handleSelect = (index, song) => {
    setSelectedIndex(index);
    localStorage.setItem("selectedIndex", index);
    onSelectSong(song); // ✅ no timeout needed
    // document.body.style.background = song.gradient;
  };

  return (
    <div className=" w-full lg:w-2/3 pt-5 lg:pt-7  flex flex-col ml-0 mr-0 lg:ml-[96px] h-full  ">
      {/* Title */}
      <h1
        className=" mb-4 ml-5 text-amber-50"
        style={{
          fontfamily: "Basier Circle",
          fontWeight: " 700",
          fontSize: "32px",
          lineHeight: "36px",
          letterSpacing: "0%",
        }}
      >
        {getTitleByRoute()}
      </h1>

      {/* Search Bar */}
      <div className="relative px-4 ml-1 mb-3">
        <input
          type="text"
          placeholder="Search Song,Artist"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className=" w-full relative  px-4 py-2 bg-[rgba(255,255,255,0.08)] rounded-lg focus:outline-none text-white"
        />
        <Search className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5 mr-6" />
      </div>

      <div className="overflow-y-auto px-4 pr-2 custom-scroll h-[calc(100vh-200px)]">

        {filteredSongs.length > 0 ? (
          filteredSongs.map((song, index) => (
            <SongCard
              key={index}
              title={song.title}
              subtitle={song.artist}
              time={song.time}
              image={song.cover_image}
              selected={index === currentIndex}
              onClick={() => handleSelect(index, song)}
            />
          ))
        ) : (
          <p className="text-gray-500 mt-4">No songs found.</p>
        )}
      </div>
    </div>
  );
};

export default SongList;
