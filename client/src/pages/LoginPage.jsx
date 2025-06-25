// 



// src/pages/LoginPage.jsx
import { useState } from 'react';
import { loginUser } from '../services/authService';
import { useNavigate } from 'react-router';


export default function LoginPage() {
  const [formData, setFormData] = useState({ email: '', password: '' });
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

    const navigate = useNavigate(); 

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const res = await loginUser(formData);
    if (res.success) {
      setMessage(res.message);
      localStorage.setItem('token', res.data.token); // Simpan token
       navigate('/home'); 
    } else {
      setError(res.errors);
      setMessage('');
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
      <button type="submit">Login</button>
      {error && <p style={{color: 'red'}}>{error}</p>}
      {message && <p style={{color: 'green'}}>{message}</p>}
    </form>
  );
}
