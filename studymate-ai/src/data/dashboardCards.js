import {
  FaRobot,
  FaClipboardList,
  FaBookOpen,
  FaCalendarAlt,
} from "react-icons/fa";

const dashboardCards = [
  {
    title: "AI Tutor",
    description: "Ask AI anything and receive instant explanations.",
    icon: FaRobot,
    color: "bg-blue-500",
  },
  {
    title: "Quiz Generator",
    description: "Generate practice questions instantly.",
    icon: FaClipboardList,
    color: "bg-green-500",
  },
  {
    title: "Smart Notes",
    description: "Summarize long notes into key points.",
    icon: FaBookOpen,
    color: "bg-purple-500",
  },
  {
    title: "Study Planner",
    description: "Organize your study schedule efficiently.",
    icon: FaCalendarAlt,
    color: "bg-orange-500",
  },
];

export default dashboardCards;