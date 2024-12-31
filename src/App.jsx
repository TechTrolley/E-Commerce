import React from 'react';
import Navbar from './Components/Navbar'; // Correct path to Navbar component
import Login from './login.jsx'; // Correct path to Login component
import Products from './Components/Products'; // Adjusted path to Products component (assuming it's in the Components folder)
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar /> {/* Navbar Component */}
      <Routes>
        <Route path="/" element={<Login />} /> {/* Default route */}
        <Route path="/products" element={<Products />} /> {/* Route to Products page */}
      </Routes>
    </Router>
  );
}

export default App;
