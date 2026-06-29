import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const CoupleSection = () => {
  const groomCardRef = useRef(null);
  const brideCardRef = useRef(null);
  const headingRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    // Fade in heading
    gsap.fromTo(
      headingRef.current,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1.0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        },
      }
    );

    // Slide in Groom card (from left)
    gsap.fromTo(
      groomCardRef.current,
      { opacity: 0, x: -100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: groomCardRef.current,
          start: 'top 80%',
        },
      }
    );

    // Slide in Bride card (from right)
    gsap.fromTo(
      brideCardRef.current,
      { opacity: 0, x: 100 },
      {
        opacity: 1,
        x: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: brideCardRef.current,
          start: 'top 80%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen py-24 bg-cream flex flex-col items-center justify-center overflow-hidden z-10 px-4 md:px-8 border-t-[1px] border-b-[1px] border-gold-royal/30"
    >
      {/* Background Subtle floral pattern or motifs */}
      <div className="absolute top-10 left-10 w-24 h-24 opacity-[0.15] text-maroon-royal pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <path d="M50 0 C45 25 25 45 0 50 C25 55 45 75 50 100 C55 75 75 55 100 50 C75 45 55 25 50 0 Z" />
        </svg>
      </div>
      <div className="absolute bottom-10 right-10 w-24 h-24 opacity-[0.15] text-maroon-royal pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full">
          <path d="M50 0 C45 25 25 45 0 50 C25 55 45 75 50 100 C55 75 75 55 100 50 C75 45 55 25 50 0 Z" />
        </svg>
      </div>

      <div className="max-w-6xl w-full flex flex-col items-center">
        {/* Section Heading */}
        <div ref={headingRef} className="text-center mb-16 px-4">
          <div className="inline-block text-maroon-royal text-3xl md:text-4xl mb-2 font-bold tracking-widest font-hindi relative">
            दाम्पत्य जीवन
            {/* Swirly underline */}
            <svg viewBox="0 0 100 10" className="w-32 mx-auto mt-2 text-gold-royal h-2">
              <path d="M0,5 Q50,0 100,5" fill="none" stroke="currentColor" strokeWidth="2" />
            </svg>
          </div>
          <p className="font-cormorant text-lg md:text-xl text-dark-brown/70 italic mt-2">
            Meet the Bride & Groom
          </p>
        </div>

        {/* Groom & Bride Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 md:gap-16 w-full max-w-4xl">
          
          {/* Groom (वर) Card */}
          <div
            ref={groomCardRef}
            className="relative bg-ivory p-8 md:p-10 rounded-2xl shadow-xl border-[1px] border-gold-royal/30 flex flex-col items-center text-center overflow-hidden"
          >
            {/* Elegant Corner Trims */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-royal" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold-royal" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold-royal" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-royal" />
            
            {/* Card Label */}
            <span className="font-hindi text-lg md:text-xl text-maroon-royal bg-gold-royal/10 border-[1px] border-gold-royal/35 px-6 py-1 rounded-full font-semibold mb-6 tracking-wider">
              वर
            </span>

            {/* Circular Photo */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full mb-6 p-1.5 border-2 border-dashed border-gold-royal">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-gold-royal shadow-inner relative bg-[#7A0019]/5">
                <img
                  src="/groom.png"
                  alt="वर आरव"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    // Fallback to stylized SVG letter if image fails
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center text-gold-royal font-hindi text-6xl bg-gradient-to-b from-[#5C0011] to-[#3B000B]">
                  अ
                </div>
              </div>
              
              {/* Outer decorative dots */}
              <div className="absolute -inset-1 rounded-full border-[1px] border-gold-royal/20 pointer-events-none" />
            </div>

            {/* Groom Info */}
            <div className="flex flex-col items-center">
              <h3 className="font-hindi text-2xl md:text-3xl font-bold text-maroon-royal mb-2 tracking-wide">
                आरव वर्मा
              </h3>
              <p className="font-hindi text-sm md:text-base text-dark-brown/75 mb-1 mt-2">
                <span className="text-gold-royal font-medium">पिता: </span> श्री विजय वर्मा
              </p>
              <div className="w-12 h-[1px] bg-gold-royal/40 my-3" />
              <p className="font-hindi text-sm md:text-base text-dark-brown/75 flex items-center gap-1.5 justify-center">
                <span className="text-gold-royal">📍</span> भोपाल, मध्य प्रदेश
              </p>
            </div>
          </div>

          {/* Bride (कन्या) Card */}
          <div
            ref={brideCardRef}
            className="relative bg-ivory p-8 md:p-10 rounded-2xl shadow-xl border-[1px] border-gold-royal/30 flex flex-col items-center text-center overflow-hidden"
          >
            {/* Elegant Corner Trims */}
            <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-gold-royal" />
            <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-gold-royal" />
            <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-gold-royal" />
            <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-gold-royal" />
            
            {/* Card Label */}
            <span className="font-hindi text-lg md:text-xl text-maroon-royal bg-gold-royal/10 border-[1px] border-gold-royal/35 px-6 py-1 rounded-full font-semibold mb-6 tracking-wider">
              कन्या
            </span>

            {/* Circular Photo */}
            <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full mb-6 p-1.5 border-2 border-dashed border-gold-royal">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-gold-royal shadow-inner relative bg-[#7A0019]/5">
                <img
                  src="/bride.png"
                  alt="कन्या अनन्या"
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="hidden absolute inset-0 flex items-center justify-center text-gold-royal font-hindi text-6xl bg-gradient-to-b from-[#5C0011] to-[#3B000B]">
                  अ
                </div>
              </div>
              {/* Outer decorative dots */}
              <div className="absolute -inset-1 rounded-full border-[1px] border-gold-royal/20 pointer-events-none" />
            </div>

            {/* Bride Info */}
            <div className="flex flex-col items-center">
              <h3 className="font-hindi text-2xl md:text-3xl font-bold text-maroon-royal mb-2 tracking-wide">
                अनन्या शर्मा
              </h3>
              <p className="font-hindi text-sm md:text-base text-dark-brown/75 mb-1 mt-2">
                <span className="text-gold-royal font-medium">पिता: </span> श्री राजेश शर्मा
              </p>
              <div className="w-12 h-[1px] bg-gold-royal/40 my-3" />
              <p className="font-hindi text-sm md:text-base text-dark-brown/75 flex items-center gap-1.5 justify-center">
                <span className="text-gold-royal">📍</span> जयपुर, राजस्थान
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default CoupleSection;
