const obj1 = { a: 1 };
const obj2 = { a: 1 };
const obj3 = obj2;

console.log(obj1 === obj2);

console.log(obj3 === obj2);

const eqObjects = () => {
  // comparing if two objects share the same key/value pairs!
};

const client1 = {};
const client2 = {};

const list = [];

list.push(client1); // [client1]
list.push(client2); // [client1, client2]

console.log(list[0] === client1);
