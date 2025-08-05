import React, { useState } from 'react'
import { Link } from 'react-router-dom'

export function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <nav className="fixed top-0 left-0 w-full bg-[#ff043c] text-white z-20">
      <div className="container mx-auto flex items-center justify-between h-14 px-4">
        {/* Logo + tagline */}
        <div className="flex items-center">
          <Link to="/">
            <img src="/assets/logo-cc.png" alt="Logo" className="h-10" />
          </Link>
          <div className="h-8 border-l border-white mx-4" />
          <span className="uppercase text-sm font-medium">
            A Digital Growth Agency
          </span>
        </div>

        {/* Desktop nav */}
        <div className="hidden md:flex space-x-6 font-light">
          {['/','/services','/work','/contact'].map((path, i) => {
            const label = ['Home','Services','Work','Contact'][i]
            return (
              <Link
                key={path}
                to={path}
                className="uppercase text-sm font-medium hover:text-gray-800"
              >
                {label}
              </Link>
            )
          })}
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden p-2 focus:outline-none"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {/* simple hamburger / X icons */}
          {open ? (
            <span className="text-2xl">&#10005;</span>  // ✕
          ) : (
            <span className="text-2xl">&#9776;</span>  // ☰
          )}
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#ff043c] text-white py-2 space-y-2">
          {['/','/services','/work','/contact'].map((path, i) => {
            const label = ['Home','Services','Work','Contact'][i]
            return (
              <Link
                key={path}
                to={path}
                className="block px-4 py-2 uppercase text-sm font-medium hover:bg-red-600"
              >
                {label}
              </Link>
            )
          })}
        </div>
      )}
    </nav>
  )
}
