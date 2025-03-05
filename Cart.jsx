import React, { useState, useEffect } from "react";

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

  // Function to calculate total price for a product
  const calculateTotalPrice = (price, quantity) => {
    return parseInt(price.replace(/\D/g, "")) * quantity; // Remove "Rs." and convert to number
  };

  // Calculate Grand Total
  const grandTotal = cartItems.reduce((total, item) => {
    return total + calculateTotalPrice(item.price, item.quantity);
  }, 0);

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Shopping Cart</h1>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          <ul>
            {cartItems.map((item, index) => (
              <li key={index} className="mb-4 border-b pb-4 flex justify-between items-center">
                <div>
                  <h2 className="text-xl font-semibold">{item.name}</h2>
                  <p>Price: {item.price}</p>
                  <p>Quantity: {item.quantity}</p>
                  
                </div>
                <button
                  onClick={() => handleRemoveItem(item.id)}
                  className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 transition"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>
          <div className="mt-6 text-2xl font-bold">
            Grand Total: Rs.{grandTotal}
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
