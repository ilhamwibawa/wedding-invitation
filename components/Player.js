import React, { useState, useEffect } from "react";
import useSound from "use-sound";
function Player() {
  const [play, { stop }] = useSound("/assets/backsound.mp3");
  const [isPlaying, setIsPlaying] = useState(false);

  const handleClick = () => {
    if (isPlaying) {
      stop();
      setIsPlaying(false);
    } else {
      play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed xl:bottom-10 xl:right-10 bottom-5 right-5 z-50 flex items-center flex-col -rotate-3">
      <div className=" h-14 w-14 bg-black text-white rounded-full flex items-center justify-center hover:scale-[1.1] cursor-pointer">
        <button onClick={handleClick}>{isPlaying ? "Pause" : "Play"}</button>
      </div>
    </div>
  );
}

export default Player;
