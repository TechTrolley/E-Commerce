// src/components/Navbar.jsx
import React, { useState } from 'react';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="bg-blue-500 p-4">
      <div className="max-w-screen-xl mx-auto flex justify-between items-center">
        <div className="text-white text-xl font-bold">Tech Trolley</div>
        <div className="hidden md:flex space-x-6">
          <a href="#" className="text-white hover:bg-sky-700">Home</a>
          <a href="https://www.amazon.in/s/?ie=UTF8&keywords=mobiles&index=aps&tag=msndeskstdin-21&ref=pd_sl_4oe1cksddi_e&adgrpid=1317216539842212&hvadid=82326291885469&hvnetw=o&hvqmt=e&hvbmt=be&hvdev=c&hvlocint=&hvlocphy=157890&hvtargid=kwd-82326918533974:loc-90&hydadcr=15398_1995879" className="text-white">Mobiles</a>
          <a href="#" className="text-white">Laptops</a>
          <a href="#" className="text-white">Contact</a>
        </div>
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
      {isMobileMenuOpen && (
        <div className="md:hidden bg-blue-600 p-4 space-y-4">
          <a href="#" className="text-white block">Home</a>
          <a href="#" className="text-white block">About</a>
          <a href="#" className="text-white block">Services</a>
          <a href="#" className="text-white block">Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
