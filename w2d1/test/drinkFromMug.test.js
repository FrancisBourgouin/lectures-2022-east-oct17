const drinkFromMug = require("../drinkFromMug");
const { expect } = require("chai");

describe("Happy path", () => {
  it("should return a modified mug object given valid inputs", () => {
    const sipSize = 50;
    const originalMug = {
      name: "Mugginator",
      capacity: 500,
      currentVol: 350,
    };

    const expectedResult = {
      name: "Mugginator",
      capacity: 500,
      currentVol: 300,
    };
    const result = drinkFromMug(originalMug, sipSize);

    expect(result).to.be.an("object");
    expect(result).to.deep.equal(expectedResult);
  });
  it("should modify the original object given valid inputs", () => {
    const sipSize = 150;
    const originalMug = {
      name: "Mugginator",
      capacity: 500,
      currentVol: 350,
    };

    const expectedResult = {
      name: "Mugginator",
      capacity: 500,
      currentVol: 200,
    };
    const result = drinkFromMug(originalMug, sipSize);

    expect(result).to.be.an("object");
    expect(result).to.deep.equal(expectedResult);
    expect(result).to.equal(originalMug);
  });
});

describe("Sad path", () => {
  it("should throw an error if mug object is invalid", () => {
    const sipSize = 150;
    const originalMug = { potato: "YES" };

    const expectedResult = "THAT AINT A MUG";

    const fctThatWillThrowAnError = () => drinkFromMug(originalMug, sipSize);

    expect(fctThatWillThrowAnError).to.throw(expectedResult);
  });
  it("should throw an error if sipSize is invalid", () => {
    const sipSize = -150;
    const originalMug = {
      name: "Mugginator",
      capacity: 500,
      currentVol: 350,
    };

    const expectedResult = "THAT AINT A SIP";

    const fctThatWillThrowAnError = () => drinkFromMug(originalMug, sipSize);

    expect(fctThatWillThrowAnError).to.throw(expectedResult);
  });

  xit("should throw an error if mug object or sip is absent", () => {
    // ...
  });
  xit("should return a modified object where currentVol is 0 if sip is bigger than current vol", () => {
    // ...
  });
  xit("should return a message that says that we can't drink from an empty mug", () => {
    // ...
  });
});
