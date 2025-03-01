import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Products from './Components/Products';
import SmartphonesList from './Components/phonesList';
import ProductDetails from './Components/ProductDetails';
import SmartWatches from './Components/SmartWatches';
import Laptops from './Components/Laptops';
import Login from './Components/login';
import Signup from './Components/signup';
import WatchDetails from './Components/WatchDetails';

function App() {
  return (
    <Router>
      <Routes>
        {/* Home Route with Navbar */}
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <SmartWatches />
            </>
          }
        />

        {/* Products Route with Navbar */}
        <Route
          path="/products"
          element={
            <>
              <Navbar />
              <Products />
            </>
          }
        />

        {/* Smartphones Route with Navbar */}
        <Route
          path="/smartphones"
          element={
            <>
              <SmartphonesList />
            </>
          }
        />

        {/* SmartWatches Route with Navbar */}
        <Route
          path="/smartwatches"
          element={
            <>
              <SmartWatches />
            </>
          }
        />

        {/* Laptops Route with Navbar */}
        <Route
          path="/laptops"
          element={
            <>
              <Laptops />
            </>
          }
        />

        {/* Product Details Route with Navbar */}
        <Route
          path="/product/:id"
          element={
            <>
              <ProductDetails />
            </>
          }
        />

        {/* Watch Details Route with Navbar */}
        <Route
          path="/watch/:id"
          element={
            <>
              <WatchDetails />
            </>
          }
        />

        {/* Login Route without Navbar */}
        <Route path="/login" element={<Login />} />

        {/* Signup Route without Navbar */}
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;