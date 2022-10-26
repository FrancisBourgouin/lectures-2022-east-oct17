# Existential Questions

- Nested Loops / Nested Objects

for(const something of somethings){
for(const element of elements){

}
}

```jsx
const someFunkyList = [
  [1, 2, 3],
  [4, 5, 6],
];

const firstSubArray = someFunkyList[0];

for (const subArray of myFunkyList) {
  for (const number of subArray) {
    // ...
  }
}

const someObject = {
  a: {
    b: 2,
  },
};

const subObject = someObject.a;

const interactWithTextFile = (data) => {
  // ...
};

readFile("./bob.txt", (err, data) => {
  interactWithTextFile(data);
});
```
