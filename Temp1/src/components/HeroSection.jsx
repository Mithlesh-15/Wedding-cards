import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { BiChevronDown } from 'react-icons/bi';

const HeroSection = () => {
  const heroRef = useRef(null);
  const titleRef = useRef(null);
  const shlokaRef = useRef(null);
  const namesRef = useRef(null);
  const heartRef = useRef(null);
  const dateRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  const mandalaRef = useRef(null);

  useEffect(() => {
    // Reveal animations
    const tl = gsap.timeline({ defaults: { ease: 'power3.out' } });

    // Initial resets
    gsap.set([titleRef.current, shlokaRef.current, dateRef.current, scrollIndicatorRef.current], { opacity: 0, y: 30 });
    gsap.set(namesRef.current.children, { opacity: 0, scale: 0.8, y: 40 });
    gsap.set(heartRef.current, { scale: 0, opacity: 0 });

    // Timeline steps
    tl.to(titleRef.current, { opacity: 1, y: 0, duration: 1.2, delay: 0.5 })
      .to(shlokaRef.current, { opacity: 0.9, y: 0, duration: 1.0 }, '-=0.8')
      .to(namesRef.current.children[0], { opacity: 1, scale: 1, y: 0, duration: 1.2 }, '-=0.6') // Groom Name
      .to(heartRef.current, { opacity: 1, scale: 1, duration: 0.8, ease: 'back.out(2)' }, '-=0.8')
      .to(namesRef.current.children[2], { opacity: 1, scale: 1, y: 0, duration: 1.2 }, '-=0.8') // Bride Name
      .to(dateRef.current, { opacity: 1, y: 0, duration: 1.0 }, '-=0.6')
      .to(scrollIndicatorRef.current, { opacity: 1, y: 0, duration: 0.8 }, '-=0.4');

    // Subtle heart pulsing
    gsap.to(heartRef.current, {
      scale: 1.15,
      duration: 0.8,
      yoyo: true,
      repeat: -1,
      ease: 'sine.inOut',
      delay: 2.5
    });

    // Scroll trigger parallax effect on scroll
    const handleScroll = () => {
      const scrolled = window.scrollY;
      if (heroRef.current && mandalaRef.current) {
        // Slowly move mandala and content for a parallax effect
        gsap.to(mandalaRef.current, { y: scrolled * 0.4, rotate: 40 + scrolled * 0.05, duration: 0.5, overwrite: 'auto' });
        gsap.to(namesRef.current, { y: scrolled * 0.2, duration: 0.5, overwrite: 'auto' });
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      tl.kill();
    };
  }, []);

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center bg-gradient-to-b from-[#5C0011] to-[#3B000B] text-ivory px-6 text-center overflow-hidden z-10"
    >
      {/* Background Mandala overlay */}
      <div
        ref={mandalaRef}
        className="absolute w-[180%] max-w-[800px] md:w-[90%] aspect-square opacity-[0.07] pointer-events-none z-0 mix-blend-screen"
        style={{ transform: 'rotate(40deg)' }}
      >
        <svg viewBox="0 0 100 100" fill="none" stroke="#D4AF37" strokeWidth="0.5" className="w-full h-full animate-spin-slow">
          {/* Detailed Traditional Mandala SVG */}
          <circle cx="50" cy="50" r="48" strokeDasharray="1 2" />
          <circle cx="50" cy="50" r="44" />
          <circle cx="50" cy="50" r="38" strokeDasharray="2 2" />
          <circle cx="50" cy="50" r="30" />
          <circle cx="50" cy="50" r="22" strokeDasharray="3 1" />
          <circle cx="50" cy="50" r="14" />
          {/* Rays / spokes */}
          {Array.from({ length: 24 }).map((_, i) => {
            const angle = (i * 360) / 24;
            return (
              <line
                key={i}
                x1="50"
                y1="50"
                x2={50 + 44 * Math.cos((angle * Math.PI) / 180)}
                y2={50 + 44 * Math.sin((angle * Math.PI) / 180)}
                opacity="0.6"
              />
            );
          })}
          {/* Ornamental petals */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 360) / 12;
            const x = 50 + 30 * Math.cos((angle * Math.PI) / 180);
            const y = 50 + 30 * Math.sin((angle * Math.PI) / 180);
            return (
              <circle
                key={i}
                cx={x}
                cy={y}
                r="6"
                stroke="#D4AF37"
                opacity="0.8"
              />
            );
          })}
          {/* Outer spikes */}
          {Array.from({ length: 48 }).map((_, i) => {
            const angle = (i * 360) / 48;
            const x1 = 50 + 44 * Math.cos((angle * Math.PI) / 180);
            const y1 = 50 + 44 * Math.sin((angle * Math.PI) / 180);
            const x2 = 50 + 48 * Math.cos((angle * Math.PI) / 180);
            const y2 = 50 + 48 * Math.sin((angle * Math.PI) / 180);
            return <line key={i} x1={x1} y1={y1} x2={x2} y2={y2} />;
          })}
        </svg>
      </div>

      {/* Top Hanging Marigold / Mango Leaves Border (Traditional Toran) */}
      <div className="absolute top-0 left-0 w-full h-16 md:h-24 pointer-events-none z-20 flex justify-between overflow-hidden opacity-80">
        {Array.from({ length: 20 }).map((_, i) => (
          <div key={i} className="flex flex-col items-center flex-1">
            {/* Hanging Thread */}
            <div className="w-[1px] h-4 md:h-8 bg-gold-royal/60" />
            {/* Hanging Marigold Flower */}
            <div className="w-3 h-3 md:w-5 md:h-5 rounded-full bg-amber-500 shadow-md border-[1px] border-amber-600 -mt-1" />
            {/* Mango Leaf */}
            <div 
              className="w-1.5 h-6 md:w-2.5 md:h-10 bg-emerald-700 rounded-b-full shadow-sm origin-top"
              style={{ transform: `rotate(${Math.sin(i) * 15}deg)` }}
            />
          </div>
        ))}
      </div>

      {/* Main Content Area */}
      <div className="relative z-10 flex flex-col items-center max-w-4xl w-full pt-24 md:pt-28 pb-24 md:pb-12">
        {/* Subtitle / Header Motif */}
        <div ref={titleRef} className="mb-4 md:mb-6">
          <h2 className="font-hindi text-2xl md:text-3xl font-bold tracking-widest text-gold-royal glow-gold-text">
            ।। शुभ विवाह ।।
          </h2>
          <div className="w-24 h-[1px] bg-gradient-to-r from-transparent via-gold-royal to-transparent mx-auto mt-2" />
        </div>

        {/* Sanskrit Verse */}
        <div ref={shlokaRef} className="mb-6 md:mb-12 font-hindi text-base md:text-xl text-gold-light/90 italic max-w-lg leading-relaxed px-4">
          <p className="tracking-wide">“मांगल्यं तन्तुनानेन मम जीवन हेतुना।”</p>
          <span className="text-xs md:text-sm text-gold-royal/80 mt-1 block font-light">
            (यह मंगलसूत्र मेरे जीवन का आधार है और हमारे अटूट प्रेम का प्रतीक है)
          </span>
        </div>

        {/* Bride & Groom Large Names */}
        <div
          ref={namesRef}
          className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-8 mb-6 md:mb-10 select-text"
        >
          <h1 className="font-cormorant font-bold italic text-4xl md:text-7xl lg:text-8xl text-gold-royal glow-gold-text drop-shadow-md tracking-wide">
            Aarav Verma
          </h1>
          
          <div ref={heartRef} className="my-1 md:my-0 flex items-center justify-center w-12 h-12">
            {/* Traditional Golden Heart/Kundan Ornament Motif */}
            <svg viewBox="0 0 100 100" className="w-10 h-10 text-gold-royal drop-shadow">
              <path
                d="M50,90 C50,90 90,55 90,30 C90,13 75,5 60,5 C48,5 40,15 40,15 C40,15 32,5 20,5 C5,5 -10,13 -10,30 C-10,55 50,90 50,90 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                d="M50,80 C50,80 82,49 82,27 C82,12 69,5 56,5 C45,5 38,15 38,15 C38,15 31,5 20,5 C7,5 -6,12 -6,27 C-6,49 50,80 50,80 Z"
                fill="currentColor"
                opacity="0.85"
                transform="scale(0.8) translate(12, 12)"
              />
            </svg>
          </div>

          <h1 className="font-cormorant font-bold italic text-4xl md:text-7xl lg:text-8xl text-gold-royal glow-gold-text drop-shadow-md tracking-wide">
            Ananya Sharma
          </h1>
        </div>

        {/* Wedding Date Card */}
        <div ref={dateRef} className="relative mt-2 px-6 py-4 md:px-10 md:py-5 border-[1px] border-gold-royal/40 rounded-xl bg-black/20 backdrop-blur-[2px] shadow-2xl max-w-sm">
          {/* Small Decorative Corners inside date box */}
          <div className="absolute top-1 left-1 w-3 h-3 border-t-[1px] border-l-[1px] border-gold-royal" />
          <div className="absolute top-1 right-1 w-3 h-3 border-t-[1px] border-r-[1px] border-gold-royal" />
          <div className="absolute bottom-1 left-1 w-3 h-3 border-b-[1px] border-l-[1px] border-gold-royal" />
          <div className="absolute bottom-1 right-1 w-3 h-3 border-b-[1px] border-r-[1px] border-gold-royal" />
          
          <span className="text-xs md:text-sm font-semibold tracking-[0.2em] text-gold-light uppercase">
            Save the Date
          </span>
          <h3 className="font-cormorant text-2xl md:text-3xl font-bold text-gold-royal tracking-wide mt-1">
            20 February 2027
          </h3>
          <p className="text-[11px] md:text-xs text-gold-light/65 uppercase tracking-widest mt-0.5">
            Saturday • Jaipur, Rajasthan
          </p>
        </div>
      </div>

      {/* Floating bells hanging on the sides for desktop view */}
      <div className="hidden lg:flex absolute left-8 top-1/4 flex-col items-center opacity-40">
        <div className="w-[1px] h-32 bg-gold-royal" />
        <svg viewBox="0 0 100 100" className="w-10 h-10 text-gold-royal animate-bounce" style={{ animationDuration: '3s' }}>
          <path d="M50 15 C35 15 25 35 25 60 L75 60 C75 35 65 15 50 15 Z" fill="currentColor" />
          <rect x="20" y="60" width="60" height="8" rx="2" fill="currentColor" />
          <circle cx="50" cy="78" r="8" fill="currentColor" />
        </svg>
      </div>
      <div className="hidden lg:flex absolute right-8 top-1/4 flex-col items-center opacity-40">
        <div className="w-[1px] h-32 bg-gold-royal" />
        <svg viewBox="0 0 100 100" className="w-10 h-10 text-gold-royal animate-bounce" style={{ animationDuration: '3.5s' }}>
          <path d="M50 15 C35 15 25 35 25 60 L75 60 C75 35 65 15 50 15 Z" fill="currentColor" />
          <rect x="20" y="60" width="60" height="8" rx="2" fill="currentColor" />
          <circle cx="50" cy="78" r="8" fill="currentColor" />
        </svg>
      </div>

      {/* Scroll Down Indicator */}
      <div
        ref={scrollIndicatorRef}
        className="absolute bottom-6 flex flex-col items-center z-10 cursor-pointer pointer-events-none"
      >
        <span className="text-xs uppercase tracking-[0.25em] text-gold-royal/80 mb-1">
          Scroll down
        </span>
        <BiChevronDown className="text-2xl text-gold-royal animate-bounce" />
      </div>
    </section>
  );
};

export default HeroSection;
