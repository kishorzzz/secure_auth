import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Register from './pages/Register';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import ProtectedRoute from './components/ProtectedRoute';
import { AuthProvider } from './context/AuthContext';

export default function App(){
  return (
    <AuthProvider>
      <BrowserRouter>
        <nav className="p-4 bg-white shadow">
          <div className="container mx-auto flex gap-4">
            <Link to="/register" className="text-blue-600">Register</Link>
            <Link to="/login" className="text-blue-600">Login</Link>
            <Link to="/dashboard" className="text-blue-600">Dashboard</Link>
          </div>
        </nav>
        <Routes>
          <Route path="/" element={<Register/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard/></ProtectedRoute>} />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}
