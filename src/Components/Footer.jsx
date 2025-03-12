import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-6 mt-12">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center">
        {/* Brand Section */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Tech Trolley</h2>
          <p className="text-gray-400">Your Ultimate Tech Destination</p>
        </div>

        {/* Navigation Links */}
        <div className="flex space-x-6 text-gray-400">
          <Link to="/about" className="hover:text-white transition duration-300">About</Link>
          <Link to="/products" className="hover:text-white transition duration-300">Products</Link>
          <Link to="/contact" className="hover:text-white transition duration-300">Contact</Link>
        </div>

        {/* Copyright */}
        <div className="text-gray-400 text-sm mt-4 md:mt-0">
          © {new Date().getFullYear()} Tech Trolley. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
