import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

export const getCategories = async () => {
  const response = await axios.get(`${API_URL}/categories`);
  return response.data;
};

export const createCategory = async (categoryData) => {
  const response = await axios.post(`${API_URL}/categories`, categoryData);
  return response.data;
};