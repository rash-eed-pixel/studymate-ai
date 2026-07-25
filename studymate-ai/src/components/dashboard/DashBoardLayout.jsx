// -----------------------------------------------------------------------------
// Component: DashboardLayout
// Description:
// Shared layout for dashboard pages.
// -----------------------------------------------------------------------------

import DashboardHeader from "./DashboardHeader";
import DashboardSidebar from "./DashboardSidebar";

const DashboardLayout = ({ children }) => {
  return (
    <div className="flex bg-slate-100">
      <DashboardSidebar />

      <main className="flex-1 p-8">
        <DashboardHeader />

        <div className="mt-10">
          {children}
        </div>
      </main>
    </div>
  );
};

export default DashboardLayout;