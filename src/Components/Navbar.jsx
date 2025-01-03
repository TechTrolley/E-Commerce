import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import backgroundImage from './home.png'; // Use imported image

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Scroll Down Function
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start', // Start the scroll at the beginning of the element
      });
    }
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

          {/* Products Button - Navigation to Products Page */}
          <Link
            onClick={() => scrollToSection('smartphones')}
            to="/products" // Using Link to navigate within the app
            className="text-white hover:bg-black transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg mr-6"
          >
            <span className="uppercase tracking-wide font-semibold">Products</span>
          </Link>

          <div className="flex items-center space-x-4">
            {/* Shopping Cart Button */}
            <button className="flex items-center space-x-2 text-white hover:bg-black transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg mr-2">
              <FaShoppingCart size={25} />
              <span className="pl-1 uppercase tracking-wide font-semibold">Cart</span>
            </button>

            {/* Login Button */}
            <button className="flex items-center justify-center text-white hover:bg-black transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg">
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

      {/* Products Section - Below Navbar */}
      <div id="products" className="bg-[#122F3D] text-white py-4">
        <div className="mx-auto flex flex-wrap space-x-4">
          <Link
            to="#smartphones"
            className="block hover:bg-[#CC313D] hover:text-white-900 px-3 py-1 text-sm rounded transition-all duration-300"
          >
            Smartphones
          </Link>
          <Link
            to="#smartwatches"
            className="block hover:bg-[#CC313D] hover:text-white-900 px-3 py-1 text-sm rounded transition-all duration-300"
          >
            Smartwatches
          </Link>
          <Link
            to="#laptops"
            className="block hover:bg-[#CC313D] hover:text-white-900 px-3 py-1 text-sm rounded transition-all duration-300"
          >
            Laptops
          </Link>
          <Link
            to="#controllers"
            className="block hover:bg-[#CC313D] hover:text-white-900 px-3 py-1 text-sm rounded transition-all duration-300"
          >
            Controllers
          </Link>
          <Link
            to="#drones"
            className="block hover:bg-[#CC313D] hover:text-white-900 px-3 py-1 text-sm rounded transition-all duration-300"
          >
            Drones
          </Link>
          <Link
            to="#mice"
            className="block hover:bg-[#CC313D] hover:text-white-900 px-3 py-1 text-sm rounded transition-all duration-300"
          >
            Mice
          </Link>
          <Link
            to="#keyboards"
            className="block hover:bg-[#CC313D] hover:text-white-900 px-3 py-1 text-sm rounded transition-all duration-300"
          >
            Keyboards
          </Link>
          <Link
            to="#graphics-cards"
            className="block hover:bg-[#CC313D] hover:text-white-900 px-3 py-1 text-sm rounded transition-all duration-300"
          >
            Graphics Cards
          </Link>
          <Link
            to="#ssds"
            className="block hover:bg-[#CC313D] hover:text-white-900 px-3 py-1 text-sm rounded transition-all duration-300"
          >
            SSDs
          </Link>
        </div>
      </div>

      {/* Background Image */}
      <div>
        <img
          src={backgroundImage} // Use the imported image
          alt="Background"
          style={{
            width: '100%',
            height: 'auto', // Maintain aspect ratio
            objectFit: 'cover',
            // marginBottom: '10%',// Ensures image fills container properly
          }}
        />
      </div>
      {/* Section to scroll to */}
      <div id="smartphones" style={{ background: 'white' }}>
      </div>
    </>
  );
};

export default Navbar;
