import { ArrowLeft, ArrowRight } from "lucide-react";
import { calendarData, mainAppointments } from "../data/appointmentData";

const CalendarView = () => {
  const daysOfWeek = ["Mon", "Tues", "Wed", "Thurs", "Fri", "Sat", "Sun"];
  const daysInMonth = [25, 26, 27, 28, 29, 30, 31];

  return (
    <div className="bg-blue-50 rounded-xl p-6">
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-gray-900">
          {calendarData.month} {calendarData.year}
        </h2>
        <div className="flex items-center space-x-2">
          <button className="p-1 cursor-pointer hover:bg-gray-100 rounded">
            <ArrowLeft className="w-4 h-4" />
          </button>
          <button className="p-1 cursor-pointer hover:bg-gray-100 rounded">
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {daysOfWeek.map((day) => (
          <div
            key={day}
            className="text-center text-sm font-medium text-gray-500 "
          >
            {day}
          </div>
        ))}
      </div>

      <div className="grid grid-cols-7 gap-1 mb-6">
        {daysInMonth.map((date) => {
          const appointments = calendarData.appointments[date] || [];
          return (
            <div
              key={date}
              className="min-h-16 p-1 border border-gray-100 rounded"
            >
              <div className="text-center cursor-pointer text-md font-medium rounded text-gray-900 mb-4">
                {date}
              </div>
              <div className="space-y-1">
                {appointments.map((time, index) => (
                  <div
                    key={index}
                    className="text-[9px] sm:text-xs text-center text-gray-500 px-1 py-0.5 rounded"
                  >
                    {time}
                  </div>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="grid grid-cols-2 flex flex-col gap-4">
        {mainAppointments.map((appointment) => (
          <div
            key={appointment.id}
            className={`p-4 rounded-xl  ${
              appointment.color === "blue"
                ? "bg-blue-600 text-white"
                : "bg-blue-200 text-black"
            }`}
          >
            <div className="flex items-center justify-between mb-2">
              <h3 className="text-[14px] sm:text-[16px] font-medium">
                {appointment.title}
              </h3>
              <div className="text-xl sm:text-2xl">
                {appointment.type === "dentist" ? "🦷" : "🏃"}
              </div>
            </div>
            <p className="text-sm opacity-90">{appointment.time}</p>
            <p className="text-sm opacity-75">{appointment.doctor}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CalendarView;
