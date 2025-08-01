import React from 'react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full flex items-center justify-between p-6 z-20 bg-transparent">
      <div className="text-white font-bold text-xl">Social House CT</div>
      <div className="space-x-6">
        <a href="#services" className="text-white hover:underline">Services</a>
        <a href="#work" className="text-white hover:underline">Work</a>
        <a href="#about" className="text-white hover:underline">About</a>
        <a href="#contact" className="text-white hover:underline">Contact</a>
      </div>
    </nav>
  );
}
