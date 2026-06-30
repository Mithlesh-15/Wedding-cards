import { useEffect, useRef, useState } from "react";
import { IoMusicalNotesOutline, IoVolumeMuteOutline } from "react-icons/io5";
import gsap from "gsap";

function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef(null);
  const buttonRef = useRef(null);
  const pulseRingsRef = useRef([]);

  useEffect(() => {
    // Hide tooltip after 7 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 7000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    let pulseAnimation;
    if (isPlaying) {
      // Set upGSAP pulse animation for our rings
      pulseAnimation = gsap.fromTo(
        pulseRingsRef.current,
        { scale: 1, opacity: 0.8 },
        {
          scale: 1.8,
          opacity: 0,
          duration: 2,
          stagger: 0.6,
          repeat: -1,
          ease: "power2.out",
        }
      );
      // Spin the button itself slowly when playing
      gsap.to(buttonRef.current, {
        rotation: 360,
        duration: 12,
        repeat: -1,
        ease: "none",
      });
    } else {
      gsap.killTweensOf(buttonRef.current);
      gsap.set(buttonRef.current, { rotation: 0 });
      gsap.set(pulseRingsRef.current, { scale: 1, opacity: 0 });
    }

    return () => {
      if (pulseAnimation) pulseAnimation.kill();
      gsap.killTweensOf(buttonRef.current);
    };
  }, [isPlaying]);

  const togglePlay = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
      setIsPlaying(false);
    } else {
      audio.play()
        .then(() => {
          setIsPlaying(true);
          setShowTooltip(false);
        })
        .catch((err) => {
          console.log("Autoplay blocked by browser. User action required:", err);
        });
    }
  };

  // Autoplay fallback when user interacts with the page
  useEffect(() => {
    const startAudio = () => {
      const audio = audioRef.current;
      if (audio && !isPlaying) {
        audio.play()
          .then(() => {
            setIsPlaying(true);
            setShowTooltip(false);
          })
          .catch(() => {});
      }
      document.removeEventListener("click", startAudio);
      document.removeEventListener("touchstart", startAudio);
    };

    document.addEventListener("click", startAudio);
    document.addEventListener("touchstart", startAudio);

    return () => {
      document.removeEventListener("click", startAudio);
      document.removeEventListener("touchstart", startAudio);
    };
  }, [isPlaying]);

  return (
    <div className="fixed top-6 right-6 z-40 flex items-center gap-3 select-none">
      {/* Golden Tooltip Hint */}
      {showTooltip && (
        <div className="bg-[#FFFDF9]/95 text-rose-gold text-xs px-3 py-1.5 rounded-full border border-rose-gold/30 shadow-md font-hindi animate-bounce whitespace-nowrap">
          शुभ संगीत 🎵
        </div>
      )}

      {/* Styled Disc Button */}
      <button
        ref={buttonRef}
        onClick={togglePlay}
        className="relative w-12 h-12 flex items-center justify-center rounded-full bg-[#FFFDF9] border border-rose-gold text-rose-gold shadow-lg cursor-pointer outline-none hover:scale-105 active:scale-95 transition-all duration-300 z-10"
        title={isPlaying ? "Mute Music" : "Play Music"}
      >
        {isPlaying ? (
          <IoMusicalNotesOutline className="text-xl animate-pulse" />
        ) : (
          <IoVolumeMuteOutline className="text-xl opacity-75" />
        )}

        {/* Outer Ring Visualizers */}
        <div
          ref={(el) => {
            if (el) pulseRingsRef.current[0] = el;
          }}
          className="absolute inset-0 rounded-full border border-rose-gold/50 pointer-events-none z-0"
        />
        <div
          ref={(el) => {
            if (el) pulseRingsRef.current[1] = el;
          }}
          className="absolute inset-0 rounded-full border border-gold-champagne/40 pointer-events-none z-0"
        />
      </button>

      {/* High Quality Instrumental Ambient Track (SoundHelix Song 4) */}
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-4.mp3"
        loop
        preload="auto"
      />
    </div>
  );
}

export default MusicPlayer;
