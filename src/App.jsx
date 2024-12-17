import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Navbar';
import Products from './Products';

const App = () => {
	return (
		<Router>
			<div>
				<Navbar />
				<Routes>
					<Route path="/" element={<h1 className="text-center p-10">Welcome to Tech Trolley</h1>} />
					<Route path="/products" element={<Products />} />
				</Routes>
			</div>
		</Router>
	);
};

export default App;
