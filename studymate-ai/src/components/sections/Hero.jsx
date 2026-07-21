import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";

function Hero() {
  return (
    <section className="bg-gradient-to-b from-blue-50 to-white">
      <div className="mx-auto flex min-h-[85vh] max-w-7xl flex-col items-center justify-center px-6 text-center">

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-6 rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700"
        >
          🚀 AI-Powered Learning Platform
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-4xl text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl"
        >
          Learn Smarter.
          <br />

          <span className="text-blue-600">
            Study Faster.
          </span>
        </motion.h1>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
          className="mt-8 max-w-2xl text-lg leading-8 text-gray-600"
        >
          AI-powered learning for WAEC, NECO, JAMB,
          university courses and professional certifications.
        </motion.p>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="mt-10 flex flex-col gap-4 sm:flex-row"
        >
          <Link
            to="/login"
            className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:scale-105 hover:bg-blue-700"
          >
            Get Started
          </Link>

          <button
            className="flex items-center justify-center gap-2 rounded-xl border border-gray-300 px-8 py-4 font-semibold transition hover:bg-gray-100"
          >
            Learn More

            <FaArrowRight />
          </button>
        </motion.div>

      </div>
    </section>
  );
}

export default Hero;