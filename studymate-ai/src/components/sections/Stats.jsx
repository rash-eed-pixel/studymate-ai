// -----------------------------------------------------------------------------
// Component: Stats
// Description:
// Displays StudyMate AI achievements.
// -----------------------------------------------------------------------------
// Author: Rasheed Abubakar
// Project: StudyMate AI
// -----------------------------------------------------------------------------

import { motion } from "framer-motion";
import stats from "../../data/stats";

const Stats = () => {
  return (
    <section className="bg-gradient-to-r from-blue-700 to-indigo-700 py-24">
      <div className="mx-auto max-w-7xl px-6">

        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold text-white">
            StudyMate AI in Numbers
          </h2>

          <p className="mt-4 text-lg text-blue-100">
            Helping students learn smarter every day.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

          {stats.map((item, index) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="rounded-3xl bg-white/10 p-8 text-center backdrop-blur-sm"
              >
                <Icon className="mx-auto mb-6 text-5xl text-white" />

                <h3 className="text-4xl font-bold text-white">
                  {item.number}
                </h3>

                <p className="mt-2 text-blue-100">
                  {item.label}
                </p>
              </motion.div>
            );
          })}

        </div>

      </div>
    </section>
  );
};

export default Stats;