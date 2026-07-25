// -----------------------------------------------------------------------------
// Component: Testimonials
// -----------------------------------------------------------------------------

import { motion } from "framer-motion";
import testimonials from "../../data/testimonials";

const Testimonials = () => {
  return (
    <section className="bg-white py-24">
      <div className="mx-auto max-w-7xl px-6">

        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            What Students Say
          </h2>

          <p className="mt-4 text-lg text-gray-600">
            Loved by learners preparing for exams.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-3">

          {testimonials.map((person, index) => (
            <motion.div
              key={person.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm"
            >
              <p className="leading-8 text-gray-600">
                "{person.text}"
              </p>

              <div className="mt-8">
                <h3 className="font-bold text-gray-900">
                  {person.name}
                </h3>

                <p className="text-sm text-gray-500">
                  {person.school}
                </p>
              </div>
            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
};

export default Testimonials;