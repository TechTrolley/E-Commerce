import React from 'react';
import { Link } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Image from "../assets/art2.png"
import BackgroundImage from "../assets/Background.jpg"
const Hero = () => {
  return (
    <section className="h-screen bg-gray-200 flex items-center justify-center" style={{ backgroundImage: `url(${BackgroundImage})` }}>
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between">
        {/* Content Div */}
        <div className="md:w-1/2 text-center md:text-left mb-8 md:mb-0">
          <h1 className="text-5xl font-extrabold text-gray-900 mb-6 leading-tight">
            Welcome to <span className="text-blue-600">Tech Trolley</span>
          </h1>
          <p className="text-xl text-gray-700 mb-8">
          Welcome to Tech Trolley – Your Ultimate Tech Destination!
          </p>
          
           <Link to="/products"  className="bg-blue-600 text-white px-8 py-3 text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition duration-300">
            <span className="uppercase tracking-wide font-semibold"> Get Started</span></Link>
          </div>

        {/* Image Div */}
        <div className="md:w-1/2 flex justify-center">
          <img
            src={Image}
            alt="Hero Image"
            className="rounded-lg shadow-inner max-w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
