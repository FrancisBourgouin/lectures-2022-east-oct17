import { useEffect, useState } from "react";
import axios from "axios";

import Header from "./components/Header";
import StatementForm from "./components/StatementForm";
import SubjectForm from "./components/SubjectForm";
import StatementList from "./components/StatementList";

import "./App.scss";

import mockStatements from "./data/mockStatementData";
import { getStatementSubjects } from "./helpers/statementHelpers";
import useWow from "./hooks/useWow";

const VIEW = "VIEW";
const NEWSUBJECT = "NEWSUBJECT";
const NEWSTATEMENT = "NEWSTATEMENT";

function App() {
  const [statements, setStatements] = useState([]);
  const [subjects, setSubjects] = useState([]);
  const [viewMode, setViewMode] = useState(VIEW);
  const { sayWow } = useWow();

  useEffect(() => {
    const requests = [axios.get("/api/v1/statements"), axios.get("/api/v1/subjects")];
    Promise.all(requests)
      .then((responses) => ({
        statements: responses[0].data,
        subjects: responses[1].data,
      }))
      .then(({ statements, subjects }) => {
        setStatements(statements);
        setSubjects(subjects);
      });
  }, []);

  const addNewSubject = (formData) => {
    if (!subjects.includes(formData.subject)) {
      axios.post("/api/v1/subjects", { subject: formData.subject }).then((res) => {
        console.log("Add new subject successful");
        setSubjects([...subjects, formData.subject]);
        sayWow();
      });
    }
  };

  const addNewStatement = (formData) => {
    const id = statements.length + 1;
    const newStatement = { id, ...formData };

    axios.post("/api/v1/statements", { newStatement }).then((res) => {
      console.log("Add new statement successful");
      setStatements([...statements, newStatement]);
    });
  };

  return (
    <div className="App">
      <Header />
      <main>
        <section>
          <button onClick={() => setViewMode(VIEW)}>VIEW</button>
          <button onClick={() => setViewMode(NEWSUBJECT)}>ADD NEW SUBJECT</button>
          <button onClick={() => setViewMode(NEWSTATEMENT)}>ADD NEW STATEMENT</button>
          {viewMode === NEWSUBJECT && <SubjectForm onSubmit={addNewSubject} />}
          {viewMode === NEWSTATEMENT && (
            <StatementForm onSubmit={addNewStatement} subjects={subjects} />
          )}
        </section>
        <StatementList statements={statements} />
      </main>
    </div>
  );
}

export default App;
