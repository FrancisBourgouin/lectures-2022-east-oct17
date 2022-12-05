const someSubjects = [
  "Props",
  "Components",
  "Props",
  "Components",
  "State",
  "Components",
  "State",
];

const subjectObjects = {
  Props: 0,
  Components: 0,
  State: 0,
};

const subjectSet = new Set();

subjectSet.add("Props");
subjectSet.add("Props");
subjectSet.add("Props");
subjectSet.add("Props");
subjectSet.add("Props");

Array.from(subjectSet);

const someData = { a: 1 }; //Eventually coming from a database

const getSomeData = () => {
  return someData;
};

app.get("/api/data", (req, res) => {
  const data = getSomeData();

  res.json(data);
});

const getSomeDatav2 = () => {
  return db.query("SELECT * FROM data");
};

app.get("/api/data", (req, res) => {
  getSomeDatav2().then((data) => {
    res.json(data);
  });
});

const getSomeDataButBetter = () => {
  return new Promise.resolve(someData);
};

getSomeDataButBetter().then((data) => {
  // ...
});
