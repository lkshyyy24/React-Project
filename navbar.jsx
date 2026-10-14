
import React, { useState } from 'react';
import { navLinks } from '../data/data';
import { Menu, X } from 'lucide-react';

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  return (
    <>
      <nav className="fixed top-0 z-40 w-full h-16 bg-gray-900/90 text-white flex items-center justify-between px-4 md:px-8">

        {/* Logo */}
        <a href="/" className="shrink-0">
          <img src="/assets/logo.svg" alt="Logo" />
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="hover:text-gray-300 transition-colors"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Desktop Booking Button */}
        <a
          href="#booking-process"
          className="hidden md:block bg-[#F5A623] text-black px-4 py-2 rounded-md hover:bg-[#e5941f]"
        >
          Book a Table
        </a>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setShowMenu(!showMenu)}
          className="md:hidden"
          aria-label="Toggle navigation menu"
          aria-expanded={showMenu}
        >
          {showMenu ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 z-50 bg-black text-white flex flex-col items-center justify-center gap-8 transition-transform duration-300 ${
          showMenu ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Close Button */}
        <button
          onClick={() => setShowMenu(false)}
          className="absolute top-5 right-5"
          aria-label="Close navigation menu"
        >
          <X size={28} />
        </button>

        {/* Mobile Links */}
        <div className="flex flex-col items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={() => setShowMenu(false)}
              className="text-lg hover:text-gray-300"
            >
              {link.name}
            </a>
          ))}
        </div>

        <a
          href="#booking-process"
          onClick={() => setShowMenu(false)}
          className="bg-[#F5A623] text-black px-5 py-3 rounded-md"
        >
          Book a Table
        </a>
      </div>
    </>
  );
}

export default Navbar;
