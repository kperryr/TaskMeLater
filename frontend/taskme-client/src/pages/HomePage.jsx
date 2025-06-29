import React from "react";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

    // implement pop window later
  const handleLogin = () => {
    window.location.href = "http://localhost:5000/auth/google"; 
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-slate-100 text-gray-800 p-4">
      <h1 className="text-4xl font-bold mb-4">Welcome to Task Me Later</h1>
      <p className="text-lg mb-6 text-center max-w-xl">
        Organize your life one task at a time. Log in to track, plan, and complete your goals.
      </p>
      <button
        onClick={handleLogin}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl text-lg transition"
      >
        Login with Google
      </button>
    </div>
  );
};

export default HomePage;