// const someObject = {
//   someMethod: function () {
//     console.log("fct", this);
//   },
//   someArrow: () => {
//     console.log("arrow", this);
//   },
// };

// someObject.someMethod(); // This is where it's defined
// someObject.someArrow(); // This is where it's executed

// class! Array, Object, Number

// const newArr = []
// const newArr = new Array()

// const today = new Date()

// const error = new Error("YOU CRASH YOU SAD")

// throw error

const bob = 5;

try {
  bob = 10; // JS threw an error
  // throw new Error("YOU ARE A BAD PERSON");
} catch (error) {
  console.log("oh no.");
}

console.log("Ah yiss");

const bob1 = () => drinkFromMug(originalMug, sipSize);
const bob2 = drinkFromMug(originalMug, sipSize);

const expectToThrow = (callback, errorMessage) => {
  try {
    callback();
  } catch (error) {
    return (error.message = errorMessage);
  }
};

expectToThrow(bob1, "THAT AINT A MUG");
// try{
//   drinkFromMug(originalMug, sipSize)
// }

// typeof(bob1) => fct
// typeof(bob2) => obj

const someGenerator = (amount) => {
  let beanAmount = amount;

  const showBeanAmount = () => console.log(beanAmount);

  const addBeans = (beans) => (beanAmount += beans);

  return { showBeanAmount, addBeans };
};

const beanStuff = someGenerator(10);

beanStuff.showBeanAmount();
beanStuff.addBeans(10);

// const someFunctionWithALotOfParams = (amount, name, size) => {
// const someFunctionWithALotOfParams = (name, amount, size) => {

const someFunctionWithALotOfParams = (options) => {
  // ...
};

const options = {
  amount: 5,
  errorMsg: "OH NO",
  drink: "Coffee",
};

const options2 = {
  errorMsg: "OH NO",
  amount: 5,
};

const someFunction = () => {
  // isGood will be either true or false
  const isGood = Math.random() > 0.5;
  const isBad = !isGood;
  // if (isGood) {
  //   for (let i = 0; i < 10; i++) {
  //     console.log("AHHHHHH YISSSS");
  //   }
  // }

  if (!isGood) {
    return "bad!";
  }

  for (let i = 0; i < 10; i++) {
    console.log("AHHHHHH YISSSS");
    // if()
  }
};
