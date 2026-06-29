import React from 'react';

// Golden Gradient definition to reuse
export const GoldGradient = () => (
  <defs>
    <linearGradient id="royalGold" x1="0%" y1="0%" x2="100%" y2="100%">
      <stop offset="0%" stopColor="#AA771C" />
      <stop offset="20%" stopColor="#FBF5B7" />
      <stop offset="40%" stopColor="#B38728" />
      <stop offset="60%" stopColor="#FCF6BA" />
      <stop offset="80%" stopColor="#BF953F" />
      <stop offset="100%" stopColor="#8A640F" />
    </linearGradient>
    <filter id="goldGlow" x="-10%" y="-10%" width="120%" height="120%">
      <feGaussianBlur stdDeviation="3" result="blur" />
      <feComponentTransfer in="blur" result="glow1">
        <feFuncA type="linear" slope="0.5" />
      </feComponentTransfer>
      <feMerge>
        <feMergeNode in="glow1" />
        <feMergeNode in="SourceGraphic" />
      </feMerge>
    </filter>
  </defs>
);

// Lord Ganesha line art for loader/welcome screen
export const GaneshaSVG = ({ className = '', size = 150 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 200 200"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`ganesha-svg ${className}`}
  >
    <GoldGradient />
    {/* Crown / Mukut */}
    <path
      d="M100 20 L100 35 M90 35 H110 M100 20 Q85 30 100 45 Q115 30 100 20 Z"
      stroke="url(#royalGold)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M93 30 Q100 25 107 30"
      stroke="url(#royalGold)"
      strokeWidth="1.5"
      strokeLinecap="round"
    />

    {/* Ears */}
    {/* Left Ear */}
    <path
      d="M75 55 C45 55 40 90 65 92 C68 92 70 88 70 85 C70 75 60 70 70 55 C73 55 75 55 75 55"
      stroke="url(#royalGold)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    {/* Right Ear */}
    <path
      d="M125 55 C155 55 160 90 135 92 C132 92 130 88 130 85 C130 75 140 70 130 55 C127 55 125 55 125 55"
      stroke="url(#royalGold)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Head & Trunk */}
    <path
      d="M100 45 C80 45 75 60 75 80 C75 105 95 105 95 125 C95 150 78 155 72 142 C70 137 74 132 78 132 C82 132 85 137 82 142"
      stroke="url(#royalGold)"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    />

    {/* Tusk */}
    <path
      d="M72 80 H64"
      stroke="url(#royalGold)"
      strokeWidth="2"
      strokeLinecap="round"
    />
    <path
      d="M128 80 H120"
      stroke="url(#royalGold)"
      strokeWidth="2"
      strokeLinecap="round"
    />

    {/* Sweets Modak in Trunk curve area */}
    <circle cx="82" cy="142" r="2" fill="url(#royalGold)" />

    {/* Third Eye / Tilak */}
    <path
      d="M93 58 Q100 52 107 58 M95 64 Q100 60 105 64 M100 50 V70"
      stroke="#D4AF37"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

// High details Mandala SVG for background and open-split transition
export const MandalaSVG = ({ className = '', size = 300 }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 400 400"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={`mandala-svg ${className}`}
  >
    <GoldGradient />
    
    {/* Concentric rings */}
    <circle cx="200" cy="200" r="190" stroke="url(#royalGold)" strokeWidth="1.5" strokeDasharray="4,4" />
    <circle cx="200" cy="200" r="175" stroke="url(#royalGold)" strokeWidth="2" />
    <circle cx="200" cy="200" r="145" stroke="url(#royalGold)" strokeWidth="1.5" strokeDasharray="6,3" />
    <circle cx="200" cy="200" r="115" stroke="url(#royalGold)" strokeWidth="2" />
    <circle cx="200" cy="200" r="70" stroke="url(#royalGold)" strokeWidth="1" />
    <circle cx="200" cy="200" r="30" stroke="url(#royalGold)" strokeWidth="1.5" />
    <circle cx="200" cy="200" r="8" fill="url(#royalGold)" />

    {/* Inner Petals */}
    {[...Array(12)].map((_, i) => {
      const angle = (i * 360) / 12;
      return (
        <path
          key={`inner-${i}`}
          d="M200 170 C190 185 190 195 200 200 C210 195 210 185 200 170 Z"
          stroke="url(#royalGold)"
          strokeWidth="1.5"
          transform={`rotate(${angle} 200 200)`}
        />
      );
    })}

    {/* Mid Petals */}
    {[...Array(24)].map((_, i) => {
      const angle = (i * 360) / 24;
      return (
        <path
          key={`mid-${i}`}
          d="M200 130 Q193 150 200 200 Q207 150 200 130 Z"
          stroke="url(#royalGold)"
          strokeWidth="1.2"
          transform={`rotate(${angle} 200 200)`}
        />
      );
    })}

    {/* Outer Petals */}
    {[...Array(36)].map((_, i) => {
      const angle = (i * 360) / 36;
      return (
        <path
          key={`outer-${i}`}
          d="M200 85 C185 115 190 150 200 200 C210 150 215 115 200 85 Z"
          stroke="url(#royalGold)"
          strokeWidth="1"
          transform={`rotate(${angle} 200 200)`}
        />
      );
    })}

    {/* Ring Dots & Triangles */}
    {[...Array(48)].map((_, i) => {
      const angle = (i * 360) / 48;
      return (
        <g key={`dots-${i}`} transform={`rotate(${angle} 200 200)`}>
          <circle cx="200" cy="160" r="1.5" fill="url(#royalGold)" />
          <path d="M200 18 L197 25 H203 Z" fill="url(#royalGold)" />
          <circle cx="200" cy="182" r="1" fill="url(#royalGold)" />
        </g>
      );
    })}
  </svg>
);

// Horizontal Divider for separating page sections
export const DividerOrnament = ({ className = '', width = 'w-full' }) => (
  <div className={`flex items-center justify-center gap-4 my-6 ${width} ${className}`}>
    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent flex-grow" />
    <svg width="40" height="24" viewBox="0 0 40 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <GoldGradient />
      <path
        d="M20 2 C18 8 10 12 2 12 C10 12 18 16 20 22 C22 16 30 12 38 12 C30 12 22 8 20 2 Z"
        stroke="url(#royalGold)"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="20" cy="12" r="3" fill="url(#royalGold)" />
      <circle cx="6" cy="12" r="1.5" fill="url(#royalGold)" />
      <circle cx="34" cy="12" r="1.5" fill="url(#royalGold)" />
    </svg>
    <div className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent flex-grow" />
  </div>
);

// Corner flourishes for borders/cards
export const CornerOrnament = ({ position = 'top-left', className = '' }) => {
  const rotationMap = {
    'top-left': 'rotate-0',
    'top-right': 'rotate-90',
    'bottom-right': 'rotate-180',
    'bottom-left': '-rotate-90',
  };

  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`absolute ${rotationMap[position]} ${className}`}
    >
      <GoldGradient />
      <path
        d="M5 5 H55 C40 5 30 15 30 30 C30 15 20 5 5 5 Z"
        stroke="url(#royalGold)"
        strokeWidth="1.5"
        fill="none"
      />
      <path
        d="M5 5 V55 C5 40 15 30 30 30 C15 30 5 20 5 5 Z"
        stroke="url(#royalGold)"
        strokeWidth="1.5"
        fill="none"
      />
      <circle cx="12" cy="12" r="2.5" fill="url(#royalGold)" />
      <path
        d="M5 5 Q20 20 30 30"
        stroke="url(#royalGold)"
        strokeWidth="1"
        strokeLinecap="round"
      />
      <circle cx="30" cy="30" r="3" fill="url(#royalGold)" />
    </svg>
  );
};
