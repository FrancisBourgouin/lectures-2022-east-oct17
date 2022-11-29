import { storiesOf } from "@storybook/react";
import PlantList from "../components/PlantList";

const plants = [
  {
    id: "1",
    type: "Monsterous plant",
    name: "Monstera",
    lastWatered: "2022-03-20",
    wateringInterval: 7,
  },
  {
    id: "2",
    type: "Monsterous plant",
    name: "Monstera",
    lastWatered: "2022-11-29",
    wateringInterval: 7,
  },
];

storiesOf("PlantList", module)
  .add("With a plant list", () => <PlantList plants={plants} />)
  .add("Without a plant list", () => <PlantList />);
