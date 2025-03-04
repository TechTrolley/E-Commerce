import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import Cookies from "js-cookie";
import { auth } from "../firebases/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import backgroundImage from "../assets/home.png";

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("userToken");
    setIsLoggedIn(!!token);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 138;
      const elementPosition = element.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" });
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();

      Cookies.set("userToken", token, { expires: 1, secure: true });
      Cookies.set("userEmail", user.email, { expires: 1, secure: true });

      setIsLoggedIn(true);
      navigate("/account");
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      alert("Failed to sign in with Google. Check console for details.");
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#CC313D] p-4 border-b-2 border-gray-200 fixed top-0 left-0 w-full z-[1000]">
        <div className="mx-auto flex flex-wrap justify-between items-center px-4 md:px-8">
          {/* Brand Logo */}
          <div className="text-white text-xl font-bold flex-shrink-0">Tech Trolley</div>

          {/* Search Bar */}
          <div className="relative flex-grow max-w-[860px] mx-auto ml-28">
            <input
              type="text"
              placeholder="Search for products, brands, and more"
              className="pl-10 pr-4 py-2.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <button className="absolute right-0 top-0 bottom-0 px-4 py-2.5 bg-[#FF9900] rounded-full text-white flex items-center justify-center hover:bg-[#FFB84D]">
              🔍
            </button>
          </div>

          {/* Navigation Links */}
          <div className="flex items-center space-x-4">
            {/* Products Link */}
            <Link
              onClick={() => scrollToSection('smartphones')}
              to="/products"
              className="text-white hover:bg-black transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg hidden md:block"
            >
              <span className="uppercase tracking-wide font-semibold">Products</span>
            </Link>

            {/* Cart Button */}
            <button
              onClick={() => navigate("/cart")}
              className="flex items-center space-x-2 text-white hover:bg-black transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg relative"
            >
              <FaShoppingCart size={25} />
              <span className="hidden sm:block pl-1 uppercase tracking-wide font-semibold">Cart</span>
            </button>

            {/* Login/Account Button */}
            {isLoggedIn ? (
              <button
                onClick={() => navigate("/account")}
                className="flex items-center justify-center text-white hover:bg-black transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg"
              >
                <FaUser size={25} />
              </button>
            ) : (
              <button
                onClick={handleGoogleSignIn}
                className="flex items-center justify-center text-white hover:bg-black transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg"
              >
                <FaUser size={25} />
                <span className="hidden sm:block pl-2 uppercase tracking-wide font-semibold">Login</span>
              </button>
            )}

            {/* Mobile Menu Toggle Button */}
            <div className="md:hidden">
              <button onClick={toggleMobileMenu} className="text-white">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="md:hidden flex flex-col space-y-2 mt-2 bg-[#CC313D] p-2 rounded">
            <Link
              to="/products"
              className="text-white text-center hover:bg-black transition-all duration-300 p-2 rounded"
              onClick={() => scrollToSection('smartphones')}
            >
              Products
            </Link>
            <button
              onClick={() => navigate("/cart")}
              className="text-white text-center hover:bg-black transition-all duration-300 p-2 rounded"
            >
              Cart
            </button>
            {isLoggedIn ? (
              <button
                onClick={() => navigate("/account")}
                className="text-white text-center hover:bg-black transition-all duration-300 p-2 rounded"
              >
                Account
              </button>
            ) : (
              <button
                onClick={handleGoogleSignIn}
                className="text-white text-center hover:bg-black transition-all duration-300 p-2 rounded"
              >
                Login
              </button>
            )}
          </div>
        )}
      </nav>

      {/* Category Navbar */}
      <div id="products" className="bg-[#122F3D] text-white py-4 mt-[80px] fixed top-0 left-0 w-full z-[1000]">
        <div className="mx-auto flex flex-wrap justify-center gap-8 px-4 pr-48 font-semibold">
          {[
            'Smartphones',
            'Smartwatches',
            'Laptops',
            'Controllers',
            'Drones',
            'Mice',
            'Keyboards',
            'Graphics Cards',
            'SSDs',
          ].map((item) => (
            <Link
              key={item}
              to={`/${item.toLowerCase()}`}
              className="block hover:bg-[#CC313D] hover:text-white px-3 py-1 text-sm rounded transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Background Image */}
      <div>
        <img src={backgroundImage} alt="Background" className="w-full h-auto object-cover" />
      </div>

      {/* Smartphones Section Anchor */}
      <div id="smartphones"></div>
    </>
  );
};

export default Navbar;