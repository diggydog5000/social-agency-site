// src/components/ui/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-2 z-20 bg-red-500">
      {/* Logo on the left */}
      <div className="flex-shrink-0">
        <Link to="/">
          <img
            src="/assets/logo-cc.png"
            alt="Connecticut Creative"
            className="h-12 w-auto"
          />
        </Link>
      </div>

      {/* Navigation links on the right */}
      <div className="space-x-6">
        <Link to="/" className="text-white hover:underline">
          Home
        </Link>
        <Link to="/services" className="text-white hover:underline">
          Services
        </Link>
        <Link to="/work" className="text-white hover:underline">
          Work
        </Link>
        <Link to="/about" className="text-white hover:underline">
          About
        </Link>
        <Link to="/contact" className="text-white hover:underline">
          Contact
        </Link>
      </div>
    </nav>
  );
}
