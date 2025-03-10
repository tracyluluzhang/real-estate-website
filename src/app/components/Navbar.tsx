'use client';

import React, { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full bg-white bg-opacity-95 shadow-md z-50">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-16">
          <Link href="/" className="text-4xl font-cormorant italic text-gray-800">
            Dream Estates
          </Link>

          {/* Mobile menu button */}
          <button
            className="md:hidden"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-8">
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Home
            </Link>
            <Link
              href="/team"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Team Introduction
            </Link>
            <Link
              href="/contact"
              className="text-gray-600 hover:text-gray-900 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        {/* Mobile menu */}
        <div
          className={`md:hidden ${
            isMenuOpen ? 'block' : 'hidden'
          } pb-4`}
        >
          <Link
            href="/"
            className="block py-2 text-gray-600 hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            href="/team"
            className="block py-2 text-gray-600 hover:text-gray-900"
          >
            Team Introduction
          </Link>
          <Link
            href="/contact"
            className="block py-2 text-gray-600 hover:text-gray-900"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </nav>
  );
} 