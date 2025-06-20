import { NavLink } from 'react-router-dom';

export default function NavBar() {
  return (
    <div className="flex items-center justify-between px-6 py-4 bg-white shadow-md">
      <div>
        <NavLink to="/" className="font-bold text-xl">Berwyn</NavLink>
      </div>
      <nav className="flex space-x-8">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `font-bold text-base ${isActive ? 'text-blue-600' : 'text-gray-600'}`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/writing"
          className={({ isActive }) =>
            `font-bold text-base ${isActive ? 'text-blue-600' : 'text-gray-600'}`
          }
        >
          Writing
        </NavLink>
        <NavLink
          to="/chatbot"
          className={({ isActive }) =>
            `font-bold text-base ${isActive ? 'text-blue-600' : 'text-gray-600'}`
          }
        >
          Ask Questions
        </NavLink>
      </nav>
    </div>
  );
}
