import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Basic validation
    if (email === 'user@example.com' && password === 'password123') {
      navigate('/'); // Redirect to home page after successful login
    } else {
      setError('Invalid email or password');
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-4xl font-bold text-center text-[#CC313D] mb-6">Login</h2>

        {error && <p className="text-red-500 text-center mb-4">{error}</p>}

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC313D]"
              required
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 p-3 w-full border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#CC313D]"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#CC313D] text-white py-3 rounded-lg hover:bg-[#a92631] transition duration-300"
          >
            Login
          </button>
        </form>
        <p className="mt-4 text-center text-sm">
  Don't have an account? <Link to="/signup" className="text-[#CC313D] hover:underline">Sign up</Link>
</p>
      </div>
    </div>
  );
};

export default Login;
