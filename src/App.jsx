import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Correct path to Navbar component
import Products from './Components/Products'; // Adjusted path to Products component
import SmartphonesList from './Components/phonesList';
import ProductDetails from './Components/ProductDetails';
import SmartWatches from './Components/SmartWatches';
import Login from './Components/login';
import Signup from './Components/signup';


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
        <Route path="/smartphones" element={<SmartphonesList />} />
        <Route path="/product/:id" element={<ProductDetails />} />
        <Route path="/smartwatches" element={<SmartWatches />} />
        <Route path="/login" element={<Login />} />  
        <Route path="/signup" element={<Signup />} />        
      </Routes>
    </Router>
  );
}

export default App;