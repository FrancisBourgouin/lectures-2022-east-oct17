import { useState } from "react";
import { getFilteredStatements, getStatementSubjects } from "../helpers/statementHelpers";

import StatementListItem from "./StatementListItem";

export default function StatementList(props) {
  const [filter, setFilter] = useState(null);

  const { statements } = props;

  const filteredStatements = getFilteredStatements(statements, filter);

  const parsedStatements = filteredStatements.map((statement) => (
    <StatementListItem key={statement.id} {...statement} />
  ));

  const parsedButtons = getStatementSubjects(statements).map((subject) => (
    <button onClick={() => setFilter(subject)}>{subject}</button>
  ));

  return (
    <section className="StatementList">
      <h2>Glossary Items</h2>
      <button onClick={() => setFilter(null)}>All</button>
      {parsedButtons}
      {!filteredStatements.length === 0 && <p>There is currently no items...</p>}
      <ul>{parsedStatements}</ul>
    </section>
  );
}
