"use strict";
const arr = [1, 2, 3, 4, 5];
const arr2 = [...arr, 6, 7, 8, 9, 10];
console.log(arr2);
const restaurent = {
  name: "The Indian Restaurant",
  categories: ["North Indian", "South Indian", "Chinese", "Fast Food"],
};

const newMenu = [...restaurent.categories, "Non-Veg"];
console.log(newMenu);

// Iterables are Array, String, maps, sets but not Objects

//Iterating strings:
const str = "Hello World";
const op = [...str];
// console.log(op);

console.log(`${[...str]}, I am string.`);

const iterateString = (inputStr) => {
  console.table([...inputStr]);
};

iterateString("Anything you want");

//Lets calculate length of string
const strLength = (inputStr) => console.log(inputStr.length);
strLength("Anything you want");

// const makingFoodOfIngredients = (...ingredients) => {
//   document.write(`<h1>Lets make food of ${ingredients}</h1>`);
// };

const ingredients = [
  //   prompt("Enter first ingredient"),
  //   prompt("Enter second ingredient"),
  //   prompt("Enter third ingredient"),
];

// makingFoodOfIngredients(...ingredients);

//Making of Copy of Objects(Inheritance)
const newRestaurant = {
  foundedIn: 1997,
  founder: "Saurabh Duryodhan",
  ...restaurent,
};
console.log(newRestaurant);
