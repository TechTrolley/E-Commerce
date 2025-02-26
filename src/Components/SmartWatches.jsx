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
import b3 from '../assets/boatxtendpro.webp';
import b4 from '../assets/boatwaveneo.webp';

const SmartWatches = () => {
  const watchList = [
    { id: 1, name: 'Samsung Galaxy Watch FE', description: 'A sleek and lightweight smartwatch with over 90 exercises for comprehensive fitness tracking.', image: phoneImage },
    { id: 2, name: 'Samsung Galaxy Fit3', description: 'A slim fitness tracker with a 1.6-inch display, 100+ workout modes, and 13-day battery life.', image: watchImage },
    { id: 3, name: 'Samsung Galaxy Watch 4', description: 'Track fitness and health with precision using advanced sensors and sleek design.', image: lapImage },
    { id: 4, name: 'Samsung Galaxy Ultra', description: 'A premium smartwatch built for durability and peak performance in every situation.', image: Controllers },
    { id: 5, name: 'Apple Watch Ultra', description: 'Designed for adventure enthusiasts with an ultra-durable build and enhanced GPS tracking.', image: Drones },
    { id: 6, name: 'Apple Watch 9', description: 'Powered by the S9 chip, featuring a brighter display and improved battery life.', image: Mouse },
    { id: 7, name: 'Apple Watch Ultra 2', description: 'A high-performance watch for extreme sports with up to 3000 nits brightness.', image: Rtx },
    { id: 8, name: 'Apple Watch 10', description: 'Innovative smartwatch with enhanced health monitoring and sleek design.', image: speak },
    { id: 9, name: 'Boat Wave Elevate Pro', description: 'A stylish smartwatch with a 1.96-inch AMOLED display and advanced health tracking.', image: b1 },
    { id: 10, name: 'Boat Storm', description: 'An affordable smartwatch with fitness tracking and IP67 water resistance.', image: b2 },
    { id: 11, name: 'Boat Xtend Pro', description: 'A smartwatch with Alexa built-in, offering seamless connectivity and health monitoring.', image: b3 },
    { id: 12, name: 'Boat Wave Neo', description: 'A budget-friendly smartwatch with multiple sports modes and heart rate monitoring.', image: b4 },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">SmartWatches</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {watchList.map((product) => (
          <div key={product.id} className="block">
            <div className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 h-full flex flex-col">
              <img src={product.image} alt={product.name} className="w-full object-cover" />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4">{product.description}</p>
                <Link to={`/watch/${product.id}`} className="mt-auto bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition-colors duration-300">
                  View Details
                </Link>
              </div>
            </div> 
          </div>
        ))}
      </div>
    </div>
  );
};

export default SmartWatches;
