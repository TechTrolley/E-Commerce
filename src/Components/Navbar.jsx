import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser, FaBoxOpen, FaShoppingBag } from "react-icons/fa"; // ✅ Added FaShoppingBag
import { auth, db } from "../firebases/firebaseConfig";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { doc, getDoc } from "firebase/firestore";
import logo from "../assets/Logo2(1).png";

const Navbar = () => {
  const [user, setUser] = useState(null);
  const [role, setRole] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);

      if (currentUser) {
        const userRef = doc(db, "users", currentUser.uid);
        const userSnap = await getDoc(userRef);
        if (userSnap.exists()) {
          setRole(userSnap.data().role);
        }
      } else {
        setRole("");
      }
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      setRole("");
      setShowDropdown(false);
      navigate("/");
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${searchQuery}`);
    }
  };

  return (
    <nav className="bg-[#2778ee] py-4 fixed top-0 left-0 w-full z-[1000] shadow-lg">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-6 md:px-12">
        {/* Logo */}
        <div className="flex items-center space-x-3">
          <Link to="/" className="flex items-center space-x-3 cursor-pointer">
            <img src={logo} alt="Tech Trolley" className="h-9 w-auto" />
            <span className="text-white text-2xl font-extrabold tracking-wide">Tech Trolley</span>
          </Link>
        </div>

        {/* 🔍 Search Bar */}
        <form onSubmit={handleSearch} className="relative flex-grow max-w-[600px] mx-auto hidden md:flex px-3">
          <input
            type="text"
            placeholder="Search for products..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="py-2 px-4 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-yellow-200 w-full text-gray-800"
          />
          <button
            type="submit"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-yellow-400 hover:bg-yellow-500 text-white p-2 rounded-full shadow-md transition duration-300"
          >
            🔍
          </button>
        </form>

        {/* Navbar Buttons */}
        <div className="flex items-center space-x-6">
          {/* ✅ Updated Products Button with Icon */}
          <Link
            to="/products"
            className="flex items-center space-x-2 text-white hover:bg-black transition-all duration-300 px-6 py-2 rounded-full border border-white shadow-md text-lg font-semibold"
          >
            <FaShoppingBag size={20} />
            <span>Products</span>
          </Link>

          {/* ✅ Cart Button with Icon */}
          <Link
            to="/cart"
            className="flex items-center space-x-2 text-white hover:bg-black transition-all duration-300 px-6 py-2 rounded-full border border-white shadow-md text-lg font-semibold"
          >
            <FaShoppingCart size={20} />
            <span>Cart</span>
          </Link>

          {/* ✅ My Orders Button with Icon */}
          {user && (
            <Link
              to="/orders"
              className="flex items-center space-x-2 text-white hover:bg-black transition-all duration-300 px-4 py-2 rounded-full border border-white shadow-md text-lg font-semibold"
            >
              <FaBoxOpen size={20} /> {/* ✅ Added Icon */}
              <span>My Orders</span>
            </Link>
          )}

          {/* User Account Dropdown */}
          <div className="relative">
            {user ? (
              <button onClick={() => setShowDropdown(!showDropdown)} className="flex items-center space-x-2 text-white bg-gray-900 hover:bg-gray-800 px-4 py-2 rounded-full shadow-lg transition-all duration-300 border border-white">
                <FaUser size={22} />
                <span className="hidden sm:block text-lg font-semibold">Account</span>
              </button>
            ) : (
              <button onClick={() => navigate("/login")} className="flex items-center space-x-2 text-white bg-blue-500 hover:bg-blue-600 px-4 py-2 rounded-full shadow-lg transition-all duration-300 border border-white">
                <FaUser size={22} />
                <span className="hidden sm:block text-lg font-semibold">Login</span>
              </button>
            )}

            {/* Dropdown Menu */}
            {showDropdown && user && (
              <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-300 shadow-lg rounded-lg overflow-hidden z-[1100]">
                {role === "admin" && (
                  <a
                    href="http://localhost:3000/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full px-4 py-2 text-left hover:bg-gray-100"
                  >
                    Admin Panel
                  </a>
                )}
                <button onClick={() => navigate("/account")} className="w-full px-4 py-2 text-left hover:bg-gray-100">
                  My Account
                </button>
                <button onClick={handleLogout} className="w-full px-4 py-2 text-left text-red-500 hover:bg-gray-100">
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Products Menu */}
      <div id="products" className="bg-[#252525] text-white py-4 mt-[77px] fixed top-0 left-0 w-full z-[1000]">
        <div className="mx-auto flex flex-wrap justify-center gap-8 px-4 pr-48 font-semibold">
          {[
            "Smartphones",
            "Smartwatches",
            "Laptops",
            "Controllers",
            "Drones",
            "Mice",
            "Keyboards",
            "Graphics Cards",
            "SSDs",
          ].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="block hover:bg-[#287FF0] hover:text-white px-3 py-1 text-sm rounded transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
