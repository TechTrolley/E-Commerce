import React from 'react';


const Products = () => {
	const products = [
		{
			id: 1,
			name: 'Product 1',
			description: 'This is a description for product 1.',
			price: '$19.99',
			image: 'https://via.placeholder.com/150',
		},
		{
			id: 2,
			name: 'Product 2',
			description: 'This is a description for product 2.',
			price: '$24.99',
			image: 'https://via.placeholder.com/150',
		},
		{
			id: 3,
			name: 'Product 3',
			description: 'This is a description for product 3.',
			price: '$29.99',
			image: 'https://via.placeholder.com/150',
		},
		{
			id: 4,
			name: 'Product 4',
			description: 'This is a description for product 4.',
			price: '$14.99',
			image: 'https://via.placeholder.com/150',
		},

		
		{
			id: 5,
			name: 'Product 5',
			description: 'This is a description for product 1.',
			price: '$19.99',
			image: 'https://via.placeholder.com/150',
		},
		{
			id: 6,
			name: 'Product 6',
			description: 'This is a description for product 2.',
			price: '$24.99',
			image: 'https://via.placeholder.com/150',
		},
		{
			id: 7,
			name: 'Product 7',
			description: 'This is a description for product 3.',
			price: '$29.99',
			image: 'https://via.placeholder.com/150',
		},
		{
			id: 8,
			name: 'Product 8',
			description: 'This is a description for product 4.',
			price: '$14.99',
			image: 'https://via.placeholder.com/150',
		},
	];

	return (
		<div className="max-w-screen-xl mx-auto p-6">
			<h1 className="text-3xl font-bold text-center mb-8">Our Products</h1>
			<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
				{products.map((product) => (
					<div
						key={product.id}
						className="bg-white border rounded-lg shadow-md overflow-hidden hover:shadow-xl transition-shadow duration-300"
					>
						<img
							src={product.image}
							alt={product.name}
							className="w-full h-40 object-cover"
						/>
						<div className="p-4">
							<h2 className="text-xl font-bold mb-2">{product.name}</h2>
							<p className="text-gray-600 mb-4">{product.description}</p>
							<div className="text-lg font-semibold text-blue-500">
								{product.price}
							</div>
						</div>
					</div>
				))}
			</div>
		</div>
	);
};

export default Products;
