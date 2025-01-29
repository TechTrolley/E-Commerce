import React from 'react';
import { Link } from 'react-router-dom';
import iPhoneImage from './OIP.jpg';
import samsungImage from './OIP.jpg';

const SmartphonesList = () => {
  const smartphones = [
    {
      id: 1,
      name: 'iPhone 15 Pro',
      price: '$999',
      description: 'Titanium design. A17 Pro chip. 48MP main camera.',
      image: iPhoneImage,
    },
    {
      id: 2,
      name: 'Samsung Galaxy S23 Ultra',
      price: '$1199',
      description: '200MP camera, Snapdragon 8 Gen 2, S Pen included.',
      image: samsungImage,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">Smartphones</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {smartphones.map((phone) => (
          <div
            key={phone.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-all duration-300"
          >
            <img
              src={phone.image}
              alt={phone.name}
              className="w-full h-64 object-cover"
            />
            <div className="p-4">
              <h2 className="text-xl font-bold mb-2">{phone.name}</h2>
              <p className="text-gray-600 mb-3">{phone.description}</p>
              <div className="text-lg font-bold text-blue-600">
                {phone.price}
              </div>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition-colors">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
      <Link
        to="/products"
        className="mt-6 inline-block bg-gray-200 px-4 py-2 rounded hover:bg-gray-300 transition-colors"
      >
        ← Back to Products
      </Link>
    </div>
  );
};

export default SmartphonesList;