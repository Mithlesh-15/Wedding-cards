import { useState, useEffect, useRef } from 'react';
import gsap from 'gsap';
import LoadingScreen from './components/LoadingScreen';
import HeroSection from './components/HeroSection';
import CoupleSection from './components/CoupleSection';
import InvitationMessage from './components/InvitationMessage';
import FunctionTimeline from './components/FunctionTimeline';
import LocationSection from './components/LocationSection';
import FooterSection from './components/FooterSection';
import PetalRain from './components/PetalRain';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const mainContentRef = useRef(null);

  useEffect(() => {
    if (!isLoading && mainContentRef.current) {
      // Smooth reveal fade-in for the main webpage
      gsap.fromTo(
        mainContentRef.current,
        { opacity: 0 },
        { opacity: 1, duration: 1.5, ease: 'power2.out' }
      );
    }
  }, [isLoading]);

  return (
    <>
      {isLoading ? (
        <LoadingScreen onComplete={() => setIsLoading(false)} />
      ) : (
        <div ref={mainContentRef} className="relative min-h-screen bg-ivory w-full opacity-0">
          
          {/* Falling Flower Petals Overlay (60fps Canvas) */}
          <PetalRain />

          {/* Website Sections */}
          <HeroSection />
          <CoupleSection />
          <InvitationMessage />
          <FunctionTimeline />
          <LocationSection />
          <FooterSection />
        </div>
      )}
    </>
  );
}

export default App;
