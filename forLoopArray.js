"use stricts";

const fruits = ["apple", "banana", "mango", "orange", "strawberry"];
// console.log(fruits);
// for (const fruit of fruits.entries()) console.log(fruit);

// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (const num of numbers.entries()) console.log(`I'm no ${num}.`);

// console.log([...fruits.entries()])

for (const [i, elems] of fruits.entries()) console.log(`${i + 1}: ${elems}`);
