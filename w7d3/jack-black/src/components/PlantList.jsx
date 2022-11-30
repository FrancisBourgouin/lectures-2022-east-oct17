import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plants, updatePlant } = props;

  const parsedPlants =
    Array.isArray(plants) &&
    plants.map((plant) => (
      <PlantListItem
        key={plant.id}
        {...plant}
        updatePlant={() => updatePlant(plant.id)}
      />
    ));

  return <ul>{parsedPlants}</ul>;
}
