import React from 'react';

const Logo = ({ className = "" }) => {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <svg 
        width="40" 
        height="40" 
        viewBox="0 0 100 100" 
        fill="none" 
        xmlns="http://www.w3.org/2000/svg"
        className="text-white shrink-0"
      >
        <circle cx="50" cy="50" r="48" stroke="currentColor" strokeWidth="4"/>
        <circle cx="50" cy="50" r="32" stroke="currentColor" strokeWidth="2" opacity="0.8"/>
        {/* Aperture blades */}
        <line x1="50" y1="18" x2="68" y2="40" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="82" y1="50" x2="60" y2="68" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="50" y1="82" x2="32" y2="60" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        <line x1="18" y1="50" x2="40" y2="32" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
        {/* Inner circle lens */}
        <circle cx="50" cy="50" r="16" stroke="currentColor" strokeWidth="3"/>
        <circle cx="56" cy="44" r="3" fill="currentColor" opacity="0.9"/>
      </svg>
      <span className="font-heading font-bold tracking-[0.2em] uppercase text-white whitespace-nowrap">
        Shutter <span className="font-light text-[#B8B8B8]">School</span>
      </span>
    </div>
  );
};

export default Logo;
