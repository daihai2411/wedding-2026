import { useState, useRef, useEffect } from "react";
import musicFile from "../assets/50-nam-ve-sau.mp3";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);
  const fadeInterval = useRef(null);

  const fadeVolume = (target: number) => {
    if (!audioRef.current) return;
    if (fadeInterval.current) clearInterval(fadeInterval.current);

    const step = 0.02; // Tăng dần 2% mỗi bước
    fadeInterval.current = setInterval(() => {
      if (!audioRef.current) return;
      const currentVol = audioRef.current.volume;
      if (Math.abs(currentVol - target) < step) {
        audioRef.current.volume = target;
        if (target === 0) audioRef.current.pause();
        if (fadeInterval.current) clearInterval(fadeInterval.current);
      } else {
        const nextVol = currentVol + (currentVol < target ? step : -step);
        audioRef.current.volume = Math.min(Math.max(nextVol, 0), 1);
      }
    }, 40); // 40ms * 50 bước = 2 giây để đạt âm lượng tối đa
  };

  useEffect(() => {
    const handleInteraction = () => {
      if (audioRef.current) {
        if (audioRef.current.muted) {
          audioRef.current.muted = false;
          audioRef.current.volume = 0;
          fadeVolume(1);
        }
        if (audioRef.current.paused) {
          audioRef.current.play().then(() => {
            setIsPlaying(true);
            fadeVolume(1);
          });
        }
        cleanup();
      }
    };

    const cleanup = () => {
      window.removeEventListener("click", handleInteraction);
      window.removeEventListener("touchstart", handleInteraction);
      window.removeEventListener("scroll", handleInteraction);
      document.removeEventListener("scroll", handleInteraction);
    };

    // Listen for any user gesture to unmute/play
    window.addEventListener("click", handleInteraction, { once: true });
    window.addEventListener("touchstart", handleInteraction, { once: true });
    window.addEventListener("scroll", handleInteraction, { once: true });
    document.addEventListener("scroll", handleInteraction, {
      capture: true,
      once: true,
    });

    // Attempt muted autoplay immediately
    if (audioRef.current) {
      audioRef.current.muted = true;
      audioRef.current.play().catch(() => {
        // If even muted autoplay is blocked, wait for interaction
        setIsPlaying(false);
      });
    }

    return cleanup;
  }, []);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        fadeVolume(0);
      } else {
        audioRef.current.muted = false;
        audioRef.current.play();
        fadeVolume(1);
      }
      setIsPlaying((prev) => !prev);
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
        muted
        autoPlay
      />
    </div>
  );
}

export default MusicPlayer;
