import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

export const ProductAdd = () => {
    const navigate = useNavigate()
    const [products, setProducts] = useState([])
    const [newProduct, setNewProduct] = useState({
        id: '',
        name: '',
        packSize: '',
        category: '',
        MRP: '',
        image: '',
        status: 'active',
    })

    const [error, SetError] = useState('')

    useEffect(() => {
        const storedProducts = localStorage.getItem('products')
        if (storedProducts) {
            setProducts(JSON.parse(storedProducts))
        }
    }, [])

    const handleInputChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value })
    }

    const handleAddProduct = () => {
        if (newProduct.name.trim() === '' || newProduct.category.trim() === '') {
            SetError('Please fill in all required fields.')
        } else {
            const updatedProducts = [...products, newProduct]
            setProducts(updatedProducts)
            localStorage.setItem('products', JSON.stringify(updatedProducts))
            navigate('/product')
            setNewProduct({
                id: '',
                name: '',
                packSize: '',
                category: '',
                MRP: '',
                image: '',
                status: 'active',
            })
        }
    }

    return (
        <div className="flex justify-center items-center h-full">
            <div className="w-2/3 bg-white p-9 ml-60 mt-28">
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Product Name</label>
                    <input
                        type="text"
                        name="name"
                        placeholder='Product Name'
                        className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={newProduct.name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Pack Size</label>
                    <input
                        name="packSize"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        placeholder='Pack Size'
                        value={newProduct.packSize}
                        onChange={handleInputChange}
                    ></input>
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Category</label>
                    <input
                        type="text"
                        name="category"
                        placeholder='Category'
                        className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={newProduct.category}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">MRP</label>
                    <input
                        type="text"
                        name="MRP"
                        placeholder='MRP'
                        className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={newProduct.MRP}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <select
                        name="status"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={newProduct.status}
                        onChange={handleInputChange}
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
                {error && <p className="text-red-500 mt-2">{error}</p>}
                <div className="flex justify-end">
                    <button className="bg-gray-300 text-black-700 px-7 py-2 rounded-md mr-3">Cancel</button>
                    <button className="bg-purple-600 text-white px-7 py-2 rounded-md" onClick={handleAddProduct}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}
