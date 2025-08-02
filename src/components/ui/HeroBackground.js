// src/components/ui/HeroBackground.js

import React from 'react';

interface HeroBackgroundProps {
  children: React.ReactNode;
  /**
   * Path to your image in /public—for example "/assets/background.png"
   */
  imageUrl: string;
  /**
   * Opacity of the dark overlay (0 = no overlay, 1 = full black)
   */
  overlayOpacity?: number;
}

export function HeroBackground({
  children,
  imageUrl,
  overlayOpacity = 0.4,
}: HeroBackgroundProps) {
  return (
    <div
      className={`
        relative
        w-full
        h-screen
        bg-[url('${imageUrl}')]
        bg-cover
        bg-center
        bg-no-repeat
      `}
    >
      {/* Optional semi-transparent overlay for text contrast */}
      <div
        className="absolute inset-0 bg-black"
        style={{ opacity: overlayOpacity }}
      />

      {/* Your content sits on top */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white p-4">
        {children}
      </div>
    </div>
  );
}