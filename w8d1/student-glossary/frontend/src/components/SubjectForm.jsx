import { useState } from "react";

export default function SubjectForm(props) {
  const { onSubmit } = props;

  const initialValues = {
    subject: "",
  };
  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit(formData);

    setFormData(initialValues);
  };

  return (
    <form className="SubjectForm" onSubmit={handleSubmit}>
      <h2>Add a New Subject</h2>
      <input
        type="text"
        name="subject"
        placeholder="Enter new subject"
        onChange={handleChange}
        value={formData.subject}
      />
      <button>Add Subject</button>
    </form>
  );
}
