import { useEffect, useRef } from "react";
import gsap from "gsap";

function HeroSection() {
  const sectionRef = useRef(null);
  const jharokhaCardRef = useRef(null);
  const garlandLeftRef = useRef(null);
  const garlandRightRef = useRef(null);
  const bellsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // Garland drop downs
      tl.fromTo(
        [garlandLeftRef.current, garlandRightRef.current],
        { y: -300, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.8, ease: "bounce.out" }
      );

      // Jharokha card reveal
      tl.fromTo(
        jharokhaCardRef.current,
        { opacity: 0, scale: 0.94, y: 40, filter: "blur(6px)" },
        { opacity: 1, scale: 1, y: 0, filter: "blur(0px)", duration: 1.6, ease: "power3.out" },
        "-=1.2"
      );

      // Swing temple bells
      gsap.fromTo(
        bellsRef.current,
        { rotation: -8 },
        {
          rotation: 8,
          duration: 3,
          yoyo: true,
          repeat: -1,
          ease: "sine.inOut",
          stagger: 0.25,
        }
      );

      // Slow scale zoom on the main Jharokha card
      gsap.to(jharokhaCardRef.current, {
        scale: 1.02,
        duration: 8,
        repeat: -1,
        yoyo: true,
        ease: "sine.inOut",
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  // Marigold string helper
  const renderMarigoldString = (length = 15) => {
    return (
      <div className="flex flex-col items-center gap-1 select-none">
        <div className="w-[1.5px] bg-[#C5A059]/40 h-10" />
        {Array.from({ length }).map((_, i) => {
          const isYellow = i % 2 === 0;
          const isMogra = i % 4 === 3;
          return (
            <div
              key={i}
              className={`w-5 h-5 rounded-full shadow-md flex items-center justify-center text-[10px] font-bold transition-transform duration-300 hover:scale-110 ${
                isMogra
                  ? "bg-cream border border-rose-gold text-rose-gold font-serif"
                  : isYellow
                    ? "bg-genda-yellow text-genda-orange"
                    : "bg-genda-orange text-genda-yellow"
              }`}
            >
              ✿
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen w-full flex flex-col items-center justify-center py-24 px-4 md:px-8 overflow-hidden bg-gradient-to-b from-[#FFFDF9] via-[#FDFBF7] to-[#F5ECE1] select-none"
    >
      
      {/* SVG Gradient Definitions */}
      <svg width="0" height="0" className="absolute">
        <defs>
          <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F5E5C9" />
            <stop offset="50%" stopColor="#D4AF37" />
            <stop offset="100%" stopColor="#C5A059" />
          </linearGradient>
          <linearGradient id="gendaGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFF9E6" />
            <stop offset="40%" stopColor="#F5B041" />
            <stop offset="100%" stopColor="#E67E22" />
          </linearGradient>
          <linearGradient id="mehendiGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#F0F5EE" />
            <stop offset="100%" stopColor="#8FA89B" />
          </linearGradient>
        </defs>
      </svg>

      {/* 1. Traditional Indian Mandala Overlay background */}
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#F5B041_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />

      {/* 2. Hanging Genda-Mogra Garlands on Sides */}
      <div ref={garlandLeftRef} className="absolute left-4 md:left-12 top-0 z-20 origin-top">
        {renderMarigoldString(15)}
      </div>
      <div ref={garlandRightRef} className="absolute right-4 md:right-12 top-0 z-20 origin-top">
        {renderMarigoldString(15)}
      </div>

      {/* 3. Hanging Temple Bells with Marigold clusters */}
      <div className="absolute top-0 left-16 md:left-32 z-20 flex flex-col items-center origin-top">
        <div className="w-[1.5px] h-32 bg-gradient-to-b from-genda-yellow via-gold-champagne to-gold-dark" />
        <svg
          ref={(el) => {
            if (el) bellsRef.current[0] = el;
          }}
          className="w-10 h-10 md:w-12 md:h-12 drop-shadow-md origin-top"
          viewBox="0 0 100 100"
        >
          <path
            d="M 50 10 C 35 10, 30 40, 25 60 C 20 80, 20 85, 50 85 C 80 85, 80 80, 75 60 C 70 40, 65 10, 50 10 Z"
            fill="url(#goldGrad)"
            stroke="#FFFDF9"
            strokeWidth="2"
          />
          <circle cx="50" cy="90" r="6" fill="#C5A059" />
          <path d="M 50 85 L 50 95" stroke="#C5A059" strokeWidth="4" />
        </svg>
      </div>

      <div className="absolute top-0 right-16 md:right-32 z-20 flex flex-col items-center origin-top">
        <div className="w-[1.5px] h-40 bg-gradient-to-b from-genda-yellow via-gold-champagne to-gold-dark" />
        <svg
          ref={(el) => {
            if (el) bellsRef.current[1] = el;
          }}
          className="w-10 h-10 md:w-12 md:h-12 drop-shadow-md origin-top"
          viewBox="0 0 100 100"
        >
          <path
            d="M 50 10 C 35 10, 30 40, 25 60 C 20 80, 20 85, 50 85 C 80 85, 80 80, 75 60 C 70 40, 65 10, 50 10 Z"
            fill="url(#goldGrad)"
            stroke="#FFFDF9"
            strokeWidth="2"
          />
          <circle cx="50" cy="90" r="6" fill="#C5A059" />
          <path d="M 50 85 L 50 95" stroke="#C5A059" strokeWidth="4" />
        </svg>
      </div>

      {/* 4. Grand Jharokha Arch Text Invitation Frame */}
      <div
        ref={jharokhaCardRef}
        className="relative max-w-xl w-full bg-[#FFFDF9] border border-gold-champagne/45 p-6 md:p-14 shadow-xl jharokha-clip overflow-hidden flex flex-col items-center text-center mt-6 z-10"
      >
        {/* Double Scalloped Inner Borders */}
        <div className="absolute inset-2.5 border border-[#C5A059]/40 jharokha-clip pointer-events-none" />
        <div className="absolute inset-4.5 border border-dashed border-[#E67E22]/20 jharokha-clip pointer-events-none" />

        {/* Peacock Feathers Overlay at Top of Jharokha Arch */}
        <div className="absolute top-2 w-10 h-14 opacity-35 z-20">
          <svg viewBox="0 0 100 100" fill="none" stroke="#D4AF37">
            <path d="M 50 100 Q 50 50, 50 20" strokeWidth="2.5" />
            <ellipse cx="50" cy="20" rx="12" ry="16" fill="url(#gendaGrad)" />
            <circle cx="50" cy="20" r="5.5" fill="#8FA89B" />
          </svg>
        </div>

        {/* Auspicious Swastika Icon at the top of the invite */}
        <div className="mt-8 mb-4">
          <svg className="w-10 h-10 fill-none stroke-genda-orange" viewBox="0 0 100 100">
            <path d="M 50 20 L 50 80 M 20 50 L 80 50 M 50 20 L 80 20 M 80 50 L 80 80 M 50 80 L 20 80 M 20 50 L 20 20" strokeWidth="4" strokeLinecap="round" />
            <circle cx="35" cy="35" r="3" fill="#D4AF37" />
            <circle cx="65" cy="35" r="3" fill="#D4AF37" />
            <circle cx="35" cy="65" r="3" fill="#D4AF37" />
            <circle cx="65" cy="65" r="3" fill="#D4AF37" />
          </svg>
        </div>

        {/* Sanskrit Quote */}
        <div className="mb-6 px-4">
          <p className="font-hindi text-xs md:text-sm tracking-wide text-genda-orange font-bold leading-relaxed max-w-sm mx-auto">
            "यत्र नार्यस्तु पूज्यन्ते रमन्ते तत्र देवताः"
          </p>
          <p className="text-[9px] uppercase font-cinzel text-soft-green tracking-widest mt-1">
            Where women are honored, divinity blossoms
          </p>
        </div>

        {/* Shubhv विवाह */}
        <span className="font-hindi text-xl md:text-2xl font-bold tracking-[0.25em] text-genda-orange mb-3 animate-pulse">
          ।। शुभ विवाह ।।
        </span>

        {/* Bride & Groom names */}
        <div className="flex flex-col md:flex-row items-center justify-center gap-1 md:gap-4 my-2">
          <h1 className="font-cinzel-dec text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-wedding-charcoal">
            Kabir
          </h1>
          <span className="font-handwritten text-4xl md:text-5xl text-genda-orange my-1 md:my-0">
            weds
          </span>
          <h1 className="font-cinzel-dec text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide text-wedding-charcoal">
            Ira
          </h1>
        </div>

        <p className="font-cinzel text-xs tracking-[0.4em] uppercase text-soft-green font-bold mt-3 mb-6">
          Union of Two Hearts
        </p>

        {/* Traditional Date details */}
        <div className="flex items-center gap-4 mt-2">
          <div className="w-8 md:w-16 h-[1.5px] bg-gradient-to-r from-transparent to-genda-yellow" />
          <div className="flex flex-col items-center">
            <span className="font-cinzel text-xs md:text-sm tracking-[0.2em] text-wedding-charcoal font-bold">
              NOVEMBER 28, 2026
            </span>
            <span className="font-hindi text-[11px] tracking-wider text-genda-orange font-semibold mt-1">
              मार्गशीर्ष कृष्ण पक्ष नवमी, संवत २०८३
            </span>
          </div>
          <div className="w-8 md:w-16 h-[1.5px] bg-gradient-to-l from-transparent to-genda-yellow" />
        </div>

        {/* Scrolling Hint */}
        <div className="mt-10 animate-bounce opacity-70">
          <span className="font-cinzel text-[9px] tracking-[0.3em] uppercase text-wedding-charcoal font-bold">
            Scroll to Enter
          </span>
          <div className="w-[1.5px] h-6 bg-gradient-to-b from-genda-orange to-transparent mx-auto mt-2" />
        </div>

      </div>

    </section>
  );
}

export default HeroSection;
