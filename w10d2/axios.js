axios
  .get("/some/api")
  .then((res) => res.data)
  .then((data) => doSomething(data));

axios
  .get("/some/other/api")
  .then((res) => res.data)
  .then((data) => doSomething(data));

// const labels = [
//   "Alien",
//   "Alpaca",
//   "Background Noise",
//   "Clown",
//   "Dolphin",
//   "Francis",
//   "Frog",
// ];

// const scores = [
//   0.931667685508728, 0.01193278655409813, 0.0068929316475987434, 0.0114216273650527,
//   0.0059845102950930595, 0.01497060339897871, 0.017129868268966675,
// ];

// const biggestNumber = Math.max(...scores)
// const biggestNumberIndex = scores.indexOf(biggestNumber)

// labels[biggestNumberIndex]
