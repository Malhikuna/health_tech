
import React, { useState } from 'react';
import { useNavigate } from 'react-router';
import { registerUser } from '../services/authService'; 

const RegisterPage = () => {
 const [form, setForm] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    first_name: '',
    last_name: '',
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (form.password !== form.confirmPassword) {
      setError('Password dan Konfirmasi Password tidak sama');
      return;
    }

    const { confirmPassword, ...dataToSend } = form;

    const res = await registerUser(dataToSend); // 👈 panggil service

    if (res.success) {
      setMessage('Registrasi berhasil! Anda akan dialihkan ke halaman login...');
      setError('');
      navigate('/login');
    } else {
      setError(res.errors || 'Terjadi kesalahan');
      setMessage('');
    }
  };


  return (
    <div className="max-w-md mx-auto mt-10 p-6 bg-white rounded-lg shadow">
      <h2 className="text-2xl font-bold mb-4 text-center">Register</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="first_name"
          placeholder="First Name"
          value={form.first_name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="text"
          name="last_name"
          placeholder="Last Name"
          value={form.last_name}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={form.password}
          onChange={handleChange}
          className="w-full p-2 border border-gray-300 rounded"
          required
        />
        <input
          type="password"
          name="confirmPassword"
          placeholder="Confirm Password"
          value={form.confirmPassword}
          onChange={handleChange}
          className={`w-full p-2 border rounded ${
            form.password && form.confirmPassword && form.password !== form.confirmPassword
              ? 'border-red-500'
              : 'border-gray-300'
          }`}
          required
        />
        {form.password && form.confirmPassword && form.password !== form.confirmPassword && (
          <p className="text-red-500 text-sm">Password tidak sesuai</p>
        )}
        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded hover:bg-blue-700"
        >
          Register
        </button>
      </form>

      {message && (
        <div className="mt-4 text-center">
          <p className="text-green-600 font-medium">{message}</p>
          <p className="text-gray-500 text-sm mt-2">Silahkan tunggu...</p>
        </div>
      )}
      {error && (
        <p className="mt-4 text-red-600 font-medium text-center">{error}</p>
      )}
    </div>
  );
};

export default RegisterPage;