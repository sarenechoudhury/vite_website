import React from 'react';
import { Link } from 'react-router-dom';

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans">
      {/* Header */}
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
            <Link to="/coding" className="hover:underline">Coding</Link>
            <Link to="/film" className="hover:underline">Film</Link>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-6 py-12 space-y-12">
        {/* About */}
        <section className="bg-white shadow-md rounded-3xl p-10 border">
          <h2 className="text-5xl font-semibold text-sky-700 mb-2">About Me</h2>
          <p>
            I'm passionate about blending machine learning, creativity, and storytelling to build tools and experiences
            with real-world impact. I study CS and Cinema at the University of Chicago, and I’ve done research in
            quant finance, AI modeling, and interactive tech.
          </p>
        </section>

        {/* Projects */}
        <section className="bg-white shadow-md rounded-3xl p-10 border">
          <h2 className="text-5xl font-semibold text-sky-700 mb-2">Projects</h2>
          <ul className="list-disc ml-6 space-y-2">
            <li>
              <Link to="/code" className="text-sky-700 hover:text-sky-900">
                Coding Projects
              </Link> – Machine learning, web apps, and data work.
            </li>
            <li>
              <Link to="/writing" className="text-sky-700 hover:text-sky-900">
                Writing Portfolio
              </Link> – Essays, creative writing, and poetry.
            </li>
            <li>
              <Link to="/film" className="text-sky-700 hover:text-sky-900">
                Film & Media Work
              </Link> – Short films, editing, and visual storytelling.
            </li>
          </ul>
        </section>

        {/* Contact */}
        <section className="bg-white shadow-md rounded-3xl p-10 border">
          <h2 className="text-5xl font-semibold text-sky-700 mb-2">Contact</h2>
          <p>📧 <a href="mailto:sareneac@icloud.com" className="text-sky-700">sareneac@icloud.com</a></p>
          <p>💻 <a href="https://github.com/sarenechoudhury" className="text-sky-700">GitHub Profile</a></p>
        </section>
      </main>

      {/* Footer */}
      <footer className="text-sm text-slate-500 text-center py-8">
        © {new Date().getFullYear()} Sarene Choudhury — Built with React + Tailwind
      </footer>
    </div>
  );
}

