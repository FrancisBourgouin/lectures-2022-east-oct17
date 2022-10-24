# Drinking beverage function (Attenborough step)

Considering a beverage mug object, I want to be able to drink from the mug and lower the amount of beverage.

# What does it mean

- Can you give an example mug object?

```jsx
const someMug = {
  name: "Muggy",
  capacity: 500,
  currentVol: 300,
};
```

- How big is the sip

Given as a parameter "sipSize"

- Remaining vol cannot be negative
- What if the sip is bigger than the current volume

# In / Out

drinkFromMug -- sippyTime, mugSip, drinkFromMug, canEyeSip

```jsx
const drinkFromMug = (mug, sipSize) => {
  // ...
};
```

mug (obj)

```jsx
const someMug = {
  name: "Muggy",
  capacity: 500,
  currentVol: 300,
};
```

sipSize (int)

```jsx
const sipSize = 20;
```

currentVol vs Mug

output: mug obj

```jsx
const someMug = {
  name: "Muggy",
  capacity: 500,
  currentVol: 300,
};
```

mutations, immutability

# How

change the object value at key currentVol?

```jsx
const drinkFromMug = (mug, sipSize) => {
  // substract the amount of sipSize to the currentVol key
  // return the modified mug object
};

const sip1 = drinkFromMug(mug, 350);
console.log("amount remaining", mug.currentVol);
drinkFromMug(mug, 50);
drinkFromMug(mug, 50);
drinkFromMug(mug, 50);
```

# Test cases

## Happy path

- Given valid inputs, return valid output.

## Hard/Sad/Difficult path

- Invalid input (positive sip, valid mug obj)
- Invalid mug object (3 keys, capacity, name, currentVol)
- Invalid sip (>= 0, integer)

- Forgotten params (mug, sipSize)
- sipSize bigger than currentVol
- currentVol is already 0

50 > 300 => falsy, all is good
50 > 15 => truthy, sip is too big
50 > 0 => truthy, sip is too big
