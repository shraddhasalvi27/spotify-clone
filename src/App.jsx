import { useState, useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import Sidebar from "./components/Sidebar";
import NowplayinCard from "./components/Nowplaying";
import SongList from "./components/SongList";
import Navbar from "./components/Navbar";
import { allSongs } from "./components/SongList";

function App() {
  const [currentIndex, setCurrentIndex] = useState(() => {
    const saved = localStorage.getItem("currentIndex");
    return saved ? parseInt(saved) : 0;
  });

  const [showMobilePlayer, setShowMobilePlayer] = useState(false);
  const audioRef = useRef(null);

  const currentSong = allSongs[currentIndex];

  useEffect(() => {
    if (currentSong?.gradient) {
      document.body.style.background = currentSong.gradient;
    }
  }, [currentSong]);

  useEffect(() => {
    localStorage.setItem("currentIndex", currentIndex);
  }, [currentIndex]);

  const handleSelectSong = (song) => {
    const index = allSongs.findIndex((s) => s.title === song.title);
    if (index !== -1) {
      setCurrentIndex(index);
      setShowMobilePlayer(true);
    }
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % allSongs.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + allSongs.length) % allSongs.length);
  };

  return (
    <Router>
      <div className="flex flex-col lg:flex-row min-h-screen">
        <Sidebar />
        <div className="block lg:hidden">
          <Navbar />
        </div>

        {/* ROUTES for pages */}
        <Routes>
          <Route
            path="/"
            element={
              <SongList
                onSelectSong={handleSelectSong}
                currentIndex={currentIndex}
              />
            }
          />
          <Route
            path="/top-tracks"
            element={
              <SongList
                onSelectSong={handleSelectSong}
                currentIndex={currentIndex}
              />
            }
          />
          <Route
            path="/favourites"
            element={
              <SongList
                onSelectSong={handleSelectSong}
                currentIndex={currentIndex}
              />
            }
          />
          <Route
            path="/recently-played"
            element={
              <SongList
                onSelectSong={handleSelectSong}
                currentIndex={currentIndex}
              />
            }
          />
        </Routes>

        {/* Mobile player */}
        {currentSong && showMobilePlayer && (
          <div
            className="fixed inset-0 z-50 lg:hidden"
            style={{
              background: currentSong.gradient,
              transition: "background 0.4s ease-in-out",
            }}
          >
            <NowplayinCard
              song={currentSong}
              onClose={() => setShowMobilePlayer(false)}
              onNext={handleNext}
              onPrev={handlePrev}
              audioRef={audioRef}
            />
          </div>
        )}

        {/* Desktop player */}
        <div className="h-screen lg:w-full hidden lg:block justify-center">
          <NowplayinCard
            song={currentSong}
            onNext={handleNext}
            onPrev={handlePrev}
            audioRef={audioRef}
          />
        </div>
      </div>
    </Router>
  );
}

export default App;
