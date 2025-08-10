import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';

export default function Dashboard(){
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="p-8">
      <div className="max-w-3xl mx-auto bg-white p-6 rounded shadow">
        <h1 className="text-2xl mb-2">Welcome, {user?.name || user?.email}</h1>
        <p className="mb-4">Email: {user?.email}</p>
        <p className="mb-4">Role: {user?.role || 'user'}</p>
        <button onClick={logout} className="px-4 py-2 bg-red-500 text-white rounded">Logout</button>
      </div>
    </div>
  );
}
