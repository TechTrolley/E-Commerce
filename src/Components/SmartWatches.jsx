import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { db } from '../firebases/firebaseConfig';
import { collection, getDocs } from 'firebase/firestore';

const WatchList = () => {
  const [watches, setWatches] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchWatches = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "watches"));
        if (querySnapshot.empty) {
          console.warn("⚠️ No watches found in Firestore!");
        }
        const watchData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));
        setWatches(watchData);
      } catch (error) {
        console.error("❌ Error fetching watches:", error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchWatches();
  }, []);

  if (loading) {
    return <div className="text-center mt-8 text-lg font-semibold">Loading watches...</div>;
  }

  if (watches.length === 0) {
    return <div className="text-center mt-8 text-lg font-semibold">No watches available.</div>;
  }

  return (
    <div className="max-w-screen-xl mx-auto p-6 mt-12">
      <h1 className="text-3xl font-bold text-center mb-8">SmartWatches</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {watches.map((watch) => (
          <div
            key={watch.id}
           className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-2xl transition-all duration-500 ease-in-out transform hover:scale-105 h-full flex flex-col"
          >
            <img
              src={watch.imageUrl || "https://via.placeholder.com/300"} // Default image fallback
              alt={watch.name}
              className="w-full  object-cover"
            />
            <div className="p-4 flex flex-col flex-grow">
              <h2 className="text-xl font-bold mb-2">{watch.name}</h2>
              <p className="text-gray-600 flex-grow">{watch.description}</p>
              <p className="text-lg font-semibold text-blue-600 mt-2">${watch.price}</p>

              <Link
                to={`/watch/${watch.id}`} // Ensure this matches the correct route
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

export default WatchList;
