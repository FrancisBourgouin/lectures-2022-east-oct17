import PlantList from "./components/PlantList";
import Header from "./components/Header";

import "./App.css";

import { plants } from "./data/plantData";

function App() {
  const amountOfPlants = plants.length;
  return (
    <div className="App">
      <Header amountOfPlants={amountOfPlants} />
      {/* {Header({ amountOfPlants })} */}
      <main>
        <h1>List of plants</h1>
        <PlantList plants={plants} />
      </main>
    </div>
  );
}

export default App;
