import { storiesOf } from "@storybook/react";
import PlantListItem from "../components/PlantListItem";

const happyPlant = {
  id: "1",
  type: "Monsterous plant",
  name: "Monstera",
  lastWatered: "2022-11-29",
  wateringInterval: 7,
};
const sadPlant = {
  id: "1",
  type: "Monsterous plant",
  name: "Monstera",
  lastWatered: "2022-03-20",
  wateringInterval: 7,
};

storiesOf("PlantListItem", module)
  .add("Well watered plant", () => <PlantListItem {...happyPlant} />)
  .add("Sad watered plant", () => <PlantListItem {...sadPlant} />);
