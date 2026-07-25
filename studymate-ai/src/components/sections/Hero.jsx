// -----------------------------------------------------------------------------
// Component: Hero
// Description:
// Modern hero section introducing StudyMate AI.
// -----------------------------------------------------------------------------

import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaArrowRight, FaRobot } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="overflow-hidden bg-gradient-to-br from-blue-50 via-white to-indigo-50">
      <div className="mx-auto flex min-h-[90vh] max-w-7xl items-center px-6">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          {/* Left Side */}
          <div>

            <motion.div
              initial={{ opacity: 0, y: -25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-6 inline-flex items-center rounded-full bg-blue-100 px-5 py-2 text-sm font-semibold text-blue-700"
            >
              <FaRobot className="mr-2" />
              AI Powered Learning Platform
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: .2 }}
              className="text-5xl font-extrabold leading-tight text-gray-900 md:text-7xl"
            >
              Learn Smarter.
              <br />

              <span className="text-blue-600">
                Study Faster.
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .4 }}
              className="mt-8 max-w-xl text-xl leading-9 text-gray-600"
            >
              StudyMate AI helps students prepare for WAEC, NECO, JAMB,
              university courses and professional certifications using
              Artificial Intelligence.
            </motion.p>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: .6 }}
              className="mt-10 flex flex-wrap gap-5"
            >

              <Link
                to="/login"
                className="rounded-xl bg-blue-600 px-8 py-4 font-semibold text-white shadow-lg transition hover:-translate-y-1 hover:bg-blue-700"
              >
                Get Started
              </Link>

              <button
                className="flex items-center gap-2 rounded-xl border border-gray-300 bg-white px-8 py-4 font-semibold shadow transition hover:bg-gray-100"
              >
                Learn More
                <FaArrowRight />
              </button>

            </motion.div>

          </div>

          {/* Right Side */}

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: .5 }}
            className="hidden lg:flex justify-center"
          >

            <img
              src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=900"
              alt="Students learning"
              className="rounded-3xl shadow-2xl"
            />

          </motion.div>

        </div>

      </div>
    </section>
  );
};

export default Hero;