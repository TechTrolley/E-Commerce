import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Correct path to Navbar component
import Products from './Components/Products'; // Adjusted path to Products component
import SmartphonesList from './Components/SmartphonesList';

function App() {
  return (
    <Router>
      <Routes>
        {/* Routes with navbar */}
        <Route path="/" element={
          <>
            <Navbar />
            {/* Add your home component here */}
            <div>Home Page or Login Page</div>
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
      </Routes>
    </Router>
  );
}

export default App;