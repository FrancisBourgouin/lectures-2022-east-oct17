import { useState } from "react";

export default function StatementForm(props) {
  const { onSubmit, subjects } = props;

  const parsedSubjects = subjects.map((subject) => (
    <option key={subject} value={subject}>
      {subject}
    </option>
  ));

  const initialValues = {
    content: "",
    subject: "",
  };
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (formData.subject && formData.content) {
      onSubmit(formData);
      setFormData(initialValues);
    }
  };
  return (
    <form className="StatementForm" onSubmit={handleSubmit}>
      <h2>Add a New Statement</h2>
      <textarea
        rows={4}
        cols={50}
        name="content"
        placeholder="Enter the content"
        onChange={handleChange}
        value={formData.content}
      />
      <select name="subject" value={formData.subject} onChange={handleChange}>
        <option value="">Please select a subject</option>
        {parsedSubjects}
      </select>
      <button>Add Statement</button>
    </form>
  );
}
