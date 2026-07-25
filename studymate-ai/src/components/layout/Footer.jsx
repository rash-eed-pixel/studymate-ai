import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 py-14 text-white">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">

        <div>
          <h2 className="text-3xl font-bold text-blue-400">
            StudyMate AI
          </h2>

          <p className="mt-2 text-gray-400">
            AI Powered Learning Platform
          </p>
        </div>

        <div className="flex gap-6 text-2xl">

          <FaFacebook className="cursor-pointer transition hover:text-blue-400" />

          <FaGithub className="cursor-pointer transition hover:text-blue-400" />

          <FaLinkedin className="cursor-pointer transition hover:text-blue-400" />

        </div>

      </div>

      <p className="mt-10 text-center text-sm text-gray-500">
        © 2026 StudyMate AI. Built by Rasheed Abubakar for the
        3MTT NextGen Knowledge Showcase.
      </p>
    </footer>
  );
};

export default Footer;