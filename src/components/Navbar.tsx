import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Use Cases', href: '#use-cases' },
    { name: 'Team', href: '#team' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-darkBlue-900/95 shadow-lg backdrop-blur-sm'
          : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="flex items-center">
            <Link to="/" className="flex items-center">
              <img src="/assets/logo_nav.png" alt="COSMEON Logo" className="h-10" />
            </Link>
          </div>

          {/* Desktop menu */}
          <nav className="hidden md:block">
            <ul className="flex space-x-8">
              {navItems.map(({ name, href }) => (
                <li key={name}>
                  <a
                    href={href}
                    className="text-gray-300 hover:text-cyan-400 transition-colors py-2"
                  >
                    {name}
                  </a>
                </li>
              ))}
              <li>
                <Link
                  to="/blog"
                  className="text-gray-300 hover:text-cyan-400 transition-colors py-2"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </nav>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-300 hover:text-white"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="h-6 w-6" viewBox="0 0 24 24" stroke="currentColor" fill="none">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden ${
          isMobileMenuOpen ? 'block' : 'hidden'
        } bg-darkBlue-900/95 backdrop-blur-sm shadow-lg`}
      >
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
          {navItems.map(({ name, href }) => (
            <a
              key={name}
              href={href}
              className="text-gray-300 hover:text-cyan-400 block px-3 py-2"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {name}
            </a>
          ))}
          <Link
            to="/blog"
            className="text-gray-300 hover:text-cyan-400 block px-3 py-2"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Blog
          </Link>
          <a
            href="#contact"
            className="block bg-gradient-to-r from-cyan-500 to-cyan-400 text-darkBlue-900 font-medium px-3 py-2 rounded-full text-center mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Join the Mission
          </a>
        </div>
      </div>
    </header>
  );
};

export default Navbar;