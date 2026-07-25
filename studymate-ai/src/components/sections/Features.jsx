// -----------------------------------------------------------------------------
// Component: Features
// Description:
// Displays the core AI-powered features of StudyMate AI.
// -----------------------------------------------------------------------------
// Author: Rasheed Abubakar
// Project: StudyMate AI | 3MTT NextGen Knowledge Showcase
// -----------------------------------------------------------------------------

import { motion } from "framer-motion";
import features from "../../data/features";
import FeatureCard from "../ui/FeatureCard";

const Features = () => {
  return (
    <section
      id="features"
      className="bg-slate-50 py-24"
    >
      <div className="mx-auto max-w-7xl px-6">

        {/* Heading */}

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: .5 }}
          className="mx-auto mb-20 max-w-3xl text-center"
        >

          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            FEATURES
          </span>

          <h2 className="mt-6 text-4xl font-extrabold text-gray-900 md:text-5xl">
            Everything You Need
            <span className="block text-blue-600">
              To Study Smarter
            </span>
          </h2>

          <p className="mt-6 text-lg leading-8 text-gray-600">
            StudyMate AI combines Artificial Intelligence,
            quizzes, smart notes and personalized planning
            to help students prepare confidently for
            WAEC, NECO, JAMB and university examinations.
          </p>

        </motion.div>

        {/* Cards */}

        <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">

          {features.map((feature, index) => (

            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: .4,
                delay: index * .15,
              }}
            >

              <FeatureCard {...feature} />

            </motion.div>

          ))}

        </div>

      </div>
    </section>
  );
};

export default Features;