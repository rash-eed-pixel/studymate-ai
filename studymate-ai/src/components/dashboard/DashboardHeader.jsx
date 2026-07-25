// -----------------------------------------------------------------------------
// Component: DashboardHeader
// Description:
// Top navigation bar displayed inside the dashboard.
// -----------------------------------------------------------------------------

import { FaBell, FaSearch, FaUserCircle } from "react-icons/fa";

const DashboardHeader = () => {
  return (
    <header className="flex items-center justify-between rounded-3xl bg-white p-6 shadow-md">
      <div>
        <h1 className="text-3xl font-bold text-gray-900">
          Dashboard
        </h1>

        <p className="text-gray-500">
          Welcome back! Ready to learn?
        </p>
      </div>

      <div className="flex items-center gap-5">
        <button className="text-2xl text-gray-600 hover:text-blue-600">
          <FaSearch />
        </button>

        <button className="text-2xl text-gray-600 hover:text-blue-600">
          <FaBell />
        </button>

        <FaUserCircle className="text-5xl text-blue-600" />
      </div>
    </header>
  );
};

export default DashboardHeader;