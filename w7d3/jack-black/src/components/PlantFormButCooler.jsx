import { useState } from "react";

export default function PlantFormButCooler(props) {
  const initialFormData = {
    name: "",
    type: "",
    wateringInterval: null,
  };

  const [formData, setFormData] = useState(initialFormData);
  const { name, type, wateringInterval } = formData;

  const handleChange = (event) => {
    const { value, name } = event.target;

    const newFormData = { ...formData, [name]: value };

    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(formData);
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Enter the name"
        onChange={handleChange}
      />
      <input
        type="text"
        name="type"
        value={type}
        placeholder="Enter the type"
        onChange={handleChange}
      />
      <input
        type="number"
        name="wateringInterval"
        value={wateringInterval}
        placeholder="Enter the watering interval"
        onChange={handleChange}
      />
      <button>Add the plant</button>
    </form>
  );
}
