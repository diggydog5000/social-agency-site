// Updated src/components/ui/Navbar.js with mobile hamburger menu

import React from 'react';
import { Link } from 'react-router-dom';
import { Menu } from '@headlessui/react';

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-[#ff043c] text-white z-20">
      <div className="container mx-auto flex items-center justify-between h-14 px-4">

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

        {/* Center vertical divider */}
        <div className="absolute left-1/2 top-1/2 h-10 border-l border-white transform -translate-x-1/2 -translate-y-1/2" />

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-6 font-light">
          <Link to="/" className="uppercase text-sm font-medium hover:text-gray-800">
            Home
          </Link>
          <Link to="/services" className="uppercase text-sm font-medium hover:text-gray-800">
            Services
          </Link>
          <Link to="/work" className="uppercase text-sm font-medium hover:text-gray-800">
            Work
          </Link>
          <Link to="/contact" className="uppercase text-sm font-medium hover:text-gray-800">
            Contact
          </Link>
        </div>

        {/* Mobile Hamburger Menu */}
        <Menu as="div" className="relative md:hidden">
          <Menu.Button className="p-2 focus:outline-none">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </Menu.Button>
          <Menu.Items className="absolute right-0 mt-2 w-48 bg-[#ff043c] rounded shadow-lg">
            {[
              { path: '/', label: 'Home' },
              { path: '/services', label: 'Services' },
              { path: '/work', label: 'Work' },
              { path: '/contact', label: 'Contact' }
            ].map((item) => (
              <Menu.Item key={item.path}>
                {({ active }) => (
                  <Link
                    to={item.path}
                    className={`block px-4 py-2 text-sm ${active ? 'bg-red-600' : 'text-white'}`}
                  >
                    {item.label}
                  </Link>
                )}
              </Menu.Item>
            ))}
          </Menu.Items>
        </Menu>
      </div>
    </nav>
}
