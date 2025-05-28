import { upcomingAppointments } from "../data/appointmentData";

const UpcomingSchedule = () => {
  return (
    <div className="bg-blue-50 rounded-xl p-6">
      <h2 className="text-lg font-semibold text-gray-900 mb-6">
        The Upcoming Schedule
      </h2>

      <div className="space-y-6">
        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            On Thursday
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {upcomingAppointments.thursday.map((appointment) => (
              <div className="p-4 lg:col-span-2 xl:col-span-1 rounded-xl bg-blue-200 text-black">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-[12px] sm:text-[16px] font-medium">
                    {appointment.title}
                  </h3>
                  <div className="text-xl sm:text-2xl">
                    {appointment.icon === "Stethoscope" ? "🩺" : "👁️"}
                  </div>
                </div>
                <p className="text-sm opacity-90">{appointment.time}</p>
              </div>
            ))}
          </div>
        </div>

        <div>
          <h3 className="text-sm font-medium text-gray-700 mb-3">
            On Saturday
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {upcomingAppointments.saturday.map((appointment) => (
              <div className="p-4 lg:col-span-2 xl:col-span-1 rounded-xl bg-blue-200 text-black">
                <div className="flex items-center w-full justify-between mb-2">
                  <h3 className="text-[14px] sm:text-[16px] font-medium">
                    {appointment.title}
                  </h3>
                  <div className="text-xl sm:text-2xl">
                    {appointment.icon === "Heart" ? "♥️" : "🧠"}
                  </div>
                </div>
                <p className="text-sm opacity-90">{appointment.time}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpcomingSchedule;
