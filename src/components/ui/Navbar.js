// src/components/ui/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-2 pl-4 z-20 bg-red-500">
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
          A Digital <br/> Growth Agency
        </span>
      </div>

      {/* Navigation links on the right */}
      <div className="space-x-6 font-thin">
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
