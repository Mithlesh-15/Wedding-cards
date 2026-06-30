import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function GallerySection() {
  const containerRef = useRef(null);
  const itemsRef = useRef([]);

  const galleryItems = [
    {
      id: 1,
      caption: "Haldi Sunshine",
      rotation: "-rotate-3",
      imageUrl: "https://images.unsplash.com/photo-1615966650071-855b15f29ad1?q=80&w=500"
    },
    {
      id: 2,
      caption: "Mehendi Beats",
      rotation: "rotate-2",
      imageUrl: "https://images.unsplash.com/photo-1604017011826-d3b4c23f8914?q=80&w=500"
    },
    {
      id: 3,
      caption: "The Sacred Vows",
      rotation: "-rotate-2",
      imageUrl: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?q=80&w=500"
    },
    {
      id: 4,
      caption: "Entwined Rings",
      rotation: "rotate-4",
      imageUrl: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=500"
    },
    {
      id: 5,
      caption: "Temple Decor",
      rotation: "-rotate-1",
      imageUrl: "https://images.unsplash.com/photo-1519225495810-7512c696505a?q=80&w=500"
    },
    {
      id: 6,
      caption: "Beautiful Moments",
      rotation: "rotate-3",
      imageUrl: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?q=80&w=500"
    }
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Staggered reveal of polaroid photos
      gsap.fromTo(
        itemsRef.current,
        {
          opacity: 0,
          y: 70,
          scale: 0.9,
          rotation: 0,
        },
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 1.4,
          stagger: 0.2,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 75%",
            end: "bottom 50%",
            toggleActions: "play none none none",
          },
          onComplete: () => {
            itemsRef.current.forEach((el, index) => {
              if (el) {
                const rotClass = galleryItems[index].rotation;
                el.classList.add(rotClass);
              }
            });
          }
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative w-full py-24 px-4 md:px-8 bg-gradient-to-b from-[#FFFDF9] to-[#FFFDF9] flex flex-col items-center overflow-hidden"
    >
      
      {/* Decorative Title */}
      <div className="text-center mb-16 select-none">
        <span className="font-cinzel text-xs tracking-[0.45em] uppercase text-soft-green font-bold block mb-2">
          Sweet Memories
        </span>
        <h2 className="font-hindi text-3xl md:text-4xl font-bold tracking-wide text-genda-orange drop-shadow-xs">
          स्मृतियों की झांकी
        </h2>
        <div className="w-20 h-[1.5px] bg-gradient-to-r from-transparent via-genda-yellow to-transparent mx-auto mt-4" />
      </div>

      {/* Polaroid Grid Layout */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-10 max-w-5xl w-full px-4">
        {galleryItems.map((item, index) => (
          <div
            key={item.id}
            ref={(el) => {
              if (el) itemsRef.current[index] = el;
            }}
            className="bg-[#FFFDF9] border border-gold-champagne/15 p-3 pb-6 rounded-sm shadow-md card-shadow hover:scale-105 hover:-translate-y-3 hover:rotate-0 hover:shadow-2xl hover:border-genda-orange/30 hover:z-20 transition-all duration-300 transform cursor-pointer select-none origin-center"
          >
            {/* Polaroid Image Container */}
            <div className="w-full aspect-[4/5] bg-cream rounded-xs overflow-hidden border border-gold-champagne/10 relative">
              <img 
                src={item.imageUrl} 
                alt={item.caption} 
                className="w-full h-full object-cover filter saturate-100 brightness-[0.98] contrast-100 transition-transform duration-500 hover:scale-105"
                loading="lazy"
              />
            </div>

            {/* Polaroid Label Caption */}
            <div className="mt-4 text-center">
              <span className="font-handwritten text-xl md:text-2xl text-genda-orange block leading-none">
                {item.caption}
              </span>
            </div>
          </div>
        ))}
      </div>

    </div>
  );
}

export default GallerySection;
