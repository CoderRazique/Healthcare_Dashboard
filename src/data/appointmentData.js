export const calendarData = {
  month: "October",
  year: 2021,
  appointments: {
    25: ["10:00", "11:00", "12:00"],
    26: ["08:00", "09:00", "10:00"],
    27: ["12:00", "---", "13:00"],
    28: ["10:00", "11:00", "---"],
    29: ["---", "14:00", "16:00"],
    30: ["12:00", "14:00", "15:00"],
    31: ["09:00", "10:00", "11:00"],
  },
};

export const upcomingAppointments = {
  thursday: [
    {
      id: 1,
      title: "Health checkup complete",
      time: "11:00 AM",
      icon: "Stethoscope",
      type: "checkup",
    },
    {
      id: 2,
      title: "Ophthalmologist",
      time: "14:00 PM",
      icon: "Eye",
      type: "specialist",
    },
  ],
  saturday: [
    {
      id: 3,
      title: "Cardiologist",
      time: "12:00 AM",
      icon: "Heart",
      type: "specialist",
    },
    {
      id: 4,
      title: "Neurologist",
      time: "16:00 PM",
      icon: "Brain",
      type: "specialist",
    },
  ],
};

export const mainAppointments = [
  {
    id: "dentist",
    title: "Dentist",
    time: "09:00-11:00",
    doctor: "Dr. Cameron Williamson",
    type: "dentist",
    color: "blue",
  },
  {
    id: "physiotherapy",
    title: "Physiotherapy Appointment",
    time: "11:00-12:00",
    doctor: "Dr. Kevin Djores",
    type: "physiotherapy",
    color: "orange",
  },
];

export const activityData = {
  weeklyAppointments: 3,
  chartData: [
    { day: "Mon", value: 20 },
    { day: "Tue", value: 45 },
    { day: "Wed", value: 30 },
    { day: "Thu", value: 60 },
    { day: "Fri", value: 25 },
    { day: "Sat", value: 40 },
    { day: "Sun", value: 35 },
  ],
};
