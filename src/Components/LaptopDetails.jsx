import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import watchImage from '../assets/vectus1.jpg';
import phoneImage from '../assets/pavil2.jpg';
import lapImage from '../assets/silv.jpg';
import Controllers from '../assets/omen2.webp';
import Mouse from '../assets/lap2.webp';
import Drones from '../assets/lap1.jpg';
import Rtx from '../assets/lap3.png';
import speak from '../assets/lap4.webp';

const LaptopDetails = () => {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [rating, setRating] = useState(0);
  const [showRatingMessage, setShowRatingMessage] = useState(false);

  const laptops = [
    {
      id: 1,
      name: 'HP Pavilion Gaming',
      image: phoneImage,
      price: 'Rs.75,000',
      specs: ['AMD Ryzen 5', 'GTX 1650', '144Hz Display', '512GB SSD', 'Pre-installed Windows 11', '1-Year Warranty']
    },
    {
      id: 2,
      name: 'HP Victus',
      image: watchImage,
      price: 'Rs.85,000',
      specs: ['Intel i5 12th Gen', 'RTX 3050', '144Hz Display', '16GB RAM','Dual Fan Cooling','3-Year Extended Warranty']
    },
    {
      id: 3,
      name: 'HP PAVILION 15T',
      image: lapImage,
      price: 'Rs.90,000',
      specs: ['Intel i7 11th Gen', 'GTX 1660Ti', '1TB SSD', 'Full HD Display', 'Fingerprint Reader','Amazon Alexa Built-in']
    },
    {
      id: 4,
      name: 'HP OMEN 8',
      image: Controllers,
      price: 'Rs.1,20,000',
      specs: ['Intel i9 12th Gen', 'RTX 3070', 'RGB Keyboard', 'Liquid Cooling', 'VR Ready','3-Year Accidental Damage Protection']
    },
    {
      id: 5,
      name: 'ROG Zephyrus G16 (2024)',
      image: Drones,
      price: 'Rs.1,50,000',
      specs: ['AMD Ryzen AI 9', 'RTX 4070', '16" QHD 165Hz Display', '1TB NVMe SSD', 'AI-Powered Performance Boost', 'Dolby Atmos Speakers', 'Amazon Prime Gaming Subscription']
    },
    {
      id: 6,
      name: 'Asus ROG Strix Scar 18',
      image: Mouse,
      price: 'Rs.1,80,000',
      specs: ['Intel i9 13th Gen', 'RTX 4090', '240Hz Display', '32GB RAM', 'Mechanical Keyboard', 'Liquid Metal Cooling']
    },
    {
      id: 7,
      name: 'ASUS TUF F15 (2023)',
      image: Rtx,
      price: 'Rs.1,10,000',
      specs: ['Intel i7 12th Gen', 'RTX 3060', 'High Refresh Rate Display', 'Durable Build','Dual Speaker System', '1-Year McAfee Subscription']
    },
    {
      id: 8,
      name: 'ASUS TUF A15 (2022)',
      image: speak,
      price: 'Rs.95,000',
      specs: ['AMD Ryzen 7', 'RTX 2060', 'Military Grade Durability', '144Hz Display', 'Extended Battery Life','6-Month No Cost EMI on Flipkart']
    }
  ];

  const laptop = laptops.find((l) => l.id === parseInt(id));

  if (!laptop) {
    return <div className="text-center mt-8">Laptop not found</div>;
  }

  const handleAddToCart = () => {
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItem = cart.find((item) => item.id === laptop.id);
    if (existingItem) {
      existingItem.quantity += quantity;
    } else {
      cart.push({ ...laptop, quantity });
    }
    localStorage.setItem("cart", JSON.stringify(cart));
    alert(`${quantity} ${laptop.name} added to cart!`);
    window.dispatchEvent(new Event("cartUpdated"));
  };

  return (
    <div className="max-w-screen-xl mx-auto p-6 pt-9">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src={laptop.image} alt={laptop.name} className="w-full h-96 object-contain mb-6" />
        </div>
        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{laptop.name}</h1>
          <p className="text-2xl text-blue-600">₹{formatPrice(laptop.price)}</p>
          <div className="space-y-4">
            <h3 className="text-xl font-semibold">Key Features:</h3>
            <ul className="list-disc pl-6 space-y-2">
              {laptop.specs?.map((spec, index) => (
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
            <input type="number" min="1" value={quantity} onChange={(e) => setQuantity(Math.max(1, Number(e.target.value)))} className="w-20 px-3 py-2 border rounded" />
          </div>
          <div className="flex space-x-4">
            <button onClick={handleAddToCart} className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors flex-1">Add to Cart</button>
            <button className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors flex-1">Buy Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LaptopDetails;
