import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const InvitationMessage = () => {
  const containerRef = useRef(null);
  const borderTopRef = useRef(null);
  const borderBottomRef = useRef(null);
  const contentRef = useRef(null);
  const motifRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
        toggleActions: 'play none none none',
      },
    });

    // Animate motif (spin and scale)
    tl.fromTo(
      motifRef.current,
      { scale: 0, rotate: -90, opacity: 0 },
      { scale: 1, rotate: 0, opacity: 1, duration: 1.0, ease: 'back.out(1.5)' }
    );

    // Unfold scroll border lines
    tl.fromTo(
      [borderTopRef.current, borderBottomRef.current],
      { scaleX: 0 },
      { scaleX: 1, duration: 1.2, ease: 'power2.inOut', stagger: 0.1 },
      '-=0.6'
    );

    // Stagger fade-up text lines
    const textLines = contentRef.current.children;
    tl.fromTo(
      textLines,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' },
      '-=0.8'
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-maroon-royal text-ivory flex flex-col items-center justify-center overflow-hidden z-10 px-4 md:px-8 shadow-inner"
    >
      {/* Royal Subtle Background Mandala Watermark */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none flex items-center justify-center">
        <svg viewBox="0 0 100 100" className="w-[80%] h-[80%] text-gold-royal">
          <circle cx="50" cy="50" r="45" stroke="currentColor" strokeWidth="0.5" />
          <path d="M50 0 C45 25 25 45 0 50 C25 55 45 75 50 100 C55 75 75 55 100 50 C75 45 55 25 50 0 Z" fill="currentColor" />
        </svg>
      </div>

      <div className="max-w-3xl w-full flex flex-col items-center relative z-10">
        
        {/* Top Ornament Motif */}
        <div ref={motifRef} className="w-16 h-16 md:w-20 md:h-20 mb-8 text-gold-royal">
          {/* Traditional Kalash / Peacock / Royal Motif */}
          <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-full h-full">
            <path d="M50 5 C50 5 43 18 43 23 C43 28 47 32 50 32 C53 32 57 28 57 23 C57 18 50 5 50 5 Z" fill="currentColor" />
            <path d="M30 45 C30 35 40 30 50 30 C60 30 70 35 70 45 C70 58 58 65 58 75 H42 C42 65 30 58 30 45 Z" strokeWidth="2" />
            <path d="M40 75 H60 L65 85 H35 Z" fill="currentColor" />
            <path d="M25 45 C15 45 10 35 20 25 C25 21 35 25 35 25" />
            <path d="M75 45 C85 45 90 35 80 25 C75 21 65 25 65 25" />
            {/* Hanging beads */}
            <circle cx="50" cy="93" r="3" fill="currentColor" />
            <line x1="50" y1="85" x2="50" y2="90" strokeWidth="2" />
          </svg>
        </div>

        {/* Scroll Frame Box */}
        <div className="relative w-full px-6 py-12 md:px-16 md:py-14 border-l-[1px] border-r-[1px] border-gold-royal/35 bg-black/15 backdrop-blur-[1px] rounded-sm">
          
          {/* Top Decorative Border (Horizontal Scroll Handle) */}
          <div
            ref={borderTopRef}
            className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-royal to-transparent origin-center"
          />

          {/* Bottom Decorative Border */}
          <div
            ref={borderBottomRef}
            className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-gold-royal to-transparent origin-center"
          />

          {/* Elegant Corner Ornaments */}
          <div className="absolute -top-3 -left-3 w-8 h-8 text-gold-royal">
            <svg viewBox="0 0 100 100" fill="currentColor"><path d="M100 0 C70 0 0 70 0 100 L0 0 Z"/></svg>
          </div>
          <div className="absolute -top-3 -right-3 w-8 h-8 text-gold-royal transform rotate-90">
            <svg viewBox="0 0 100 100" fill="currentColor"><path d="M100 0 C70 0 0 70 0 100 L0 0 Z"/></svg>
          </div>
          <div className="absolute -bottom-3 -left-3 w-8 h-8 text-gold-royal transform -rotate-90">
            <svg viewBox="0 0 100 100" fill="currentColor"><path d="M100 0 C70 0 0 70 0 100 L0 0 Z"/></svg>
          </div>
          <div className="absolute -bottom-3 -right-3 w-8 h-8 text-gold-royal transform rotate-180">
            <svg viewBox="0 0 100 100" fill="currentColor"><path d="M100 0 C70 0 0 70 0 100 L0 0 Z"/></svg>
          </div>

          {/* Devnagari Invitation Message Text */}
          <div
            ref={contentRef}
            className="font-hindi text-center text-lg md:text-xl leading-[2.2] tracking-wider text-gold-light/95 max-w-xl mx-auto flex flex-col gap-6"
          >
            <p className="font-semibold text-gold-royal text-xl md:text-2xl drop-shadow-sm glow-gold-text">
              ।। निमंत्रण पत्र ।।
            </p>
            <p>
              परमपिता परमेश्वर की असीम कृपा से
            </p>
            <p>
              हम अपने विवाह के शुभ अवसर पर
            </p>
            <p>
              आपको एवं आपके परिवार को
            </p>
            <p className="font-semibold text-gold-royal text-xl md:text-2xl border-t-[1px] border-b-[1px] border-gold-royal/20 py-2 inline-block mx-auto max-w-xs">
              सादर आमंत्रित करते हैं।
            </p>
            <p className="text-sm md:text-base opacity-75 italic font-cormorant tracking-widest mt-4">
              "With the divine blessings of Almighty, we cordially invite you and your family to grace the auspicious occasion of our wedding."
            </p>
          </div>
        </div>

        {/* Small Traditional Hanging Lamps / Diyas */}
        <div className="flex gap-16 mt-8">
          <div className="flex flex-col items-center">
            <div className="w-[1px] h-8 bg-gold-royal/60" />
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-gold-royal animate-flicker">
              <path d="M50 60 C30 60 20 70 20 85 H80 C80 70 70 60 50 60 Z" fill="currentColor" />
              <path d="M50 25 C50 25 45 45 45 50 C45 55 48 58 50 58 C52 58 55 55 55 50 C55 45 50 25 50 25 Z" fill="#F59E0B" />
            </svg>
          </div>
          <div className="flex flex-col items-center">
            <div className="w-[1px] h-8 bg-gold-royal/60" />
            <svg viewBox="0 0 100 100" className="w-8 h-8 text-gold-royal animate-flicker" style={{ animationDelay: '0.5s' }}>
              <path d="M50 60 C30 60 20 70 20 85 H80 C80 70 70 60 50 60 Z" fill="currentColor" />
              <path d="M50 25 C50 25 45 45 45 50 C45 55 48 58 50 58 C52 58 55 55 55 50 C55 45 50 25 50 25 Z" fill="#F59E0B" />
            </svg>
          </div>
        </div>

      </div>
    </section>
  );
};

export default InvitationMessage;
