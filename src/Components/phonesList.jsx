import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebases/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const PhoneList = () => {
  const [phones, setPhones] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPhones = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "products")); // Firestore collection
        const phoneData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setPhones(phoneData);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching phones:", error);
        setLoading(false);
      }
    };

    fetchPhones();
  }, []);

  if (loading) {
    return <div className="text-center mt-8">Loading phones...</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-6 mt-12"> {/* Added margin-top */}
      <h1 className="text-3xl font-bold text-center mb-8">SmartPhones</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {phones.map((product) => (
          <div
            key={product.id}
            className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 h-full flex flex-col"
          >
            <img
              src={product.imageUrl}
              alt={product.name}
              className="w-full object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-bold mb-2">{product.name}</h2>
              <p className="text-gray-600 mb-4">{product.description}</p>
             
              <Link
                to={`/products/${product.id}`}
                className="mt-auto bg-blue-500 text-white py-2 px-4 rounded-lg text-center hover:bg-blue-600 transition-colors duration-300"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PhoneList;
