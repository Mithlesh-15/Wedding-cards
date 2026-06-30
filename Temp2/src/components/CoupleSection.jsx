import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function CoupleSection() {
  const containerRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        {
          opacity: 0,
          y: 70,
          rotationY: -10,
        },
        {
          opacity: 1,
          y: 0,
          rotationY: 0,
          duration: 1.4,
          stagger: 0.3,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 50%",
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
      className="relative w-full py-24 px-4 md:px-8 bg-gradient-to-b from-[#FFFDF9] via-[#FDFBF7] to-[#F5ECE1] flex flex-col items-center overflow-hidden"
    >
      
      {/* Decorative Jharokha top divider */}
      <div className="flex items-center gap-3 mb-16 select-none">
        <div className="w-12 md:w-20 h-[1px] bg-genda-yellow" />
        <span className="font-hindi text-xl text-genda-orange font-bold">वर-वधू का परिचय</span>
        <div className="w-12 md:w-20 h-[1px] bg-genda-yellow" />
      </div>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-4xl w-full px-4">
        
        {/* GROOM CARD (वर) */}
        <div
          ref={(el) => {
            if (el) cardsRef.current[0] = el;
          }}
          className="group relative bg-[#FFFDF9] border border-gold-champagne/30 rounded-2xl p-6 md:p-8 shadow-xl genda-shadow flex flex-col md:flex-row gap-6 md:gap-8 hover:scale-[1.02] transition-all duration-300 overflow-hidden cursor-default"
        >
          {/* Top Marigold Garlands overlay */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-genda-yellow via-genda-orange to-genda-yellow" />

          {/* Jharokha Shaped Portrait Frame */}
          <div className="w-full md:w-44 h-60 flex-shrink-0 bg-gradient-to-b from-[#FFF9E6] to-[#F5ECE1] jharokha-clip relative border-2 border-gold-champagne/30 shadow-inner flex items-center justify-center p-3">
            
            {/* Peacock Feather Vector */}
            <div className="absolute top-1 w-8 h-10 opacity-30">
              <svg viewBox="0 0 100 100" fill="none" stroke="#D4AF37">
                <path d="M 50 100 C 50 70, 50 50, 50 20" strokeWidth="3" />
                <ellipse cx="50" cy="25" rx="14" ry="20" fill="url(#gendaGrad)" />
                <circle cx="50" cy="25" r="7" fill="#8FA89B" />
              </svg>
            </div>

            {/* Groom Portrait Photograph */}
            <img 
              src="https://images.unsplash.com/photo-1607190074257-dd4b7af0309f?q=80&w=500" 
              alt="Groom Kabir" 
              className="w-full h-full object-cover filter saturate-105 brightness-95 mt-4"
            />
            
            <div className="absolute bottom-2 bg-genda-orange text-cream text-[9px] tracking-widest font-cinzel px-2 py-0.5 rounded-full">
              GROOM
            </div>
          </div>

          {/* Details Content */}
          <div className="flex flex-col justify-center flex-grow pl-2">
            <span className="font-handwritten text-3xl text-genda-orange">वर (Groom)</span>
            <h3 className="font-cinzel text-xl md:text-2xl font-bold tracking-wide text-wedding-charcoal mt-1">
              Kabir Sharma
            </h3>
            
            {/* Elegant Marigold flower divider line */}
            <div className="flex items-center gap-1.5 my-3">
              <div className="w-10 h-[1px] bg-genda-yellow" />
              <span className="text-[10px] text-genda-orange">✿</span>
              <div className="w-10 h-[1px] bg-genda-yellow animate-pulse" />
            </div>

            <div className="space-y-1.5 font-hindi text-sm text-wedding-charcoal/85">
              <p>
                <span className="text-soft-green font-bold">सुपुत्र:</span> श्रीमती सुशीला एवं श्री देवदत्त शर्मा
              </p>
              <p>
                <span className="text-soft-green font-bold">निवास स्थान:</span> उदयपुर, राजस्थान
              </p>
            </div>
          </div>
        </div>

        {/* BRIDE CARD (वधू) */}
        <div
          ref={(el) => {
            if (el) cardsRef.current[1] = el;
          }}
          className="group relative bg-[#FFFDF9] border border-gold-champagne/30 rounded-2xl p-6 md:p-8 shadow-xl genda-shadow flex flex-col md:flex-row gap-6 md:gap-8 hover:scale-[1.02] transition-all duration-300 overflow-hidden cursor-default"
        >
          {/* Top Marigold Garlands overlay */}
          <div className="absolute top-0 inset-x-0 h-2 bg-gradient-to-r from-genda-yellow via-genda-orange to-genda-yellow" />

          {/* Jharokha Shaped Portrait Frame */}
          <div className="w-full md:w-44 h-60 flex-shrink-0 bg-gradient-to-b from-[#FFF9E6] to-[#F5ECE1] jharokha-clip relative border-2 border-gold-champagne/30 shadow-inner flex items-center justify-center p-3">
            
            {/* Peacock Feather Vector */}
            <div className="absolute top-1 w-8 h-10 opacity-30">
              <svg viewBox="0 0 100 100" fill="none" stroke="#D4AF37">
                <path d="M 50 100 C 50 70, 50 50, 50 20" strokeWidth="3" />
                <ellipse cx="50" cy="25" rx="14" ry="20" fill="url(#gendaGrad)" />
                <circle cx="50" cy="25" r="7" fill="#8FA89B" />
              </svg>
            </div>

            {/* Bride Portrait Photograph */}
            <img 
              src="https://images.unsplash.com/photo-1595777457583-95e059d581b8?q=80&w=500" 
              alt="Bride Ira" 
              className="w-full h-full object-cover filter saturate-105 brightness-95 mt-4"
            />
            
            <div className="absolute bottom-2 bg-genda-orange text-cream text-[9px] tracking-widest font-cinzel px-2 py-0.5 rounded-full">
              BRIDE
            </div>
          </div>

          {/* Details Content */}
          <div className="flex flex-col justify-center flex-grow pl-2">
            <span className="font-handwritten text-3xl text-genda-orange">वधू (Bride)</span>
            <h3 className="font-cinzel text-xl md:text-2xl font-bold tracking-wide text-wedding-charcoal mt-1">
              Ira Trivedi
            </h3>
            
            {/* Elegant Marigold flower divider line */}
            <div className="flex items-center gap-1.5 my-3">
              <div className="w-10 h-[1px] bg-genda-yellow" />
              <span className="text-[10px] text-genda-orange">✿</span>
              <div className="w-10 h-[1px] bg-genda-yellow animate-pulse" />
            </div>

            <div className="space-y-1.5 font-hindi text-sm text-wedding-charcoal/85">
              <p>
                <span className="text-soft-green font-bold">सुपुत्री:</span> श्रीमती रजनी देवी एवं श्री कैलाश त्रिवेदी
              </p>
              <p>
                <span className="text-soft-green font-bold">निवास स्थान:</span> जयपुर, राजस्थान
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default CoupleSection;
