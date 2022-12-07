import { useState } from "react";

export default function CityForm(props) {
  const initialValues = { city: "" };

  const [formData, setFormData] = useState(initialValues);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(formData);

    setFormData(initialValues);
  };

  return (
    <form className="CityForm" onSubmit={handleSubmit}>
      <input
        type="text"
        name="city"
        placeholder="Enter city name"
        value={formData.city}
        onChange={handleChange}
      />
      <button>Fetch weather!</button>
    </form>
  );
}
