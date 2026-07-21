import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="w-full border-b border-gray-200 bg-white">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
        {/* Logo */}
        <div>
          <h1 className="text-2xl font-bold text-blue-600">
            StudyMate AI
          </h1>
        </div>

        {/* Navigation */}
        <div className="hidden gap-8 md:flex">
          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Home
          </Link>

          <Link to="/" className="text-gray-700 hover:text-blue-600">
            Features
          </Link>

          <Link to="/" className="text-gray-700 hover:text-blue-600">
            About
          </Link>
        </div>

        {/* Login Button */}
        <Link
          to="/login"
          className="rounded-lg bg-blue-600 px-5 py-2 text-white transition hover:bg-blue-700"
        >
          Login
        </Link>
      </div>
    </nav>
  );
}

export default Navbar;