// -----------------------------------------------------------------------------
// Component: QuickAction
// Description:
// Dashboard shortcut card.
// -----------------------------------------------------------------------------

import { Link } from "react-router-dom";

const QuickAction = ({ title, subtitle, icon: Icon, color, path }) => {
  return (
    <Link
      to={path}
      className="group rounded-3xl bg-white p-6 shadow transition-all hover:-translate-y-2 hover:shadow-xl"
    >
      <div
        className={`mb-5 flex h-16 w-16 items-center justify-center rounded-2xl text-3xl text-white ${color}`}
      >
        <Icon />
      </div>

      <h3 className="text-xl font-bold">
        {title}
      </h3>

      <p className="mt-2 text-gray-600">
        {subtitle}
      </p>
    </Link>
  );
};

export default QuickAction;