import axios from 'axios';

const BASE_URL = 'http://localhost:3000/api/auth'; 

export const registerUser = async (userData) => {
  try {
    const res = await axios.post(`${BASE_URL}/register`, userData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });
    return res.data;
  } catch (err) {
    if (err.response) {
      return { success: false, errors: err.response.data.errors || 'Terjadi kesalahan saat registrasi' };
    } else if (err.request) {
      return { success: false, errors: 'Gagal terhubung ke server' };
    } else {
      return { success: false, errors: 'Terjadi kesalahan tak terduga' };
    }
  }
};


export const loginUser = async (data) => {
  try {
    const res = await axios.post(`${BASE_URL}/login`, data);
    return res.data;
  } catch (err) {
    return err.response?.data || { errors: 'Terjadi kesalahan saat login' };
  }
};


export const logoutUser = async () => {
  try {
    const res = await axios.post(`${BASE_URL}/logout`);
    return res.data;
  } catch (err) {
    return err.response?.data || { errors: 'Terjadi kesalahan saat logout' };
  }
};
