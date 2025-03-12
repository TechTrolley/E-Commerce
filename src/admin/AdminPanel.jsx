import React, { useEffect, useState } from "react";
import { collection, getDocs, addDoc, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebases/firebaseConfig";

const AdminPanel = () => {
  const [products, setProducts] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: "",
    description: "",
    imageUrl: "",
    category: "",
  });

  // Fetch products from Firestore
  useEffect(() => {
    const fetchProducts = async () => {
      const querySnapshot = await getDocs(collection(db, "products"));
      const productList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setProducts(productList);
    };
    fetchProducts();
  }, []);

  // Add a new product
  const handleAddProduct = async () => {
    if (!newProduct.name || !newProduct.imageUrl) {
      alert("Please fill all fields");
      return;
    }
    await addDoc(collection(db, "products"), newProduct);
    setNewProduct({ name: "", description: "", imageUrl: "", category: "" });
    window.location.reload(); // Refresh page to see changes
  };

  // Delete a product
  const handleDeleteProduct = async (id) => {
    await deleteDoc(doc(db, "products", id));
    window.location.reload(); // Refresh page to see changes
  };

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Admin Panel</h1>

      {/* Add Product Form */}
      <div className="mb-6 bg-gray-100 p-4 rounded-lg shadow">
        <h2 className="text-2xl font-semibold mb-4">Add Product</h2>
        <input
          type="text"
          placeholder="Product Name"
          className="p-2 border w-full mb-2"
          value={newProduct.name}
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
        />
        <input
          type="text"
          placeholder="Description"
          className="p-2 border w-full mb-2"
          value={newProduct.description}
          onChange={(e) => setNewProduct({ ...newProduct, description: e.target.value })}
        />
        <input
          type="text"
          placeholder="Image URL"
          className="p-2 border w-full mb-2"
          value={newProduct.imageUrl}
          onChange={(e) => setNewProduct({ ...newProduct, imageUrl: e.target.value })}
        />
        <input
          type="text"
          placeholder="Category (SmartPhones, Laptops, etc.)"
          className="p-2 border w-full mb-2"
          value={newProduct.category}
          onChange={(e) => setNewProduct({ ...newProduct, category: e.target.value })}
        />
        <button
          onClick={handleAddProduct}
          className="bg-blue-500 text-white px-4 py-2 rounded-lg"
        >
          Add Product
        </button>
      </div>

      {/* Display Products */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {products.map((product) => (
          <div key={product.id} className="border p-4 rounded-lg shadow">
            <img src={product.imageUrl} alt={product.name} className="w-full h-40 object-cover mb-2" />
            <h2 className="text-xl font-bold">{product.name}</h2>
            <p className="text-gray-600">{product.description}</p>
            <button
              onClick={() => handleDeleteProduct(product.id)}
              className="bg-red-500 text-white px-4 py-2 mt-2 rounded-lg"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminPanel;
