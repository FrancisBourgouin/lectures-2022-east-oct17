import PlantListItem from "./PlantListItem";

export default function PlantList(props) {
  const { plants } = props;
  const plantIsArray = Array.isArray(plants);

  const list = [<PlantListItem />, <PlantListItem />];

  // if (!plantIsArray) {
  //   return <p>HEY YOU DON'T HAVE PLANTS!</p>;
  // }
  // const parsedPlants = plants.map((plant) => (
  //   <PlantListItem
  //     key={plant.id}
  //     name={plant.name}
  //     type={plant.type}
  //     wateringInterval={plant.wateringInterval}
  //     lastWatered={plant.lastWatered}
  //   />
  // ));
  const parsedPlants =
    plantIsArray && plants.map((plant) => <PlantListItem key={plant.id} {...plant} />);

  return (
    <>
      {!plantIsArray && <p>You have no plants!</p>}
      {plantIsArray && <ul>{parsedPlants}</ul>}
    </>
  );
}
