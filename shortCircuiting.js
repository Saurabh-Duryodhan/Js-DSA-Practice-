"use strict";

//Short Circuiting with OR Operator (||)
console.log("---- OR ----")
console.log(3 || "John Doe");
console.log(undefined || 20);
console.log(null || 30);
console.log(false || "John Doe");
console.log("john doe" || 30);

// const numberOfGuests = 123
// const guest1 = numberOfGuests ? numberOfGuests : 20;
// console.log(guest1); // Restaurents.numberOfGuests will occure error for undefined

//Short Circuiting with AND Operator (&&)
console.log("---- AND ----")
console.log(3 && "John Doe");
console.log(undefined && 20);
console.log(null && 30);
console.log(false && "John Doe");
console.log("john doe" && 30);

console.log(30 && "John Doe" && true && undefined && null && false);