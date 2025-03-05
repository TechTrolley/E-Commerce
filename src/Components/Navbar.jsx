// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import { FaShoppingCart, FaUser } from 'react-icons/fa';
// import backgroundImage from '../assets/home.png';

// const Navbar = () => {
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   const toggleMobileMenu = () => {
//     setIsMobileMenuOpen(!isMobileMenuOpen);
//   };

//   const scrollToSection = (sectionId) => {
//     const element = document.getElementById(sectionId);
//     if (element) {
//       const offset = 138;
//       const elementPosition = element.getBoundingClientRect().top + window.scrollY;
//       const offsetPosition = elementPosition - offset;
//       window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
//     }
//   };

//   return (
//     <>
//       {/* Navbar */}
//       <nav className="bg-[#CC313D] p-4 border-b-2 border-gray-200 fixed top-0 left-0 w-full z-[1000]">
//         <div className="mx-auto flex flex-wrap justify-between items-center px-4 md:px-8">
//           {/* Logo */}
//           <div className="text-white text-xl font-bold flex-shrink-0">Tech Trolley</div>

//           {/* Search Bar */}
//           <div className="relative flex-grow max-w-[860px] mx-auto ml-28">
//             <input
//               type="text"
//               placeholder="Search for products, brands, and more"
//               className="pl-10 pr-4 py-2.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
//             />
//             <button className="absolute right-0 top-0 bottom-0 px-4 py-2.5 bg-[#FF9900] rounded-full text-white flex items-center justify-center hover:bg-[#FFB84D]">
//               <svg xmlns="http://www.w3.org/2000/svg" className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
//                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z" />
//               </svg>
//             </button>
//           </div>

//           {/* Navigation Links */}
//           <div className="flex items-center space-x-4">
//             <Link 
//               onClick={() => scrollToSection('smartphones')} 
//               to="/products" 
//               className="text-white hover:bg-black transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg hidden md:block"
//             >
//               <span className="uppercase tracking-wide font-semibold">Products</span>
//             </Link>

//             <button className="flex items-center space-x-2 text-white hover:bg-black transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg relative">
//               <FaShoppingCart size={25} />
//               <span className="hidden sm:block pl-1 uppercase tracking-wide font-semibold">Cart</span>
//             </button>

//             <Link 
//               to="/login" 
//               className="flex items-center justify-center text-white hover:bg-black transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg"
//             >
//               <FaUser size={25} />
//               <span className="hidden sm:block pl-2 uppercase tracking-wide font-semibold">Login</span>
//             </Link>

//             {/* Mobile Menu Button */}
//             <div className="md:hidden">
//               <button onClick={toggleMobileMenu} className="text-white">
//                 <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" className="w-6 h-6">
//                   <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
//                 </svg>
//               </button>
//             </div>
//           </div>
//         </div>

//         {/* Mobile Menu */}
//         {isMobileMenuOpen && (
//           <div className="md:hidden flex flex-col space-y-2 mt-2 bg-[#CC313D] p-2 rounded">
//             <Link 
//               to="/products" 
//               className="text-white text-center hover:bg-black transition-all duration-300 p-2 rounded" 
//               onClick={() => scrollToSection('smartphones')}
//             >
//               Products
//             </Link>
//             <button className="text-white text-center hover:bg-black transition-all duration-300 p-2 rounded">Cart</button>
//             <Link to="/login" className="text-white text-center hover:bg-black transition-all duration-300 p-2 rounded">Login</Link>
//           </div>
//         )}
//       </nav>

//       {/* Category Navbar */}
//       <div id="products" className="bg-[#122F3D] text-white py-4 mt-[80px] fixed top-0 left-0 w-full z-[1000]">
//         <div className="mx-auto flex flex-wrap justify-center gap-8 px-4 pr-48 font-semibold">
//           {['Smartphones', 'Smartwatches', 'Laptops', 'Controllers', 'Drones', 'Mice', 'Keyboards', 'Graphics Cards', 'SSDs'].map((item) => (
//             <Link 
//               key={item} 
//               to={`/${item.toLowerCase()}`} 
//               className="block hover:bg-[#CC313D] hover:text-white px-3 py-1 text-sm rounded transition-all duration-300"
//             >
//               {item}
//             </Link>
//           ))}
//         </div>
//       </div>

//       {/* Background Image */}
//       <div>
//         <img src={backgroundImage} alt="Background" className="w-full h-auto object-cover" />
//       </div>
//     </>
//   );
// };

// export default Navbar;
import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaShoppingCart, FaUser } from "react-icons/fa";
import Cookies from "js-cookie";
import { auth } from "../firebases/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import backgroundImage from "../assets/home.png";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const [previousSearch, setPreviousSearch] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const token = Cookies.get("userToken");
    setIsLoggedIn(!!token);

    // Retrieve the last searched term from local storage
    const lastSearch = localStorage.getItem("lastSearch") || "";
    setPreviousSearch(lastSearch);
  }, []);

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

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm.trim()) return;

    // Store the last searched term in local storage
    localStorage.setItem("lastSearch", searchTerm);

    // Redirect to phone list if the search contains "phone" or "smartphone"
    if (searchTerm.toLowerCase().includes("phone") || searchTerm.toLowerCase().includes("smartphone")) {
      navigate("/smartphones");
    }
  };

  return (
    <>
      {/* Main Navbar */}
      <nav className="bg-[#CC313D] p-4 border-b-2 border-gray-200 fixed top-0 left-0 w-full z-[1000]">
        <div className="mx-auto flex flex-wrap justify-between items-center px-4 md:px-8">
          <div className="text-white text-xl font-bold flex-shrink-0">
            Tech Trolley
          </div>

          {/* Search Bar */}
          <form 
            className="relative flex-grow max-w-[860px] mx-auto ml-28" 
            onSubmit={handleSearchSubmit}
          >
            <input
              type="text"
              placeholder={previousSearch || "Search for products, brands, and more"}
              value={searchTerm}
              onChange={handleSearchChange}
              className="pl-10 pr-4 py-2.5 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 w-full"
            />
            <button
              type="submit"
              className="absolute right-0 top-0 bottom-0 px-4 py-2.5 bg-[#FF9900] rounded-full text-white flex items-center justify-center hover:bg-[#FFB84D]"
            >
              🔍
            </button>
          </form>

          <div className="flex items-center space-x-4">
            <Link
              to="/products"
              className="text-white hover:bg-black transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg hidden md:block"
            >
              <span className="uppercase tracking-wide font-semibold">
                Products
              </span>
            </Link>

            {/* Cart Button */}
            <button
              onClick={() => navigate("/cart")}
              className="flex items-center space-x-2 text-white hover:bg-black transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg relative"
            >
              <FaShoppingCart size={25} />
              <span className="hidden sm:block pl-1 uppercase tracking-wide font-semibold">
                Cart
              </span>
            </button>

            {/* Account/Login */}
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
                <span className="hidden sm:block pl-2 uppercase tracking-wide font-semibold">
                  Login
                </span>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Category Navbar */}
      <div id="products" className="bg-[#122F3D] text-white py-4 mt-[80px] fixed top-[2px] left-0 w-full z-[999]">
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
              className="block hover:bg-[#CC313D] hover:text-white px-3 py-1 text-sm rounded transition-all duration-300"
            >
              {item}
            </Link>
          ))}
        </div>
      </div>

      {/* Background Image */}
      <div>
        <img
          src={backgroundImage}
          alt="Background"
          className="w-full h-auto object-cover"
        />
      </div>
    </>
  );
};

export default Navbar;
