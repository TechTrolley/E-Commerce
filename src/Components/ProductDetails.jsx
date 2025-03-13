import React, { useState, useEffect } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { db } from "../firebases/firebaseConfig";
import { doc, getDoc } from "firebase/firestore";
import { getAuth, onAuthStateChanged } from "firebase/auth";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [product, setProduct] = useState(null);
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

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const docRef = doc(db, "products", id);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
          setProduct({ id: docSnap.id, ...docSnap.data() });
        } else {
          console.error("Product not found!");
        }
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [id]);

  const handleAddToCart = () => {
    if (!user) {
      alert("Please log in to add items to your cart.");
      navigate("/login");
      return;
    }

    const cartItems = JSON.parse(localStorage.getItem("cart")) || [];

    const existingItemIndex = cartItems.findIndex((item) => item.id === product.id);

    if (existingItemIndex !== -1) {
      cartItems[existingItemIndex].quantity += quantity;
    } else {
      cartItems.push({
        id: product.id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrl,
        quantity: quantity,
      });
    }

    localStorage.setItem("cart", JSON.stringify(cartItems));
    alert("Added to cart successfully!");
    navigate("/cart");
  };

  // 🔹 Handle "Buy Now" action
  const handleBuyNow = () => {
    if (!user) {
      alert("Please log in to buy this product.");
      navigate("/login");
      return;
    }

    navigate("/checkout", { 
      state: { 
        product: { 
          id: product.id, 
          name: product.name, 
          price: product.price, 
          imageUrl: product.imageUrl, 
          quantity: quantity 
        } 
      } 
    });
  };

  // 🔹 Function to render star ratings
  const renderStars = (rating) => {
    if (rating === undefined || rating === null) return "No Ratings Yet";
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return "★".repeat(fullStars) + "☆".repeat(emptyStars) + ` (${rating}/5)`;
  };

  if (loading) return <div className="text-center mt-8">Loading product details...</div>;
  if (!product) return <div className="text-center mt-8">Product not found</div>;

  return (
    <div className="max-w-screen-xl mx-auto p-6">
      <Link to="/" className="text-blue-500 mb-4 inline-block">&larr; Back to Products</Link>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="bg-white p-6 rounded-lg shadow-lg">
          <img src={product.imageUrl} alt={product.name} className="w-full h-96 object-contain mb-6" />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-bold">{product.name}</h1>
          <p className="text-2xl text-blue-600">₹{formatPrice(product.price)}</p>
          <p className="text-gray-600">{product.description}</p>

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
          
          <div className="flex space-x-4">
            {/* Add to Cart Button */}
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Add to Cart
            </button>

            {/* Buy Now Button */}
            <button
              onClick={handleBuyNow}
              className="bg-green-600 text-white px-8 py-3 rounded-lg hover:bg-green-700 transition-colors"
            >
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
