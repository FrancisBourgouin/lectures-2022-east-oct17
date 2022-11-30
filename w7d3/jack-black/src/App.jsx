import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import Header from "./components/Header";
import PlantList from "./components/PlantList";

import plantData from "./data/plantData";
import { updateWateredDate, updateWateredDateForAllPlants } from "./helpers/plantHelpers";
import PlantForm from "./components/PlantForm";
function App() {
  // const [count, setCount] = useState(0);

  // const increment = (value) => {
  //   setCount(count + value);
  // };

  const [plants, setPlants] = useState(plantData);

  const plantsArr = Object.values(plants);

  const updatePlant = (id) => {
    const newPlants = updateWateredDate(plants, id);

    setPlants(newPlants);
  };

  const updateAllThePlants = () => {
    const newPlants = updateWateredDateForAllPlants(plants);

    setPlants(newPlants);
  };

  const addANewPlant = (name, type, wateringInterval) => {
    const id = Object.values(plants).length + 1;
    const newPlant = {
      id,
      name,
      type,
      wateringInterval,
      lastWateredDate: new Date().toLocaleDateString(),
    };

    setPlants({ ...plants, [id]: newPlant });

    // const newPlants = { ...plants };
    // newPlants[id] = newPlant;

    // setPlants(newPlants);
  };
  return (
    <div className="App">
      {/* <p>value is {count}</p>
      <button onClick={increment}>Increment</button> */}
      <Header />
      <PlantForm onSubmit={addANewPlant} />
      <button onClick={updateAllThePlants}>WATER EVERYYYYYTHIIIIINNNGGGG</button>
      <main>
        <h1>All the plants</h1>
        <PlantList plants={plantsArr} updatePlant={updatePlant} />
      </main>
    </div>
  );
}

export default App;
