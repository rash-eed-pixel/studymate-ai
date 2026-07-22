import {
  FaRobot,
  FaBookOpen,
  FaClipboardList,
  FaCalendarAlt,
} from "react-icons/fa";

import FeatureCard from "../ui/FeatureCard";

const Features = () => {
  const features = [
    {
      icon: <FaRobot />,
      title: "AI Tutor",
      description:
        "Ask questions and receive step-by-step explanations powered by AI.",
    },
    {
      icon: <FaClipboardList />,
      title: "Quiz Generator",
      description:
        "Generate unlimited quizzes to test your understanding.",
    },
    {
      icon: <FaBookOpen />,
      title: "Smart Notes",
      description:
        "Summarize long notes into short, easy-to-review study points.",
    },
    {
      icon: <FaCalendarAlt />,
      title: "Study Planner",
      description:
        "Plan your daily study sessions and stay on track.",
    },
  ];

  return (
    <section className="bg-gray-50 py-20">
      <div className="mx-auto max-w-7xl px-6">
        <h2 className="mb-4 text-center text-4xl font-bold text-gray-900">
          Everything You Need to Study Smarter
        </h2>

        <p className="mx-auto mb-14 max-w-2xl text-center text-gray-600">
          Powerful AI tools designed to help students prepare for exams with
          confidence.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;