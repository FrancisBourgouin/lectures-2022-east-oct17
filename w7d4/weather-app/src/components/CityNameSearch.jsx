import { useState } from "react";

export default function CityNameSearch(props) {
  const initialFormData = {
    cityName: "",
  };

  const [formData, setFormData] = useState(initialFormData);
  const { cityName } = formData;

  const handleChange = (event) => {
    const { value, name } = event.target;

    const newFormData = { ...formData, [name]: value };

    setFormData(newFormData);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(formData.cityName);
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="cityName"
        value={cityName}
        placeholder="Enter the city name"
        onChange={handleChange}
      />
      <button>Fetch weather!</button>
    </form>
  );
}
