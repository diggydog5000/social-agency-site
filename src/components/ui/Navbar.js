// src/components/ui/Navbar.js

import React from 'react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-6 z-20 bg-transparent">
      {/* Logo on the left */}
      <div className="flex-shrink-0">
        <a href="/">
          <img
            src="/assets/logo-cc.png"
            alt="Connecticut Creative"
            className="h-16 w-auto"  // adjust h-# to tweak height
          />
        </a>
      </div>

      {/* Navigation links on the right */}
      <div className="space-x-6">
        <a href="#services" className="text-white hover:underline">
          Services
        </a>
        <a href="#work" className="text-white hover:underline">
          Work
        </a>
        <a href="#about" className="text-white hover:underline">
          About
        </a>
        <a href="#contact" className="text-white hover:underline">
          Contact
        </a>
      </div>
    </nav>
  );
}
