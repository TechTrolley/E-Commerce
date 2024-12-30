import React, { useState } from 'react';
import backgroundImage from './home.png'; // Adjust the path based on your project structure
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <>
      {/* Primary Navbar */}
      <nav className="bg-[#CC313D] p-4">
        <div className="mx-auto flex justify-between items-center px-8">
          {/* Tech Trolley Logo */}
          <div className="text-white text-xl font-bold">Tech Trolley</div>

          {/* Centered Search Box */}
          <div className="relative flex-grow max-w-[700px] mx-auto">
            <input
              type="text"
              placeholder="Search for Products...."
              className="pl-10 pr-40 py-2.5 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute left-2 top-1/2 transform -translate-y-1/2 w-8 h-5 text-gray-400"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z"
              />
            </svg>
          </div>
          <button className="bg-gradient-to-r from-[#248A8B] to-[#122F3D] text-white hover:from-[#CC313D] hover:to-[#122F3D] transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg mr-6">
            <span className="uppercase tracking-wide font-semibold">Products</span>
          </button>

          <div className="flex items-center space-x-4">
            {/* Shopping Cart Button */}
            <button className="bg-gradient-to-r from-[#FF5733] to-[#FFC300] flex items-center space-x-2 text-white hover:from-[#FFC300] hover:to-[#FF5733] transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg mr-2">
              <FaShoppingCart size={25} />
              <span className="pl-1 uppercase tracking-wide font-semibold">Cart</span>
            </button>

            {/* Login Button */}
            <button className="bg-gradient-to-r from-[#4CAF50] to-[#2E7D32] flex items-center justify-center text-white hover:from-[#66BB6A] hover:to-[#388E3C] transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg">
              <FaUser size={25} />
              <span className="pl-2 uppercase tracking-wide font-semibold">Login</span>
            </button>

            {/* Mobile Menu Toggle Button */}
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
      </nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-[#248A8B] p-4 space-y-4">
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
            Products
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
            Contact Us
          </a>
        </div>
      )}

      {/* Products Section - Below Navbar */}
      <div id="products" className="bg-[#122F3D] text-white py-4">
        <div className="mx-auto flex flex-wrap space-x-4">
          <a
            href="#smartphones"
            className="block hover:bg-[#CC313D] hover:text-white-900 px-3 py-1 text-sm rounded transition-all duration-300"
          >
            Smartphones
          </a>
          <a
            href="#smartwatches"
            className="block hover:bg-[#CC313D] hover:text-white-900 px-3 py-1 text-sm rounded transition-all duration-300"
          >
            Smartwatches
          </a>
          <a
            href="#laptops"
            className="block hover:bg-[#CC313D] hover:text-white-900 px-3 py-1 text-sm rounded transition-all duration-300"
          >
            Laptops
          </a>
          <a
            href="#controllers"
            className="block hover:bg-[#CC313D] hover:text-white-900 px-3 py-1 text-sm rounded transition-all duration-300"
          >
            Controllers
          </a>
          <a
            href="#drones"
            className="block hover:bg-[#CC313D] hover:text-white-900 px-3 py-1 text-sm rounded transition-all duration-300"
          >
            Drones
          </a>
          <a
            href="#mice"
            className="block hover:bg-[#CC313D] hover:text-white-900 px-3 py-1 text-sm rounded transition-all duration-300"
          >
            Mice
          </a>
          <a
            href="#keyboards"
            className="block hover:bg-[#CC313D] hover:text-white-900 px-3 py-1 text-sm rounded transition-all duration-300"
          >
            Keyboards
          </a>
          <a
            href="#graphics-cards"
            className="block hover:bg-[#CC313D] hover:text-white-900 px-3 py-1 text-sm rounded transition-all duration-300"
          >
            Graphics Cards
          </a>
          <a
            href="#ssds"
            className="block hover:bg-[#CC313D] hover:text-white-900 px-3 py-1 text-sm rounded transition-all duration-300"
          >
            SSDs
          </a>
        </div>
      </div>

      {/* Background Image */}
      <div>
        <img
          src={backgroundImage}
          alt="Background"
          style={{
            width: '100%',
            height: 'auto', // Maintain aspect ratio
            objectFit: 'cover', // Ensures image fills container properly
          }}
        />
      </div>
    </>
  );
};

export default Navbar;
