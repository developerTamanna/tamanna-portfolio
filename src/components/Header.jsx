"use client";

import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

export default function Header() {
  const [open, setOpen] = useState(false);

  const handleClick = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#007F73] text-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        {/* Logo / Name */}
        <h1 className="text-2xl md:text-3xl font-bold tracking-wide">
          Tamanna Akter
        </h1>

        {/* Mobile Menu Button */}
        <div className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? (
            <FiX className="text-3xl cursor-pointer transition-all" />
          ) : (
            <FiMenu className="text-3xl cursor-pointer transition-all" />
          )}
        </div>

        {/* Navigation Menu */}
        <nav
          className={`fixed md:static top-0 right-0 h-screen md:h-auto w-2/3 md:w-auto bg-[#007F73] md:bg-transparent flex flex-col md:flex-row items-center justify-center gap-6 md:gap-10 transition-all duration-500 ease-in-out ${
            open ? "translate-x-0" : "translate-x-full md:translate-x-0"
          }`}
        >
          {["Home", "About", "Services", "Testimonials", "Contact"].map(
            (item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                onClick={(e) => handleClick(e, item.toLowerCase())}
                className="text-lg font-medium hover:text-black transition-colors duration-300"
              >
                {item}
              </a>
            )
          )}
        </nav>
      </div>

      {/* Overlay for mobile (click to close) */}
      {open && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}
    </header>
  );
}
