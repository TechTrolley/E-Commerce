import React from 'react';
import { Link } from 'react-router-dom';
import watchImage from '../assets/vectus1.jpg';
import phoneImage from '../assets/pavil2.jpg';
import lapImage from '../assets/silv.jpg';
import Controllers from '../assets/omen2.webp';
import Mouse from '../assets/lap2.webp';
import Drones from '../assets/lap1.jpg';
import Rtx from '../assets/lap3.png';
import speak from '../assets/lap4.webp';

const phoneList = () => {
  const phoneList = [
    {
      id: 1,
      name: 'HP Pavilion Gaming',
      description: 'The HP Pavilion Gaming laptop offers a balance of performance and portability, featuring powerful processors and dedicated graphics for smooth gameplay and multitasking.',
      image: phoneImage,
    },
    {
      id: 2,
      name: 'HP Victus',
      description: 'Designed for both casual and serious gamers, the HP Victus series provides robust performance with advanced cooling solutions, ensuring an immersive gaming experience.',
      image: watchImage,
    },
    {
      id: 3,
      name: 'HP PAVILION 15T',
      description: 'The HP Pavilion 15T combines sleek design with high performance, equipped with the latest processors and ample storage, making it ideal for both work and entertainment.',
      image: lapImage,
    },
    {
      id: 4,
      name: 'HP OMEN 8',
      description: 'The HP OMEN 8 is a powerhouse gaming laptop, featuring top-tier graphics and processing power, along with customizable RGB lighting and advanced thermal management.',
      image: Controllers,
    },
    {
      id: 5,
      name: 'ROG Zephyrus G16 (2024)',
      description: 'The ASUS ROG Zephyrus G16 (2024) features an AMD Ryzen AI 9 HX 370 processor and NVIDIA GeForce RTX 4070 GPU, delivering exceptional gaming performance in a sleek, portable design.',
      image: Drones,
    },
    {
      id: 6,
      name: 'Asus ROG Strix Scar 18',
      description: 'The Asus ROG Strix Scar 18 offers a large 18-inch display with high refresh rates, powered by the latest processors and GPUs, making it a top choice for competitive gamers.',
      image: Mouse,
    },
    {
      id: 7,
      name: 'ASUS TUF F15 (2023)',
      description: 'The ASUS TUF Gaming F15 (2023) is built for durability and performance, featuring military-grade construction, high-refresh-rate displays, and powerful hardware to handle the latest games.',
      image: Rtx,
    },
    {
      id: 8,
      name: 'ASUS TUF A15 (2022)',
      description: 'The ASUS TUF A15 (2022) combines affordability with performance, offering AMD Ryzen processors and NVIDIA graphics in a sturdy chassis, suitable for gamers and content creators alike.',
      image: speak,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-6 mt-12">
      <h1 className="text-3xl font-bold text-center mb-8">Laptops</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {phoneList.map((product) => (
          <div key={product.id} className="block">
            <div className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 h-full flex flex-col">
              <img
                src={product.image}
                alt={product.name}
                className="w-full object-cover"
              />
              <div className="p-4 flex flex-col flex-grow">
                <h2 className="text-xl font-bold mb-2">{product.name}</h2>
                <p className="text-gray-600 mb-4 line-clamp-3">
                  {product.description}
                </p>
                <Link
                  to={`/product/${product.id}`}
                  className="mt-auto bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition-colors duration-300"
                >
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

export default phoneList;
