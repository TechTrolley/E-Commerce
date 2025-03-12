import React, { useState, useEffect } from "react";
import { db } from "../firebases/firebaseConfig";
import { collection, query, where, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const Orders = () => {
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, async (user) => {
      setUser(user);
      if (user) {
        await fetchOrders(user.uid);
      }
    });
    return () => unsubscribe();
  }, []);

  const fetchOrders = async (userId) => {
    try {
      const q = query(collection(db, "orders"), where("userId", "==", userId));
      const querySnapshot = await getDocs(q);
      const ordersData = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setOrders(ordersData);
    } catch (error) {
      console.error("Error fetching orders:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div className="text-center mt-8">Loading orders...</div>;
  if (!user) return <div className="text-center mt-8">Please log in to view your orders.</div>;

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">My Orders</h1>

      {orders.length === 0 ? (
        <p className="text-gray-600">You have no orders yet.</p>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
  <div key={order.id} className="border p-4 rounded-lg shadow-md">
    <h2 className="text-xl font-bold">Order ID: {order.id}</h2>
   
    <p className="text-gray-600">Total: ${order.totalPrice}</p>
    <p className="text-gray-500">Status: {order.status}</p>

    {/* Display product details */}
    <div className="mt-4">
      <h3 className="text-lg font-semibold">Products:</h3>
      {order.items && order.items.length > 0 ? (
        <ul className="list-disc pl-5">
          {order.items.map((item, index) => (
            <li key={index} className="text-gray-700">
              {item.name} - Quantity: {item.quantity}
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-500">No products found in this order.</p>
      )}
    </div>
  </div>
))}

        </div>
      )}
    </div>
  );
};

export default Orders;
