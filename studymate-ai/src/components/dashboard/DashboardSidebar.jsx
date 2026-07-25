// -----------------------------------------------------------------------------
// Component: DashboardSidebar
// Description:
// Sidebar navigation.
// -----------------------------------------------------------------------------

import {
  FaHome,
  FaRobot,
  FaClipboardList,
  FaBook,
  FaCalendarAlt,
  FaUser,
} from "react-icons/fa";

const links = [
  { name: "Dashboard", icon: FaHome },
  { name: "AI Tutor", icon: FaRobot },
  { name: "Quiz", icon: FaClipboardList },
  { name: "Notes", icon: FaBook },
  { name: "Planner", icon: FaCalendarAlt },
  { name: "Profile", icon: FaUser },
];

const DashboardSidebar = () => {
  return (
    <aside className="min-h-screen w-72 bg-blue-700 p-8 text-white">
      <h2 className="mb-12 text-3xl font-bold">
        StudyMate AI
      </h2>

      <nav className="space-y-5">
        {links.map((link) => {
          const Icon = link.icon;

          return (
            <button
              key={link.name}
              className="flex w-full items-center gap-4 rounded-xl px-4 py-3 text-left transition hover:bg-blue-600"
            >
              <Icon />

              <span>{link.name}</span>
            </button>
          );
        })}
      </nav>
    </aside>
  );
};

export default DashboardSidebar;