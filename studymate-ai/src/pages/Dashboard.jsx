import DashboardLayout from "../components/dashboard/DashboardLayout";
import QuickAction from "../components/dashboard/QuickAction";
import quickActions from "../data/quickActions";

const Dashboard = () => {
  return (
    <DashboardLayout>
      <div className="mb-10">
        <h2 className="text-4xl font-bold">
          Welcome Back 👋
        </h2>

        <p className="mt-3 text-gray-600">
          Continue learning with AI-powered study tools.
        </p>
      </div>

      <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-4">
        {quickActions.map((action) => (
          <QuickAction
            key={action.title}
            {...action}
          />
        ))}
      </div>
    </DashboardLayout>
  );
};

export default Dashboard;