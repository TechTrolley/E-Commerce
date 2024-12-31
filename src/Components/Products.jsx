import React from 'react';
import watchImage from './wat.jpg'; // Importing the uploaded image

const Products = () => {
  const products = [
    {
      id: 1,
      name: 'SmartPhones',
      description: 'Explore the latest and greatest smartphones on the market.',
      image: 'https://i.pinimg.com/236x/70/c4/0a/70c40acd30b1f1d2a493b7137626d788.jpg/150',
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
      description: '.',
      image: 'https://i.pinimg.com/736x/d0/70/07/d070075c1d5b8d094d43a36ea431d44c.jpg/150',
    },
    {
      id: 4,
      name: 'Controllers',
      description: 'This is a description for product 4.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 5,
      name: 'Drones',
      description: 'This is a description for product 5.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 6,
      name: 'Mouse',
      description: 'This is a description for product 6.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 7,
      name: 'Graphics Card',
      description: 'This is a description for product 7.',
      image: 'https://via.placeholder.com/150',
    },
    {
      id: 8,
      name: 'SSD',
      description: 'This is a description for product 8.',
      image: 'https://via.placeholder.com/150',
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
