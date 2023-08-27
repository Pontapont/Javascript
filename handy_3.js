// Use base 2 system to parse string. Second parameter inside parseInt decides base system
let min = "11111111";
console.log(parseInt(min, 2));

//The Math.min() static method returns the smallest of the numbers given as input parameters, or Infinity if there are no parameters.
Math.min(4, 2, 10); // returns 2
let numbers = [2, 55, 9, 1];
Math.min(...numbers) // returns 1. The ... is not a joke

// Map function. Loops through array and applies function in map parameter to every element
let myarr = [1, 5, 9];
function mathStuff(int) {
  console.log(int*int);
};
myarr.map(mathStuff);

// Make array with "1", "5" and "3" as elements with split(). Use every element inside testMe() function with map().
// map() returns array
// Use every element in array created by map function with forEach(). parameter value "num" is current array element being used.
"153".split("").map(testMe).forEach( num => {
  sum += num;
});

// Trick to transform integer in a string. Add "" empty value to integer makes it a string
let x = 153;
let b = "" + x;

// replace string value with second parameter value when there is a match
let x = "Hello";
let b = x.replace(/[aeiou]/g, ""); // Check if [a, e, i, o, u] in string, if true replace value with ""

// test string x for values with re
let pin = /^(\d{4}|\d{6})$/.test(x);
