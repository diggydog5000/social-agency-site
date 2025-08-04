// src/components/ui/Navbar.js

import React from 'react';
import { Link } from 'react-router-dom';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-2 pl-4 z-20 bg-red-500">
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
      <div className="space-x-6 font-bold">
        <Link to="/" className="text-white hover:tracking-wide hover:bg-gray-800">
          HOME
        </Link>
        <Link to="/services" className="text-white hover:tracking-wide hover:bg-gray-800">
          SERVICES
        </Link>
        <Link to="/work" className="text-white hover:tracking-wide hover:bg-gray-800">
          WORK
        </Link>

        <Link to="/contact" className="text-white hover:tracking-wide hover:bg-gray-800">
          CONTACT
        </Link>
      </div>
    </nav>
  );
}
