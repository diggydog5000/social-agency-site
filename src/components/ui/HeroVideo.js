import React from 'react';

export function HeroVideo({ src, poster, children }) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        className="absolute inset-0 w-full h-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        poster={poster}
      >
        <source src={src} type="video/mp4" />
      </video>
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-center text-white p-4 bg-black bg-opacity-30">
        {children}
      </div>
    </div>
  );
}
