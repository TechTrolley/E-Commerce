import React from 'react';
import watchImage from './Watch.jpg'; // Importing the uploaded image
import phoneImage from './rog.jpg';
import lapImage from './tuf.png';
import Controllers from './joys.jpg';
import Mouse from './mouse.webp';
import Drones from './drone.webp';
import Rtx from './rtx.jpg';
import speak from './speak.webp';

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
      image: watchImage, // Using the uploaded image for SmartWatches
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
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {products.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-45 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="text-lg font-semibold text-blue-500">
                {product.price}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
