"use strict";

const Products = {
  id: 1,
  name: "Laptop",
  price: 1000,
  category: ["Electronics", "Laptop"],
  deliveryOrder: function (obj) {
    console.log(obj);
  },
};

// First destructuring the object elements and then assigning them to variables
// const {name: product_name, price: product_price } = Products;
// console.log(`I had purchased ${product_name} for $${product_price}.`);

//Assigning Default values
const { category: product_category, price: product_price } = Products;
// console.log({menu: product_category, price: product_price});

Products.deliveryOrder({
  open: true,
  tag: "delivery",
});

const { deliveryOrder } = Products;
// console.log(deliveryOrder({ open: false, tag: "purchase" }));
// console.log(Products);

const restaurent = {
  name: "The Food Factory",
  location: "New York",
  categories: ["Italian", "American"],
  starterMenu: ["Salad", "Pizza", "Pasta"],
  mainMenu: ["Steak", "Fish", "Meat"],
  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0,
      close: 24,
    },
  },
    deliveryOrder: function ({time, address, tag, open}) {
        console.log(`Order will be delivered to ${address} at ${time}AM and will be ${tag}`);
    }
};

restaurent.deliveryOrder({
    time: "10:00",
    address: "123 Main St",
    tag: "delivery",
    open: true
})

const { name: restaurent_name, location: restaurent_location } = restaurent;
// console.log(`${restaurent_name} is located in ${restaurent_location}.`);

const {
  menu = [],
  starterMenu: starter_menu = [],
} = restaurent;


// console.log(menu, starter_menu)


const student = {
    id: 1, 
    name: "John",
    age: 20,
    courses: ["HTML", "CSS", "JavaScript"],
    roll_no: "A01",
}

const {hobbies = "Singing", name: student_name, age: student_age, courses: student_courses} = student;
console.log(hobbies, student_name, student_age, student_courses);


//Mutating the object
let a = 12;
let b = 13;

const obj = {a: 33, b: 44};
// {a,b} = obj; // It will shows error because it is not mutable ("Unexpected token '='")
// to fixed this we need to encapsulate it with paranthesis
({a, b} = obj);
console.log(a, b)


//Nested objects
const {fri: {open, close}} = restaurent.openingHours;
console.log(open, close)