import React, { useState } from 'react';
import backgroundImage from './home.png'; // Adjust the path based on your project structure

const Navbar = () => {
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	return (
		<>
			{/* Primary Navbar */}
			<nav className="bg-blue-500 p-4">
				<div className="max-w-screen-xl mx-auto flex justify-between items-center">
					<div className="text-white text-xl font-bold">Tech Trolley</div>
					<div className="hidden md:flex space-x-6">
						<a
							href="#"
							className="text-white hover:bg-sky-700 hover:text-gray-200 px-3 py-2 rounded transition-all duration-300"
						>
							Home
						</a>
						<a
							href="#"
							className="text-white hover:bg-sky-700 hover:text-gray-200 px-3 py-2 rounded transition-all duration-300"
						>
							Products
						</a>
						<a
							href="#"
							className="text-white hover:bg-sky-700 hover:text-gray-200 px-3 py-2 rounded transition-all duration-300"
						>
							About
						</a>
						<a
							href="#"
							className="text-white hover:bg-sky-700 hover:text-gray-200 px-3 py-2 rounded transition-all duration-300"
						>
							Contact Us
						</a>
					</div>
					<div className="flex items-center space-x-4">
						{/* Search Box with Icon */}
						<div className="relative hidden md:block">
							<input
								type="text"
								placeholder="Search..."
								className="pl-10 pr-3 py-2 rounded border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-400"
							/>
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M21 21l-4.35-4.35M15 10a5 5 0 11-10 0 5 5 0 0110 0z"
								/>
							</svg>
						</div>

						{/* Mobile Menu Button */}
						<div className="md:hidden">
							<button onClick={toggleMobileMenu} className="text-white">
								<svg
									xmlns="http://www.w3.org/2000/svg"
									fill="none"
									viewBox="0 0 24 24"
									stroke="currentColor"
									className="w-6 h-6"
								>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth="2"
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							</button>
						</div>
					</div>
				</div>
				{isMobileMenuOpen && (
					<div className="md:hidden bg-blue-600 p-4 space-y-4">
						<a
							href="#"
							className="text-white block hover:bg-sky-700 hover:text-gray-200 px-3 py-2 rounded transition-all duration-300"
						>
							Home
						</a>
						<a
							href="#"
							className="text-white block hover:bg-sky-700 hover:text-gray-200 px-3 py-2 rounded transition-all duration-300"
						>
							About
						</a>
						<a
							href="#"
							className="text-white block hover:bg-sky-700 hover:text-gray-200 px-3 py-2 rounded transition-all duration-300"
						>
							Services
						</a>
						<a
							href="#"
							className="text-white block hover:bg-sky-700 hover:text-gray-200 px-3 py-2 rounded transition-all duration-300"
						>
							Contact
						</a>
					</div>
				)}
			</nav>

			{/* Background Image */}
			<div>
				<img
					src={backgroundImage}
					alt="Background"
					style={{
						width: '100%',
						height: 'auto', // Maintain aspect ratio
						objectFit: 'cover', // Ensures image fills container properly
					}}
				/>
			</div>
		</>
	);
};

export default Navbar;
