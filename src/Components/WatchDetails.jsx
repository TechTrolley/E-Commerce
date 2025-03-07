import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import watch1 from '../assets/samsungswatch2.avif';
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

const WatchDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [showRatingMessage, setShowRatingMessage] = useState(false);

  const watches = [
    {
      id: 1,
      name: 'Samsung Galaxy Watch FE',
      description: 'Advanced fitness tracking with sleek design.',
      image: phoneImage,
      price: 'Rs.9,999 ',
      specs: ['1.4" AMOLED Display', 'Advanced Sleep & Fitness Tracking', 'Wear OS by Google', 'IP68 Water Resistance', 'LTE & Bluetooth Models'],
    },
    {
      id: 2,
      name: 'Samsung Galaxy Fit3',
      description: 'A rugged smartwatch designed for extreme conditions.',
      image: watch1,
      price: 'Rs.14,000',
      specs: ['1.5" AMOLED Display', 'Long Battery Life', 'GPS & Altimeter', 'Military-Grade Durability', 'ECG & Blood Pressure Monitoring'],
    },
    {
      id: 3,
      name: 'Samsung Galaxy Watch 4',
      description: 'Powerful smartwatch with advanced health monitoring.',
      image: lapImage,
      price: 'Rs.18,000',
      specs: ['Always-On Retina Display', 'S9 Chip for Faster Performance', 'Blood Oxygen & ECG Apps', 'Crash Detection', 'IP6X Dust Resistance'],
    },
    {
      id: 4,
      name: 'Samsung Galaxy Ultra',
      description: 'Built for adventure with premium features.',
      image: Controllers,
      price: 'Rs.19,999',
      specs: ['49mm Titanium Case', 'Dual-Frequency GPS', 'Depth & Water Temperature Sensor', 'Larger Digital Crown', '36-Hour Battery Life'],
    },
    {
      id: 5,
      name: 'Apple Watch Ultra',
      description: 'An even more powerful Ultra watch.',
      image: Drones,
      price: 'Rs.24,000',
      specs: ['Brighter Display (3000 nits)', 'S9 Chip for Better Performance', 'Action Button Customization', 'Longer Battery Life', 'Enhanced Navigation Features'],
    },
    {
      id: 6,
      name: 'Apple Watch 9',
      description: 'Stylish smartwatch with fitness tracking.',
      image: Mouse,
      price: 'Rs.38,000',
      specs: ['1.96" AMOLED Display', 'Heart Rate & SpO2 Monitoring', 'Bluetooth Calling', '100+ Sports Modes', '5 ATM Water Resistance'],
    },
    {
      id: 7,
      name: 'Apple Watch Ultra 2',
      description: 'Affordable fitness smartwatch.',
      image: Rtx,
      price: 'Rs.55,999',
      specs: ['1.3" HD Display', 'Real-time Heart Rate Monitoring', 'Multiple Sports Modes', 'IP67 Water & Dust Resistance', 'Up to 10 Days Battery Life'],
    },
    {
      id: 8,
      name: 'Apple Watch 10',
      description: 'Affordable fitness smartwatch.',
      image: speak,
      price: '$49-$99',
      specs: ['1.3" HD Display', 'Real-time Heart Rate Monitoring', 'Multiple Sports Modes', 'IP67 Water & Dust Resistance', 'Up to 10 Days Battery Life'],
    },
    {
      id: 9,
      name: 'Boat Wave Elevate Pro',
      description: 'Affordable fitness smartwatch.',
      image: b1,
      price: '$49-$99',
      specs: ['1.3" HD Display', 'Real-time Heart Rate Monitoring', 'Multiple Sports Modes', 'IP67 Water & Dust Resistance', 'Up to 10 Days Battery Life'],
    },
    {
      id: 10,
      name: 'Boat Storm',
      description: 'Affordable fitness smartwatch.',
      image: b2,
      price: '$49-$99',
      specs: ['1.3" HD Display', 'Real-time Heart Rate Monitoring', 'Multiple Sports Modes', 'IP67 Water & Dust Resistance', 'Up to 10 Days Battery Life'],
    },
    {
      id: 11,
      name: 'Boat Xtend Pro',
      description: 'Affordable fitness smartwatch.',
      image: b3,
      price: '$49-$99',
      specs: ['1.3" HD Display', 'Real-time Heart Rate Monitoring', 'Multiple Sports Modes', 'IP67 Water & Dust Resistance', 'Up to 10 Days Battery Life'],
    },
    {
      id: 12,
      name: 'Boat Wave Neo',
      description: 'Affordable fitness smartwatch.',
      image: b4,
      price: '$49-$99',
      specs: ['1.3" HD Display', 'Real-time Heart Rate Monitoring', 'Multiple Sports Modes', 'IP67 Water & Dust Resistance', 'Up to 10 Days Battery Life'],
    },
  ];

  const watch = watches.find(w => w.id === parseInt(id));

  if (!watch) {
    return <div className="text-center mt-8">Watch not found</div>;
  }

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === watch.id);
  
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...watch, quantity });
    }
  
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${quantity} ${watch.name} added to cart!`);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  const handleBuyNow = () => {
    console.log(`Proceeding to checkout with ${quantity} ${watch.name}`);
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      {/* <Link to="/watches" className="text-blue-500 mb-4 inline-block">&larr; Back to Watches</Link> */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src={watch.image} alt={watch.name} className="w-full h-96 object-contain mb-6" />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{watch.name}</h1>
          <p className="text-4xl text-blue-600">{watch.price}</p>
          <p className="text-gray-600">{watch.description}</p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Key Features:</h3>
            <ul className="list-disc pl-6 space-y-2">
              {watch.specs?.map((spec, index) => (
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
            <button onClick={() => setShowRatingMessage(true)} className="bg-purple-600 text-white px-8 py-3 rounded-lg hover:bg-purple-700 transition-colors">Submit Rating</button>
            {showRatingMessage && <p className="text-green-600">Thank you for rating us {rating} stars!</p>}
          </div>
          <div className="flex items-center space-x-4">
            <label className="text-lg font-semibold">Quantity:</label>
            <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(Math.max(1, e.target.value))} className="w-20 px-3 py-2 border rounded" />
          </div>
          <div className="flex space-x-4">
            <button onClick={handleAddToCart} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex-1">Add to Cart</button>
            <button onClick={handleBuyNow} className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex-1">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WatchDetails;
