import { useState, useRef, useEffect } from "react";
import musicFile from "../assets/50-nam-ve-sau.mp3";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const playAudio = () => {
      if (audioRef.current && audioRef.current.paused) {
        audioRef.current
          .play()
          .then(() => {
            setIsPlaying(true);
            // Remove listeners once it successfully plays
            document.removeEventListener("click", playAudio);
            document.removeEventListener("touchstart", playAudio);
            document.removeEventListener("scroll", playAudio);
          })
          .catch((e) => {
            console.log("Autoplay still blocked.", e);
          });
      }
    };

    // Attempt auto-play on mount
    if (audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch((e) => {
          console.log(
            "Autoplay blocked by browser. Waiting for interaction.",
            e,
          );
          setIsPlaying(false);
          // If blocked, wait for user interaction anywhere on the page
          document.addEventListener("click", playAudio);
          document.addEventListener("touchstart", playAudio);
          document.addEventListener("scroll", playAudio, { once: true });
        });
    }

    return () => {
      document.removeEventListener("click", playAudio);
      document.removeEventListener("touchstart", playAudio);
      document.removeEventListener("scroll", playAudio);
    };
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <div id="audio" onClick={togglePlay} style={{ cursor: "pointer" }}>
      <div
        className={`audio ${isPlaying ? "mrotate" : "user-stop"}`}
        style={{ backgroundColor: "rgba(242, 119, 149, 0.21)" }}
      >
        <img
          src="/images/356d2a2cbf0e48ffbd877d1d50c2a226.png"
          alt=""
          className="music-icon"
        />
        {!isPlaying && (
          <div className="icon-cancel">
            <div className="icon-h"></div>
          </div>
        )}
      </div>
      <audio
        ref={audioRef}
        src={`${musicFile}#t=73`}
        id="music"
        loop
        autoPlay
      />
    </div>
  );
}

export default MusicPlayer;
