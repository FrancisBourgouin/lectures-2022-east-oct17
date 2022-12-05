const [count, setCount] = useState(0);

const addTen = () => {
  let newCount = count;

  for (let i = 0; i < 10; i++) {
    newCount++;
  }
  setCount(newCount);

  // setCount(prevState => prevState + 1)
  // setCount(prevState => prevState + 1)
  // setCount(prevState => prevState + 1)
  // setCount(prevState => prevState + 1)
  // setCount(prevState => prevState + 1)
  // setCount(prevState => prevState + 1)
  // setCount(prevState => prevState + 1)
  // setCount(prevState => prevState + 1)
  // setCount(prevState => prevState + 1)
  // setCount(prevState => prevState + 1)
};

const bookInterview = (id, interview) => {
  const newAppointment = { ...state.appointments[id], interview: interview };
  const newAppointments = { ...state.appointments, [id]: newAppointment };

  const newState = { ...state, appointments: newAppointments };

  const spots = getFreeSpotsForDay(newState);

  const newNewState = updateSpots;

  setState(newNewState);
};

axios.get("/api/days").then((res) => setState({ ...state, days: res.data }));
axios
  .get("/api/appointments")
  .then((res) => setState({ ...state, appointments: res.data }));
axios
  .get("/api/interviewers")
  .then((res) => setState({ ...state, interviewers: res.data }));

const promiseParty = [
  axios.get("/api/days"),
  axios.get("/api/appointments"),
  axios.get("/api/interviewers"),
];

Promise.all(promiseParty).then();
