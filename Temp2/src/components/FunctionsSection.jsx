import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function FunctionsSection() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);
  const lineRef = useRef(null);

  const events = [
    {
      id: 1,
      title: "हल्दी एवं तेल रस्म (Haldi)",
      subtitle: "The Sacred Turmeric Glow",
      date: "26 नवंबर, 2026",
      time: "प्रातः 10:00 बजे",
      location: "सनशाइन रिसॉर्ट, उदयपुर",
      bg: "bg-[#FFFDF9]",
      border: "border-genda-yellow/40",
      accent: "#F5B041",
      // Turmeric bowl vector
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <circle cx="50" cy="50" r="40" fill="#FFF9E6" />
          <path d="M 25 65 C 25 80, 75 80, 75 65 C 75 58, 62 55, 50 55 C 38 55, 25 58, 25 65 Z" fill="#F5B041" stroke="#E67E22" strokeWidth="2" />
          <ellipse cx="50" cy="57" rx="20" ry="6" fill="#F39C12" />
          <circle cx="35" cy="52" r="3" fill="#E67E22" />
          <circle cx="65" cy="52" r="3" fill="#E67E22" />
          <circle cx="50" cy="50" r="3.5" fill="#FFFDF9" />
        </svg>
      )
    },
    {
      id: 2,
      title: "मेहंदी एवं संगीत (Mehendi)",
      subtitle: "Henna & Musical Beats",
      date: "27 नवंबर, 2026",
      time: "अपराह्न 04:00 बजे",
      location: "अरावली बाग, उदयपुर",
      bg: "bg-[#FFFDF9]",
      border: "border-soft-green/40",
      accent: "#8FA89B",
      // Henna cone & hand paisley vector
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <circle cx="50" cy="50" r="40" fill="#F0F5EE" />
          <path d="M 50 20 C 35 35, 30 50, 50 75 C 70 50, 65 35, 50 20 Z" stroke="#8FA89B" strokeWidth="2" fill="none" />
          <path d="M 50 30 C 40 42, 40 52, 50 62 C 60 52, 60 42, 50 30 Z" fill="#8FA89B" opacity="0.3" />
          <line x1="20" y1="20" x2="40" y2="40" stroke="#E67E22" strokeWidth="3" strokeLinecap="round" /> {/* henna cone */}
        </svg>
      )
    },
    {
      id: 3,
      title: "शुभ विवाह (Wedding)",
      subtitle: "The Auspicious Phera Vows",
      date: "28 नवंबर, 2026",
      time: "सायं 07:00 बजे से",
      location: "द रॉयल पैलेस, उदयपुर",
      bg: "bg-[#FFFDF9]",
      border: "border-rose-gold/40",
      accent: "#E0A899",
      // Hawan Kund Fire vector
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <circle cx="50" cy="50" r="40" fill="#FFF0F2" />
          <path d="M 30 75 L 70 75 L 62 55 L 38 55 Z" fill="#C5A059" stroke="#E0A899" strokeWidth="1.5" />
          <path d="M 50 22 C 45 42, 47 55, 50 55 C 53 55, 55 42, 50 22 Z" fill="#E67E22" className="animate-flicker" />
          <path d="M 45 35 Q 50 48, 48 55" stroke="#F5B041" strokeWidth="2" />
        </svg>
      )
    },
    {
      id: 4,
      title: "प्रीतिभोज एवं सत्कार (Reception)",
      subtitle: "Royal Dinner Banquet",
      date: "29 नवंबर, 2026",
      time: "सायं 08:00 बजे से",
      location: "लेक व्यू ग्रैंड, उदयपुर",
      bg: "bg-[#FFFDF9]",
      border: "border-gold-champagne/40",
      accent: "#D4AF37",
      // Dhol & Shehnai vector
      icon: (
        <svg viewBox="0 0 100 100" className="w-12 h-12">
          <circle cx="50" cy="50" r="40" fill="#FFF9E6" />
          {/* Dhol Barrel */}
          <rect x="30" y="42" width="40" height="22" rx="4" fill="#C5A059" stroke="#E67E22" strokeWidth="2" transform="rotate(-15 50 50)" />
          {/* Dhol straps */}
          <line x1="33" y1="42" x2="67" y2="58" stroke="#FFF" strokeWidth="1" />
          <line x1="33" y1="58" x2="67" y2="42" stroke="#FFF" strokeWidth="1" />
          {/* Shehnai crossing */}
          <line x1="20" y1="75" x2="80" y2="25" stroke="#D4AF37" strokeWidth="2.5" />
        </svg>
      )
    },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Connecting line animation
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          duration: 2,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 80%",
            scrub: true,
          },
        }
      );

      // Stagger cards
      cardsRef.current.forEach((card, index) => {
        const xOffset = index % 2 === 0 ? -60 : 60;
        gsap.fromTo(
          card,
          { opacity: 0, x: xOffset, scale: 0.94 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 1.3,
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              end: "bottom 60%",
              toggleActions: "play none none none",
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full py-24 px-4 md:px-8 bg-gradient-to-b from-[#F5ECE1] via-[#FFFDF9] to-[#FFFDF9] flex flex-col items-center overflow-hidden"
    >
      
      {/* Decorative Title */}
      <div className="text-center mb-20 select-none">
        <span className="font-cinzel text-xs tracking-[0.45em] uppercase text-soft-green font-bold block mb-2">
          Mangalik Prasang
        </span>
        <h2 className="font-hindi text-3xl md:text-4xl font-bold tracking-wide text-genda-orange drop-shadow-xs">
          मांगलिक कार्यक्रम विवरण
        </h2>
        <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-genda-yellow to-transparent mx-auto mt-4" />
      </div>

      {/* Garland divider in the center for desktop */}
      <div className="absolute left-1/2 top-48 bottom-48 w-[1.5px] -translate-x-1/2 pointer-events-none hidden md:block">
        <div className="w-full h-full bg-genda-yellow/20 border-dashed border-r border-genda-orange/40" />
      </div>

      {/* Cards Stack */}
      <div className="relative max-w-4xl w-full flex flex-col gap-16 md:gap-24">
        {events.map((event, index) => {
          const isEven = index % 2 === 0;

          return (
            <div
              key={event.id}
              ref={(el) => {
                if (el) cardsRef.current[index] = el;
              }}
              className={`flex flex-col md:flex-row items-center w-full ${
                isEven ? "md:justify-start" : "md:justify-end"
              }`}
            >
              {/* Card */}
              <div
                className={`relative w-full md:w-[45%] rounded-2xl p-6 md:p-8 border border-gold-champagne/30 ${event.bg} ${event.border} shadow-lg genda-shadow hover:scale-[1.02] transition-all duration-300 group cursor-default`}
              >
                
                {/* Traditional Background Motif */}
                <div className="absolute right-4 bottom-4 w-16 h-16 opacity-5 pointer-events-none group-hover:rotate-12 transition-transform duration-500 text-genda-orange">
                  <svg viewBox="0 0 100 100" fill="none" stroke="currentColor" className="w-full h-full">
                    <circle cx="50" cy="50" r="40" strokeWidth="2" strokeDasharray="3 3" />
                    <circle cx="50" cy="50" r="28" strokeWidth="1" />
                    <path d="M 50 10 L 50 90 M 10 50 L 90 50" />
                  </svg>
                </div>

                {/* Card Corners */}
                <div className="absolute top-2 left-2 w-3.5 h-3.5 border-t border-l border-genda-yellow" />
                <div className="absolute bottom-2 right-2 w-3.5 h-3.5 border-b border-r border-genda-yellow" />

                {/* Event Icon and Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 rounded-full bg-cream border border-genda-yellow/20 flex items-center justify-center shadow-md group-hover:rotate-6 transition-transform duration-300">
                    {event.icon}
                  </div>
                  <div>
                    <h3 className="font-hindi text-lg md:text-xl font-bold text-wedding-charcoal">
                      {event.title}
                    </h3>
                    <p className="font-cinzel text-[10px] tracking-[0.25em] text-soft-green font-bold uppercase mt-0.5">
                      {event.subtitle}
                    </p>
                  </div>
                </div>

                {/* Event Schedule details */}
                <div className="space-y-3 font-hindi text-sm text-wedding-charcoal/85 border-t border-gold-champagne/15 pt-4">
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-genda-orange text-xs uppercase tracking-wider font-cinzel">
                      Date
                    </span>
                    <span className="font-semibold text-wedding-charcoal">{event.date}</span>
                  </div>
                  
                  <div className="flex items-center justify-between">
                    <span className="font-bold text-genda-orange text-xs uppercase tracking-wider font-cinzel">
                      Time
                    </span>
                    <span className="font-semibold text-wedding-charcoal">{event.time}</span>
                  </div>

                  <div className="flex flex-col gap-1 border-t border-dashed border-gold-champagne/10 pt-3 mt-1">
                    <span className="font-bold text-genda-orange text-xs uppercase tracking-wider font-cinzel">
                      Venue
                    </span>
                    <span className="font-semibold text-wedding-charcoal/90 text-[13px]">
                      {event.location}
                    </span>
                  </div>
                </div>

              </div>

              {/* Central Genda phool blossom connector on desktop */}
              <div className="absolute left-1/2 -translate-x-1/2 w-6 h-6 rounded-full bg-genda-yellow border border-genda-orange shadow-md hidden md:flex items-center justify-center text-[10px] text-genda-orange font-bold pointer-events-none z-10 animate-pulse">
                ✿
              </div>

            </div>
          );
        })}
      </div>

    </div>
  );
}

export default FunctionsSection;
