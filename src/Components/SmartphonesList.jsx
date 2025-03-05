import React from 'react';
import { Link } from 'react-router-dom';
import iPhoneImage from '../assets/rog.jpg';
import samsungImage from '../assets/rog.jpg';

const SmartphonesList = () => {
  // ... (same smartphone data array)

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">rtphones</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {smartphones.map((phone) => (
          <div
            key={phone.id}
            className="bg-white border-2 border-gray-100 rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300 hover:border-blue-200"
          >
            <div className="h-40 overflow-hidden border-b border-gray-100"> {/* Added border bottom */}
              <img
                src={phone.image}
                alt={phone.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4">
              <h2 className="text-lg font-bold mb-1">{phone.name}</h2>
              <p className="text-gray-600 mb-2 text-sm">{phone.description}</p>
              <div className="text-lg font-bold text-blue-600">
                {phone.price}
              </div>
              <button className="mt-3 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition-colors w-full">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      {/* ... (same back link) */}
    </div>
  );
};

export default SmartphonesList;