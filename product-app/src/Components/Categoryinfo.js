import React, { useState, useEffect } from 'react'

const Categoryinfo = () => {
  const [categories, setCategories] = useState([])

  useEffect(() => {
    const storedCategories = localStorage.getItem('categories')
    if (storedCategories) {
      setCategories(JSON.parse(storedCategories))
    }
  }, [])

  const handleDeleteCategory = (index) => {
    const updatedCategories = [...categories]
    updatedCategories.splice(index, 1)
    setCategories(updatedCategories)
    localStorage.setItem('categories', JSON.stringify(updatedCategories))
  }

  return (
    <div className="flex justify-center items-start h-screen pt-20">
      <div className="w-3/5 bg-white p-6 rounded-lg shadow-md ml-80">
        <h2 className="text-2xl font-bold text-purple-800 mb-6">Categories</h2>
        <div className="max-h-[calc(100vh-200px)] overflow-y-auto">
          {categories.length > 0 ? (
            categories.map((category, index) => (
              <div key={index} className="border-2 border-gray-200 p-4 mb-4 grid grid-cols-3 gap-4 items-center">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Category Name</label>
                  <p className="text-gray-600">{category.categoryname}</p>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">Description</label>
                  <p className="text-gray-600">{category.description}</p>
                </div>
                <div className="flex items-center justify-end gap-2">
                  <p
                    className={`text-gray-600 ${
                      category.active === 'active' ? 'text-green-500' : 'text-red-500'
                    }`}
                  >
                    {category.active}
                  </p>
                  <button
                    className="bg-red-500 text-white p-2 rounded-md ml-10"
                    onClick={() => handleDeleteCategory(index)}
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-5 w-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"
                      />
                    </svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <p>No categories added yet.</p>
          )}
        </div>
      </div>
    </div>
  )
}

export default Categoryinfo
