import DashboardSidebar from "../components/dashboard/DashboardSidebar";
import Topbar from "../components/dashboard/Topbar";
import WelcomeCard from "../components/dashboard/WelcomeCard";
import StatsCard from "../components/dashboard/StatsCard";
import QuickAction from "../components/dashboard/QuickAction";
import DashboardHeader from "../components/dashboard/DashboardHeader";
import DashboardLayout from "../components/dashboard/DashBoardLayout";
import { BookOpen } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="flex min-h-screen bg-slate-100">

      <DashboardSidebar />

      <div className="flex-1">

        

        <div className="space-y-6 p-8">

          <WelcomeCard />

          <StatsCard />

          <QuickAction
    title="Generate Quiz"
    subtitle="Create AI-powered quizzes"
    icon={BookOpen}
    color="bg-blue-600"
    path="/quiz"
/>


        </div>

      </div>

    </div>
  );
};

export default Dashboard;