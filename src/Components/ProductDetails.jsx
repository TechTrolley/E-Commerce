import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import watchImage from '../assets/samsungs22.jfif';
import phoneImage from '../assets/sams21.png';
import lapImage from '../assets/samsungs23fe.jpg';
import Controllers from '../assets/samsungs24ultra.webp';
import Mouse from '../assets/iphone15.png';
import Drones from '../assets/iphone14.png';
import Rtx from '../assets/iphone16.png';
import speak from '../assets/iphone16promax.png';

const ProductDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [showRatingMessage, setShowRatingMessage] = useState(false);

  const products = [
    {
      id: 1,
      name: 'Samsung Galaxy S21 5G',
      description: 'Explore the latest and greatest smartphones on the market.',
      image: phoneImage,
      price: 'Rs.22,999',
      specs: ['6.2" Dynamic AMOLED 2X Display', '5G Connectivity', 'Triple Camera (12MP + 64MP + 12MP)', '4000mAh Battery', '8GB RAM', '128GB/256GB Storage']
    },
    {
      id: 2,
      name: 'Samsung Galaxy S22 5G',
      description: 'Discover the future of wearable technology with our collection of smartwatches.',
      image: watchImage,
      price: 'Rs.39,499',
      specs: ['6.1" Dynamic AMOLED 2X Display', 'Snapdragon 8 Gen 1 Processor', 'Triple Camera (50MP + 10MP + 12MP)', '3700mAh Battery', '8GB RAM', '128GB/256GB Storage']
    },
    {
      id: 3,
      name: 'Samsung S23 FE 5G',
      description: 'Grab the Best Deals on Laptops with Power, Performance, and Portability at Unbeatable Prices!',
      image: lapImage,
      price: 'Rs.59,999',
      specs: ['6.4" Dynamic AMOLED 2X Display', 'Exynos 2200 Processor', 'Triple Camera (50MP + 8MP + 12MP)', '4500mAh Battery', '8GB RAM', '128GB/256GB Storage']
    },
    {
      id: 4,
      name: 'Samsung S24 Ultra',
      description: 'Shop the Best Deals on Gaming Controllers – Precision, Comfort, and Style at Your Fingertips!',
      image: Controllers,
      price: 'Rs.109,999',
      specs: ['6.8" QHD+ AMOLED Display', 'Snapdragon 8 Gen 3 Processor', 'Quad Camera (200MP + 10MP + 12MP + 50MP)', '5000mAh Battery', '12GB RAM', '256GB/512GB Storage']
    },
    {
      id: 5,
      name: 'Apple iPhone 14',
      description: 'Explore Amazing Drone Deals – Capture Stunning Views and Elevate Your Adventures.',
      image: Drones,
      price: 'Rs.50,999',
      specs: ['6.1" Super Retina XDR Display', 'A15 Bionic Chip', 'Dual Camera (12MP + 12MP)', 'Crash Detection & Emergency SOS', '6GB RAM', '128GB/256GB Storage']
    },
    {
      id: 6,
      name: 'Apple iPhone 15',
      description: 'Unbeatable Deals on Mice – Precision, Style, and Performance at Your Fingertips!',
      image: Mouse,
      price: 'Rs.62,490',
      specs: ['6.1" Super Retina XDR Display', 'A16 Bionic Chip', 'Dynamic Island', 'Advanced Dual Camera System', '6GB RAM', '128GB/256GB/512GB Storage']
    },
    {
      id: 7,
      name: 'Apple iPhone 16',
      description: 'Unleash Ultimate Performance with Our GPU Deals – Upgrade Today and Dominate Tomorrow!',
      image: Rtx,
      price: 'Rs.69,999',
      specs: ['6.3" Super Retina XDR Display', 'A17 Bionic Chip', 'Triple Camera (48MP + 12MP + 12MP)', '5G Advanced Connectivity', '8GB RAM', '256GB/512GB Storage']
    },
    {
      id: 8,
      name: 'Apple iPhone 16 Pro Max',
      description: 'Grab the Best Deals on Speakers – Crystal-Clear Sound for Every Moment.',
      image: speak,
      price: 'Rs.1,75,900',
      specs: ['6.9" Super Retina XDR Display', 'A17 Pro Chip', 'Quad Camera (48MP + 12MP + 12MP + LiDAR)', 'ProMotion Technology', '12GB RAM', '256GB/512GB/1TB Storage']
    }
  ];

  const product = products.find(p => p.id === parseInt(id));

  if (!product) {
    return <div className="text-center mt-8">Product not found</div>;
  }

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === product.id);
  
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...product, quantity });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${quantity} ${product.name} added to cart!`);
    window.dispatchEvent(new Event("cartUpdated")); // Update cart across app
  };

  const handleBuyNow = () => {
    console.log(`Proceeding to checkout with ${quantity} ${product.name}`);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6 pt-9">
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
          <p className="text-4xl text-blue-600">{product.price}</p>
          <p className="text-gray-600">{product.description}</p>

          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Key Features:</h3>
            <ul className="list-disc pl-6 space-y-2">
              {product.specs?.map((spec, index) => (
                <li key={index} className="text-gray-600">{spec}</li>
              ))}
            </ul>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Rate Us:</h3>
            <div className="flex space-x-2">
              {[1, 2, 3, 4, 5].map((star) => (
                <button key={star} onClick={() => setRating(star)} className={`text-2xl ${star <= rating ? 'text-yellow-500' : 'text-gray-300'}`}>★</button>
              ))}
            </div>
            <button onClick={() => setShowRatingMessage(true)} className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-green-600 transition-colors">Submit Rating</button>
            {showRatingMessage && <p className="text-green-600">Thank you for rating us {rating} stars!</p>}
          </div>

          <div className="flex items-center space-x-4">
            <label className="text-lg font-semibold">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))}
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