// src/Layout.jsx
import React from 'react';
import { Link } from 'react-router-dom';

export default function Layout({ children }) {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Navbar */}
      <header className="bg-slate-800 text-white shadow-sm">
        <div className="max-w-4xl mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center">
          <div>
            <h1 className="text-2xl font-bold">Sarene Choudhury</h1>
            <p className="text-sm text-slate-300">CS + Cinema Studies @ UChicago</p>
          </div>
          <nav className="mt-4 md:mt-0 flex space-x-4 text-sm">
            <Link to="/" className="hover:underline">Home</Link>
            <Link to="/about" className="hover:underline">About</Link>
            <Link to="/writing" className="hover:underline">Writing</Link>
            <Link to="/code" className="hover:underline">Code</Link>
            <Link to="/film" className="hover:underline">Film</Link>
          </nav>
        </div>
      </header>

      {/* Page content */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        {children}
      </main>

      {/* Footer */}
      <footer className="text-sm text-slate-500 text-center py-8">
        © {new Date().getFullYear()} Sarene Choudhury — Built with React + Tailwind
      </footer>
    </div>
  );
}
