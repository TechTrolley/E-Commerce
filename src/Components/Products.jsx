import React from 'react';
import { Link } from 'react-router-dom';
import watchImage from '../assets/watch.jpg';
import phoneImage from '../assets/rog.jpg';
import lapImage from '../assets/tuf.png';
import Controllers from '../assets/joys.jpg';
import Mouse from '../assets/mouse.webp';
import Drones from '../assets/drone.webp';
import Rtx from '../assets/rtx.jpg';
import speak from '../assets/speak.webp';

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'SmartPhones',
      description: 'Explore the latest and greatest smartphones on the market.',
      image: phoneImage,
    },
    {
      id: 2,
      name: 'SmartWatches',
      description: 'Discover the future of wearable technology with our collection of smartwatches.',
      image: watchImage,
    },
    {
      id: 3,
      name: 'Laptops',
      description: 'Grab the Best Deals on Laptops with Power, Performance, and Portability at Unbeatable Prices!',
      image: lapImage,
    },
    {
      id: 4,
      name: 'Controllers',
      description: 'Shop the Best Deals on Gaming Controllers – Precision, Comfort, and Style at Your Fingertips!',
      image: Controllers,
    },
    {
      id: 5,
      name: 'Drones',
      description: ' Explore Amazing Drone Deals – Capture Stunning Views and Elevate Your Adventures.',
      image: Drones,
    },
    {
      id: 6,
      name: 'Mouse',
      description: 'Unbeatable Deals on Mice – Precision, Style, and Performance at Your Fingertips!',
      image: Mouse,
    },
    {
      id: 7,
      name: 'Graphics Card',
      description: 'Unleash Ultimate Performance with Our GPU Deals – Upgrade Today and Dominate Tomorrow!',
      image: Rtx,
    },
    {
      id: 8,
      name: 'Speakers',
      description: 'Grab the Best Deals on Speakers – Crystal-Clear Sound for Every Moment.',
      image: speak,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-6 mt-12">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => {
          const isSmartphone = product.name === 'SmartPhones';
          const isSmartwatch = product.name === 'SmartWatches';
          const isLaptop = product.name === 'Laptops';

          const Wrapper = isSmartphone || isSmartwatch || isLaptop ? Link : 'div';
          const wrapperProps = isSmartphone
            ? { to: '/smartphones' }
            : isSmartwatch
            ? { to: '/smartwatches' }
            : isLaptop
            ? { to: '/laptops' }
            : {};

          return (
            <Wrapper
              {...wrapperProps}
              key={product.id}
              className="cursor-pointer block"
            >
              <div className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 h-full">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full object-cover"
                />
                <div className="p-4">
                  <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                </div>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
};

export default Products;