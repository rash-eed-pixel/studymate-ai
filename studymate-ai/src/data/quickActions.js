import {
  FaRobot,
  FaClipboardList,
  FaBookOpen,
  FaCalendarAlt,
} from "react-icons/fa";

const quickActions = [
  {
    title: "AI Tutor",
    subtitle: "Ask any question",
    icon: FaRobot,
    color: "bg-blue-500",
    path: "/chat",
  },
  {
    title: "Generate Quiz",
    subtitle: "Practice instantly",
    icon: FaClipboardList,
    color: "bg-green-500",
    path: "/quiz",
  },
  {
    title: "Smart Notes",
    subtitle: "Summarize notes",
    icon: FaBookOpen,
    color: "bg-purple-500",
    path: "/summary",
  },
  {
    title: "Study Planner",
    subtitle: "Plan your week",
    icon: FaCalendarAlt,
    color: "bg-orange-500",
    path: "/planner",
  },
];

export default quickActions;