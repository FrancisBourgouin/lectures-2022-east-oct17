// const plant = {
//   name: "Some plant!",
//   type: "Fern",
//   lastWatered: "2022-11-29",
//   wateringInterval: 10,
// };

import { calculateDayDifference } from "../helpers/plantHelpers";
import "../styles/PlantListItem.css";

export default function PlantListItem(props) {
  const { name, type, lastWatered, wateringInterval } = props;

  const dayDiff = calculateDayDifference(lastWatered);

  const plantListStyle = {
    borderColor: dayDiff < wateringInterval ? "green" : "red",
    background: dayDiff < wateringInterval ? "rgba(0,255,0,0.3)" : "rgba(255,0,0,0.3)",
  };
  return (
    <li style={plantListStyle} className="PlantListItem">
      <p>
        {name} - {type}
      </p>
      <p>last watered on : {lastWatered}</p>
    </li>
  );
}
