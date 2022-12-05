// Immutability vs Mutability

// Object.keys()
// Object.values()
// Object.entries()

let bob = [1, 2, 3];
let bobby = [...bob];

// console.log(bob, bobby);

// bob.push(4);

// console.log(bob, bobby);

// bob.pop();
// bob.pop();
console.log(bob);

const purePop = (arr) => {
  const newArr = [...arr];
  newArr.pop();

  return newArr;
};

// console.log(purePop(bob));
// console.log(purePop(bob));
// console.log(purePop(bob));
// console.log(purePop(bob));
// console.log(purePop(bob));

// Functional programming => Functions, purity

const bill = [{ a: 1 }, { b: 2 }];
const will = [...bill];

console.log(bill, will);

bill.push({ c: 3 });

const newObj = { ...bill[1] };
delete newObj.b;
newObj.r = 2;

bill[1] = newObj;

console.log(bill, will);
