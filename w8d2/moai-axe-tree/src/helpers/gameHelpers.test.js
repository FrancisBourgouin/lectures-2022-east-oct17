import { pickOppositeEmoji, pickRandomEmoji } from "./gameHelpers";

describe("Testing the opposite emoji function (pickOppositeEmoji)", () => {
  it("should return the opposite emoji when given a valid emoji", () => {
    const listOfEmojis = ["🪓", "🌳", "🗿"];

    const firstPair = ["🪓", "🗿"];
    const secondPair = ["🌳", "🪓"];
    const thirdPair = ["🗿", "🌳"];

    const result1 = pickOppositeEmoji(firstPair[0]);
    const result2 = pickOppositeEmoji(secondPair[0]);
    const result3 = pickOppositeEmoji(thirdPair[0]);

    expect(result1).toEqual(firstPair[1]);
    expect(result2).toEqual(secondPair[1]);
    expect(result3).toEqual(thirdPair[1]);
  });
  it("should return a 💩 emoji when given a invalid emoji", () => {
    // ...
    const result = pickOppositeEmoji("🐔");

    expect(result).toEqual("💩");
  });
});
describe("Testing the random emoji function (pickRandomEmoji)", () => {
  it("should return one of the emojis ???", () => {
    // WE CANT TEST RANDOMNESS (Extract the randomness)

    const bottomLimit = 0;
    const rand1 = 0.2;
    const rand2 = 0.5;
    const rand3 = 0.7;
    const highLimit = 0.9999999;

    const listOfValuesToTest = [bottomLimit, rand1, rand2, rand3, highLimit];
    const listOfResultToTest = ["🌳", "🌳", "🪓", "🗿", "🗿"];

    for (const index in listOfValuesToTest) {
      const result = pickRandomEmoji(listOfValuesToTest[index]);

      expect(result).toEqual(listOfResultToTest[index]);
    }

    // const resultBottomLimit = pickRandomEmoji(bottomLimit);
    // const result1 = pickRandomEmoji(rand1);
    // const result2 = pickRandomEmoji(rand2);
    // const result3 = pickRandomEmoji(rand3);
    // const resulthighLimit = pickRandomEmoji(highLimit);
  });
});
