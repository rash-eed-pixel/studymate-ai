import { Link } from "react-router-dom";
import {
  FaHome,
  FaRobot,
  FaBook,
  FaClipboardList,
  FaCalendarAlt,
  FaUser
} from "react-icons/fa";

const Sidebar = () => {

  return (

    <div className="w-64 bg-slate-900 text-white">

      <div className="p-8 text-2xl font-bold">

        StudyMate AI

      </div>

      <nav className="space-y-3 px-6">

        <Link className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-800" to="/dashboard">
          <FaHome /> Dashboard
        </Link>

        <Link className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-800" to="/chat">
          <FaRobot /> AI Tutor
        </Link>

        <Link className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-800" to="/quiz">
          <FaClipboardList /> Quiz
        </Link>

        <Link className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-800" to="/planner">
          <FaCalendarAlt /> Planner
        </Link>

        <Link className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-800" to="/summary">
          <FaBook /> Notes
        </Link>

        <Link className="flex items-center gap-3 rounded-lg p-3 hover:bg-slate-800" to="/profile">
          <FaUser /> Profile
        </Link>

      </nav>

    </div>

  );

};

export default Sidebar;