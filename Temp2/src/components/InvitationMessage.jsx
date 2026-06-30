import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function InvitationMessage() {
  const cardRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardRef.current,
        {
          opacity: 0,
          y: 50,
          scale: 0.96,
          filter: "blur(6px)",
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          filter: "blur(0px)",
          duration: 1.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 80%",
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
      className="relative w-full py-24 px-4 md:px-8 bg-gradient-to-b from-[#F5ECE1] to-[#FFFDF9] flex justify-center overflow-hidden"
    >
      
      {/* Background Decorative traditional Mandalas */}
      <div className="absolute -left-20 top-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-genda-orange animate-spin-slow">
          <circle cx="50" cy="50" r="42" strokeWidth="0.8" />
          <circle cx="50" cy="50" r="32" strokeWidth="0.5" />
          <path d="M 50 10 L 50 90 M 10 50 L 90 50 M 22 22 L 78 78" strokeWidth="0.4" />
          {Array.from({ length: 16 }).map((_, i) => (
            <circle
              key={i}
              cx="50"
              cy="20"
              r="3"
              fill="#F5B041"
              transform={`rotate(${i * 22.5} 50 50)`}
            />
          ))}
        </svg>
      </div>

      <div className="absolute -right-20 top-1/2 -translate-y-1/2 w-80 h-80 opacity-[0.05] pointer-events-none">
        <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-genda-orange animate-spin-slow">
          <circle cx="50" cy="50" r="42" strokeWidth="0.8" />
          <circle cx="50" cy="50" r="32" strokeWidth="0.5" />
          <path d="M 50 10 L 50 90 M 10 50 L 90 50 M 22 22 L 78 78" strokeWidth="0.4" />
          {Array.from({ length: 16 }).map((_, i) => (
            <circle
              key={i}
              cx="50"
              cy="20"
              r="3"
              fill="#F5B041"
              transform={`rotate(${i * 22.5} 50 50)`}
            />
          ))}
        </svg>
      </div>

      {/* Royal Wedding Card Frame */}
      <div
        ref={cardRef}
        className="relative max-w-2xl w-full bg-[#FFFDF9] border border-gold-champagne/30 rounded-2xl p-6 md:p-12 shadow-xl genda-shadow z-10"
      >
        
        {/* Double Inner Frame (Gold-Champagne gradient with scalloped arch hints) */}
        <div className="absolute inset-3 border border-gold-champagne/45 rounded-xl pointer-events-none" />
        <div className="absolute inset-4.5 border border-dashed border-genda-orange/20 rounded-lg pointer-events-none" />

        {/* Marigold Corner Clusters (SVG) */}
        {["top-6 left-6", "top-6 right-6 scale-x-[-1]", "bottom-6 left-6 scale-y-[-1]", "bottom-6 right-6 scale-x-[-1] scale-y-[-1]"].map((pos, idx) => (
          <div key={idx} className={`absolute ${pos} w-8 h-8 md:w-12 md:h-12 pointer-events-none`}>
            <svg viewBox="0 0 50 50" className="w-full h-full fill-none">
              <circle cx="12" cy="12" r="6" fill="#F5B041" />
              <circle cx="26" cy="12" r="5" fill="#E67E22" />
              <circle cx="12" cy="26" r="5" fill="#E67E22" />
              <circle cx="20" cy="20" r="4" fill="#FFFDF9" stroke="#E0A899" strokeWidth="0.5" />
            </svg>
          </div>
        ))}

        {/* Content */}
        <div className="flex flex-col items-center text-center relative z-10 py-6">
          
          {/* Detailed Golden Ganesha Icon */}
          <div className="w-20 h-20 mb-6 drop-shadow-sm">
            <svg viewBox="0 0 100 100" className="w-full h-full fill-none stroke-gold-champagne" strokeWidth="2">
              <path d="M 50 10 C 38 10, 32 20, 32 35 C 32 50, 48 55, 48 65 C 48 70, 42 72, 42 75 C 42 80, 58 80, 58 75 C 58 72, 52 70, 52 65 C 52 55, 68 50, 68 35 C 68 20, 62 10, 50 10 Z" fill="#FFFDF9" />
              <circle cx="50" cy="40" r="3" fill="#E67E22" />
              <path d="M 40 40 L 40 45 M 60 40 L 60 45 M 50 35 L 50 48" />
              <path d="M 38 30 C 42 22, 58 22, 62 30" strokeDasharray="3 3" />
              <circle cx="50" cy="85" r="4" fill="#F5B041" /> {/* Modak */}
            </svg>
          </div>

          <h2 className="font-hindi text-base tracking-widest text-genda-orange font-bold uppercase mb-4">
            ।। श्री गणेशाय नमः ।।
          </h2>

          <h3 className="font-cinzel text-xs tracking-[0.35em] text-gold-dark font-bold mb-6">
            MANGALIK INVITATION
          </h3>

          <div className="font-hindi text-wedding-charcoal leading-loose text-base md:text-lg max-w-lg space-y-4 px-2">
            <p className="text-wedding-charcoal/80">
              परमपिता परमेश्वर की असीम अनुकंपा एवं पूजनीय पूर्वजों के मंगल आशीर्वाद से,
            </p>
            <p className="text-genda-orange font-bold text-lg md:text-xl">
              परिणय आमंत्रण
            </p>
            <p>
              हमारे प्रिय पुत्र <span className="font-bold text-genda-orange text-xl md:text-2xl drop-shadow-xs">कबीर</span> (सुपुत्र श्रीमती सुशीला एवं श्री देवदत्त शर्मा) एवं परम आदरणीया सुपुत्री <span className="font-bold text-genda-orange text-xl md:text-2xl drop-shadow-xs">इरा</span> (सुपुत्री श्रीमती रजनी एवं श्री कैलाश त्रिवेदी) के पावन विवाह समारोह में आपका स्नेहिल आमंत्रण स्वीकार्य है।
            </p>
            <p className="text-sm md:text-base text-wedding-charcoal/85 italic font-semibold pt-4">
              "तुलसी दल और दूर्वांकुर संग अक्षत-कुमकुम भाल धरे,  
              मंगलोत्सव के शुभ क्षण में आपका स्नेही आह्वान करें।"
            </p>
          </div>

          {/* Golden Flower Divider */}
          <div className="flex items-center justify-center gap-3 my-8 w-2/3">
            <div className="h-[0.5px] bg-gold-champagne/40 flex-grow" />
            <span className="text-[#F5B041] text-xs">✿</span>
            <span className="text-[#E67E22] text-sm">✿</span>
            <span className="text-[#F5B041] text-xs">✿</span>
            <div className="h-[0.5px] bg-gold-champagne/40 flex-grow" />
          </div>

          {/* Inviter Info */}
          <div className="font-hindi text-wedding-charcoal">
            <p className="text-xs md:text-sm tracking-wider uppercase font-cinzel text-soft-green font-bold mb-1">
              Cordial Inviter
            </p>
            <p className="font-semibold text-base md:text-lg">
              श्रीमती एवं श्री देवदत्त शर्मा
            </p>
            <p className="text-xs text-wedding-charcoal/70 mt-1">
              एवं समस्त शर्मा परिवार (उदयपुर)
            </p>
          </div>

        </div>

      </div>
    </div>
  );
}

export default InvitationMessage;
