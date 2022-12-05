const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const { statements, subjects } = require("./data/statementsData");
const app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));

const getStatementsBad = () => {
  return statements;
};
const getStatements = () => {
  return Promise.resolve(statements);
};

const getSubjects = () => {
  return Promise.resolve(subjects);
};

const addSubject = (subject) => {
  subjects.push(subject);

  return Promise.resolve("ok"); // If it was DB call, return the created id
};

const addStatement = (newStatement) => {
  statements.push(newStatement);

  return Promise.resolve("ok"); // If it was DB call, return the created id
};

app.get("/api/v1/statements", (req, res) => {
  getStatements().then((statements) => res.json(statements));
});
app.get("/api/v1/subjects", (req, res) => {
  getSubjects().then((subjects) => res.json(subjects));
});

app.post("/api/v1/statements", (req, res) => {
  const { newStatement } = req.body;
  addStatement(newStatement).then((data) => res.send(data));
});
app.post("/api/v1/subjects", (req, res) => {
  const { subject } = req.body;
  addSubject(subject).then((data) => res.send(data));
});

module.exports = app;
