import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import watchImage from './Watch.jpg';
import phoneImage from './sams21.png';
import lapImage from './tuf.png';
import Controllers from './joys.jpg';
import Mouse from './mouse.webp';
import Drones from './drone.webp';
import Rtx from './rtx.jpg';
import speak from './speak.webp';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  const products = [
    {
      id: 1,
      name: 'SmartPhones',
      description: 'Explore the latest and greatest smartphones on the market.',
      image: phoneImage,
      price: '$599-$1299',
      specs: ['6.7" OLED Display', '5G Connectivity', 'Triple Camera System', 'IP68 Water Resistance']
    },
    {
      id: 2,
      name: 'SmartWatches',
      description: 'Discover the future of wearable technology with our collection of smartwatches.',
      image: watchImage,
      price: '$199-$599',
      specs: ['Heart Rate Monitor', 'GPS Tracking', '7-day Battery Life', 'Swim-proof Design']
    },
    {
          id: 3,
          name: 'Laptops',
          description: 'Grab the Best Deals on Laptops with Power, Performance, and Portability at Unbeatable Prices!',
          image: lapImage,
          price: '$199-$599',
      specs: ['Heart Rate Monitor', 'GPS Tracking', '7-day Battery Life', 'Swim-proof Design']
        },
        {
          id: 4,
          name: 'Controllers',
          description: 'Shop the Best Deals on Gaming Controllers – Precision, Comfort, and Style at Your Fingertips!',
          image: Controllers,
          price: '$199-$599',
      specs: ['Heart Rate Monitor', 'GPS Tracking', '7-day Battery Life', 'Swim-proof Design']
        },
        {
          id: 5,
          name: 'Drones',
          description: ' Explore Amazing Drone Deals – Capture Stunning Views and Elevate Your Adventures.',
          image: Drones,
          price: '$199-$599',
      specs: ['Heart Rate Monitor', 'GPS Tracking', '7-day Battery Life', 'Swim-proof Design']
        },
        {
          id: 6,
          name: 'Mouse',
          description: 'Unbeatable Deals on Mice – Precision, Style, and Performance at Your Fingertips!',
          image: Mouse,
          price: '$199-$599',
      specs: ['Heart Rate Monitor', 'GPS Tracking', '7-day Battery Life', 'Swim-proof Design']
        },
        {
          id: 7,
          name: 'Graphics Card',
          description: 'Unleash Ultimate Performance with Our GPU Deals – Upgrade Today and Dominate Tomorrow!',
          image: Rtx,
          price: '$199-$599',
      specs: ['Heart Rate Monitor', 'GPS Tracking', '7-day Battery Life', 'Swim-proof Design']
        },
        {
          id: 8,
          name: 'Speakers',
          description: 'Grab the Best Deals on Speakers – Crystal-Clear Sound for Every Moment.',
          image: speak,
          price: '$199-$599',
      specs: ['Heart Rate Monitor', 'GPS Tracking', '7-day Battery Life', 'Swim-proof Design']
        },
    // Add similar details for other products
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center mt-8">Product not found</div>;
  }

  const handleAddToCart = () => {
    // Implement cart logic here
    console.log(`Added ${quantity} ${product.name} to cart`);
  };

  const handleBuyNow = () => {
    // Implement checkout logic here
    console.log(`Proceeding to checkout with ${quantity} ${product.name}`);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <Link to="/products" className="text-blue-500 mb-4 inline-block">
        &larr; Back to Products
      </Link>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-96 object-contain mb-6"
          />
        </div>
        
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-2xl text-blue-600">{product.price}</p>
          <p className="text-gray-600">{product.description}</p>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Key Features:</h3>
            <ul className="list-disc pl-6 space-y-2">
              {product.specs?.map((spec, index) => (
                <li key={index} className="text-gray-600">{spec}</li>
              ))}
            </ul>
          </div>

          <div className="flex items-center space-x-4">
            <label className="text-lg font-semibold">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, e.target.value))}
              className="w-20 px-3 py-2 border rounded"
            />
          </div>

          <div className="flex space-x-4">
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex-1"
            >
              Add to Cart
            </button>
            <button
              onClick={handleBuyNow}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex-1"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;