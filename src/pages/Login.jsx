import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the form from submitting
    navigate('/');
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`min-h-screen flex items-center justify-center ${isDarkMode ? 'bg-gray-900' : 'bg-gray-100'}`}>
      <div className={`bg-white p-8 rounded-lg shadow-lg w-full max-w-md ${isDarkMode ? 'bg-gray-800 text-white' : ''}`}>
        <h2 className="text-2xl font-bold text-center mb-6">
          Login to Your Account
        </h2>
        <form>
          {/* Email Input */}
          <div className="mb-4">
            <label className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="email">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500' : 'border-gray-300 focus:ring-blue-600'}`}
              placeholder="Enter your email"
            />
          </div>

          {/* Password Input */}
          <div className="mb-6">
            <label className={`block mb-2 ${isDarkMode ? 'text-gray-300' : 'text-gray-700'}`} htmlFor="password">
              Password
            </label>
            <input
              type="password"
              id="password"
              className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 ${isDarkMode ? 'bg-gray-700 border-gray-600 text-white focus:ring-blue-500' : 'border-gray-300 focus:ring-blue-600'}`}
              placeholder="Enter your password"
            />
          </div>

          {/* Remember Me Checkbox */}
          <div className="mb-6 flex items-center">
            <input
              type="checkbox"
              id="remember"
              className={`mr-2 ${isDarkMode ? 'text-gray-300' : ''}`}
            />
            <label className={`text-gray-700 ${isDarkMode ? 'text-gray-300' : ''}`} htmlFor="remember">
              Remember me
            </label>
          </div>

          {/* Login Button */}
          <button
            type="submit"
            className={`w-full py-2 rounded-lg font-semibold transition duration-200 ${isDarkMode ? 'bg-blue-500 hover:bg-blue-400 text-white' : 'bg-blue-600 hover:bg-blue-700 text-white'}`}
            onClick={handleLogin}
          >
            Login
          </button>
        </form>

        {/* Divider */}
        <div className={`mt-6 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <p>or</p>
        </div>

        {/* Social Login */}
        <div className="mt-4 flex justify-center space-x-4">
          <button className={`w-10 h-10 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-blue-600 hover:bg-blue-500' : 'bg-blue-600 hover:bg-blue-700'} text-white`}>
            <i className="fab fa-facebook-f"></i>
          </button>
          <button className={`w-10 h-10 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-blue-400 hover:bg-blue-300' : 'bg-blue-500 hover:bg-blue-600'} text-white`}>
            <i className="fab fa-twitter"></i>
          </button>
          <button className={`w-10 h-10 rounded-full flex items-center justify-center ${isDarkMode ? 'bg-red-500 hover:bg-red-400' : 'bg-red-600 hover:bg-red-700'} text-white`}>
            <i className="fab fa-google"></i>
          </button>
        </div>

        {/* Sign Up Link */}
        <div className={`mt-6 text-center ${isDarkMode ? 'text-gray-400' : 'text-gray-500'}`}>
          <p>
            Don't have an account?{' '}
            <a href="#signup" className="text-blue-600 hover:underline">
              Sign up
            </a>
          </p>
        </div>

        {/* Theme Toggle Button */}
        <div className="mt-6 text-center">
          <button
            onClick={toggleTheme}
            className={`py-2 px-4 rounded-lg font-semibold transition duration-200 ${isDarkMode ? 'bg-gray-600 text-white hover:bg-gray-500' : 'bg-gray-200 text-gray-800 hover:bg-gray-300'}`}
          >
            {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Login;

