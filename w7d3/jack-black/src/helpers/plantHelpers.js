export const updateWateredDate = (plantListObj, plantId) => {
  // Make a copy of the plant object to change
  const plantToChange = { ...plantListObj[plantId] };
  // Make a copy of the plant list
  const newPlantList = { ...plantListObj };

  // Update the date key in the copied plant
  const todayDate = new Date().toLocaleDateString();
  plantToChange.lastWateredDate = todayDate;

  // Update the plantList with the new plant
  newPlantList[plantId] = plantToChange;

  return newPlantList;
};

export const updateWateredDateForAllPlants = (plantListObj) => {
  // Make a copy of the plant list
  const newPlantList = { ...plantListObj };

  for (const key in newPlantList) {
    // Make a copy of the plant object to change
    const plantToChange = { ...plantListObj[key] };
    // Update the date key in the copied plant
    const todayDate = new Date().toLocaleDateString();
    plantToChange.lastWateredDate = todayDate;
    // Update the plantList with the new plant
    newPlantList[key] = plantToChange;
  }

  return newPlantList;
};
