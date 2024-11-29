import React, { useState } from "react";

const LoginPage = () => {
  const [role, setRole] = useState("Curriculum Developer");

  const handleLogin = (e) => {
    e.preventDefault();
    console.log("Logging in as", role);
  };

  return (
    <div className="min-h-screen bg-cover bg-center" style={{ backgroundImage: "url('/images/1.jpg')" }}>
      <div className="flex justify-center items-center min-h-screen bg-opacity-50 bg-black">
        <div className="bg-white p-8 rounded-lg shadow-lg w-96">
          <div className="text-center mb-6">
            <img
              src="/images/image.png"
              alt="ShikshaConnect"
              className="mx-auto "
            />
            <h2 className="text-2xl font-bold text-gray-800">Sign in</h2>
            <h3 className="text-xl text-gray-600">ShikshaConnect</h3>
          </div>
          
          <form onSubmit={handleLogin}>
            <div className="mb-4">
              <label htmlFor="role" className="block text-sm font-medium text-gray-700">Select Role:</label>
              <select
                id="role"
                value={role}
                onChange={(e) => setRole(e.target.value)}
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="Curriculum Developer">Curriculum Developer</option>
                <option value="Educator">Educator</option>
                <option value="AICTE Administrator">AICTE Administrator</option>
              </select>
            </div>
            
            {/* Email */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Email"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password:</label>
              <input
                type="password"
                id="password"
                placeholder="Password"
                required
                className="mt-1 p-2 w-full border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Sign In
              </button>
            </div>
            <div className="text-center text-sm">
              <a href="/forgot-password" className="text-blue-500 hover:underline">Forgot Password?</a>
              <p className="mt-2">
                Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Click to Register</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
