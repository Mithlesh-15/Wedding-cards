import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { FaMapMarkerAlt, FaDirections } from 'react-icons/fa';

gsap.registerPlugin(ScrollTrigger);

const LocationSection = () => {
  const containerRef = useRef(null);
  const headingRef = useRef(null);
  const cardRef = useRef(null);
  const detailsRef = useRef(null);

  useEffect(() => {
    // Heading reveal
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

    // Map Card reveal (slide up)
    gsap.fromTo(
      cardRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: cardRef.current,
          start: 'top 80%',
        },
      }
    );

    // Text Details reveal (fade in)
    gsap.fromTo(
      detailsRef.current,
      { opacity: 0, x: -30 },
      {
        opacity: 1,
        x: 0,
        duration: 1.0,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: detailsRef.current,
          start: 'top 85%',
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach(trigger => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative py-24 bg-cream text-dark-brown overflow-hidden z-10 px-4 md:px-8 border-t-[1px] border-b-[1px] border-gold-royal/30"
    >
      {/* Background Decorative Temple Arc Corner Watermarks */}
      <div className="absolute top-0 right-0 w-32 h-32 opacity-10 text-maroon-royal pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full transform scale-x-[-1]">
          <path d="M0 0 L100 0 L100 10 C80 10 50 30 50 50 C50 70 30 90 10 100 L0 100 Z" />
        </svg>
      </div>
      <div className="absolute bottom-0 left-0 w-32 h-32 opacity-10 text-maroon-royal pointer-events-none">
        <svg viewBox="0 0 100 100" fill="currentColor" className="w-full h-full transform scale-y-[-1]">
          <path d="M0 0 L100 0 L100 10 C80 10 50 30 50 50 C50 70 30 90 10 100 L0 100 Z" />
        </svg>
      </div>

      <div className="max-w-5xl mx-auto flex flex-col items-center">
        
        {/* Section Heading */}
        <div ref={headingRef} className="text-center mb-16">
          <span className="font-hindi text-maroon-royal text-xl md:text-2xl font-bold block mb-2 tracking-widest">
            विवाह स्थल
          </span>
          <h2 className="font-cormorant text-3xl md:text-5xl font-semibold text-gold-royal italic mt-1 glow-gold-text">
            Venue & Location
          </h2>
          <div className="w-16 h-[1px] bg-gold-royal mx-auto mt-4" />
        </div>

        {/* Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 w-full items-center">
          
          {/* Details Column */}
          <div ref={detailsRef} className="lg:col-span-5 flex flex-col items-center lg:items-start text-center lg:text-left">
            <div className="flex items-center justify-center lg:justify-start w-12 h-12 rounded-full bg-gold-royal/10 border-[1px] border-gold-royal/40 mb-6 text-maroon-royal">
              <FaMapMarkerAlt className="text-xl" />
            </div>

            <h3 className="font-hindi text-2xl md:text-3xl font-bold text-maroon-royal mb-4 tracking-wide">
              द रॉयल पैलेस (The Royal Palace)
            </h3>
            
            <p className="font-hindi text-base md:text-lg leading-relaxed text-dark-brown/85 mb-8">
              सिटी पैलेस परिसर, त्रिपोलिया गेट के पास,
              <br />
              जयपुर, राजस्थान - 302002
              <br />
              <span className="font-cormorant font-semibold tracking-wider text-xs block text-gold-royal mt-2 uppercase">
                City Palace, Tripolia Gate, Jaipur, Rajasthan
              </span>
            </p>

            {/* Directions Action Button */}
            <a
              href="https://maps.app.goo.gl/yM9V5bY7xLw1Z2X37" // Elegant placeholder matching City Palace
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 bg-maroon-royal text-ivory px-8 py-3.5 rounded-full border-[1px] border-gold-royal/50 hover:bg-[#8D001D] hover:scale-105 active:scale-95 transition-all duration-300 shadow-xl font-hindi font-medium tracking-wide gold-glow-hover"
            >
              <FaDirections className="text-lg" />
              मार्गदर्शन प्राप्त करें (Directions)
            </a>
          </div>

          {/* Map Embed Card Column */}
          <div ref={cardRef} className="lg:col-span-7 w-full">
            <div className="relative p-2 bg-ivory rounded-2xl shadow-2xl border-[1px] border-gold-royal/45 overflow-hidden">
              
              {/* Inner Decorative Frame */}
              <div className="absolute top-3 left-3 w-4 h-4 border-t-[1px] border-l-[1px] border-gold-royal/70 pointer-events-none z-10" />
              <div className="absolute top-3 right-3 w-4 h-4 border-t-[1px] border-r-[1px] border-gold-royal/70 pointer-events-none z-10" />
              <div className="absolute bottom-3 left-3 w-4 h-4 border-b-[1px] border-l-[1px] border-gold-royal/70 pointer-events-none z-10" />
              <div className="absolute bottom-3 right-3 w-4 h-4 border-b-[1px] border-r-[1px] border-gold-royal/70 pointer-events-none z-10" />

              {/* Google Maps Iframe */}
              <iframe
                title="Google Map Wedding Venue"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3557.4812396347895!2d75.80164287612143!3d26.92008705979843!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db153c30a575b%3A0x7d94943fcf39818!2sCity%20Palace!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                className="w-full h-80 md:h-[400px] rounded-xl border-none filter contrast-105 saturate-[0.85] relative z-0"
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default LocationSection;
