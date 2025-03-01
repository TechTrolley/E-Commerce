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
import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaShoppingCart, FaUser } from 'react-icons/fa';
import Cookies from 'js-cookie';
import { auth } from "../firebases/firebaseConfig";
import { GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import backgroundImage from '../assets/home.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if userToken exists in cookies
    const token = Cookies.get("userToken");
    setIsLoggedIn(!!token);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // const handleGoogleSignIn = async () => {
  //   try {
  //     const provider = new GoogleAuthProvider();
  //     const result = await signInWithPopup(auth, provider);
  //     const token = await result.user.getIdToken();
      
  //     // Store token in cookies for session persistence
  //     Cookies.set("userToken", token, { expires: 1, secure: true });

  //     setIsLoggedIn(true);
  //     navigate("/"); // Redirect after login
  //   } catch (error) {
  //     console.error("Google Sign-In Error:", error);
  //     alert("Failed to sign in with Google. Check console for details.");
  //   }
  // };
  const handleGoogleSignIn = async () => {
    try {
      const provider = new GoogleAuthProvider();
      provider.setCustomParameters({ prompt: "select_account" }); // Force account selection
      const result = await signInWithPopup(auth, provider);
      const user = result.user;
      const token = await user.getIdToken();
  
      Cookies.set("userToken", token, { expires: 1, secure: true });
      Cookies.set("userEmail", user.email, { expires: 1, secure: true }); // Store email to identify user
  
      setIsLoggedIn(true);
      navigate("/account"); // Redirect to account page
    } catch (error) {
      console.error("Google Sign-In Error:", error);
      alert("Failed to sign in with Google. Check console for details.");
    }
  };
  
  const handleLogout = async () => {
    try {
      await signOut(auth);
      Cookies.remove("userToken");
      setIsLoggedIn(false);
      navigate("/");
    } catch (error) {
      console.error("Logout Error:", error);
    }
  };

  return (
    <>
      {/* Navbar */}
      <nav className="bg-[#CC313D] p-4 border-b-2 border-gray-200 fixed top-0 left-0 w-full z-[1000]">
        <div className="mx-auto flex flex-wrap justify-between items-center px-4 md:px-8">
          {/* Logo */}
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

          {/* Navbar Links */}
          <div className="flex items-center space-x-4">
            <Link to="/products" className="text-white hover:bg-black transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg hidden md:block">
              <span className="uppercase tracking-wide font-semibold">Products</span>
            </Link>

            <button className="flex items-center space-x-2 text-white hover:bg-black transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg relative">
              <FaShoppingCart size={25} />
              <span className="hidden sm:block pl-1 uppercase tracking-wide font-semibold">Cart</span>
            </button>

            {/* If logged in, show Account dropdown, otherwise show Login button */}
            {isLoggedIn ? (
              <div className="relative group">
                <button className="flex items-center justify-center text-white hover:bg-black transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg">
                  <FaUser size={25} />
                  <span className="hidden sm:block pl-2 uppercase tracking-wide font-semibold">Account</span>
                </button>

                {/* Dropdown for Logout */}
                <div className="absolute right-0 mt-2 bg-white rounded-lg shadow-lg py-2 hidden group-hover:block">
                  <button onClick={handleLogout} className="block px-4 py-2 text-gray-700 hover:bg-gray-200 w-full text-left">
                    Logout
                  </button>
                </div>
              </div>
            ) : (
              <button onClick={handleGoogleSignIn} className="flex items-center justify-center text-white hover:bg-black transition-all duration-300 p-3 rounded-full border border-white shadow-md hover:shadow-lg">
                <FaUser size={25} />
                <span className="hidden sm:block pl-2 uppercase tracking-wide font-semibold">Login</span>
              </button>
            )}
          </div>
        </div>
      </nav>

      {/* Background Image */}
      <div>
        <img src={backgroundImage} alt="Background" className="w-full h-auto object-cover" />
      </div>
    </>
  );
};

export default Navbar;
