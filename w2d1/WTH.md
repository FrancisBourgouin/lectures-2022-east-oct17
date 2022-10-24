# Tricky concepts & syntax

- Recursion
- Object navigation (deep object)
- Object comparison
- ARROW FUNCTIONS 4 LYFE

```jsx
const someFunction = () => {
  // ...
};

const someOtherFunction = function () {
  // ...
};

// Initialization of this

const someObject = {
  someMethod: function () {
    console.log(this);
  },
  someArrow: () => {
    console.log(this);
  },
};

someObject.someMethod();
someObject.someArrow();
```

```jsx
  let bob = 5
  let bobby = bob

  bob = 10

  console.log(bob, bobby) // 10,5


  let obj = {a:1}
  let otherObj = obj

  obj.a = "ron"

  console.log(obj, otherObj) // {a:"ron"}, {a:1} BAD
  console.log(obj, otherObj) // {a:"ron"}, {a:"ron"} TRUE


  const someDeepObject = {
    level1:{
      name:"Level 1",
      deeper:{
        level2:{
          name:"Level 2"
          deeper:{
            level3:{
              name:"Level 3",
              deeper:{
                level4:{
                  name:"Level 4",
                  fish:true,

                }
              }
            }
          }
        }
      }
    }
  }

  someDeepObject.level1.deeper.level2.deeper.level3.deeper.level4.fish

  const lvl1 = someDeepObject.level1
  const lvl2 = lvl1.deeper.level2
  const lvl3 = lvl2.deeper.level3
  const lvl4 = lvl3.deeper.level4


  lvl4.fish = false

  const playlist = library.playlists



```

# How to approach a problem

Print to the console "potato" if the given value is even, print "poulet" if the value is odd

- Create skeleton
- What is the input / output
- happy path
- test case
- possible solutions
