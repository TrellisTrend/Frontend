import { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { getProducts, createProduct, updateProduct, deleteProduct } from '../../services/products';
import { Table, Modal, Button, Input, Select } from '../../components/common';

const productSchema = Yup.object().shape({
  name: Yup.string().required('Required'),
  description: Yup.string(),
  base_price: Yup.number().min(0.01, 'Must be greater than 0').required('Required'),
  category_id: Yup.number().required('Required')
});

export default function ProductManagement() {
  const [products, setProducts] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentProduct, setCurrentProduct] = useState(null);

  useEffect(() => {
    fetchProducts();
    fetchCategories();
  }, []);

  const fetchProducts = async () => {
    const data = await getProducts();
    setProducts(data);
  };

  const fetchCategories = async () => {
    // Implement category fetch
  };

  const formik = useFormik({
    initialValues: {
      name: '',
      description: '',
      base_price: '',
      category_id: ''
    },
    validationSchema: productSchema,
    onSubmit: async (values) => {
      if (currentProduct) {
        await updateProduct(currentProduct.product_id, values);
      } else {
        await createProduct(values);
      }
      fetchProducts();
      setIsModalOpen(false);
      formik.resetForm();
    }
  });

  const handleEdit = (product) => {
    setCurrentProduct(product);
    formik.setValues({
      name: product.name,
      description: product.description,
      base_price: product.base_price,
      category_id: product.category_id
    });
    setIsModalOpen(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this product?')) {
      await deleteProduct(id);
      fetchProducts();
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-4">
        <h1 className="text-2xl font-bold">Product Management</h1>
        <Button onClick={() => {
          setCurrentProduct(null);
          setIsModalOpen(true);
          formik.resetForm();
        }}>
          Add Product
        </Button>
      </div>

      <Table
        headers={['Name', 'Price', 'Category', 'Actions']}
        data={products.map(product => ({
          id: product.product_id,
          items: [
            product.name,
            `$${product.base_price}`,
            product.category_name,
            <div className="space-x-2">
              <Button size="sm" onClick={() => handleEdit(product)}>Edit</Button>
              <Button size="sm" variant="danger" onClick={() => handleDelete(product.product_id)}>
                Delete
              </Button>
            </div>
          ]
        }))}
      />

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} title={currentProduct ? 'Edit Product' : 'Add Product'}>
        <form onSubmit={formik.handleSubmit}>
          <div className="space-y-4">
            <Input
              label="Product Name"
              name="name"
              value={formik.values.name}
              onChange={formik.handleChange}
              error={formik.touched.name && formik.errors.name}
            />
            <Input
              label="Description"
              name="description"
              as="textarea"
              value={formik.values.description}
              onChange={formik.handleChange}
            />
            <Input
              label="Price"
              type="number"
              name="base_price"
              value={formik.values.base_price}
              onChange={formik.handleChange}
              error={formik.touched.base_price && formik.errors.base_price}
            />
            <Select
              label="Category"
              name="category_id"
              value={formik.values.category_id}
              onChange={formik.handleChange}
              options={categories.map(cat => ({ value: cat.category_id, label: cat.name }))}
              error={formik.touched.category_id && formik.errors.category_id}
            />
          </div>
          <div className="mt-6 flex justify-end space-x-3">
            <Button type="button" variant="secondary" onClick={() => setIsModalOpen(false)}>
              Cancel
            </Button>
            <Button type="submit">
              {currentProduct ? 'Update' : 'Create'}
            </Button>
          </div>
        </form>
      </Modal>
    </div>
  );
}