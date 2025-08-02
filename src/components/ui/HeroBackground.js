// src/components/ui/HeroBackground.js

import React from 'react';

export function HeroBackground({ 
  children, 
  imageUrl,          // e.g. "/assets/background.png"
  overlayOpacity = 0.4 
}) {
  return (
    <div
      className="
        relative
        w-full
        h-screen
        bg-cover
        bg-center
        bg-no-repeat
      "
      style={{ backgroundImage: `url(${imageUrl})` }}
    >
      {/* Semi-transparent overlay for contrast */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Your hero content */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-4">
        {children}
      </div>
    </div>
  );
}
