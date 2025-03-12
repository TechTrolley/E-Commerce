import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar'; // Correct path to Navbar component
import Products from './Components/Products'; // Adjusted path to Products component
import SmartphonesList from './Components/phonesList';
import ProductDetails from './Components/ProductDetails';
import SmartWatches from './Components/SmartWatches';
import Laptops from './Components/Laptops';
//import Login from './Components/login';
import Signup from './Components/signup';
import WatchDetails from './Components/WatchDetails';
import Account from "./Components/Accounts";
import Hero from './pages/Hero';
import Footer from './Components/Footer';
import Login from './pages/Login';
import Register from './pages/Register';
import Invoice from './pages/invoice';
import Cart from './pages/cart';
import Orders from './pages/Orders';

function App() {
  return (
    <div className="flex flex-col min-h-screen">
      <Router>
        <Navbar />
        
        <main className="flex-grow pt-[80px]" >
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/products" element={<Products />} />
            <Route path="/smartphones" element={<SmartphonesList />} />
            <Route path="/products/:id" element={<ProductDetails />} />
            <Route path="/smartwatches" element={<SmartWatches />} />
            <Route path="/laptops" element={<Laptops />} />
            <Route path="/watch/:id" element={<WatchDetails />} />
            <Route path="/account" element={<Account />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/invoice/:orderId" element={<Invoice />} />
            <Route path="login" element={<Login/>} />
            <Route path="register" element={<Register/>} />
            <Route path="cart" element={<Cart/>} />
          </Routes>
        </main>

        <Footer /> ✅ Footer stays at bottom
      </Router>
    </div>
  );
}
export default App;