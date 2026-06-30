import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import LoadingScreen from "./components/LoadingScreen";
import HeroSection from "./components/HeroSection";
import InvitationMessage from "./components/InvitationMessage";
import CoupleSection from "./components/CoupleSection";
import FunctionsSection from "./components/FunctionsSection";
import GallerySection from "./components/GallerySection";
import LocationSection from "./components/LocationSection";
import FamilySection from "./components/FamilySection";
import FooterSection from "./components/FooterSection";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const mainContentRef = useRef(null);

  useEffect(() => {
    if (!isLoading && mainContentRef.current) {
      // Smooth fade and rise reveal of the main template content
      gsap.fromTo(
        mainContentRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 1.8, ease: "power3.out" }
      );
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div ref={mainContentRef} className="relative min-h-screen bg-cream w-full opacity-0">
          
          {/* Section Stacks */}
          <HeroSection />
          <InvitationMessage />
          <CoupleSection />
          <FunctionsSection />
          <GallerySection />
          <LocationSection />
          <FamilySection />
          <FooterSection />
          
        </div>
      )}
    </>
  );
}

export default App;
