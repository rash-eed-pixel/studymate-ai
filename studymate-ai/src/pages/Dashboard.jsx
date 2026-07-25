import DashboardLayout from "../components/dashboard/DashboardLayout";
import dashboardCards from "../data/dashboardCards";
import StatCard from "../components/dashboard/StatCard";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
        {dashboardCards.map((card) => (
          <StatCard
            key={card.title}
            {...card}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;