import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { GaneshaSVG } from './Ornament';

export default function LoadingScreen({ onComplete }) {
  const containerRef = useRef(null);
  const ganeshaRef = useRef(null);
  const textContainerRef = useRef(null);

  useEffect(() => {
    // Find all path and circle elements inside the Ganesha SVG
    const paths = ganeshaRef.current?.querySelectorAll('path, circle');
    
    // Prepare paths for the drawing animation
    if (paths && paths.length > 0) {
      paths.forEach((path) => {
        const length = path.getTotalLength ? path.getTotalLength() : 200;
        gsap.set(path, {
          strokeDasharray: length,
          strokeDashoffset: length,
          opacity: 0,
        });
      });
    }

    const tl = gsap.timeline({
      onComplete: () => {
        // Exit transition - slide up the loading screen to reveal home
        gsap.to(containerRef.current, {
          opacity: 0,
          y: '-100%',
          duration: 1.0,
          ease: 'power3.inOut',
          onComplete: onComplete,
        });
      },
    });

    // 1. Draw Ganesha Paths
    if (paths && paths.length > 0) {
      tl.to(ganeshaRef.current, { opacity: 1, duration: 0.2 })
        .to(paths, {
          strokeDashoffset: 0,
          opacity: 1,
          duration: 1.8,
          stagger: 0.08,
          ease: 'power1.inOut',
        });
    } else {
      // Fallback
      tl.fromTo(ganeshaRef.current, { opacity: 0, scale: 0.8 }, { opacity: 1, scale: 1, duration: 1.5 });
    }

    // 2. Add Ganesha Glow & Aura Shimmer
    tl.to(ganeshaRef.current, {
      filter: 'drop-shadow(0 0 15px rgba(212, 175, 55, 0.95))',
      duration: 0.6,
    }, '-=0.6');

    // 3. Reveal Sanskrit Shlokas Staggered
    const shlokaElements = textContainerRef.current?.children;
    if (shlokaElements) {
      tl.fromTo(
        shlokaElements,
        { opacity: 0, y: 15, filter: 'blur(3px)' },
        {
          opacity: 1,
          y: 0,
          filter: 'blur(0px)',
          duration: 0.8,
          stagger: 0.25,
          ease: 'power2.out',
        },
        '-=0.8'
      );
    }

    // 4. Hold the screen briefly
    tl.to({}, { duration: 1.2 });

    return () => {
      tl.kill();
    };
  }, [onComplete]);

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-maroon-royal text-ivory overflow-hidden select-none"
    >
      {/* Background Subtle Mandala Texture */}
      <div 
        className="absolute inset-0 opacity-[0.04] pointer-events-none bg-center bg-no-repeat bg-cover"
        style={{
          backgroundImage: 'radial-gradient(circle, #D4AF37 1px, transparent 1px)',
          backgroundSize: '24px 24px'
        }}
      />

      {/* Traditional Golden Corners */}
      <div className="absolute top-6 left-6 w-16 h-16 border-t-2 border-l-2 border-gold-royal/40 rounded-tl-lg pointer-events-none" />
      <div className="absolute top-6 right-6 w-16 h-16 border-t-2 border-r-2 border-gold-royal/40 rounded-tr-lg pointer-events-none" />
      <div className="absolute bottom-6 left-6 w-16 h-16 border-b-2 border-l-2 border-gold-royal/40 rounded-bl-lg pointer-events-none" />
      <div className="absolute bottom-6 right-6 w-16 h-16 border-b-2 border-r-2 border-gold-royal/40 rounded-br-lg pointer-events-none" />

      {/* Ganesha Container */}
      <div ref={ganeshaRef} className="flex flex-col items-center justify-center mb-8 opacity-0">
        <GaneshaSVG size={185} />
      </div>

      {/* Sanskrit Shlokas */}
      <div ref={textContainerRef} className="text-center max-w-xl px-6 flex flex-col items-center">
        <h3 className="font-hindi text-xl md:text-2xl text-gold-royal tracking-widest mb-4 font-semibold glow-gold-text">
          ॥ श्री गणेशाय नमः ॥
        </h3>
        
        <div className="font-hindi text-sm md:text-base text-gold-light/90 leading-relaxed space-y-1.5">
          <p>वक्रतुण्ड महाकाय सूर्यकोटि समप्रभ।</p>
          <p>निर्विघ्नं कुरु मे देव सर्वकार्येषु सर्वदा॥</p>
        </div>
      </div>
    </div>
  );
}
