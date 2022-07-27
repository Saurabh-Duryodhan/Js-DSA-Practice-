"use strict";

const arr = [1, 2, 3];
const [a, b, c] = arr;
// console.log(a, b, c)

const restuarants = {
  name: "Pizza Hut",
  address: "123 Main St",
  categories: ["Pizza", "Pasta", "Salad"],
  order: function (order_id) {
    return [this.categories[order_id]];
  },
};

let [first, second] = restuarants.categories; //Destructuring the array
// console.log({ first, second });
// console.log(...restuarants.categories); //Spread operator to print all the elements of the array
[second, first] = [first, second]; // Reverse the order of the elements
// console.log(first, second);

const [confirm_order] = restuarants.order(1);
// console.log(
//   `Your order of ${confirm_order} has been placed from ${restuarants.name}`
// );

// Lets Order food from different restaurants
const foodRestaurants = [
  {
    id: 1,
    name: "Pizza Hut",
    address: "123 Main St",
    categories: ["Pizza", "Cheese Pizza", "Salad"],
  },
  {
    id: 2,
    name: "MacDonalds",
    address: "123 Main St",
    categories: ["Burger", "Kiwiburger", "Arch Deluxe"],
  },
  {
    id: 3,
    name: "KFC",
    address: "123 Main St",
    categories: [
      "Tailgate Meal",
      "Chicken Only",
      "Meal with 3 Large Sides & 6 Biscuits",
    ],
  },
];

const confirm_id = (id_order, item_name) => {
  const order_food = foodRestaurants.map((restaurent_id) => {
    if (
      id_order === restaurent_id.id &&
      restaurent_id.categories.includes(item_name)
    ) {
      const food_name = item_name;
      const selctedRestaurent = restaurent_id;
      var detail = {
        item: food_name,
        restaurentName: selctedRestaurent.name,
      };
      console.log(
        `Your order of ${detail.item} has been placed from ${detail.restaurentName}. Thank you for choosing us🙏.`
      );
    } else {
      console.log(`Sorry, we don't have that item in our menu`);
    }
  });
};

// confirm_id(3, "Meal with 3 Large Sides & ");


// Nested Destructuring with Default Values
const [p = 1, q = 1, r = 1, d = 1, e = 1, f = 1] = [10, 11, 13] 
console.log(p, q, r, d, e, f);
