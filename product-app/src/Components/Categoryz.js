import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

export const Category =  () => {
    const navigate = useNavigate()
    const [categories, setCategories] = useState([])
    const [newCategory, setNewCategory] = useState({ categoryname: '', description: '', active: 'active' })
    const [error, SetError] = useState('')

    useEffect(() => {
        const storedCategories = localStorage.getItem('categories')
        if (storedCategories) {
            setCategories(JSON.parse(storedCategories))
        }
    }, [])

    const handleInputChange = (e) => {
        setNewCategory({ ...newCategory, [e.target.name]: e.target.value })
    }

    const handleAddCategory = () => {
        if (newCategory.categoryname.trim() === '' || newCategory.description.trim() === '') {
            SetError('Please fill in all required fields.')
        } else {
            const updatedCategories = [...categories, newCategory]
            setCategories(updatedCategories)
            localStorage.setItem('categories', JSON.stringify(updatedCategories))
            navigate('/categoryinfo')
            setNewCategory({ categoryname: '', description: '', active: 'active' })
        }
    }

    const handleNavigateToCategories = () => {
        navigate('/categoryinfo')
    }

    return (
        <div className="flex justify-center items-center h-full">
            <div className="w-2/3 bg-white p-9 ml-60 mt-28">
                <div className="mb-6 flex justify-between items-center">
                    <h2 className="text-2xl font-bold">Add New Category</h2>
                    <button
                        className="bg-purple-600 text-white px-7 py-2 rounded-md"
                        onClick={handleNavigateToCategories}
                    >
                        Go to Categories
                    </button>
                </div>
                <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700">Category Name</label>
                    <input
                        type="text"
                        name="categoryname"
                        placeholder='category name'
                        className="mt-2 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={newCategory.categoryname}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Description</label>
                    <textarea
                        name="description"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        rows="3"
                        placeholder='what you think about this product'
                        value={newCategory.description}
                        onChange={handleInputChange}
                    ></textarea>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-gray-700">Status</label>
                    <select
                        name="active"
                        className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                        value={newCategory.active}
                        onChange={handleInputChange}
                    >
                        <option value="active">Active</option>
                        <option value="inactive">Inactive</option>
                    </select>
                </div>
                {error && <p className="text-red-500 mt-2">{error}</p>}
                <div className="flex justify-end">
                    <button className="bg-gray-300 text-black-700 px-7 py-2 rounded-md mr-3">Cancel</button>
                    <button className="bg-purple-600 text-white px-7 py-2 rounded-md" onClick={handleAddCategory}>
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}