import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { db } from "../firebases/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";

const Invoice = () => {
  const { orderId } = useParams();
  const [order, setOrder] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOrder = async () => {
      try {
        const orderRef = doc(db, "orders", orderId);
        const orderSnap = await getDoc(orderRef);

        if (orderSnap.exists()) {
          setOrder(orderSnap.data());
        } else {
          console.error("Order not found.");
        }
      } catch (error) {
        console.error("Error fetching order:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOrder();
  }, [orderId]);

  if (loading) {
    return <div className="text-center mt-8">Loading invoice...</div>;
  }

  if (!order) {
    return <div className="text-center mt-8">Order not found.</div>;
  }

  return (
    <div className="max-w-lg mx-auto p-6 bg-white shadow-md rounded-lg">
      <h1 className="text-2xl font-bold text-center mb-4 mt-12">Invoice</h1>
      <p><strong>Order ID:</strong> {orderId}</p>
      <p><strong>Customer:</strong> {order.customerName} ({order.email})</p>
      <p><strong>Product:</strong> {order.productName}</p>
      <p><strong>Quantity:</strong> {order.quantity}</p>
      <p><strong>Total Price:</strong> ${order.totalPrice.toFixed(2)}</p>
      <p><strong>Status:</strong> {order.status}</p>
      <p><strong>Date:</strong> {order.createdAt?.toDate().toLocaleString()}</p>
    </div>
  );
};

export default Invoice;
