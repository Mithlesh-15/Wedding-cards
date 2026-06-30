import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { IoMapOutline } from "react-icons/io5";

gsap.registerPlugin(ScrollTrigger);

function LocationSection() {
  const containerRef = useRef(null);
  const frameRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        frameRef.current,
        {
          opacity: 0,
          scale: 0.96,
          filter: "blur(6px)",
        },
        {
          opacity: 1,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
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
      className="relative w-full py-24 px-4 md:px-8 bg-gradient-to-b from-[#FFFDF9] to-[#F5ECE1] flex flex-col items-center overflow-hidden"
    >
      
      {/* Decorative Title */}
      <div className="text-center mb-16">
        <span className="font-cinzel text-xs tracking-[0.4em] uppercase text-soft-green font-bold block mb-2">
          Wedding Venue
        </span>
        <h2 className="font-hindi text-3xl md:text-4xl font-bold tracking-wide gold-text animate-glow-pulse">
          विवाह स्थल एवं मार्गदर्शन
        </h2>
        <div className="w-16 h-[1px] bg-gold-champagne mx-auto mt-4" />
      </div>

      {/* Map Frame Container */}
      <div
        ref={frameRef}
        className="relative max-w-3xl w-full bg-[#FFFDF9] border border-rose-gold/20 p-4 md:p-6 rounded-2xl shadow-xl card-shadow z-10 flex flex-col items-center"
      >
        
        {/* Elegant Inner Borders */}
        <div className="absolute inset-2 border border-gold-champagne/40 rounded-xl pointer-events-none" />
        <div className="absolute inset-3 border border-dashed border-rose-gold/20 rounded-lg pointer-events-none" />

        {/* Hanging flower graphics left and right of the map inside frame */}
        <div className="absolute left-6 top-8 w-4 h-24 hidden md:block opacity-40">
          <svg viewBox="0 0 20 120" className="w-full h-full stroke-gold-champagne fill-none" strokeWidth="1.5">
            <line x1="10" y1="0" x2="10" y2="100" />
            <circle cx="10" cy="20" r="3" fill="#E0A899" />
            <circle cx="10" cy="50" r="3" fill="#E0A899" />
            <circle cx="10" cy="80" r="3" fill="#E0A899" />
            <path d="M 5 100 Q 10 115, 15 100" />
          </svg>
        </div>

        <div className="absolute right-6 top-8 w-4 h-24 hidden md:block opacity-40">
          <svg viewBox="0 0 20 120" className="w-full h-full stroke-gold-champagne fill-none" strokeWidth="1.5">
            <line x1="10" y1="0" x2="10" y2="100" />
            <circle cx="10" cy="20" r="3" fill="#E0A899" />
            <circle cx="10" cy="50" r="3" fill="#E0A899" />
            <circle cx="10" cy="80" r="3" fill="#E0A899" />
            <path d="M 5 100 Q 10 115, 15 100" />
          </svg>
        </div>

        {/* Map Header */}
        <div className="text-center mb-6 relative z-10">
          <h3 className="font-cinzel text-lg md:text-xl font-bold text-wedding-charcoal">
            The Royal Palace
          </h3>
          <p className="font-hindi text-sm text-wedding-charcoal/70 mt-1">
            लेक पिचोला रोड, उदयपुर, राजस्थान - ३१३००१
          </p>
        </div>

        {/* Google Map Iframe (embedded inside floral border container) */}
        <div className="w-full aspect-[16/9] max-h-96 rounded-xl overflow-hidden border border-gold-champagne/25 shadow-inner relative z-10">
          <iframe
            title="Wedding Venue Map"
            src="https://maps.google.com/maps?q=The%20Royal%20Palace%20Lake%20Pichola%20Udaipur%20Rajasthan&t=&z=14&ie=UTF8&iwloc=&output=embed"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="filter saturate-90 brightness-95 opacity-90 hover:opacity-100 transition-opacity duration-300"
          />
        </div>

        {/* Golden Action Button "मार्ग देखें" */}
        <a
          href="https://maps.google.com/?q=Udaipur+Rajasthan"
          target="_blank"
          rel="noopener noreferrer"
          className="relative mt-8 px-8 py-3.5 bg-gradient-to-r from-gold-dark via-gold-champagne to-gold-dark text-cream font-hindi font-semibold text-base tracking-wide rounded-full shadow-lg hover:scale-105 active:scale-95 transition-all duration-300 group flex items-center gap-2.5 z-10 border border-cream/20 animate-glow-pulse"
        >
          <IoMapOutline className="text-xl group-hover:rotate-12 transition-transform duration-300" />
          <span>मार्ग देखें</span>
          
          {/* Inner shiny overlay */}
          <div className="absolute inset-0 rounded-full bg-white/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />
        </a>

      </div>

    </div>
  );
}

export default LocationSection;
