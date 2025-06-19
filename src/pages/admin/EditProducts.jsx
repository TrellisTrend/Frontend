import { useState, useEffect } from 'react';
import { getProducts, createProduct, updateProduct } from '../../services/products';
import ProductForm from '../../pages/admin/ProductForm';

export default function EditProducts() {
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const data = await getProducts();
        setProducts(data);
      } catch (err) {
        console.error('Failed to fetch products', err);
      } finally {
        setLoading(false);
      }
    };
    fetchProducts();
  }, []);

  const handleSubmit = async (productData) => {
    try {
      if (selectedProduct) {
        const updatedProduct = await updateProduct(selectedProduct._id, productData);
        setProducts(products.map(p => p._id === updatedProduct._id ? updatedProduct : p));
      } else {
        const newProduct = await createProduct(productData);
        setProducts([...products, newProduct]);
      }
      setSelectedProduct(null);
    } catch (err) {
      console.error('Failed to save product', err);
    }
  };

  if (loading) return <div>Loading products...</div>;

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Edit Products</h1>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <ProductForm 
            product={selectedProduct} 
            onSubmit={handleSubmit}
            onCancel={() => setSelectedProduct(null)}
          />
        </div>
        <div>
          {/* Product selection list */}
        </div>
      </div>
    </div>
  );
}