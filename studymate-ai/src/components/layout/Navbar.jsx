import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white/80 backdrop-blur-md">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-8">
        <Link
          to="/"
          className="text-3xl font-extrabold text-blue-600"
        >
          StudyMate AI
        </Link>

        <nav className="hidden items-center gap-10 font-medium text-gray-700 md:flex">
          <a href="#features" className="hover:text-blue-600">
            Features
          </a>

          <a href="#how" className="hover:text-blue-600">
            How it Works
          </a>

          <a href="#reviews" className="hover:text-blue-600">
            Reviews
          </a>

          <a href="#contact" className="hover:text-blue-600">
            Contact
          </a>
        </nav>

        <Link
          to="/login"
          className="rounded-xl bg-blue-600 px-6 py-3 font-semibold text-white transition hover:bg-blue-700"
        >
          Login
        </Link>
      </div>
    </header>
  );
};

export default Navbar;