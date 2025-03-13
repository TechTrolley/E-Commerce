import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { db } from "../firebases/firebaseConfig";
import { doc, getDoc, collection, getDocs } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const WatchDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [watch, setWatch] = useState(null);
  const [loading, setLoading] = useState(true);
  const [quantity, setQuantity] = useState(1);
  const [user, setUser] = useState(null);

  const formatPrice = (price) => {
    return price.toLocaleString(); // Corrected from toLocalString to toLocaleString
  };

  useEffect(() => {
    const auth = getAuth();
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
    });

    return () => unsubscribe();
  }, []);

  // Debugging: Log the product ID received from URL
  useEffect(() => {
    console.log("🆔 Watch ID from URL:", id);
  }, [id]);

  useEffect(() => {
    const fetchWatch = async () => {
      try {
        console.log("📡 Fetching watch with ID:", id);

        const docRef = doc(db, "watches", id);
        const docSnap = await getDoc(docRef);

        if (docSnap.exists()) {
          console.log("✅ Watch found:", docSnap.data());
          setWatch({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("❌ Watch not found in Firestore!");
        }
      } catch (error) {
        console.error("❌ Error fetching watch:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchWatch();
  }, [id]);

  // Debugging: Fetch all watches to check if Firestore has data
  useEffect(() => {
    const fetchAllWatches = async () => {
      try {
        const querySnapshot = await getDocs(collection(db, "watches"));
        if (querySnapshot.empty) {
          console.warn("⚠️ No watches found in Firestore!");
        } else {
          querySnapshot.forEach((doc) => {
            console.log("🔥 Watch in Firestore:", doc.id, doc.data());
          });
        }
      } catch (error) {
        console.error("❌ Error fetching all watches:", error);
      }
    };

    fetchAllWatches();
  }, []);

  const handleAddToCart = () => {
    if (!user) {
      alert("Please log in to add items to your cart.");
      navigate("/login");
      return;
    }

    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];
    const existingItemIndex = cartItems.findIndex((item) => item.id === watch.id);

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += quantity;
    } else {
      cartItems.push({
        id: watch.id,
        name: watch.name,
        price: watch.price,
        imageUrl: watch.imageUrl,
        quantity: quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert("Added to cart successfully!");
    navigate("/cart");
  };

  if (loading) return <div className="text-center mt-8">Loading watch details...</div>;
  if (!watch) return <div className="text-center mt-8">Watch not found</div>;

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <Link to="/" className="text-blue-500 mb-4 inline-block">&larr; Back to Watches</Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src={watch.imageUrl} alt={watch.name} className="w-full h-96 object-contain mb-6" />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{watch.name}</h1>
          <p className="text-2xl text-blue-600">₹{formatPrice(watch.price)}</p>
          <p className="text-gray-600">{watch.description}</p>

          <div className="flex items-center space-x-4">
            <label className="text-lg font-semibold">Quantity:</label>
            <input
              type="number"
              min="1"
              value={quantity}
              onChange={(e) => setQuantity(Math.max(1, parseInt(e.target.value) || 1))}
              className="w-20 px-3 py-2 border rounded"
            />
          </div>

          <button
            onClick={handleAddToCart}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default WatchDetails;
