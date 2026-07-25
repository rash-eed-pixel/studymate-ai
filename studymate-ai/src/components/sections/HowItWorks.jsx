// -----------------------------------------------------------------------------
// Component: HowItWorks
// Description:
// Explains how StudyMate AI works in three simple steps.
// -----------------------------------------------------------------------------
// Author: Rasheed Abubakar
// -----------------------------------------------------------------------------

import { motion } from "framer-motion";
import {
  FaUserPlus,
  FaRobot,
  FaGraduationCap,
} from "react-icons/fa";

const steps = [
  {
    icon: FaUserPlus,
    title: "Create an Account",
    description:
      "Sign up in seconds and access your personalized learning dashboard.",
  },
  {
    icon: FaRobot,
    title: "Learn with AI",
    description:
      "Ask questions, generate quizzes, summarize notes and get instant explanations.",
  },
  {
    icon: FaGraduationCap,
    title: "Pass Your Exams",
    description:
      "Track your progress, stay consistent and achieve better results.",
  },
];

const HowItWorks = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-20 text-center">
          <span className="rounded-full bg-blue-100 px-4 py-2 text-sm font-semibold text-blue-700">
            HOW IT WORKS
          </span>

          <h2 className="mt-6 text-5xl font-bold text-gray-900">
            Three Simple Steps
          </h2>

          <p className="mx-auto mt-6 max-w-2xl text-lg text-gray-600">
            Start learning smarter in just a few minutes.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-3">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2 }}
                className="rounded-3xl bg-slate-50 p-10 text-center shadow-sm transition hover:-translate-y-2 hover:shadow-xl"
              >
                <div className="mx-auto mb-8 flex h-20 w-20 items-center justify-center rounded-full bg-blue-600 text-4xl text-white">
                  <Icon />
                </div>

                <h3 className="mb-4 text-2xl font-bold">
                  {step.title}
                </h3>

                <p className="leading-8 text-gray-600">
                  {step.description}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default HowItWorks;