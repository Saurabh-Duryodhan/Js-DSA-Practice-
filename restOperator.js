"use strict";


//Rest Operator
const arr = [10, 20, 30, 40, 50];
const arr2 = [60, 70, 80, 90, 100];
const combinedArray = ["a", "b", "c", "d", "e", ...arr, "f", "g", "h", "i", ...arr2];
console.table(combinedArray)


// GST Calculator
const add = (...numbers) => {
  var res = numbers.reduce((acc, number) => acc + number, 0);
  const GST = 18;
  console.log(
    `The total exluding GST amount is ${res} and Including GST amount is ${
      res + (res * GST) / 100
    }`
  );
};

add(22, 30, 25);
add(20, 33, 45, 90, 96);
add(90, 80, 55, 88, 54, 89);

const gstCalculator = (amount) => {
  const GST = 18;
  document.write(
    `<h1>The total excluding GST amount is ${amount} and Including GST amount is ${
      parseInt(amount) + ((amount * GST) / 100)
    }</h1>`
  );
};

gstCalculator(prompt("Enter the amount"));
