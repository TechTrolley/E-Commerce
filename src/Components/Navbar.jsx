import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import backgroundImage from '../assets/home.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 138;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <>
      <nav className="bg-[#CC313D] p-4 border-b-2 border-gray-200 fixed top-0 left-0 w-full z-1000">
        <div className="mx-auto flex flex-wrap justify-between items-center px-4 md:px-8">
          <div className="text-white text-xl font-bold flex-shrink-0">Tech Trolley</div>
          
          <div className="relative flex-grow max-w-[860px] mx-auto ml-28">
            <input
              type="text"
              placeholder="Search for products, brands, and more"
              className="pl-10 pr-4 py-2.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <button className="absolute right-0 top-0 bottom-0 px-4 py-2.5 bg-[#FF9900] rounded-full text-white flex items-center justify-center hover:bg-[#FFB84D]">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z" />
              </svg>
            </button>
          </div>
          
          <div className="flex items-center space-x-4">
            <Link 
              onClick={() => scrollToSection('smartphones')} 
              to="/products" 
              className="text-white hover:bg-black transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg hidden md:block"
            >
              <span className="uppercase tracking-wide font-semibold">Products</span>
            </Link>
            
            <button className="flex items-center space-x-2 text-white hover:bg-black transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg relative">
              <FaShoppingCart size={25} />
              <span className="hidden sm:block pl-1 uppercase tracking-wide font-semibold">Cart</span>
            </button>
            
            <Link 
              to="/login" 
              className="flex items-center justify-center text-white hover:bg-black transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg"
            >
              <FaUser size={25} />
              <span className="hidden sm:block pl-2 uppercase tracking-wide font-semibold">Login</span>
            </Link>
            
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-white">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
        
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-2 bg-[#CC313D] p-2 rounded">
            <Link to="/products" className="text-white text-center hover:bg-black transition-all duration-300 p-2 rounded" onClick={() => scrollToSection('smartphones')}>Products</Link>
            <button className="text-white text-center hover:bg-black transition-all duration-300 p-2 rounded">Cart</button>
            <Link to="/login" className="text-white text-center hover:bg-black transition-all duration-300 p-2 rounded">Login</Link>
          </div>
        )}
      </nav>
      
      <div id="products" className="bg-[#122F3D] text-white py-4 mt-[80px] fixed top-0 left-0 w-full z-1000">
        <div className="mx-auto flex flex-wrap justify-center gap-8 px-4 pr-48 font-semibold">
          {['Smartphones', 'Smartwatches', 'Laptops', 'Controllers', 'Drones', 'Mice', 'Keyboards', 'Graphics Cards', 'SSDs'].map((item) => (
            <Link 
              key={item} 
              to={`/${item.toLowerCase()}`} 
              className="block hover:bg-[#CC313D] hover:text-white px-3 py-1 text-sm rounded transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
      
      <div>
        <img src={backgroundImage} alt="Background" className="w-full h-auto object-cover" />
      </div>
      
      <div id="smartphones"></div>
    </>
  );
};

export default Navbar;
