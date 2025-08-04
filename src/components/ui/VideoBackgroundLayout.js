// src/components/VideoBackgroundLayout.js
import React from 'react';

export function VideoBackgroundLayout({ src, children }) {
  return (
    <div className="relative w-full h-screen overflow-hidden">
      <video
        src={src}
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-30" />
      <div className="relative z-10">{children}</div>
    </div>
  );
}
