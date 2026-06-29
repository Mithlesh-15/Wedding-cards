import { useEffect, useRef, useState } from 'react';
import { FaMusic, FaVolumeMute } from 'react-icons/fa';
import gsap from 'gsap';

const BackgroundMusic = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showTooltip, setShowTooltip] = useState(true);
  const audioRef = useRef(null);
  const buttonRef = useRef(null);
  const pulseRingsRef = useRef([]);

  useEffect(() => {
    // Hide tooltip after 5 seconds
    const timer = setTimeout(() => {
      setShowTooltip(false);
    }, 6000);

    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    pulseRingsRef.current = pulseRingsRef.current.slice(0, 2);

    let pulseAnimation;
    if (isPlaying) {
      // Pulse animation for rings
      pulseAnimation = gsap.fromTo(
        pulseRingsRef.current,
        { scale: 1, opacity: 0.6 },
        {
          scale: 1.6,
          opacity: 0,
          duration: 1.5,
          stagger: 0.5,
          repeat: -1,
          ease: 'power1.out',
        }
      );
    } else {
      // Clear scale and opacity
      gsap.set(pulseRingsRef.current, { scale: 1, opacity: 0 });
    }

    return () => {
      if (pulseAnimation) pulseAnimation.kill();
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
          console.log("Autoplay blocked by browser. User interaction required:", err);
        });
    }
  };

  // Play automatically on first user click anywhere on the page as a fallback
  useEffect(() => {
    const handleFirstInteraction = () => {
      const audio = audioRef.current;
      if (audio && !isPlaying) {
        audio.play()
          .then(() => {
            setIsPlaying(true);
            setShowTooltip(false);
          })
          .catch(() => {});
      }
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };

    document.addEventListener('click', handleFirstInteraction);
    document.addEventListener('touchstart', handleFirstInteraction);

    return () => {
      document.removeEventListener('click', handleFirstInteraction);
      document.removeEventListener('touchstart', handleFirstInteraction);
    };
  }, [isPlaying]);

  return (
    <div className="fixed bottom-6 right-6 z-40 flex items-center gap-3 select-none">
      
      {/* Tooltip hint */}
      {showTooltip && (
        <div className="bg-maroon-royal text-ivory text-xs px-3 py-1.5 rounded-lg border-[1px] border-gold-royal/50 shadow-xl font-hindi animate-bounce whitespace-nowrap">
          संगीत चालू करें 🎵
        </div>
      )}

      {/* Floating Button */}
      <button
        ref={buttonRef}
        onClick={togglePlay}
        className="relative w-12 h-12 flex items-center justify-center rounded-full bg-maroon-royal border-[1.5px] border-gold-royal text-gold-royal shadow-2xl cursor-pointer outline-none hover:scale-105 active:scale-95 transition-all duration-300 z-10"
        title={isPlaying ? "Mute Music" : "Play Music"}
      >
        {isPlaying ? (
          <FaMusic className="text-base animate-pulse" />
        ) : (
          <FaVolumeMute className="text-base opacity-75" />
        )}

        {/* Pulse Ring 1 */}
        <div
          ref={(el) => (pulseRingsRef.current[0] = el)}
          className="absolute inset-0 rounded-full border border-gold-royal pointer-events-none z-0"
        />

        {/* Pulse Ring 2 */}
        <div
          ref={(el) => (pulseRingsRef.current[1] = el)}
          className="absolute inset-0 rounded-full border border-gold-royal pointer-events-none z-0"
        />
      </button>

      {/* Background audio player (classical shehnai/sitar tune) */}
      <audio
        ref={audioRef}
        src="https://www.soundhelix.com/examples/mp3/SoundHelix-Song-8.mp3" // Royalty-free instrumental loop
        loop
        preload="auto"
      />
    </div>
  );
};

export default BackgroundMusic;
