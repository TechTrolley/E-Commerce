import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Correct path to Navbar component
import Products from './Components/Products'; // Adjusted path to Products component
import ProductDetails from './Components/ProductDetails';
import SmartWatches from './Components/SmartWatches';
import Laptops from './Components/Laptops';
import LaptopDetails from './Components/LaptopDetails.jsx';
//import Login from './Components/login';
import Signup from './Components/signup';
import WatchDetails from './Components/WatchDetails';
import Account from "./Components/Accounts";
import Cart from "./Components/Cart";
import AirBuds from "./Components/AirBuds";

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with navbar */} 
        <Route path="/" element={
          <>
            <Navbar />
          </>
        }/>
        
        <Route path="/products" element={
          
          <>
            <Navbar />
            <Products />
          </>
        }/>

        {/* Route without navbar */}
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/smartwatches" element={<SmartWatches />} />
        <Route path="/laptops" element={<Laptops />} />
        <Route path="/" element={<SmartWatches />} />
        <Route path="/watch/:id" element={<WatchDetails />} />
        <Route path="/laptop/:id" element={<LaptopDetails />} />
        <Route path="/account" element={<Account />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/airbuds" element={<AirBuds />} />
        

        
        <Route path="/signup" element={<Signup />} />        
      </Routes>
    </Router>
  );
}

export default App;