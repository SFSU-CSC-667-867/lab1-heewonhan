// Declaring with the function keyword

hi();

function hi() {
  console.log('Say Hello');
}



// arrow functions
const arrow = (test) => {
  console.log(test);
}

arrow('hi');

// for practice

// make an arrow function with no block body

const myArrow = (y) => y + 1;

console.log(myArrow(8));
// make a function that returns a function
const functionFactory = () => () => console.log('This is wierd');
const a = functionFactory();
a();
const anotherFunction = functionFactory;
functionFactory = 9;
anotherFunction()();