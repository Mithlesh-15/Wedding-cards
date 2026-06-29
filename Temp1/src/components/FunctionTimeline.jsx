import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const events = [
  {
    name: 'हल्दी',
    engName: 'Haldi Ceremony',
    date: '18 फरवरी 2027',
    time: 'सुबह 10:00 बजे',
    venue: 'शर्मा निवास',
    desc: 'हल्दी की रस्म और संगीतमयी उत्सव',
    color: '#FBBF24', // Gold/Yellow theme
    icon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#EAB308]">
        {/* Bowl of Turmeric Paste */}
        <path d="M20 50 C20 70, 80 70, 80 50 Z" fill="currentColor" />
        <ellipse cx="50" cy="50" rx="30" ry="10" fill="#CA8A04" />
        {/* Spoon/Stick */}
        <rect x="58" y="30" width="6" height="25" rx="3" fill="#854D0E" transform="rotate(30, 58, 30)" />
        {/* Small Marigold flowers around */}
        <circle cx="25" cy="46" r="4" fill="#F97316" />
        <circle cx="75" cy="46" r="4" fill="#F97316" />
        <circle cx="50" cy="36" r="3" fill="#F97316" />
      </svg>
    ),
  },
  {
    name: 'मेहंदी',
    engName: 'Mehndi Rasam',
    date: '19 फरवरी 2027',
    time: 'दोपहर 2:00 बजे',
    venue: 'शर्मा भवन',
    desc: 'हाथों में रचेगी पिया के नाम की लाली',
    color: '#059669', // Green theme
    icon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#10B981]">
        {/* Mehndi Cone & Mandala Pattern */}
        <circle cx="50" cy="50" r="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" fill="none" />
        <path d="M50 35 C42 42, 42 58, 50 65 C58 58, 58 42, 50 35 Z" fill="currentColor" opacity="0.8" />
        <circle cx="50" cy="50" r="6" fill="#047857" />
        {/* Mehndi cones */}
        <path d="M20 15 L32 45 L26 48 Z" fill="#065F46" />
        <line x1="32" y1="45" x2="35" y2="52" stroke="#10B981" strokeWidth="2" />
      </svg>
    ),
  },
  {
    name: 'संगीत',
    engName: 'Sangeet Night',
    date: '19 फरवरी 2027',
    time: 'रात्रि 7:00 बजे',
    venue: 'Royal Garden',
    desc: 'गीतों और सुरों की महफ़िल, अपनों के संग',
    color: '#7C3AED', // Purple/Violin theme
    icon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#8B5CF6]">
        {/* Dholak (Indian Drum) */}
        <rect x="25" y="35" width="50" height="30" rx="8" fill="currentColor" />
        <ellipse cx="25" cy="50" rx="6" ry="15" fill="#4C1D95" />
        <ellipse cx="75" cy="50" rx="6" ry="15" fill="#4C1D95" />
        <ellipse cx="25" cy="50" rx="3" ry="10" fill="#A78BFA" />
        <ellipse cx="75" cy="50" rx="3" ry="10" fill="#A78BFA" />
        {/* Strips on dholak */}
        <line x1="28" y1="38" x2="72" y2="62" stroke="#F5F3FF" strokeWidth="1" />
        <line x1="28" y1="62" x2="72" y2="38" stroke="#F5F3FF" strokeWidth="1" />
      </svg>
    ),
  },
  {
    name: 'विवाह',
    engName: 'The Holy Wedding',
    date: '20 फरवरी 2027',
    time: 'सायं 7:00 बजे',
    venue: 'The Royal Palace',
    desc: 'सात फेरे, सात वचन, सात जन्मों का बंधन',
    color: '#EF4444', // Wedding Red/Gold theme
    icon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#EF4444]">
        {/* Sacred Fire (Havan Kund) */}
        <polygon points="20,70 80,70 70,85 30,85" fill="#B91C1C" />
        <polygon points="25,75 75,75 68,82 32,82" fill="#991B1B" />
        {/* Fire Flames */}
        <path d="M50 20 C45 35 35 45 42 65 C48 60 52 60 58 65 C65 45 55 35 50 20 Z" fill="#F59E0B" />
        <path d="M50 35 C47 45 40 50 45 65 C48 62 52 62 55 65 C60 50 53 45 50 35 Z" fill="#EF4444" />
        {/* Small logs of wood */}
        <rect x="35" y="66" width="30" height="5" rx="1.5" fill="#78350F" transform="rotate(10, 50, 68)" />
        <rect x="35" y="66" width="30" height="5" rx="1.5" fill="#78350F" transform="rotate(-10, 50, 68)" />
      </svg>
    ),
  },
  {
    name: 'रिसेप्शन',
    engName: 'Wedding Reception',
    date: '21 फरवरी 2027',
    time: 'रात्रि 8:00 बजे',
    venue: 'Celebration Hall',
    desc: 'नव-दम्पति को आशीर्वाद एवं प्रीतिभोज',
    color: '#3B82F6', // Royal Blue/Feast theme
    icon: (
      <svg viewBox="0 0 100 100" className="w-12 h-12 text-[#3B82F6]">
        {/* Royal Feast/Toast */}
        <circle cx="50" cy="50" r="30" fill="currentColor" opacity="0.3" />
        {/* Plates and glasses */}
        <ellipse cx="50" cy="65" rx="24" ry="12" fill="currentColor" />
        <ellipse cx="50" cy="65" rx="20" ry="8" fill="#1E3A8A" />
        {/* Two goblets crossing */}
        <path d="M38 35 H48 L43 50 Z" fill="#F59E0B" />
        <line x1="43" y1="50" x2="43" y2="58" stroke="#F59E0B" strokeWidth="2" />
        <path d="M62 35 H52 L57 50 Z" fill="#F59E0B" />
        <line x1="57" y1="50" x2="57" y2="58" stroke="#F59E0B" strokeWidth="2" />
      </svg>
    ),
  },
];

const FunctionTimeline = () => {
  const cardsRef = useRef([]);
  const lineRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    cardsRef.current = cardsRef.current.slice(0, events.length);

    // Timeline center line expansion
    gsap.fromTo(
      lineRef.current,
      { scaleY: 0 },
      {
        scaleY: 1,
        transformOrigin: 'top center',
        scrollTrigger: {
          trigger: containerRef.current,
          start: 'top 70%',
          end: 'bottom 85%',
          scrub: true,
        },
      }
    );

    // Cards staggered animations on scroll
    cardsRef.current.forEach((card, index) => {
      const isEven = index % 2 === 0;
      gsap.fromTo(
        card,
        {
          opacity: 0,
          x: window.innerWidth < 1024 ? 0 : isEven ? -80 : 80,
          y: window.innerWidth < 1024 ? 50 : 0,
        },
        {
          opacity: 1,
          x: 0,
          y: 0,
          duration: 1.0,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        }
      );
    });

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-ivory overflow-hidden z-10 px-4 md:px-8"
    >
      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Section Title */}
        <div className="text-center mb-20">
          <span className="font-hindi text-gold-royal text-xl md:text-2xl font-bold block mb-2 tracking-widest glow-gold-text">
            विवाह उत्सव कार्यक्रम
          </span>
          <h2 className="font-cormorant text-3xl md:text-5xl font-semibold text-maroon-royal mt-1 italic">
            Wedding Ceremonies
          </h2>
          <div className="w-16 h-1 w-16 bg-gold-royal mx-auto mt-4 rounded" />
        </div>

        {/* Timeline Path Container */}
        <div className="relative w-full flex flex-col">
          
          {/* Central Thread Line (Bead-inspired line) */}
          <div
            ref={lineRef}
            className="absolute left-4 lg:left-1/2 top-4 bottom-4 w-[2px] bg-gradient-to-b from-gold-royal via-maroon-royal to-gold-royal transform lg:-translate-x-1/2 pointer-events-none hidden md:block"
          />

          {/* Timeline Cards Grid */}
          <div className="flex flex-col gap-12 lg:gap-16 w-full relative">
            {events.map((event, index) => {
              const isEven = index % 2 === 0;
              return (
                <div
                  key={index}
                  className={`flex flex-col lg:flex-row items-start lg:items-center w-full ${
                    isEven ? 'lg:flex-row-reverse' : ''
                  }`}
                >
                  
                  {/* Timeline Dot (Traditional flower motif) */}
                  <div className="absolute left-[9px] lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full border-2 border-gold-royal bg-maroon-royal z-20 shadow-md hidden md:block" />

                  {/* Card Container */}
                  <div
                    ref={(el) => (cardsRef.current[index] = el)}
                    className={`w-full lg:w-[46%] ml-8 lg:ml-0`}
                  >
                    <div className="relative bg-cream p-6 md:p-8 rounded-xl shadow-lg border-[1px] border-gold-royal/30 hover:border-gold-royal/60 transition-colors duration-300 overflow-hidden">
                      
                      {/* Sub-border corner ornaments */}
                      <div className="absolute top-1.5 left-1.5 w-3 h-3 border-t-[1px] border-l-[1px] border-gold-royal/60" />
                      <div className="absolute top-1.5 right-1.5 w-3 h-3 border-t-[1px] border-r-[1px] border-gold-royal/60" />
                      <div className="absolute bottom-1.5 left-1.5 w-3 h-3 border-b-[1px] border-l-[1px] border-gold-royal/60" />
                      <div className="absolute bottom-1.5 right-1.5 w-3 h-3 border-b-[1px] border-r-[1px] border-gold-royal/60" />

                      {/* Header containing Icon & Event Name */}
                      <div className="flex items-center gap-4 mb-4 pb-4 border-b-[1px] border-gold-royal/20">
                        <div 
                          className="p-2.5 rounded-full bg-ivory border-[1px] border-gold-royal/25 shadow-inner"
                          style={{ boxShadow: `inset 0 0 10px rgba(${event.color === '#FBBF24' ? '234,179,8' : event.color === '#059669' ? '16,185,129' : '122,0,25'}, 0.08)` }}
                        >
                          {event.icon}
                        </div>
                        <div>
                          <h3 className="font-hindi text-2xl font-bold text-maroon-royal leading-tight tracking-wide">
                            {event.name}
                          </h3>
                          <span className="font-cormorant text-xs md:text-sm text-dark-brown/65 uppercase tracking-widest font-semibold mt-0.5 block">
                            {event.engName}
                          </span>
                        </div>
                      </div>

                      {/* Event details */}
                      <div className="flex flex-col gap-2 font-hindi text-sm md:text-base text-dark-brown/85">
                        
                        {/* Shloka/Intro detail */}
                        <p className="text-maroon-royal/80 italic text-xs md:text-sm font-medium mb-2">
                          “ {event.desc} ”
                        </p>

                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-gold-royal w-5 text-center">📅</span>
                          <span>{event.date}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-gold-royal w-5 text-center">⏰</span>
                          <span>{event.time}</span>
                        </div>

                        <div className="flex items-center gap-2">
                          <span className="text-gold-royal w-5 text-center">📍</span>
                          <span className="font-semibold text-maroon-royal">{event.venue}</span>
                        </div>
                      </div>

                    </div>
                  </div>

                  {/* Empty space filler for desktop spacing */}
                  <div className="hidden lg:block w-[8%]" />
                </div>
              );
            })}
          </div>

        </div>
      </div>
    </section>
  );
};

export default FunctionTimeline;
