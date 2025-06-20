import { NavLink } from 'react-router-dom';
import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

export default function NavBar() {
  const [open, setOpen] = useState(false);

  /** Tailwind helpers */
  const base =
    'font-bold text-base block py-2 sm:inline sm:py-0 transition-colors';
  const getLinkClass = (isActive) =>
    `${base} ${isActive ? 'text-blue-600' : 'text-gray-600'}`;

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
        {/* Brand */}
        <NavLink to="/" className="font-bold text-xl">
          Berwyn
        </NavLink>

        {/* Hamburger – shown only on small screens */}
        <button
          className="sm:hidden text-2xl"
          aria-label="Toggle navigation"
          onClick={() => setOpen((prev) => !prev)}
        >
          {open ? <FaTimes /> : <FaBars />}
        </button>

        {/* Desktop nav */}
        <nav className="hidden sm:flex space-x-8">
          <NavLink to="/" className={({ isActive }) => getLinkClass(isActive)}>
            Home
          </NavLink>
          <NavLink
            to="/writing"
            className={({ isActive }) => getLinkClass(isActive)}
          >
            Writing
          </NavLink>
          <NavLink
            to="/chatbot"
            className={({ isActive }) => getLinkClass(isActive)}
          >
            Ask Questions
          </NavLink>
        </nav>
      </div>

      {/* Mobile menu */}
      {open && (
        <nav className="sm:hidden px-6 pb-4 flex flex-col space-y-2">
          <NavLink
            to="/"
            onClick={() => setOpen(false)}
            className={({ isActive }) => getLinkClass(isActive)}
          >
            Home
          </NavLink>
          <NavLink
            to="/writing"
            onClick={() => setOpen(false)}
            className={({ isActive }) => getLinkClass(isActive)}
          >
            Writing
          </NavLink>
          <NavLink
            to="/chatbot"
            onClick={() => setOpen(false)}
            className={({ isActive }) => getLinkClass(isActive)}
          >
            Ask Questions
          </NavLink>
        </nav>
      )}
    </header>
  );
}
