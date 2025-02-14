import React from 'react';
import { Link } from 'react-router-dom';
import watchImage from '../assets/samsungswatch2.avif';
import phoneImage from '../assets/samsunggalaxyfe.jpg';
import lapImage from '../assets/samsunggalaxywatch4.webp';
import Controllers from '../assets/samsunggalaxywatchultra.jpeg';
import Mouse from '../assets/applewatch9.webp';
import Drones from '../assets/applewatchultra.png';
import Rtx from '../assets/applewatchultra2.png';
import speak from '../assets/applewatch10.png';
import b1 from '../assets/boatwaveelevatepro.png';
import b2 from '../assets/boatstorm.avif';
import b3 from '../assets/applewatch10.png';
import b4 from '../assets/applewatch10.png';

const SmartWatches = () => {
  const phoneList = [
    {
      id: 1,
      name: 'Samsung Galaxy Watch FE',
      description: 'Explore the latest and greatest smartphones on the market.',
      image: phoneImage,
    },
    {
      id: 2,
      name: 'Samsung Galaxy Fit3',
      description: 'Discover the future of wearable technology with our collection of smartwatches.',
      image: watchImage,
    },
    {
      id: 3,
      name: 'Samsung Galaxy Watch 4',
      description: 'Grab the Best Deals on Laptops with Power, Performance, and Portability at Unbeatable Prices!',
      image: lapImage,
    },
    {
      id: 4,
      name: 'Samsung Galaxy Ultra',
      description: 'Shop the Best Deals on Gaming Controllers – Precision, Comfort, and Style at Your Fingertips!',
      image: Controllers,
    },
    {
      id: 5,
      name: 'Apple Watch Ultra',
      description: ' Explore Amazing Drone Deals – Capture Stunning Views and Elevate Your Adventures.',
      image: Drones,
    },
    {
      id: 6,
      name: 'Apple Watch 9',
      description: 'Unbeatable Deals on Mice – Precision, Style, and Performance at Your Fingertips!',
      image: Mouse,
    },
    {
      id: 7,
      name: 'Apple Watch Ultra 2',
      description: 'Unleash Ultimate Performance with Our GPU Deals – Upgrade Today and Dominate Tomorrow!',
      image: Rtx,
    },
    {
      id: 8,
      name: 'Apple Watch 10',
      description: 'Grab the Best Deals on Speakers – Crystal-Clear Sound for Every Moment.',
      image: speak,
    },
    {
      id: 9,
      name: 'Boat Wave Elevate Pro',
      description: 'Grab the Best Deals on Speakers – Crystal-Clear Sound for Every Moment.',
      image: b1,
    },
    {
      id: 10,
      name: 'Boat Storm',
      description: 'Grab the Best Deals on Speakers – Crystal-Clear Sound for Every Moment.',
      image: b2,
    },
    {
      id: 11,
      name: 'Speakers',
      description: 'Grab the Best Deals on Speakers – Crystal-Clear Sound for Every Moment.',
      image: b3,
    },
    {
      id:12,
      name: 'Speakers',
      description: 'Grab the Best Deals on Speakers – Crystal-Clear Sound for Every Moment.',
      image: b4,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">SmartWatches</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {phoneList.map((product) => {
          const isSmartphone = product.name === 'SmartPhones';
          const Wrapper = isSmartphone ? Link : 'div';
          const wrapperProps = isSmartphone ? { to: '/smartphones' } : {};

          return (
            <Wrapper
              {...wrapperProps}
              key={product.id}
              className={isSmartphone ? "cursor-pointer block" : "block"}
            >
              <div className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 h-full flex flex-col">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full object-cover"
                />
                <div className="p-4 flex flex-col flex-grow">
                  <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                  <p className="text-gray-600 mb-4">{product.description}</p>
                  <div className="text-lg font-semibold text-blue-500 mb-4">
                    {product.price}
                  </div>
                  <Link
                    to={`/product/${product.id}`}
                    className="mt-auto bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition-colors duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            </Wrapper>
          );
        })}
      </div>
    </div>
  );
};

export default SmartWatches;