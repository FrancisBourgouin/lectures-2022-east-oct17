import { storiesOf } from "@storybook/react";
import Header from "../components/Header";

storiesOf("Header", module)
  .add("With a list of plants", () => <Header amountOfPlants={5} />)
  .add("With one plant", () => <Header amountOfPlants={1} />)
  .add("Without a list of plants", () => <Header />);
