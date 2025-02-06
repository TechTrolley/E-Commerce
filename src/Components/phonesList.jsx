import React from 'react';
import { Link } from 'react-router-dom';
import watchImage from './samsungs22.jfif';
import phoneImage from './s21.png';
import lapImage from './samsungs23fe.jpg';
import Controllers from './samsungs24ultra.webp';
import Mouse from './iphone15.png';
import Drones from './iphone14.png';
import Rtx from './iphone16.png';
import speak from './iphone16promax.png';

const phoneList = () => {
  const phoneList = [
    {
      id: 1,
      name: 'Samsung S21',
      description: 'Samsung Galaxy S21 5G Android smartphone. The new Dual zoom lens system is faster and sharper than any zoom before...',
      image: phoneImage,
    },
    {
      id: 2,
      name: 'Samsung S22',
      description: 'Samsung Galaxy S22 5G Android smartphone. The Samsung Galaxy S22 series was unveiled on the 8th February 2022...',
      image: watchImage,
    },
    {
      id: 3,
      name: 'Samsung S23 Fe',
      description: 'Each smartphone features a refined design, powerful processor, and a pro-grade camera system that rivals the best on the market.',
      image: lapImage,
    },
    {
      id: 4,
      name: 'Samsung S24 Ultra',
      description: 'Explore the specs for Samsung Galaxy S24 Ultra, including color availability, display size, camera features, battery life and more...',
      image: Controllers,
    },
    {
      id: 5,
      name: 'Apple iPhone 14',
      description: 'iPhone 14 Technical Specifications. The iPhone 14 display has rounded corners that follow a beautiful curved design...',
      image: Drones,
    },
    {
      id: 6,
      name: 'Apple iphone 15',
      description: 'INNOVATIVE DESIGN — iPhone 15 features a durable color-infused glass and aluminum design. It is splash and water resistant...',
      image: Mouse,
    },
    {
      id: 7,
      name: 'Apple iphone 16',
      description: 'The iPhone 16 features a 6.1" and 6.7" Super Retina XDR display with up to 2,000 nits brightness....',
      image: Rtx,
    },
    {
      id: 8,
      name: 'Apple iphone 16 Pro Max',
      description: 'The iPhone 16 Pro Max sports a 6.9-inch LTPO Super Retina XDR OLED display and 120Hz refresh rate support...',
      image: speak,
    },
  ];

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-8">SmartPhones</h1>
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

export default phoneList;