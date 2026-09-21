"use client";

import { useRef, useState } from "react";

export default function ThemePlayer() {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [playing, setPlaying] = useState(false);

  const toggleTheme = async () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (audio.paused) {
      await audio.play();
      setPlaying(true);
    } else {
      audio.pause();
      setPlaying(false);
    }
  };

  return (
    <div className={`theme-player ${playing ? "is-playing" : ""}`}>
      <audio
        ref={audioRef}
        src="/ex-nihilo.mp3"
        preload="metadata"
        onEnded={() => setPlaying(false)}
      />
      <button type="button" onClick={toggleTheme} aria-label={playing ? "Pause the Levi Crowe theme" : "Play the Levi Crowe theme"}>
        <span aria-hidden="true">{playing ? "Ⅱ" : "▶"}</span>
        {playing ? "Pause Theme" : "Play Theme"}
      </button>
      <small>Ex Nihilo · Original song</small>
    </div>
  );
}
