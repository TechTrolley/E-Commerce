import React, { useState, useEffect } from "react";
import { FaTrash, FaShoppingCart } from "react-icons/fa";
import { Link } from "react-router-dom";

const Cart = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const cart = JSON.parse(localStorage.getItem("cart")) || [];
    setCartItems(cart);
  }, []);

  const handleRemoveItem = (id) => {
    const updatedCart = cartItems.filter((item) => item.id !== id);
    setCartItems(updatedCart);
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    alert("Item removed from cart.");
  };

  const calculateTotalPrice = (price, quantity) => {
    return parseInt(price.replace(/\D/g, "")) * quantity;
  };

  const grandTotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item.price, item.quantity);
  }, 0);

  return (
    <div className="max-w-6xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h1 className="text-4xl font-bold text-center text-gray-800 mb-6 flex items-center justify-center gap-2">
        <FaShoppingCart /> Shopping Cart
      </h1>
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div className="bg-white shadow-md rounded-lg p-6">
          <ul className="space-y-4">
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex flex-col md:flex-row justify-between items-center bg-gray-50 p-4 rounded-lg shadow hover:shadow-lg transition"
              >
                <div className="flex items-center gap-4">
                  <img src={item.image} alt={item.name} className="w-24 h-24 object-cover rounded-lg" />
                  <div>
                    <h2 className="text-xl font-semibold text-gray-800">{item.name}</h2>
                    <p className="text-gray-600">Price: <span className="text-gray-900 font-bold">{item.price}</span></p>
                    <p className="text-gray-600">Quantity: <span className="text-gray-900 font-bold">{item.quantity}</span></p>
                  </div>
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-[#252525] text-white px-4 py-2 rounded-full flex items-center gap-2 hover:bg-blue-700 transition"
                >
                  <FaTrash /> Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-2xl font-bold text-gray-800 flex justify-between items-center">
            <span>Grand Total: Rs.{grandTotal}</span>
            <button className="bg-green-500 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-green-700 transition">
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
