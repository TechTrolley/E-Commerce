import React, { useState } from 'react';

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
              href="https://www.amazon.in/s/?ie=UTF8&keywords=mobiles&index=aps&tag=msndeskstdin-21&ref=pd_sl_4oe1cksddi_e&adgrpid=1317216539842212&hvadid=82326291885469&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=157890&hvtargid=kwd-82326918533974:loc-90&hydadcr=15398_1995879"
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
            <button className="hidden md:block text-white">
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
                  d="M3 3h18M16 13h5l-1.405 4.215a2 2 0 01-1.972 1.517H6.376a2 2 0 01-1.972-1.517L3 13h5m4 0V6m0 7h4"
                />
              </svg>
            </button>
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
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
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

      {/* Secondary Navbar */}
      <nav className="bg-gray-100 p-3">
        <div className="max-w-screen-xl mx-auto flex justify-around items-center">
          <a
            href="#"
            className="text-blue-600 hover:bg-blue-100 hover:text-blue-800 px-3 py-2 rounded transition-all duration-300"
          >
            Mobiles
          </a>
          <a
            href="#"
            className="text-blue-600 hover:bg-blue-100 hover:text-blue-800 px-3 py-2 rounded transition-all duration-300"
          >
            Laptops
          </a>
          <a
            href="#"
            className="text-blue-600 hover:bg-blue-100 hover:text-blue-800 px-3 py-2 rounded transition-all duration-300"
          >
            Watches
          </a>
          <a
            href="#"
            className="text-blue-600 hover:bg-blue-100 hover:text-blue-800 px-3 py-2 rounded transition-all duration-300"
          >
            Category
          </a>
        </div>
      </nav>
    </>
  );
};

export default Navbar;