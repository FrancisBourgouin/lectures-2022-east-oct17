const days = [
  {
    id: 1,
    name: "Monday",
    appointments: [1, 2],
    interviewers: [1, 2],
    spots: 1,
  },
];

const appointments = {
  1: {
    id: 1,
    time: "12pm",
    interview: {
      student: "Lydia Miller-Jones",
      interviewer: 1,
    },
  },
  2: {
    id: 2,
    time: "1pm",
    interview: null,
  },
  3: {
    id: 3,
    time: "2pm",
    interview: null,
  },
};

const interviewers = {
  1: {
    id: 1,
    name: "Sylvia Palmer",
    avatar: "https://i.imgur.com/LpaY82x.png",
  },
  2: {
    id: 2,
    name: "Tori Malcolm",
    avatar: "https://i.imgur.com/Nmx0Qxo.png",
  },
};

const state = {
  day: "Monday",
  days,
  appointments,
  interviewers,
};

// Updating the free spots

// Incoming spots good? Accurate!
// Update / Create appointment, just reload the app (BAD UX)
// Re-fetch the days (axios) (BAD PERFORMANCE)
// We set one appointment at a time, +1 -1 (Works, hacky)
// Deep dive in data

// Check the appointments of a specific day, and check how many
// of them are not booked (null)

// Know what's the current day
// Link the appointment ids for a given day to the appointment objects
// Count the amount of appointments where interview is null

// const countSpotsForDay
const getFreeSpotsForDay = (state, newAppointments) => {
  const currentDay = state.days.find((day) => day.name === state.day);

  const listOfAppointmentIds = currentDay.appointments;

  // const listOfAppointments = listOfAppointmentIds.map(id => state.appointments[id])
  // const listOfFreeAppointments = listOfAppointments.filter(appointment => !appointment.interview)

  const listOfFreeAppointments = listOfAppointmentIds.filter(
    (id) => !newAppointments[id].interview
  );

  const amountOfFreeSpots = listOfFreeAppointments.length;

  return amountOfFreeSpots;
};

const bookInterview = () => {
  // Update the appointments object
};

const cancelInterview = () => {};
