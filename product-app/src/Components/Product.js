import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const storedProducts = localStorage.getItem('products');
    if (storedProducts) {
      setProducts(JSON.parse(storedProducts));
    }
  }, []);

  
    const lastProduct = products[products.length - 1];
    const id = lastProduct ? lastProduct.id + 1 : 1;

  return (
    <div className="bg-white-100 p-8 w-3/4 ml-96">
      <h1 className="text-3xl font-bold mb-6 text-center">Product Information</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="py-3 px-6 bg-yellow-100">ID</th>
              <th className="py-3 px-6 bg-yellow-100">Product Name</th>
              <th className="py-3 px-6 bg-yellow-100">Pack Size</th>
              <th className="py-3 px-6 bg-yellow-100">Category</th>
              <th className="py-3 px-6 bg-yellow-100">MRP</th>
              <th className="py-3 px-6 bg-yellow-100">Image</th>
              <th className="py-3 px-6 bg-yellow-100">Status</th>
            </tr>
          </thead>
          <tbody>
            {products.map(product => (
              <tr key={product.id} className="text-center">
                <td className="py-4 px-6 border-b border-gray-200 bg-white-100">{id}</td>
                <td className="py-4 px-6 border-b border-gray-200 bg-white-100">{product.name}</td>
                <td className="py-4 px-6 border-b border-gray-200 bg-white-100">{product.packSize}</td>
                <td className="py-4 px-6 border-b border-gray-200 bg-white-100">{product.category}</td>
                <td className="py-4 px-6 border-b border-gray-200 bg-white-100">{product.MRP}</td>
                <td className="py-4 px-6 border-b border-gray-200 bg-white-100"><img src={product.image} alt={product.name} className="h-16 w-16 mx-auto" /></td>
                <td className={` py-4 px-6 border-b border-gray-200 bg-white-100 ${product.status  === 'active' ? 'text-green-500' : 'text-red-500'}`}>{product.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Link to="/productadd">
        <button className="mt-4 bg-purple-600 text-white font-bold py-2 px-4 rounded">
          Add Product
        </button>
      </Link>
    </div>
  );
};

export default Product;
