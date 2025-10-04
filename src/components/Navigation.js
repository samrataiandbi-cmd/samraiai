"use client";
import { useState } from "react";
import Link from "next/link";

export default function Navigation() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const targetId = href.startsWith("#") ? href.substring(1) : href;
    const targetElement = document.getElementById(targetId);

    if (targetElement) {
      const offsetTop =
        targetElement.getBoundingClientRect().top + window.scrollY - 80; // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
      closeMenu();
      return;
    }

    // If target not found on this page (e.g. you're on /courses), navigate to home with hash
    closeMenu();
    // Using window.location ensures the browser navigates to the home page and applies the hash.
    // The browser will jump to the section; if you prefer smooth scrolling after navigation
    // we can add a small client-side handler on the home page to smooth-scroll on load.
    window.location.href = `/${
      href.startsWith("/") ? href.substring(1) : href
    }`;
  };

  const navLinks = [
    { href: "#about", label: "About" },
    { href: "#college-training", label: "College Training" },
    { href: "#corporate-training", label: "Corporate Training" },
    { href: "#corporate-consultation", label: "Corporate Consultation" },
    // Keep a parent entry for display but we'll render a dropdown for it
    { href: "#courses", label: "Courses & Batches" },
    // { href: "#testimonials", label: "Success Stories" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 bg-red-950/90 backdrop-blur-xl border-b border-white/10 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold flex items-center">
            <span className="text-white">Samrat</span>
            <span className="text-orange-400 ml-1">Mukherjee</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              // Render a themed hover dropdown only for "Courses & Batches"
              if (link.label === "Courses & Batches") {
                return (
                  <div
                    key={link.href}
                    className="relative group"
                    aria-haspopup="true"
                  >
                    <button
                      onClick={(e) => handleNavClick(e, link.href)}
                      className="text-white/80 hover:text-orange-400 transition-colors duration-300 font-small cursor-pointer flex items-center space-x-2"
                      aria-expanded="false"
                    >
                      <span>{link.label}</span>
                      <svg
                        className="w-3 h-3 text-white/60"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 10.94l3.71-3.71a.75.75 0 111.06 1.06l-4.24 4.24a.75.75 0 01-1.06 0L5.21 8.29a.75.75 0 01.02-1.08z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>

                    {/* Dropdown */}
                    <div className="absolute left-0 mt-2 w-44 bg-red-950/95 border border-white/10 rounded-md shadow-lg opacity-0 translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transform transition-all duration-200 z-50">
                      <a
                        href="#courses"
                        onClick={(e) => handleNavClick(e, "#courses")}
                        className="block px-4 py-2 text-white/90 hover:text-orange-400 hover:bg-white/5 transition-colors"
                      >
                        Courses
                      </a>
                      <a
                        href="#batches"
                        onClick={(e) => handleNavClick(e, "#batches")}
                        className="block px-4 py-2 text-white/90 hover:text-orange-400 hover:bg-white/5 transition-colors"
                      >
                        Batches
                      </a>
                    </div>
                  </div>
                );
              }

              return (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className="text-white/80 hover:text-orange-400 transition-colors duration-300 font-small cursor-pointer relative group"
                >
                  {link.label}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-orange-400 group-hover:w-full transition-all duration-300"></span>
                </a>
              );
            })}
            <a
              href="#start"
              onClick={(e) => handleNavClick(e, "#start")}
              className="px-6 py-2 bg-gradient-to-r from-orange-500 to-amber-500 text-white font-semibold rounded-full hover:shadow-lg transition-all duration-300 cursor-pointer"
            >
              Get Started
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 text-white hover:text-orange-400 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <svg
              className={`w-6 h-6 transform transition-transform duration-200 ${
                isMenuOpen ? "rotate-90" : ""
              }`}
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
        </div>

        {/* Mobile Navigation Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            isMenuOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0"
          }`}
        >
          <div className="pb-4 pt-2 border-t border-white/10">
            <div className="flex flex-col space-y-3">
              {navLinks.map((link) => {
                if (link.label === "Courses & Batches") {
                  return (
                    <div key={link.href} className="flex flex-col">
                      <a
                        href="#courses"
                        onClick={(e) => handleNavClick(e, "#courses")}
                        className="text-white/80 hover:text-orange-400 transition-colors py-3 px-4 rounded-lg hover:bg-white/5 cursor-pointer"
                      >
                        Courses
                      </a>
                      <a
                        href="#batches"
                        onClick={(e) => handleNavClick(e, "#batches")}
                        className="text-white/80 hover:text-orange-400 transition-colors py-3 px-4 rounded-lg hover:bg-white/5 cursor-pointer"
                      >
                        Batches
                      </a>
                    </div>
                  );
                }

                return (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href)}
                    className="text-white/80 hover:text-orange-400 transition-colors py-3 px-4 rounded-lg hover:bg-white/5 cursor-pointer"
                  >
                    {link.label}
                  </a>
                );
              })}
              <a
                href="#start"
                onClick={(e) => handleNavClick(e, "#start")}
                role="button"
                className="w-full block bg-gradient-to-r from-orange-500 to-amber-500 text-white px-6 py-3 rounded-full font-semibold text-center mt-4 cursor-pointer shadow-md"
              >
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
