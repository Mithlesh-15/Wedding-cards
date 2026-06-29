import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const FooterSection = () => {
  const containerRef = useRef(null);
  const shlokaRef = useRef(null);
  const messageRef = useRef(null);
  const signatureRef = useRef(null);
  const diyasRef = useRef(null);

  useEffect(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: containerRef.current,
        start: 'top 80%',
      },
    });

    // Stagger reveal of footer text groups
    tl.fromTo(
      shlokaRef.current,
      { opacity: 0, y: 25 },
      { opacity: 1, y: 0, duration: 1.0, ease: 'power2.out' }
    )
      .fromTo(
        messageRef.current,
        { opacity: 0, y: 20 },
        { opacity: 1, y: 0, duration: 0.8, ease: 'power2.out' },
        '-=0.5'
      )
      .fromTo(
        signatureRef.current,
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1.0, ease: 'back.out(1.2)' },
        '-=0.4'
      )
      .fromTo(
        diyasRef.current.children,
        { opacity: 0, y: 15 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power2.out' },
        '-=0.6'
      );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <footer
      ref={containerRef}
      className="relative py-24 bg-gradient-to-b from-[#3B000B] to-[#1E0005] text-ivory text-center overflow-hidden z-10 px-4 md:px-8 shadow-2xl"
    >
      {/* Repeating Marigold Garland at the top of the footer */}
      <div className="absolute top-0 left-0 w-full h-4 flex justify-between overflow-hidden opacity-60">
        {Array.from({ length: 40 }).map((_, i) => (
          <div key={i} className="w-3 h-3 rounded-full bg-amber-500 shadow-sm border-[1.5px] border-amber-600 -mt-1 flex-shrink-0" />
        ))}
      </div>

      <div className="max-w-4xl mx-auto flex flex-col items-center relative z-10">
        
        {/* Sanskrit Blessing Shloka */}
        <div 
          ref={shlokaRef} 
          className="font-hindi text-base md:text-xl leading-relaxed text-gold-royal/90 italic tracking-wider max-w-xl mx-auto border-[1px] border-gold-royal/20 p-6 rounded-2xl bg-black/10 backdrop-blur-[1px] mb-12 relative"
        >
          {/* Subtle inside borders */}
          <div className="absolute top-1 left-1 w-2.5 h-2.5 border-t-[1px] border-l-[1px] border-gold-royal/50" />
          <div className="absolute top-1 right-1 w-2.5 h-2.5 border-t-[1px] border-r-[1px] border-gold-royal/50" />
          <div className="absolute bottom-1 left-1 w-2.5 h-2.5 border-b-[1px] border-l-[1px] border-gold-royal/50" />
          <div className="absolute bottom-1 right-1 w-2.5 h-2.5 border-b-[1px] border-r-[1px] border-gold-royal/50" />

          <p className="mb-2">सर्वे भवन्तु सुखिनः। सर्वे सन्तु निरामयाः।</p>
          <p>सर्वे भद्राणि पश्यन्तु। मा कश्चिद् दुःखभाग्भवेत्॥</p>
          <span className="text-[11px] md:text-xs text-gold-light/60 tracking-widest uppercase block mt-3 font-cormorant font-light">
            (May everyone be happy, may everyone be free from illness, may everyone see what is auspicious, may no one suffer.)
          </span>
        </div>

        {/* Welcoming message */}
        <div ref={messageRef} className="font-hindi text-lg md:text-xl leading-loose tracking-wide text-gold-light/95 max-w-lg mb-12">
          <p>आपका स्नेहिल आगमन</p>
          <p>हमारे लिए</p>
          <p className="font-semibold text-gold-royal text-xl md:text-2xl mt-1 glow-gold-text">
            सौभाग्य एवं आशीर्वाद होगा।
          </p>
        </div>

        {/* Signature Box */}
        <div 
          ref={signatureRef} 
          className="font-hindi text-base md:text-lg border-t-[1px] border-b-[1px] border-gold-royal/30 py-6 px-10 mb-16 inline-flex flex-col items-center gap-1.5"
        >
          <span className="text-gold-royal text-sm md:text-base font-semibold tracking-widest uppercase mb-1">
            सादर आमंत्रित
          </span>
          <p className="font-bold text-lg md:text-xl text-gold-light">शर्मा परिवार</p>
          <p className="text-xs text-gold-royal/70 font-light">एवं</p>
          <p className="font-bold text-lg md:text-xl text-gold-light">वर्मा परिवार</p>
        </div>

        {/* Flickering Diyas Row */}
        <div ref={diyasRef} className="flex gap-8 md:gap-16 justify-center items-end h-20">
          
          {/* Diya 1 (Left) */}
          <div className="relative flex flex-col items-center">
            <svg viewBox="0 0 100 100" className="w-10 h-10 text-gold-royal">
              {/* Flame */}
              <path d="M50 20 C50 20 44 40 44 46 C44 51 47 54 50 54 C53 54 56 51 56 46 C56 40 50 20 50 20 Z" fill="#F59E0B" className="animate-flicker" />
              {/* Body */}
              <path d="M20 55 C20 55 15 65 30 75 C45 80 55 80 70 75 C85 65 80 55 80 55 H20 Z" fill="currentColor" />
              <ellipse cx="50" cy="55" rx="30" ry="5" fill="#B45309" />
            </svg>
          </div>

          {/* Diya 2 (Center - Large) */}
          <div className="relative flex flex-col items-center transform scale-125">
            <svg viewBox="0 0 100 100" className="w-12 h-12 text-gold-royal">
              {/* Flame */}
              <path d="M50 20 C50 20 44 40 44 46 C44 51 47 54 50 54 C53 54 56 51 56 46 C56 40 50 20 50 20 Z" fill="#F59E0B" className="animate-flicker" style={{ animationDelay: '0.3s' }} />
              {/* Body */}
              <path d="M20 55 C20 55 15 65 30 75 C45 80 55 80 70 75 C85 65 80 55 80 55 H20 Z" fill="currentColor" />
              <ellipse cx="50" cy="55" rx="30" ry="5" fill="#B45309" />
            </svg>
          </div>

          {/* Diya 3 (Right) */}
          <div className="relative flex flex-col items-center">
            <svg viewBox="0 0 100 100" className="w-10 h-10 text-gold-royal">
              {/* Flame */}
              <path d="M50 20 C50 20 44 40 44 46 C44 51 47 54 50 54 C53 54 56 51 56 46 C56 40 50 20 50 20 Z" fill="#F59E0B" className="animate-flicker" style={{ animationDelay: '0.6s' }} />
              {/* Body */}
              <path d="M20 55 C20 55 15 65 30 75 C45 80 55 80 70 75 C85 65 80 55 80 55 H20 Z" fill="currentColor" />
              <ellipse cx="50" cy="55" rx="30" ry="5" fill="#B45309" />
            </svg>
          </div>

        </div>

        {/* Tiny copyright or designer watermark */}
        <div className="text-[10px] md:text-xs text-gold-light/35 font-cormorant mt-12 tracking-widest">
          © 2027 AARAV & ANANYA. ALL RIGHTS RESERVED.
        </div>
      </div>
    </footer>
  );
};

export default FooterSection;
