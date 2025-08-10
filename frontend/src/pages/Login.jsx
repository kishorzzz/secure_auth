import { useState, useContext } from 'react';
import api from '../utils/api';
import { AuthContext } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

export default function Login(){
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);
  const [form, setForm] = useState({ email: '', password: '' });
  const [error, setError] = useState('');

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const res = await api.post('/auth/login', form);
      login(res.data.token, res.data.user || { email: form.email, role: res.data.role });
      navigate('/dashboard');
    } catch (err) {
      setError(err.response?.data?.message || err.response?.data?.msg || 'Error');
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center">
      <form className="w-full max-w-md p-6 bg-white rounded shadow" onSubmit={submit}>
        <h2 className="text-2xl mb-4">Login</h2>
        {error && <div className="text-red-600 mb-2">{error}</div>}
        <input name="email" placeholder="Email" value={form.email} onChange={handleChange} className="w-full mb-2 p-2 border rounded" />
        <input type="password" name="password" placeholder="Password" value={form.password} onChange={handleChange} className="w-full mb-4 p-2 border rounded" />
        <button className="w-full p-2 bg-blue-600 text-white rounded">Login</button>
      </form>
    </div>
  );
}
