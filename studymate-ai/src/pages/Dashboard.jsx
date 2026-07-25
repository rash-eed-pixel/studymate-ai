import dashboardCards from "../data/dashboardCards";
import StatCard from "../components/dashboard/StatCard";

const Dashboard = () => {
  return (
    <div className="min-h-screen bg-slate-100">

      <div className="mx-auto max-w-7xl px-6 py-16">

        <h1 className="mb-2 text-5xl font-bold">
          Welcome Back 👋
        </h1>

        <p className="mb-12 text-lg text-gray-600">
          Continue learning with StudyMate AI.
        </p>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {dashboardCards.map((card) => (
            <StatCard
              key={card.title}
              {...card}
            />
          ))}
        </div>

      </div>

    </div>
  );
};

export default Dashboard;