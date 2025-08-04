// src/components/ui/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full h-12 flex items-center justify-between px-2 pl-4 z-20 bg-red-500">
      {/* Left: logo + separator + tagline */}
      <div className="flex items-center flex-shrink-0">
        <Link to="/">
          <img
            src="/assets/logo-cc.png"
            alt="Connecticut Creative"
            className="h-12 w-auto"
          />
        </Link>
        <div className="h-10 border-l border-white mx-4" />
        <span className="text-white uppercase text-sm font-medium">
          A Digital Growth Agency
        </span>
      </div>

      <div
        className="absolute left-1/2 top-1/2 h-10 border-l border-white transform -translate-x-1/2 -translate-y-1/2"
      />

      {/* Navigation links on the right */}
      <div className="space-x-6 font-light">
        <Link to="/" className="text-white hover:text-gray-800">
          HOME
        </Link>
        <Link to="/services" className="text-white hover:text-gray-800">
          SERVICES
        </Link>
        <Link to="/work" className="text-white hover:text-gray-800">
          WORK
        </Link>
        <Link to="/contact" className="text-white hover:text-gray-800">
          CONTACT
        </Link>
      </div>
    </nav>
  );
}
