export const getFilteredStatements = (statements, filter) => {
  if (!Array.isArray(statements)) {
    return [];
  }

  const filteredStatements = filter
    ? statements.filter((statement) => statement.subject === filter)
    : statements;

  return filteredStatements;
};

export const getStatementSubjects = (statements) => {
  if (!Array.isArray(statements)) {
    return [];
  }

  const subjectsBuffer = {};
  statements.forEach((statement) => (subjectsBuffer[statement.subject] = 0));

  return Object.keys(subjectsBuffer);
};
