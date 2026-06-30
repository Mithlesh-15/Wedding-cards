import { useEffect, useRef } from "react";
import gsap from "gsap";

function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null);
  const swastikRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    // Find all paths and circles inside the Swastika SVG
    const paths = swastikRef.current?.querySelectorAll("path, circle");

    // Prepare paths for drawing
    if (paths && paths.length > 0) {
      paths.forEach((path) => {
        let length = 250;
        try {
          if (path.getTotalLength) {
            const pathLength = path.getTotalLength();
            if (pathLength > 0) {
              length = pathLength;
            }
          }
        } catch (e) {
          console.warn("Could not calculate path length:", e);
        }

        // Set initial state
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 0,
        });
      });
    }

    const tl = gsap.timeline({
      onComplete: () => {
        // Exit transition - slide up the welcome screen
        gsap.to(containerRef.current, {
          y: "-100%",
          duration: 1.2,
          ease: "power3.inOut",
          onComplete: onComplete,
        });
      },
    });

    // 1. Draw Swastika Paths
    if (paths && paths.length > 0) {
      tl.to(swastikRef.current, { opacity: 1, duration: 0.2 })
        .to(paths, {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 2.2,
          stagger: 0.15,
          ease: "power2.inOut",
        });
    } else {
      tl.fromTo(swastikRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.5 });
    }

    // 2. Add Swastika Glow
    tl.to(swastikRef.current, {
      filter: "drop-shadow(0 0 15px rgba(212, 175, 55, 0.95))",
      duration: 0.8,
    }, "-=0.6");

    // 3. Reveal Sanskrit Shlokas Staggered
    const shlokaElements = textContainerRef.current?.children;
    if (shlokaElements) {
      tl.fromTo(
        shlokaElements,
        { opacity: 0, y: 15, filter: "blur(3px)" },
        {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          duration: 0.8,
          stagger: 0.25,
          ease: "power2.out",
        },
        "-=0.8"
      );
    }

    // 4. Hold the screen briefly
    tl.to({}, { duration: 1.5 });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-cream text-wedding-charcoal overflow-hidden select-none"
    >
      {/* Background Subtle Mandala Texture */}
      <div 
        className="absolute inset-0 opacity-[0.03] pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #D4AF37 1px, transparent 1px)",
          backgroundSize: "24px 24px"
        }}
      />

      {/* Traditional Golden Corners */}
      <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-gold-champagne/45 rounded-tl-lg pointer-events-none" />
      <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-gold-champagne/45 rounded-tr-lg pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-gold-champagne/45 rounded-bl-lg pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-gold-champagne/45 rounded-br-lg pointer-events-none" />

      {/* Swastika SVG Container */}
      <div ref={swastikRef} className="flex flex-col items-center justify-center mb-8 opacity-0">
        <svg
          width="165"
          height="165"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="swastik-svg"
        >
          {/* 1. Main Center Cross (Vertical Line) */}
          <path
            d="M 50 22 L 50 78"
            stroke="#D4AF37"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* 2. Main Center Cross (Horizontal Line) */}
          <path
            d="M 22 50 L 78 50"
            stroke="#D4AF37"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* 3. Top-Right Arm */}
          <path
            d="M 50 22 L 78 22"
            stroke="#D4AF37"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* 4. Bottom-Right Arm */}
          <path
            d="M 78 50 L 78 78"
            stroke="#D4AF37"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* 5. Bottom-Left Arm */}
          <path
            d="M 50 78 L 22 78"
            stroke="#D4AF37"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* 6. Top-Left Arm */}
          <path
            d="M 22 50 L 22 22"
            stroke="#D4AF37"
            strokeWidth="5"
            strokeLinecap="round"
          />

          {/* 7. Quadrant Dots */}
          {/* Top-Left Dot */}
          <circle cx="36" cy="36" r="3.5" fill="#E67E22" stroke="#E67E22" strokeWidth="1" />
          
          {/* Top-Right Dot */}
          <circle cx="64" cy="36" r="3.5" fill="#E67E22" stroke="#E67E22" strokeWidth="1" />
          
          {/* Bottom-Left Dot */}
          <circle cx="36" cy="64" r="3.5" fill="#E67E22" stroke="#E67E22" strokeWidth="1" />
          
          {/* Bottom-Right Dot */}
          <circle cx="64" cy="64" r="3.5" fill="#E67E22" stroke="#E67E22" strokeWidth="1" />
          
        </svg>
      </div>

      {/* Sanskrit Shlokas */}
      <div ref={textContainerRef} className="text-center max-w-xl px-6 flex flex-col items-center">
        <h3 className="font-hindi text-xl md:text-2xl text-genda-orange tracking-widest mb-4 font-bold drop-shadow-sm">
          ॥ श्री गणेशाय नमः ॥
        </h3>
        
        <div className="font-hindi text-base md:text-lg text-wedding-charcoal/90 leading-relaxed space-y-2">
          <p>वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।</p>
          <p>निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥</p>
        </div>
      </div>
    </div>
  );
}

export default LoadingScreen;
