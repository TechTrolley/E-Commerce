import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebases/firebaseConfig";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { FaShoppingCart } from "react-icons/fa";

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Load cart items from local storage
    const storedCart = JSON.parse(localStorage.getItem("cart")) || [];
    setCart(storedCart);
  }, []);

  useEffect(() => {
    // Get logged-in user
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });
    return () => unsubscribe();
  }, []);

  const handleCheckout = async () => {
    if (!user) {
      alert("Please log in to proceed with your purchase.");
      navigate("/login");
      return;
    }

    try {
      // Create an order in Firestore
      const orderData = {
        userId: user.uid,
        customerName: user.displayName || "Anonymous",
        email: user.email,
        items: cart,
        totalPrice: cart.reduce((total, item) => total + item.price * item.quantity, 0),
        status: "Pending",
        createdAt: serverTimestamp(),
      };

      const orderRef = await addDoc(collection(db, "orders"), orderData);

      alert("Order placed successfully!");
      localStorage.removeItem("cart"); // Clear cart after order
      navigate(`/invoice/${orderRef.id}`); // ✅ Redirect to Invoice
    } catch (error) {
      console.error("Error placing order:", error);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="max-w-screen-lg mx-auto p-6 mt-12 flex flex-col items-center">
      <h1 className="text-3xl font-bold mb-6 text-center">Shopping Cart</h1>
      
      {cart.length === 0 ? (
        <div className="flex flex-col items-center text-gray-600 text-xl text-center mt-20">
          <FaShoppingCart size={80} className="mb-4 text-gray-400" />
          <p>Your cart is empty.</p>
        </div>
      ) : (
        <div className="w-full">
          {cart.map((item, index) => (
            <div key={index} className="flex items-center justify-between border-b py-4 w-full">
              <div className="flex items-center space-x-4">
                <img src={item.imageUrl} alt={item.name} className="w-24 h-24 object-cover rounded" />
                <div>
                  <h2 className="text-xl font-bold">{item.name}</h2>
                  <p className="text-gray-600">${item.price} x {item.quantity}</p>
                </div>
              </div>
              <p className="text-xl font-bold">${item.price * item.quantity}</p>
            </div>
          ))}

          <div className="text-center mt-6 w-full">
            <h2 className="text-2xl font-bold pl-[810px]">Total: ${cart.reduce((total, item) => total + item.price * item.quantity, 0)}</h2>
            <button
              onClick={handleCheckout}
              className="mt-4 bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition-colors ml-[810px]"
            >
              Buy Now
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;  