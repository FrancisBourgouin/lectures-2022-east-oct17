# Watering Plant App

Show a list of plants, with their name, type, last watered and a warning if they are dangerously dry.

## Data

## Plant

```jsx
const plant = {
  name: "Some plant!",
  type: "Fern",
  lastWatered: "2022-11-29",
  wateringInterval: 10,
};
```

## Plants

```jsx
const plants = [plant, plant, plant];
```

## Seed

```jsx
const plant1 = {
  id: "1",
  type: "Monsterous plant",
  name: "Monstera",
  lastWatered: "2022-03-20",
  wateringInterval: 7,
};
const plant2 = {
  id: "2",
  type: "Paper or real?",
  name: "Tulips",
  lastWatered: "2022-03-10",
  wateringInterval: 4,
};
const plant3 = {
  id: "3",
  type: "Blossoms are nice",
  name: "Cherry",
  lastWatered: "2022-01-20",
  wateringInterval: 60,
};
const plant4 = {
  id: "4",
  type: "GIMME THAT",
  name: "Money Tree",
  lastWatered: "2020-03-20",
  wateringInterval: 1000,
};

const plants = [plant1, plant2, plant3, plant4];
```

## Structure

### HTML

- header
  - h1 title of app
  - h2 saving X plants from dehydration
- main
  - h1 plants
  - ul
    - li
      - p Name / Type
      - p last watered
      - border red/green if well watered

### Components

- App
  - Header
  - PlantList
    - PlantListItem

### Component Data

- App (data: plants [{},{}])
  - Header (count)
  - PlantList (array of objects)
    - PlantListItem (every key of the object)
