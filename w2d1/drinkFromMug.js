const drinkFromMug = (mug, sipSize) => {
  const isInvalidName = typeof mug.name !== "string";
  const isInvalidCapacity = typeof mug.capacity !== "number" || mug.capacity <= 0;
  const isInvalidVolume = typeof mug.currentVol !== "number" || mug.currentVol < 0;

  if (isInvalidCapacity || isInvalidName || isInvalidVolume) {
    throw new Error("THAT AINT A MUG");
  }

  mug.currentVol -= sipSize;

  return mug;
};

module.exports = drinkFromMug;
