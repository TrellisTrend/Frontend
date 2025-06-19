import { useState } from 'react';

export default function Filters() {
  const [priceRange, setPriceRange] = useState([0, 1000]);
  const [selectedCategories, setSelectedCategories] = useState([]);

  // These would normally come from your API
  const categories = [
    { id: '1', name: 'Electronics' },
    { id: '2', name: 'Clothing' },
    { id: '3', name: 'Home & Garden' },
    { id: '4', name: 'Books' },
  ];

  const handleCategoryToggle = (categoryId) => {
    setSelectedCategories(prev =>
      prev.includes(categoryId)
        ? prev.filter(id => id !== categoryId)
        : [...prev, categoryId]
    );
  };

  return (
    <div className="space-y-6">
      <div>
        <h3 className="font-medium text-gray-900 mb-2">Price Range</h3>
        <div className="space-y-2">
          <input
            type="range"
            min="0"
            max="1000"
            value={priceRange[1]}
            onChange={(e) => setPriceRange([priceRange[0], parseInt(e.target.value)])}
            className="w-full"
          />
          <div className="flex justify-between text-sm text-gray-600">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
        </div>
      </div>

      <div>
        <h3 className="font-medium text-gray-900 mb-2">Categories</h3>
        <ul className="space-y-2">
          {categories.map(category => (
            <li key={category.id}>
              <label className="flex items-center">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(category.id)}
                  onChange={() => handleCategoryToggle(category.id)}
                  className="h-4 w-4 text-blue-600 rounded"
                />
                <span className="ml-2 text-gray-600">{category.name}</span>
              </label>
            </li>
          ))}
        </ul>
      </div>

      <div>
        <h3 className="font-medium text-gray-900 mb-2">Rating</h3>
        <div className="space-y-2">
          {[4, 3, 2, 1].map(rating => (
            <label key={rating} className="flex items-center">
              <input
                type="radio"
                name="rating"
                className="h-4 w-4 text-blue-600 rounded"
              />
              <span className="ml-2 text-gray-600">
                {rating} Stars & Up
              </span>
            </label>
          ))}
        </div>
      </div>

      <button className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700">
        Apply Filters
      </button>
    </div>
  );
}