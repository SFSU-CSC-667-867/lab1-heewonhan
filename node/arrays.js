// Arrays in js

// arrays can be delared explicitly


// or with new keyword
const anotherArray = new Array(5);

// access array elements
console.log(array[0]);

// change elements
array[1] = 'hello';

// for practice

// use forEach
const array = [9, 3, 4];
//arrayTest[5] = 9;
console.log(arrayTest);
arrayTest.forEach((n) => {
    console.log(n);

});
// use map
const newArray = aarayTest.map(i => i + 1);
console.log(newArray);

// use pop
newArray.pop();
console.log(newArray);
// use push
newArray.push(6);
console.log(newArray);
// use shift
newArray.shift();
console.log(newArray);
// use unshift
newArray.unshift(9);
console.log(newArray);

// use filter
