import { useState } from "react";

export default function PlantForm(props) {
  const [name, setName] = useState("");
  const [type, setType] = useState("");
  const [wateringInterval, setWateringInterval] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    props.onSubmit(name, type, wateringInterval);
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={name}
        placeholder="Enter the name"
        onChange={(event) => setName(event.target.value)}
      />
      <input
        type="text"
        name="type"
        value={type}
        placeholder="Enter the type"
        onChange={(event) => setType(event.target.value)}
      />
      <input
        type="number"
        name="wateringInterval"
        value={wateringInterval}
        placeholder="Enter the watering interval"
        onChange={(event) => setWateringInterval(event.target.value)}
      />
      <button>Add the plant</button>
    </form>
  );
}
