import AnatomySection from "./AnatomySection";
import HealthStatusCards from "./HealthStatusCards";
import CalendarView from "./CalendarView";
import UpcomingSchedule from "./UpcomingSchedule";
import ActivityFeed from "./ActivityFeed";
import { ChevronDown } from "lucide-react";

const DashboardMainContent = () => {
  return (
    <main className="flex-1 px-4">
      <div className="flex grid grid-cols-1 lg:grid-cols-4  gap-6">
        <div className="flex flex-col col-span-1 md:col-span-1 lg:col-span-2 space-y-6">
          {/* <div className="flex items-center justify-between">
            <h1 className="text-3xl m-4  font-bold text-gray-900">Dashboard</h1>
            <span className="m-5 flex text-sm text-gray-500">
              This Week <ChevronDown className="w-4 h-4 m-1" />
            </span>
          </div> */}
          <div className="flex grid grid-cols-1 lg:grid-cols-4 gap-6">
            <div className="col-span-1 items-center md:col-span-1 xl:col-span-3 lg:col-span-4 space-y-6">
              <h1 className="text-3xl m-4  font-bold text-gray-900">
                Dashboard
              </h1>
              <AnatomySection />
            </div>
            <div className="col-span-1 xl:col-span-1 sm:col-span-1 lg:col-span-4 space-y-6">
              <span className="cursor-pointer m-5 flex text-[11px] text-gray-500">
                This Week <ChevronDown className="w-3 h-3 m-1" />
              </span>

              <HealthStatusCards />
            </div>
          </div>
          <div>
            <ActivityFeed />
          </div>
        </div>
        <div className="flex bg-blue-50 rounded-xl flex-col col-span-1 sm:col-span-2">
          <div>
            <CalendarView />
          </div>
          <div>
            <UpcomingSchedule />
          </div>
        </div>
      </div>
    </main>
  );
};

export default DashboardMainContent;
