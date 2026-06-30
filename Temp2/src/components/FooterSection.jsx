function FooterSection() {
  return (
    <footer className="relative w-full py-20 px-4 md:px-8 bg-gradient-to-b from-[#FFFDF9] to-[#F5ECE1] flex flex-col items-center overflow-hidden border-t border-gold-champagne/15 select-none">
      
      {/* Background Decorative Mandala Light Rays */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/3 w-[500px] h-[500px] bg-radial from-[#F5B041]/15 via-transparent to-transparent opacity-70 pointer-events-none" />

      {/* Main Footer Container */}
      <div className="relative z-10 flex flex-col items-center max-w-2xl w-full text-center">
        
        {/* Beautiful Traditional Brass Stand Diyas (Samai) */}
        <div className="flex gap-12 justify-center items-end mb-8 h-28">
          
          {/* Side Samai Left */}
          <svg className="w-10 h-24 fill-none stroke-gold-champagne" viewBox="0 0 100 200">
            {/* Stand */}
            <line x1="50" y1="40" x2="50" y2="180" strokeWidth="4" />
            <path d="M 30 180 Q 50 170, 70 180 L 65 190 L 35 190 Z" fill="#C5A059" strokeWidth="2" />
            {/* Plates */}
            <ellipse cx="50" cy="110" rx="15" ry="4" fill="#FFFDF9" strokeWidth="2" />
            <ellipse cx="50" cy="40" rx="25" ry="6" fill="#FFFDF9" strokeWidth="2" />
            {/* Flame */}
            <path
              d="M 50 10 C 47 25, 48 35, 50 40 C 52 35, 53 25, 50 10 Z"
              fill="url(#goldGrad)"
              className="animate-flicker"
            />
          </svg>

          {/* Central Main Large Diya */}
          <svg className="w-20 h-20 fill-none stroke-gold-champagne drop-shadow-md" viewBox="0 0 100 100">
            <path d="M 35 90 Q 50 85, 65 90 L 60 95 L 40 95 Z" fill="#C5A059" opacity="0.4" />
            <line x1="50" y1="80" x2="50" y2="90" stroke="#C5A059" strokeWidth="3" />
            <path
              d="M 15 70 C 15 90, 85 90, 85 70 C 85 55, 68 50, 50 50 C 32 50, 15 55, 15 70 Z"
              fill="#FFFDF9"
              strokeWidth="2.5"
            />
            {/* Marigold pattern on Diya */}
            <circle cx="50" cy="74" r="4.5" fill="#F5B041" />
            <circle cx="38" cy="74" r="3.5" fill="#E67E22" />
            <circle cx="62" cy="74" r="3.5" fill="#E67E22" />
            {/* Flickering Flame */}
            <path
              d="M 50 20 C 45 40, 47 48, 50 50 C 53 48, 55 40, 50 20 Z"
              fill="url(#goldGrad)"
              className="animate-flicker"
            />
          </svg>

          {/* Side Samai Right */}
          <svg className="w-10 h-24 fill-none stroke-gold-champagne" viewBox="0 0 100 200">
            <line x1="50" y1="40" x2="50" y2="180" strokeWidth="4" />
            <path d="M 30 180 Q 50 170, 70 180 L 65 190 L 35 190 Z" fill="#C5A059" strokeWidth="2" />
            <ellipse cx="50" cy="110" rx="15" ry="4" fill="#FFFDF9" strokeWidth="2" />
            <ellipse cx="50" cy="40" rx="25" ry="6" fill="#FFFDF9" strokeWidth="2" />
            <path
              d="M 50 10 C 47 25, 48 35, 50 40 C 52 35, 53 25, 50 10 Z"
              fill="url(#goldGrad)"
              className="animate-flicker"
            />
          </svg>

        </div>

        {/* Auspicious closing blessing text */}
        <div className="font-hindi text-lg md:text-xl text-wedding-charcoal leading-loose space-y-3 px-4">
          <p>आपका स्नेहिल आगमन</p>
          <p className="text-genda-orange font-bold">हमारे लिए</p>
          <p className="gold-text font-bold text-xl md:text-2xl animate-glow-pulse">
            सबसे बड़ा आशीर्वाद होगा।
          </p>
        </div>

        {/* Marigold Swag Garland decoration under text */}
        <div className="w-48 h-10 mt-8 opacity-65 flex justify-center gap-1 select-none">
          {Array.from({ length: 9 }).map((_, i) => (
            <div
              key={i}
              className={`w-3.5 h-3.5 rounded-full ${
                i % 2 === 0 ? "bg-genda-orange" : "bg-genda-yellow"
              } shadow-sm`}
            />
          ))}
        </div>

        {/* Copyright info */}
        <div className="mt-12 text-[10px] tracking-[0.2em] font-cinzel text-soft-green font-bold uppercase opacity-65">
          © 2026 Kabir & Ira Wedding • Shubh Vivah
        </div>

      </div>

    </footer>
  );
}

export default FooterSection;
