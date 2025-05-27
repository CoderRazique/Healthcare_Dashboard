import { activityData } from "../data/appointmentData";

const ActivityFeed = () => {
  const maxValue = Math.max(...activityData.chartData.map((d) => d.value));

  return (
    <div className="bg-blue-50 rounded-xl p-6 mt-2">
      <div className="flex justify-between items-center">
        <h2 className="text-lg font-semibold text-gray-900 mb-2">Activity</h2>
        <p className="text-sm text-gray-600">
          {activityData.weeklyAppointments} appointments on this week
        </p>
      </div>
      <div className="flex items-end justify-between h-32 pt-4 space-x-2 ">
        {activityData.chartData.map((item) => (
          <div className="flex flex-col items-center space-y-2 h-full">
            <div className="flex items-end h-full">
              <div
                className="bg-cyan-400 rounded-t-sm w-6 transition-all duration-300"
                style={{
                  height:
                    maxValue > 0 ? `${(item.value / maxValue) * 100}%` : "8px",
                }}
              ></div>
            </div>
            <span className="text-xs text-gray-500">{item.day}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ActivityFeed;
