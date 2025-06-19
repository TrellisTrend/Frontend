import axios from 'axios';
const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000/api';

// Create axios instance with default headers
const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json'
  }
});

// Add request interceptor to include auth token
api.interceptors.request.use((config) => {
  const token = localStorage.getItem('token');
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Auth functions
export const loginUser = async (credentials) => {
  try {
    const response = await api.post('/auth/login', credentials);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Login failed');
  }
};

export const registerUser = async (userData) => {
  try {
    const response = await api.post('/auth/register', userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Registration failed');
  }
};

export const logoutUser = async () => {
  try {
    // If your backend has a logout endpoint
    await api.post('/auth/logout');
    // Clear local storage
    localStorage.removeItem('token');
    localStorage.removeItem('user');
  } catch (error) {
    // Even if logout fails, clear client-side tokens
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    throw new Error(error.response?.data?.error || 'Logout failed');
  }
};

// User management functions
export const getUsers = async () => {
  try {
    const response = await api.get('/users');
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to fetch users');
  }
};

export const getUserById = async (id) => {
  try {
    const response = await api.get(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to fetch user');
  }
};

export const updateUser = async (id, userData) => {
  try {
    const response = await api.put(`/users/${id}`, userData);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to update user');
  }
};

export const deleteUser = async (id) => {
  try {
    const response = await api.delete(`/users/${id}`);
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to delete user');
  }
};

export const updateUserRole = async (id, role) => {
  try {
    const response = await api.patch(`/users/${id}/role`, { role });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to update user role');
  }
};

// Additional helper functions
export const getCurrentUser = async () => {
  try {
    const response = await api.get('/auth/me');
    return response.data.user;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to fetch current user');
  }
};

export const checkAdminStatus = async () => {
  try {
    const user = await getCurrentUser();
    return user?.role === 'admin';
  } catch {
    return false;
  }
};

// Password reset functions
export const requestPasswordReset = async (email) => {
  try {
    const response = await api.post('/auth/forgot-password', { email });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to request password reset');
  }
};

export const resetPassword = async (token, newPassword) => {
  try {
    const response = await api.post('/auth/reset-password', { token, newPassword });
    return response.data;
  } catch (error) {
    throw new Error(error.response?.data?.error || 'Failed to reset password');
  }
};