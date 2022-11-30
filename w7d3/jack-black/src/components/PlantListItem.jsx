export default function PlantListItem(props) {
  const { name, type, lastWateredDate, updatePlant } = props;

  // const name = props.name
  // const type = props.type
  return (
    <li>
      <p>
        {name} / {type}
      </p>
      <p>Last watered on: {lastWateredDate}</p>
      <button onClick={updatePlant}>WATER MEEEEEE</button>
    </li>
  );
}
