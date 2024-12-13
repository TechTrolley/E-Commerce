import React, { useState } from 'react';
import backgroundImage from './home.png'; // Adjust the path based on your project structure

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Primary Navbar */}
      <nav className="bg-blue-500 p-4">
        <div className="max-w-screen-xl mx-auto flex justify-between items-center">
          <div className="text-white text-xl font-bold">Tech Trolley</div>
          <div className="hidden md:flex space-x-6">
            <a
              href="#"
              className="text-white hover:bg-sky-700 hover:text-gray-200 px-3 py-2 rounded transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white hover:bg-sky-700 hover:text-gray-200 px-3 py-2 rounded transition-all duration-300"
            >
              Mobiles
            </a>
            <a
              href="#"
              className="text-white hover:bg-sky-700 hover:text-gray-200 px-3 py-2 rounded transition-all duration-300"
            >
              Laptops
            </a>
            <a
              href="#"
              className="text-white hover:bg-sky-700 hover:text-gray-200 px-3 py-2 rounded transition-all duration-300"
            >
              Contact
            </a>
          </div>
          <div className="flex items-center space-x-4">
            <input
              type="text"
              placeholder="Search..."
              className="hidden md:block px-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-blue-600 p-4 space-y-4">
            <a
              href="#"
              className="text-white block hover:bg-sky-700 hover:text-gray-200 px-3 py-2 rounded transition-all duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="text-white block hover:bg-sky-700 hover:text-gray-200 px-3 py-2 rounded transition-all duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="text-white block hover:bg-sky-700 hover:text-gray-200 px-3 py-2 rounded transition-all duration-300"
            >
              Services
            </a>
            <a
              href="#"
              className="text-white block hover:bg-sky-700 hover:text-gray-200 px-3 py-2 rounded transition-all duration-300"
            >
              Contact
            </a>
          </div>
        )}
      </nav>

      <div>
  <img
    src={backgroundImage}
    alt="Background"
    style={{
      width: '100%',
      height: 'auto', // Maintain aspect ratio
      objectFit: 'cover', // Makes sure the image fills its container properly
    }}
  />
</div>

    </>
  );
};

export default Navbar;
