export default function Header(props) {
  const amountOfPlants = props.amountOfPlants;

  console.log(props);
  return (
    <header>
      <h1>Super Watering App!</h1>
      <h2>
        Saving {amountOfPlants} {amountOfPlants === 1 ? "plant" : "plants"} from
        dehydration
      </h2>
    </header>
  );
}
