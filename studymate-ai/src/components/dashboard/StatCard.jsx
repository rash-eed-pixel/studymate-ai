// -----------------------------------------------------------------------------
// Component: StatCard
// Description:
// Dashboard shortcut card.
// -----------------------------------------------------------------------------

import { motion } from "framer-motion";

const StatCard = ({ title, description, icon: Icon, color }) => {
  return (
    <motion.div
      whileHover={{ y: -8 }}
      className="rounded-3xl bg-white p-8 shadow-md transition hover:shadow-xl"
    >
      <div
        className={`mb-6 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl text-white ${color}`}
      >
        <Icon />
      </div>

      <h3 className="mb-3 text-2xl font-bold">
        {title}
      </h3>

      <p className="leading-7 text-gray-600">
        {description}
      </p>
    </motion.div>
  );
};

export default StatCard;