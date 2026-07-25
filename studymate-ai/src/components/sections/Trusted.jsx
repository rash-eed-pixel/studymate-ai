// -----------------------------------------------------------------------------
// Component: Trusted
// Description:
// Displays examination bodies and institutions supported by StudyMate AI.
// -----------------------------------------------------------------------------

import { motion } from "framer-motion";
import {
  FaUniversity,
  FaGraduationCap,
} from "react-icons/fa";

const partners = [
  "WAEC",
  "NECO",
  "JAMB",
  "3MTT",
  "UNILORIN",
];

const Trusted = () => {
  return (
    <section className="bg-white py-16">
      <div className="mx-auto max-w-7xl px-6">

        {/* Section Heading */}
        <p className="mb-10 text-center text-sm font-semibold uppercase tracking-[0.3em] text-gray-500">
          Trusted for Exam Preparation
        </p>

        {/* Partner Logos */}
        <div className="grid grid-cols-2 gap-6 md:grid-cols-5">
          {partners.map((partner) => (
            <motion.div
              key={partner}
              whileHover={{ y: -5 }}
              className="flex items-center justify-center rounded-2xl border border-gray-200 bg-gray-50 py-6 shadow-sm transition hover:shadow-lg"
            >
              <FaUniversity className="mr-3 text-blue-600" />

              <span className="font-bold text-gray-800">
                {partner}
              </span>
            </motion.div>
          ))}
        </div>

        {/* Trust Statement */}
        <div className="mt-12 flex items-center justify-center gap-3 text-gray-600">
          <FaGraduationCap className="text-blue-600" />

          <p>
            Designed for secondary school, university and professional learners.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Trusted;