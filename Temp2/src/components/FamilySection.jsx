import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FamilySection() {
  const containerRef = useRef(null);
  const groomCardRef = useRef(null);
  const brideCardRef = useRef(null);
  const dividerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Slide Groom card from left
      gsap.fromTo(
        groomCardRef.current,
        { opacity: 0, x: -50, scale: 0.96 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        }
      );

      // Slide Bride card from right
      gsap.fromTo(
        brideCardRef.current,
        { opacity: 0, x: 50, scale: 0.96 },
        {
          opacity: 1,
          x: 0,
          scale: 1,
          duration: 1.4,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        }
      );

      // Drop down vertical garland divider
      gsap.fromTo(
        dividerRef.current,
        { opacity: 0, y: -250 },
        {
          opacity: 1,
          y: 0,
          duration: 1.6,
          ease: "bounce.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 70%",
            end: "bottom 60%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full py-24 px-4 md:px-8 bg-gradient-to-b from-[#F5ECE1] to-[#FFFDF9] flex flex-col items-center overflow-hidden"
    >
      
      {/* Decorative Title */}
      <div className="text-center mb-20 select-none">
        <span className="font-cinzel text-xs tracking-[0.45em] uppercase text-soft-green font-bold block mb-2">
          Family Blessings
        </span>
        <h2 className="font-hindi text-3xl md:text-4xl font-bold tracking-wide text-genda-orange drop-shadow-xs">
          दर्शनाभिलाषी एवं स्वागतकर्ता
        </h2>
        <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-genda-yellow to-transparent mx-auto mt-4" />
      </div>

      {/* Cards Layout */}
      <div className="relative flex flex-col md:flex-row gap-12 md:gap-8 max-w-5xl w-full justify-center items-stretch px-4">
        
        {/* GROOM FAMILY KANKOTRI CARD */}
        <div
          ref={groomCardRef}
          className="relative flex-1 bg-[#FFFDF9] border border-gold-champagne/30 p-6 md:p-10 rounded-2xl shadow-lg genda-shadow text-center flex flex-col justify-between"
        >
          {/* Borders */}
          <div className="absolute inset-2 border border-genda-yellow/20 rounded-xl pointer-events-none" />
          <div className="absolute inset-3.5 border border-dashed border-[#C5A059]/25 rounded-lg pointer-events-none" />
          
          <div className="relative z-10 py-4">
            {/* Header Ganesha Motif */}
            <div className="w-10 h-10 mx-auto mb-2 opacity-80">
              <svg viewBox="0 0 100 100" fill="none" stroke="#D4AF37" strokeWidth="3">
                <path d="M 50 15 C 38 15, 32 25, 32 40 C 32 55, 48 60, 48 70 C 48 74, 42 76, 42 79 C 42 84, 58 84, 58 79 C 58 76, 52 74, 52 70 C 52 60, 68 55, 68 40 C 68 25, 62 15, 50 15 Z" />
                <circle cx="50" cy="88" r="3" fill="#E67E22" />
              </svg>
            </div>
            <span className="font-handwritten text-3xl text-genda-orange block mb-1">वर पक्ष</span>
            <h3 className="font-hindi text-xl font-bold text-gold-dark mb-6">शर्मा परिवार</h3>
            
            {/* Family Tree List */}
            <div className="space-y-6 font-hindi text-sm text-wedding-charcoal/90">
              <div>
                <p className="text-soft-green text-xs font-bold uppercase tracking-wider font-cinzel mb-1">
                  Grand Parents (परम आदरणीय दादा-दादी)
                </p>
                <p className="font-semibold text-base text-[#5C5043]">श्रीमती गंगा देवी एवं स्वर्गीय श्री हरिश्चंद्र शर्मा</p>
              </div>

              <div className="w-10 h-[0.5px] bg-genda-yellow/30 mx-auto" />

              <div>
                <p className="text-soft-green text-xs font-bold uppercase tracking-wider font-cinzel mb-1">
                  Parents (सादर माता-पिता)
                </p>
                <p className="font-semibold text-base text-[#5C5043]">श्रीमती सुशीला देवी एवं श्री देवदत्त शर्मा</p>
              </div>

              <div className="w-10 h-[0.5px] bg-genda-yellow/30 mx-auto" />

              <div>
                <p className="text-soft-green text-xs font-bold uppercase tracking-wider font-cinzel mb-1">
                  Uncles & Aunts (चाचा-चाची)
                </p>
                <p className="font-semibold text-[#5C5043]">श्रीमती कमला एवं श्री रमेश शर्मा</p>
                <p className="font-semibold text-[#5C5043]">श्रीमती उमा एवं श्री दिनेश शर्मा</p>
              </div>

              <div className="w-10 h-[0.5px] bg-genda-yellow/30 mx-auto" />

              <div>
                <p className="text-soft-green text-xs font-bold uppercase tracking-wider font-cinzel mb-1">
                  Brothers & Sisters (भाई-बहन)
                </p>
                <p className="font-semibold text-[#5C5043]">वरुण, राहुल, शालिनी, अंशुल शर्मा</p>
              </div>
            </div>
          </div>

          <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-genda-orange" />
          <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-genda-orange" />
        </div>

        {/* VERTICAL HANGING MARIGOLD DIVIDER (Only visible on desktop) */}
        <div
          ref={dividerRef}
          className="relative w-16 hidden md:flex flex-col items-center justify-start origin-top pointer-events-none"
        >
          {/* Hanging garland nodes */}
          <div className="w-[1px] h-full bg-gradient-to-b from-genda-orange via-genda-yellow to-genda-orange opacity-40 absolute" />
          
          <div className="flex flex-col gap-5 items-center z-10 pt-4">
            {Array.from({ length: 9 }).map((_, i) => {
              const isOrange = i % 2 === 0;
              const isMogra = i % 3 === 2;
              
              if (isMogra) {
                return (
                  <div key={i} className="w-4 h-4 rounded-full bg-[#FFFDF9] border border-rose-gold text-rose-gold font-serif flex items-center justify-center text-[7px] font-bold">
                    ✿
                  </div>
                );
              }
              return (
                <div
                  key={i}
                  className={`w-4 h-4 rounded-full shadow-sm flex items-center justify-center text-[8px] font-bold ${
                    isOrange ? "bg-genda-orange text-genda-yellow" : "bg-genda-yellow text-genda-orange"
                  }`}
                >
                  ✿
                </div>
              );
            })}

            {/* Hanging Temple Bell at bottom of garland */}
            <svg className="w-8 h-8 fill-none stroke-gold-champagne animate-swing" viewBox="0 0 100 100">
              <path d="M 50 10 C 35 10, 30 40, 25 60 C 20 80, 20 85, 50 85 C 80 85, 80 80, 75 60 C 70 40, 65 10, 50 10 Z" fill="#FFFDF9" strokeWidth="3" />
              <circle cx="50" cy="90" r="5" fill="#D4AF37" />
            </svg>
          </div>
        </div>

        {/* BRIDE FAMILY KANKOTRI CARD */}
        <div
          ref={brideCardRef}
          className="relative flex-1 bg-[#FFFDF9] border border-gold-champagne/30 p-6 md:p-10 rounded-2xl shadow-lg genda-shadow text-center flex flex-col justify-between"
        >
          {/* Borders */}
          <div className="absolute inset-2 border border-genda-yellow/20 rounded-xl pointer-events-none" />
          <div className="absolute inset-3.5 border border-dashed border-[#C5A059]/25 rounded-lg pointer-events-none" />
          
          <div className="relative z-10 py-4">
            {/* Header Ganesha Motif */}
            <div className="w-10 h-10 mx-auto mb-2 opacity-80">
              <svg viewBox="0 0 100 100" fill="none" stroke="#D4AF37" strokeWidth="3">
                <path d="M 50 15 C 38 15, 32 25, 32 40 C 32 55, 48 60, 48 70 C 48 74, 42 76, 42 79 C 42 84, 58 84, 58 79 C 58 76, 52 74, 52 70 C 52 60, 68 55, 68 40 C 68 25, 62 15, 50 15 Z" />
                <circle cx="50" cy="88" r="3" fill="#E67E22" />
              </svg>
            </div>
            <span className="font-handwritten text-3xl text-genda-orange block mb-1">वधु पक्ष</span>
            <h3 className="font-hindi text-xl font-bold text-gold-dark mb-6">त्रिवेदी परिवार</h3>
            
            {/* Family Tree List */}
            <div className="space-y-6 font-hindi text-sm text-wedding-charcoal/90">
              <div>
                <p className="text-soft-green text-xs font-bold uppercase tracking-wider font-cinzel mb-1">
                  Grand Parents (परम आदरणीय दादा-दादी)
                </p>
                <p className="font-semibold text-base text-[#5C5043]">श्रीमती सुलोचना देवी एवं स्वर्गीय श्री नारायण त्रिवेदी</p>
              </div>

              <div className="w-10 h-[0.5px] bg-genda-yellow/30 mx-auto" />

              <div>
                <p className="text-soft-green text-xs font-bold uppercase tracking-wider font-cinzel mb-1">
                  Parents (सादर माता-पिता)
                </p>
                <p className="font-semibold text-base text-[#5C5043]">श्रीमती रजनी देवी एवं श्री कैलाश त्रिवेदी</p>
              </div>

              <div className="w-10 h-[0.5px] bg-genda-yellow/30 mx-auto" />

              <div>
                <p className="text-soft-green text-xs font-bold uppercase tracking-wider font-cinzel mb-1">
                  Uncles & Aunts (चाचा-चाची)
                </p>
                <p className="font-semibold text-[#5C5043]">श्रीमती सावित्री एवं श्री विनोद त्रिवेदी</p>
                <p className="font-semibold text-[#5C5043]">श्रीमती राधा एवं श्री राजेश त्रिवेदी</p>
              </div>

              <div className="w-10 h-[0.5px] bg-genda-yellow/30 mx-auto" />

              <div>
                <p className="text-soft-green text-xs font-bold uppercase tracking-wider font-cinzel mb-1">
                  Brothers & Sisters (भाई-बहन)
                </p>
                <p className="font-semibold text-[#5C5043]">ऋषभ, कोमल, गौरव, अदिति त्रिवेदी</p>
              </div>
            </div>
          </div>

          <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-genda-orange" />
          <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-genda-orange" />
        </div>

      </div>
    </div>
  );
}

export default FamilySection;
