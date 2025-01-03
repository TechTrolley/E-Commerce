  import React from 'react';
  import Navbar from './Components/Navbar'; // Correct path to Navbar component
  import Products from './Components/Products'; // Adjusted path to Products component
  import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

  function App() {
    return (
      <Router>
        <Navbar /> {/* Navbar Component */}
        <Routes>
          {/* Define Routes for the app */}
          <Route path="/" element={<div></div>} /> {/* Home page or Login page */}
          <Route path="/products" element={<Products />} /> {/* Products page route */}
        </Routes>
      </Router>
    );
  }

  export default App;
  