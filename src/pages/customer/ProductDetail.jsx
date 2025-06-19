import { useState } from 'react';
import { useShop } from '../../context/ShopContext';
import PropTypes from 'prop-types';

export default function ProductDetail({ product }) {
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);
  const { addToCart } = useShop();

  const handleAddToCart = () => {
    addToCart({ ...product, quantity });
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {/* Product Images */}
      <div>
        <div className="bg-white p-4 rounded-lg shadow mb-4">
          <img 
            src={product.images[selectedImage]} 
            alt={product.name} 
            className="w-full h-96 object-contain"
          />
        </div>
        <div className="flex space-x-2 overflow-x-auto">
          {product.images.map((img, index) => (
            <button
              key={index}
              onClick={() => setSelectedImage(index)}
              className={`flex-shrink-0 w-16 h-16 border-2 ${selectedImage === index ? 'border-blue-500' : 'border-transparent'}`}
            >
              <img src={img} alt={`Thumbnail ${index}`} className="w-full h-full object-cover" />
            </button>
          ))}
        </div>
      </div>

      {/* Product Info */}
      <div>
        <h1 className="text-3xl font-bold text-gray-900 mb-2">{product.name}</h1>
        <div className="text-2xl text-gray-800 font-semibold mb-4">${product.price.toFixed(2)}</div>
        
        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Description</h2>
          <p className="text-gray-600">{product.description}</p>
        </div>

        <div className="mb-6">
          <h2 className="text-lg font-medium text-gray-900 mb-2">Details</h2>
          <ul className="text-gray-600 space-y-1">
            <li><strong>Category:</strong> {product.category?.name}</li>
            <li><strong>Availability:</strong> {product.stock > 0 ? 'In Stock' : 'Out of Stock'}</li>
          </ul>
        </div>

        {product.stock > 0 && (
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center border border-gray-300 rounded">
              <button 
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="px-3 py-1 text-lg"
              >
                -
              </button>
              <span className="px-3 py-1">{quantity}</span>
              <button 
                onClick={() => setQuantity(q => Math.min(product.stock, q + 1))}
                className="px-3 py-1 text-lg"
              >
                +
              </button>
            </div>
            <button
              onClick={handleAddToCart}
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Add to Cart
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


ProductDetail.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        description: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        stock: PropTypes.number.isRequired,
        category: PropTypes.shape({
            name: PropTypes.string
        })
    }).isRequired
};