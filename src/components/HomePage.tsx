import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "./Auth/AuthContext";
import { motion } from "framer-motion";

const HomePage: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {/* Header */}
      <header className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white shadow-md">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between">
          <h1 className="text-3xl font-bold hover:scale-105 transition-transform">
            <Link to="/" className="hover:underline">
              {" "}
              User Management System{" "}
            </Link>
          </h1>
          {/* Mobile Menu Button */}
          <button
            className="lg:hidden px-3 py-2 border rounded text-white border-white hover:text-gray-200 hover:border-gray-200"
            onClick={toggleMenu}
          >
            ☰
          </button>
          {/* Desktop Nav Links */}
          <nav className="hidden lg:flex space-x-4">
            <Link
              to="/"
              className="hover:bg-indigo-700 px-4 py-2 rounded-md transition duration-300 font-bold"
            >
              Home
            </Link>
            <Link
              to="/profiles"
              className="hover:bg-indigo-700 px-4 py-2 rounded-md transition duration-300 font-bold"
            >
              User-Profile
            </Link>
            <Link
              to="/"
              className="hover:bg-indigo-700 px-4 py-2 rounded-md transition duration-300 font-bold"
            >
              Contact
            </Link>
            {isAuthenticated && (
              <button
                onClick={logout}
                className="hover:bg-indigo-700 px-4 py-2 rounded-md transition duration-300 font-bold"
              >
                Logout
              </button>
            )}
          </nav>
        </div>
        {/* Mobile Nav Links */}
        {isMenuOpen && (
          <div className="lg:hidden bg-indigo-600">
            <nav className="flex flex-col space-y-2 p-4">
              <Link
                to="/"
                className="hover:bg-indigo-700 px-4 py-2 rounded-md transition duration-300"
              >
                Home
              </Link>
              <Link
                to="/profiles"
                className="hover:bg-indigo-700 px-4 py-2 rounded-md transition duration-300"
              >
                User-Profile
              </Link>
              <Link
                to="/"
                className="hover:bg-indigo-700 px-4 py-2 rounded-md transition duration-300"
              >
                Contact
              </Link>
              {isAuthenticated && (
                <button
                  onClick={logout}
                  className="hover:bg-indigo-700 px-4 py-2 rounded-md transition duration-300"
                >
                  Logout
                </button>
              )}
            </nav>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <main className="flex-grow flex items-center justify-center bg-gradient-to-br from-white to-gray-100">
        <motion.div
          className="text-center p-8 max-w-2xl mx-auto bg-white shadow-lg rounded-lg transform transition-transform duration-300 hover:rotate-1 hover:scale-105"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-4xl font-extrabold text-gray-800 mb-4 animate__animated animate__zoomIn">
            Welcome to the User Management System
          </h2>
          <p className="text-lg text-gray-600 mb-8 animate__animated animate__fadeIn">
            Manage users efficiently with our powerful platform. Sign up or log
            in to get started.
          </p>
          <div className="flex justify-center space-x-4">
            <Link
              to="/login"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 transition duration-300"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="bg-indigo-600 text-white px-6 py-3 rounded-md shadow-md hover:bg-indigo-700 transition duration-300"
            >
              Register
            </Link>
          </div>
        </motion.div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-4 text-center mt-12 animate__animated animate__bounceIn">
        <p>
          &copy; {new Date().getFullYear()} Created by Sourabh. All rights
          reserved.
        </p>
      </footer>
    </div>
  );
};

export default HomePage;
